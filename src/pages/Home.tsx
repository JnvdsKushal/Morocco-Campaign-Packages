import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/context';
import { img, IMGS, portfolio } from '../data/content';
import { incrementVisitorCount } from '../lib/visitorCounter';

const processSteps = [
  { n: '01', en: 'Discover', fr: 'Découvrir', ar: 'الاستكشاف' },
  { n: '02', en: 'Strategy', fr: 'Stratégie', ar: 'الاستراتيجية' },
  { n: '03', en: 'Design', fr: 'Conception', ar: 'التصميم' },
  { n: '04', en: 'Build', fr: 'Développer', ar: 'البناء' },
  { n: '05', en: 'Launch', fr: 'Lancer', ar: 'الإطلاق' },
  { n: '06', en: 'Grow', fr: 'Croître', ar: 'النمو' },
];

const serviceList = [
  'webDev',
  'webApps',
  'socialMedia',
  'digitalMarketing',
  'seo',
  'branding',
  'contentCreation',
  'digitalStrategy',
];

// Each service gets a visual for the scrollytelling panel below. Only four
// distinct images exist in the current asset set (webDev, marketing, seo,
// analytics), so several services temporarily share one. Add dedicated
// image keys per service in data/content for a fully unique visual per item.
const serviceVisualMap: Record<string, any> = {
  webDev: IMGS.webDev,
  webApps: IMGS.webApps,
  socialMedia: IMGS.marketing,
  digitalMarketing: IMGS.digitalmarketing,
  seo: IMGS.seo,
  branding: IMGS.campaignbranding,
  contentCreation: IMGS.content3,
  digitalStrategy: IMGS.techsupport,
};

// The digital-ecosystem chain reuses five existing, already-translated
// service keys (no invented services) to show how they connect end to end.
const ecosystemChain = ['webDev', 'contentCreation', 'socialMedia', 'digitalMarketing', 'seo'];

// New copy for sections that don't yet have a home in the central translation
// files, following the same inline per-language pattern this file already
// used for `processSteps`. Recommend migrating these into the real i18n
// source once you've reviewed the wording.
const positioning = {
  heading: {
    en: ['One digital partner.', 'Everything your campaign needs online.'],
    fr: ['Un seul partenaire digital.', 'Tout ce dont votre campagne a besoin en ligne.'],
    ar: ['شريك رقمي واحد.', 'كل ما تحتاجه حملتكم على الإنترنت.'],
  },
};
const heroEyebrowLabel = { en: 'Digital Campaign Technology', fr: 'Technologie de Campagne Digitale', ar: 'تقنية الحملات الرقمية' };
const heroStripLabel = { en: 'Websites', fr: 'Sites Web', ar: 'مواقع إلكترونية' };
const heroStripLabel2 = { en: 'Social', fr: 'Réseaux Sociaux', ar: 'التواصل الاجتماعي' };
const heroStripLabel3 = { en: 'Creative', fr: 'Créatif', ar: 'إبداع' };
const heroStripLabel4 = { en: 'Technology', fr: 'Technologie', ar: 'تكنولوجيا' };
const featuredWorkLabel = { en: 'Selected Digital Work', fr: 'Travaux Sélectionnés', ar: 'أعمال مختارة' };
const viewProjectLabel = { en: 'View project', fr: 'Voir le projet', ar: 'عرض المشروع' };
const howWeWorkLabel = { en: 'How we work', fr: 'Notre méthode', ar: 'كيف نعمل' };
const ecosystemLabel = { en: 'Digital Ecosystem', fr: 'Écosystème Digital', ar: 'المنظومة الرقمية' };
const ecosystemHeading = {
  en: 'One connected system, not eight disconnected tools.',
  fr: 'Un système connecté, pas huit outils isolés.',
  ar: 'نظام واحد متكامل، لا ثماني أدوات متفرقة.',
};
const inDepthLabel = { en: 'A closer look', fr: 'Un regard de plus près', ar: 'نظرة أقرب' };
const visitorVisitsLabel = { en: 'Website Visits', fr: 'Visites du Site', ar: 'زيارات الموقع' };

