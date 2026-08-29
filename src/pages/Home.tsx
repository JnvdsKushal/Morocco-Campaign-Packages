import { Link } from 'react-router';
import { useLanguage } from '../i18n/context';
import { img, IMGS, portfolio } from '../data/content';

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

export default function Home() {
  const { t, dir, lang } = useLanguage();

  const statItems = [
    { value: t('stats.clients.value'), label: t('stats.clients.label') },
    { value: t('stats.projects.value'), label: t('stats.projects.label') },
    { value: t('stats.years.value'), label: t('stats.years.label') },
    { value: t('stats.satisfaction.value'), label: t('stats.satisfaction.label') },
  ];

  const stepLabel = (s: typeof processSteps[0]) =>
    lang === 'fr' ? s.fr : lang === 'ar' ? s.ar : s.en;

  return (
    <div className="bg-background">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col lg:flex-row pt-20">
        {/* Left: content */}
        <div className={`flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-0 max-w-2xl ${dir === 'rtl' ? 'lg:order-2 text-right' : 'lg:order-1'}`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
            {/* {t('hero.badge')} */}
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t('hero.headline1')}<br />
            <span className="text-primary">{t('hero.headline2')}</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-prose">
            {t('hero.sub')}
          </p>
          <div className={`flex flex-wrap gap-3 mb-12 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background text-sm font-semibold rounded-lg hover:bg-foreground/85 transition-colors"
            >
              {t('hero.primaryCta')}
              <svg className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-foreground text-sm font-semibold rounded-lg border border-border hover:bg-muted transition-colors"
            >
              {t('hero.secondaryCta')}
            </Link>
          </div>
          <div className={`flex items-center gap-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <div className="flex -space-x-2">
              {['photo-1507003211169-0a1dd7228f2d', 'photo-1494790108377-be9c29b29330', 'photo-1500648767791-00dcc994a43e'].map((id) => (
                <div key={id} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden bg-muted">
                  <img src={`https://images.unsplash.com/${id}?w=64&h=64&fit=crop&auto=format`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{t('hero.trustedBy')}</p>
          </div>
        </div>

        {/* Right: full photo */}
        <div className={`flex-none w-full lg:w-[50%] xl:w-[55%] h-64 lg:h-auto relative ${dir === 'rtl' ? 'lg:order-1' : 'lg:order-2'}`}>
          <img
            src={img(IMGS.hero, 1200, 900)}
            alt="Digital agency workspace — designer working on a website"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className={`grid grid-cols-2 lg:grid-cols-4 divide-x divide-border ${dir === 'rtl' ? 'divide-x-reverse' : ''}`}>
            {statItems.map((s, i) => (
              <div key={i} className={`px-6 py-4 text-center ${i === 0 ? (dir === 'rtl' ? '' : 'pl-0') : ''}`}>
                <p className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-1" style={{ letterSpacing: '-0.03em' }}>
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`grid lg:grid-cols-2 gap-16 items-start ${dir === 'rtl' ? 'lg:flex lg:flex-row-reverse' : ''}`}>
            <div className={dir === 'rtl' ? 'text-right' : ''}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('services.title')}</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Everything your<br />business needs online
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">{t('services.subtitle')}</p>
              <Link
                to="/services"
                className={`inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
              >
                All services
                <svg className={`w-3.5 h-3.5 ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div>
              <ul className="divide-y divide-border">
                {serviceList.map((key, i) => (
                  <li key={key}>
                    <Link
                      to="/services"
                      className={`flex items-baseline gap-4 py-4 group hover:text-primary transition-colors ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}
                    >
                      <span className="text-xs text-muted-foreground font-mono tabular-nums w-5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                        {t(`services.${key}.name`)}
                      </span>
                      <svg className={`w-3.5 h-3.5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: WEB DEVELOPMENT ─────────────────────────────────────── */}
      <section className="bg-muted border-y border-border">
        <div className={`max-w-6xl mx-auto px-0 lg:px-0 flex flex-col lg:flex-row min-h-[440px] ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
          <div className="flex-none w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden">
            <img
              src={img(IMGS.webDev, 900, 700)}
              alt="Web development at MoroccoPack Digital"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`flex-1 flex flex-col justify-center px-8 lg:px-14 py-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('services.webDev.name')}</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-5" style={{ letterSpacing: '-0.02em' }}>
              {t('servicesPage.webDev.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7 max-w-prose text-sm">
              {t('servicesPage.webDev.desc')}
            </p>
            <Link
              to="/services/web-development"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors self-start ${dir === 'rtl' ? 'flex-row-reverse self-end' : ''}`}
            >
              Learn more
              <svg className={`w-3.5 h-3.5 ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE: DIGITAL MARKETING ───────────────────────────────────── */}
      <section className="bg-foreground">
        <div className={`max-w-6xl mx-auto px-0 lg:px-0 flex flex-col lg:flex-row min-h-[440px] ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`flex-1 flex flex-col justify-center px-8 lg:px-14 py-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('services.digitalMarketing.name')}</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white leading-tight mb-5" style={{ letterSpacing: '-0.02em' }}>
              Campaigns That Deliver Measurable Growth
            </h2>
            <p className="text-white/60 leading-relaxed mb-7 max-w-prose text-sm">
              {t('services.digitalMarketing.desc')}
            </p>
            <Link
              to="/services/social-media"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/40 pb-0.5 hover:text-primary hover:border-primary transition-colors self-start ${dir === 'rtl' ? 'flex-row-reverse self-end' : ''}`}
            >
              Learn more
              <svg className={`w-3.5 h-3.5 ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="flex-none w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden">
            <img
              src={img(IMGS.marketing, 900, 700)}
              alt="Digital marketing campaign results"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURE: SEO ─────────────────────────────────────────────────── */}
      <section className="bg-background border-y border-border">
        <div className={`max-w-6xl mx-auto px-0 lg:px-0 flex flex-col lg:flex-row min-h-[360px] ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`flex-1 flex flex-col justify-center px-8 lg:px-14 py-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('services.seo.name')}</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-5" style={{ letterSpacing: '-0.02em' }}>
              Get found by the people who matter most
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7 max-w-prose text-sm">
              {t('services.seo.desc')}
            </p>
            <Link
              to="/services/seo"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors self-start ${dir === 'rtl' ? 'flex-row-reverse self-end' : ''}`}
            >
              Learn more
              <svg className={`w-3.5 h-3.5 ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="flex-none w-full lg:w-[45%] h-64 lg:h-auto grid grid-rows-2 overflow-hidden">
            <img src={img(IMGS.seo, 900, 350)} alt="SEO analytics" className="w-full h-full object-cover" />
            <img src={img(IMGS.analytics, 900, 350)} alt="Search performance data" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`mb-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">How we work</p>
            <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              A clear process. Real outcomes.
            </h2>
          </div>
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border ${dir === 'rtl' ? 'direction-rtl' : ''}`}>
            {processSteps.map((step) => (
              <div key={step.n} className={`bg-background p-6 ${dir === 'rtl' ? 'text-right' : ''}`}>
                <p className="text-xs font-mono text-muted-foreground mb-3">{step.n}</p>
                <p className="font-semibold text-foreground text-sm">{stepLabel(step)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ────────────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 ${dir === 'rtl' ? 'sm:flex-row-reverse text-right' : ''}`}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('portfolio.title')}</p>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.slice(0, 3).map((p) => (
              <Link key={p.id} to="/portfolio" className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted mb-4">
                  <img
                    src={img(IMGS[p.imgKey], 720, 540)}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className={dir === 'rtl' ? 'text-right' : ''}>
                  <p className="text-xs text-muted-foreground mb-1">{p.client} · {p.category}</p>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                  <p className="text-xs font-medium text-primary">{p.results}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`mb-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('whyUs.title')}</p>
            <h2 className="font-serif text-3xl font-bold text-foreground max-w-lg leading-tight" style={{ letterSpacing: '-0.02em' }}>
              {t('whyUs.subtitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={`flex gap-5 ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}>
                <p className="text-3xl font-bold text-border leading-none font-mono shrink-0">{String(n).padStart(2, '0')}</p>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t(`whyUs.item${n}.title`)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(`whyUs.item${n}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-foreground">
        <div className={`max-w-3xl mx-auto px-6 sm:px-8 ${dir === 'rtl' ? 'text-right' : 'text-center'}`}>
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
        </div>
      </section>
    </div>
  );
}