// ---------------------------------------------------------------------------
// Scroll-reveal primitive — IntersectionObserver + CSS transitions only.
// No animation library is installed in this project, so entrances are done
// with plain opacity/transform transitions triggered once an element enters
// the viewport.
// ---------------------------------------------------------------------------
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Services scrollytelling — a sticky visual on desktop that crossfades as the
// visitor scrolls past each service's text block, in the spirit of the
// Evasion reference's sticky product panel. Uses native `position: sticky`
// (no scroll listeners) plus one IntersectionObserver per row.
// ---------------------------------------------------------------------------
function ServiceStory({ dir, t }: { dir: string; t: (key: string) => string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(i);
          });
        },
        { threshold: 0.5, rootMargin: '-30% 0px -30% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-16">
      <div>
        {serviceList.map((key, i) => (
          <div
            key={key}
            ref={(el) => { refs.current[i] = el; }}
            className={`min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center border-b border-border last:border-b-0 py-10 lg:py-0 ${dir === 'rtl' ? 'text-right' : ''}`}
          >
            <Link to="/services" className="group block">
              <p className="text-xs font-mono text-muted-foreground mb-4">{String(i + 1).padStart(2, '0')}</p>
              {/* Mobile-only inline image — the sticky panel is desktop only */}
<div className="lg:hidden w-full aspect-3/2 rounded-lg mb-6 overflow-hidden bg-muted">
  <img
    src={img(serviceVisualMap[key] ?? IMGS.webDev, 900, 600)}
    alt=""
    className="w-full h-full object-cover"
  />
</div>
              <h3
                className={`font-serif text-3xl sm:text-4xl font-bold leading-tight mb-4 transition-colors duration-500 ${
                  active === i ? 'text-primary' : 'text-foreground group-hover:text-primary'
                }`}
                style={{ letterSpacing: '-0.02em' }}
              >
                {t(`services.${key}.name`)}
              </h3>
              <p
                className={`text-muted-foreground leading-relaxed max-w-sm transition-opacity duration-500 ${
                  active === i ? 'opacity-100' : 'opacity-60'
                }`}
              >
                {t(`services.${key}.desc`)}
              </p>
            </Link>
          </div>
        ))}
      </div>
<div className="hidden lg:flex sticky top-24 h-[calc(100vh-6rem)] items-center">
  <div className="w-full aspect-3/2 rounded-xl overflow-hidden bg-muted relative">
    {serviceList.map((key, i) => (
      <img
        key={key}
        src={img(serviceVisualMap[key] ?? IMGS.webDev, 1200, 800)}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
          active === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
    ))}
  </div>
</div>
    </div>
  );
}

export default function Home() {
  const { t, dir, lang } = useLanguage();
  const L = (obj: Record<'en' | 'fr' | 'ar', any>) => obj[lang as 'en' | 'fr' | 'ar'] ?? obj.en;

  const statItems = [
    { value: t('stats.clients.value'), label: t('stats.clients.label') },
    { value: t('stats.projects.value'), label: t('stats.projects.label') },
    { value: t('stats.years.value'), label: t('stats.years.label') },
    // { value: t('stats.satisfaction.value'), label: t('stats.satisfaction.label') },
  ];

  const stepLabel = (s: typeof processSteps[0]) =>
    lang === 'fr' ? s.fr : lang === 'ar' ? s.ar : s.en;

  const [visitorCount, setVisitorCount] = useState<number | null>(null);
useEffect(() => {
  const loadVisitorCount = async () => {
    try {
      const count = await incrementVisitorCount();
      setVisitorCount(count);
    } catch (error) {
      console.error('Visitor counter error:', error);
    }
  };
  loadVisitorCount();
}, []);

  // Hero entrance sequence — staggered via transition-delay, triggered once
  // shortly after mount so the page doesn't feel like it's "popping in".
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);
  const enter = () =>
    `transition-all duration-[900ms] ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;
  const enterStyle = (baseDelay: number) => ({ transitionDelay: `${baseDelay}ms` });

  return (
    <div className="bg-background">


{/* ── HERO ─────────────────────────────────────────────────────────── */}
<section className="relative min-h-[100svh] overflow-hidden bg-background">

  {/* Morocco background image */}
  <div
    className={`absolute inset-0 transition-transform duration-[1600ms] ease-out ${
      mounted ? 'scale-100' : 'scale-110'
    }`}
  >
    <img
      src="https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?fm=jpg&q=80&w=1920&auto=format&fit=crop"
      alt="Chefchaouen, Morocco — blue city on the hillside"
      className="w-full h-full object-cover"
    />

    {/* Readability gradient — anchored to whichever side the text sits on,
        so it stays correct in RTL. Left-heavy near the text, fading to
        transparent so the image stays vivid on the opposite side. */}
    <div
      className={`absolute inset-0 ${
        dir === 'rtl'
          ? 'bg-gradient-to-l from-background from-10% via-background/45 via-45% to-transparent to-75%'
          : 'bg-gradient-to-r from-background from-10% via-background/45 via-45% to-transparent to-75%'
      }`}
    />

    {/* Subtle top gradient so the transparent navbar stays readable */}
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/10 to-transparent" />
  </div>

  {/* Hero content */}
  <div className="relative z-10 min-h-[100svh] flex items-center">

    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16 sm:pt-24 sm:pb-20">

      <div
        className={dir === 'rtl' ? 'ml-auto text-right' : ''}
        style={{ maxWidth: '650px' }}
      >

        {/* Eyebrow */}
        <p
          className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-6 ${enter()}`}
          style={enterStyle(150)}
        >
          {L(heroEyebrowLabel)}
        </p>

        {/* Main headline */}
        <h1
          className={`font-serif text-4xl sm:text-5xl lg:text-[4.5rem] xl:text-[4.75rem] font-bold leading-[0.98] tracking-tight text-foreground mb-6 ${enter()}`}
          style={{
            ...enterStyle(300),
            letterSpacing: '-0.045em',
          }}
        >
          <span className="block overflow-hidden">
            <span className="block" style={enterStyle(300)}>
              {t('hero.headline1')}
            </span>
          </span>

          <span className="block overflow-hidden">
            <span className="block text-primary" style={enterStyle(450)}>
              {t('hero.headline2')}
            </span>
          </span>
        </h1>

        {/* Supporting text */}
        <p
          className={`text-foreground/75 text-base sm:text-lg lg:text-xl leading-relaxed mb-9 ${enter()}`}
          style={enterStyle(600)}
        >
          {t('hero.sub')}
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap items-center gap-3 mb-8 ${
            dir === 'rtl' ? 'flex-row-reverse' : ''
          } ${enter()}`}
          style={enterStyle(750)}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t('hero.primaryCta')}
            <svg
              className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white/75 backdrop-blur-sm text-foreground text-sm font-semibold rounded-lg border border-white/70 hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
          >
            {t('hero.secondaryCta')}
          </Link>
        </div>

        {/* Service strip */}
        <div
          className={`flex flex-wrap items-center gap-3 text-sm font-medium text-foreground/70 ${
            dir === 'rtl' ? 'flex-row-reverse' : ''
          } ${enter()}`}
          style={enterStyle(880)}
        >
          <span>{L(heroStripLabel)}</span>
          <span className="text-primary">•</span>
          <span>{L(heroStripLabel2)}</span>
          <span className="text-primary">•</span>
          <span>{L(heroStripLabel3)}</span>
          <span className="text-primary">•</span>
          <span>{L(heroStripLabel4)}</span>
        </div>

      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 text-foreground/60">
    <div className="w-8 h-8 rounded-full border border-foreground/20 bg-white/40 backdrop-blur-sm flex items-center justify-center animate-bounce">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14m0 0l-5-5m5 5l5-5" />
      </svg>
    </div>
    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
  </div>

</section>
      {/* ── BRAND STATEMENT ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-40 bg-background">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <Reveal>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              {L(positioning.heading)[0]}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8"
              style={{ letterSpacing: '-0.02em' }}
            >
              {L(positioning.heading)[1]}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
              {t('hero.sub')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────────────── */}
<Reveal className="border-y border-border bg-card">
  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-14">
    <div className="text-center mb-10">
      <p className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-2" style={{ letterSpacing: '-0.03em' }}>
        {visitorCount !== null ? visitorCount.toLocaleString() : '—'}
      </p>
      <p className="text-xs text-primary font-semibold uppercase tracking-widest">{L(visitorVisitsLabel)}</p>
    </div>
    <div className={`grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border ${dir === 'rtl' ? 'sm:divide-x-reverse' : ''}`}>
      {statItems.map((s, i) => (
        <div key={i} className="px-6 py-4 text-center">
          <p className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-1" style={{ letterSpacing: '-0.03em' }}>
            {s.value}
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</p>
        </div>
      ))}
    </div>
    <div
      className={`flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-foreground/70 mt-8 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
    >
      <span>{L(heroStripLabel)}</span>
      <span className="text-primary">•</span>
      <span>{L(heroStripLabel2)}</span>
      <span className="text-primary">•</span>
      <span>{L(heroStripLabel3)}</span>
      <span className="text-primary">•</span>
      <span>{L(heroStripLabel4)}</span>
    </div>
  </div>
</Reveal>

      {/* ── SERVICES (scrollytelling) ────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className={`mb-16 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('services.title')}</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight max-w-lg" style={{ letterSpacing: '-0.02em' }}>
              {t('services.subtitle')}
            </h2>
          </Reveal>
          <ServiceStory dir={dir} t={t} />
        </div>
      </section>

      {/* ── IN-DEPTH GALLERY (webDev / digitalMarketing / seo detail) ──────
          Preserves the original feature-block content (headlines, links)
          as a horizontal, snap-scrolling gallery — echoing the reference's
          large image galleries — instead of three stacked full sections. */}
      <section className="py-4 bg-muted border-y border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-4">
          <Reveal className={dir === 'rtl' ? 'text-right' : ''}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{L(inDepthLabel)}</p>
          </Reveal>
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 sm:px-8 lg:px-12 pb-16 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Web development */}
          <div className="snap-center shrink-0 w-[85vw] sm:w-[70vw] lg:w-140 rounded-xl overflow-hidden bg-card border border-border">
            <div className="h-56 overflow-hidden">
              <img src={img(IMGS.webDev, 900, 700)} alt="Web development at MoroccoPack Digital" className="w-full h-full object-cover" />
            </div>
            <div className={`p-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('services.webDev.name')}</p>
              <h3 className="font-serif text-xl font-bold text-foreground leading-tight mb-3" style={{ letterSpacing: '-0.02em' }}>
                {t('servicesPage.webDev.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{t('servicesPage.webDev.desc')}</p>
              <Link to="/services/web-development" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Digital marketing */}
          <div className="snap-center shrink-0 w-[85vw] sm:w-[70vw] lg:w-140 rounded-xl overflow-hidden bg-foreground">
            <div className="h-56 overflow-hidden">
              <img src={img(IMGS.marketing, 900, 700)} alt="Digital marketing campaign results" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className={`p-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('services.digitalMarketing.name')}</p>
              <h3 className="font-serif text-xl font-bold text-white leading-tight mb-3" style={{ letterSpacing: '-0.02em' }}>
                Campaigns That Deliver Measurable Growth
              </h3>
              <p className="text-white/60 leading-relaxed mb-5 text-sm">{t('services.digitalMarketing.desc')}</p>
              <Link to="/services/social-media" className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/40 pb-0.5 hover:text-primary hover:border-primary transition-colors">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* SEO */}
          <div className="snap-center shrink-0 w-[85vw] sm:w-[70vw] lg:w-140 rounded-xl overflow-hidden bg-card border border-border">
            <div className="h-56 grid grid-cols-2 overflow-hidden">
              <img src={img(IMGS.seo, 450, 350)} alt="SEO analytics" className="w-full h-full object-cover" />
              <img src={img(IMGS.analytics, 450, 350)} alt="Search performance data" className="w-full h-full object-cover" />
            </div>
            <div className={`p-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('services.seo.name')}</p>
              <h3 className="font-serif text-xl font-bold text-foreground leading-tight mb-3" style={{ letterSpacing: '-0.02em' }}>
                Get found by the people who matter most
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{t('services.seo.desc')}</p>
              <Link to="/services/seo" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className={`mb-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{L(howWeWorkLabel)}</p>
            <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              A clear process. Real outcomes.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 60} className={`bg-background p-6 hover:bg-muted transition-colors ${dir === 'rtl' ? 'text-right' : ''}`}>
                <p className="text-xs font-mono text-muted-foreground mb-3">{step.n}</p>
                <p className="font-semibold text-foreground text-sm">{stepLabel(step)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ────────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 ${dir === 'rtl' ? 'sm:flex-row-reverse text-right' : ''}`}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{L(featuredWorkLabel)}</p>
              <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
                {t('portfolio.subtitle')}
              </h2>
            </div>
            <Link
              to="/portfolio"
              className={`shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
            >
              {t('portfolio.viewAll')}
              <svg className={`w-3.5 h-3.5 ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>

          {portfolio.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Reveal className="lg:row-span-2">
                <Link to="/portfolio" className="group block">
                  <div className="aspect-4/3 lg:aspect-auto lg:h-140 overflow-hidden rounded-xl bg-muted mb-4 relative">
                    <img
                      src={img(IMGS[portfolio[0].imgKey], 1200, 900)}
                      alt={portfolio[0].title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className={`absolute bottom-0 ${dir === 'rtl' ? 'right-0' : 'left-0'} m-5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-xs font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity`}>
                      {L(viewProjectLabel)} →
                    </div>
                  </div>
                  <div className={dir === 'rtl' ? 'text-right' : ''}>
                    <p className="text-xs text-muted-foreground mb-1">{portfolio[0].client} · {portfolio[0].category}</p>
                    <h3 className="font-semibold text-foreground text-base mb-1">{portfolio[0].title}</h3>
                    <p className="text-xs font-medium text-primary">{portfolio[0].results}</p>
                  </div>
                </Link>
              </Reveal>

              {portfolio.slice(1, 3).map((p, i) => (
                <Reveal key={p.id} delay={i * 100}>
                  <Link to="/portfolio" className="group block">
                    <div className="aspect-16/10 overflow-hidden rounded-xl bg-muted mb-4">
                      <img
                        src={img(IMGS[p.imgKey], 800, 500)}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className={dir === 'rtl' ? 'text-right' : ''}>
                      <p className="text-xs text-muted-foreground mb-1">{p.client} · {p.category}</p>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                      <p className="text-xs font-medium text-primary">{p.results}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── DIGITAL ECOSYSTEM ────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <Reveal className={dir === 'rtl' ? 'text-right' : ''}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{L(ecosystemLabel)}</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-16 max-w-lg" style={{ letterSpacing: '-0.02em' }}>
              {L(ecosystemHeading)}
            </h2>
          </Reveal>
          <div className={`relative ${dir === 'rtl' ? 'pr-6 border-r' : 'pl-6 border-l'} border-border`}>
            {ecosystemChain.map((key, i) => (
              <Reveal
                key={key}
                delay={i * 90}
                className={`relative pb-12 last:pb-0 ${dir === 'rtl' ? 'text-right' : ''}`}
              >
                <span
                  className={`absolute top-1 w-2.5 h-2.5 rounded-full bg-primary ${dir === 'rtl' ? '-right-7.75' : '-left-7.75'}`}
                />
                <p className="text-xs font-mono text-muted-foreground mb-1">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-semibold text-foreground text-xl">{t(`services.${key}.name`)}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className={`mb-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('whyUs.title')}</p>
            <h2 className="font-serif text-3xl font-bold text-foreground max-w-lg leading-tight" style={{ letterSpacing: '-0.02em' }}>
              {t('whyUs.subtitle')}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((n, i) => (
              <Reveal key={n} delay={i * 90} className={`flex gap-5 ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}>
                <p className="text-3xl font-bold text-border leading-none font-mono shrink-0">{String(n).padStart(2, '0')}</p>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t(`whyUs.item${n}.title`)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(`whyUs.item${n}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-28 lg:py-36 bg-foreground overflow-hidden">
        {/* Warm glow echoing Chefchaouen's blue/terracotta palette without repeating the hero photo */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-160 h-160 rounded-full bg-primary/10 blur-3xl" />
        <Reveal className={`relative max-w-3xl mx-auto px-6 sm:px-8 ${dir === 'rtl' ? 'text-right' : 'text-center'}`}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
            {t('cta.headline')}
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10">{t('cta.sub')}</p>
          <div className={`flex flex-wrap gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : 'justify-center'}`}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('cta.primaryBtn')}
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/8 text-white text-sm font-semibold rounded-lg border border-white/15 hover:bg-white/12 transition-colors"
            >
              {t('cta.secondaryBtn')}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}