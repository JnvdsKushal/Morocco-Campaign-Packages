import { Link } from 'react-router';
import { useLanguage } from '../i18n/context';
import { img, IMGS } from '../data/content';

const techStack = [
  { name: 'React', tag: 'Frontend' },
  { name: 'Next.js', tag: 'Framework' },
  { name: 'TypeScript', tag: 'Language' },
  { name: 'Node.js', tag: 'Backend' },
  { name: 'PostgreSQL', tag: 'Database' },
  { name: 'Tailwind CSS', tag: 'Styling' },
  { name: 'Vercel', tag: 'Hosting' },
  { name: 'Stripe', tag: 'Payments' },
];

const websiteTypes = [
  { label: 'Campaign Websites', img: IMGS.webDev3 },
  { label: 'Landing Pages', img: IMGS.webDev2 },
  { label: 'Event & News Pages', img: IMGS.webDev4 },
  { label: 'Digital Platforms', img: IMGS.webDev5 },
];

const processSteps = [
  { n: '01', title: 'Discovery', desc: 'We learn your business, your goals, your target audience, and your competitors. No guesswork.' },
  { n: '02', title: 'Strategy', desc: 'We map out the site architecture, content hierarchy, and technical approach before a single line of code.' },
  { n: '03', title: 'Design', desc: 'High-fidelity mockups in your brand language. You review and approve before development starts.' },
  { n: '04', title: 'Development', desc: 'Clean, fast, accessible code. We build mobile-first and optimize for every device and browser.' },
  { n: '05', title: 'Testing', desc: 'Performance, accessibility, cross-browser, and SEO audits. We fix everything before launch.' },
  { n: '06', title: 'Launch', desc: 'Smooth deployment with zero downtime. DNS, SSL, analytics — all handled.' },
  { n: '07', title: 'Growth', desc: 'Post-launch support, analytics review, and ongoing improvements to keep your site performing.' },
];

const included = [
  'Custom responsive design (not templates)',
  'Mobile-first development',
  'Multilingual support (Arabic, French, English)',
  'Campaign information architecture',
  'Contact and inquiry systems',
  'Google Analytics & Search Console setup',
  'Page speed optimization (90+ Lighthouse score)',
  'Accessibility (WCAG 2.1 AA)',
  'CMS integration (edit your own content)',
  'Post-launch technical support',
];

export default function WebDev() {
  const { t, dir } = useLanguage();

  return (
    <div className="bg-background">

      {/* ── HERO ── */}
      <section className="pt-36 pb-0 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`grid lg:grid-cols-2 gap-16 items-end ${dir === 'rtl' ? 'lg:flex lg:flex-row-reverse' : ''}`}>
            <div className={`pb-16 ${dir === 'rtl' ? 'text-right' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">Campaign Website Development</p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                {t('webDev.title')}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-prose">{t('webDev.subtitle')}</p>
              <div className={`flex flex-wrap gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background text-sm font-semibold rounded-lg hover:bg-foreground/85 transition-colors"
                >
                  Start Your Project
                  <svg className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-muted transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="hidden lg:block self-end">
              <img
                src={img(IMGS.webDev, 800, 560)}
                alt="Web development workspace"
                className="w-full h-[420px] object-cover rounded-t-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WEBSITE TYPES ── */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`mb-12 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">What we build</p>
            <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              Campaign digital presence, built right
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {websiteTypes.map(({ label, img: imgKey }) => (
              <div key={label} className="group relative overflow-hidden rounded-xl bg-muted aspect-[3/4]">
                <img
                  src={img(imgKey, 480, 640)}
                  alt={label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${dir === 'rtl' ? 'lg:flex lg:flex-row-reverse' : ''}`}>
            <div className={dir === 'rtl' ? 'text-right' : ''}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Every campaign website includes</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.02em' }}>
                No hidden extras.<br />Everything is standard.
              </h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className={`flex items-start gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={img(IMGS.office2, 800, 520)}
                  alt="Developer at work"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={img(IMGS.webDev2, 400, 280)}
                    alt="Code on screen"
                    className="w-full h-36 object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={img(IMGS.design, 400, 280)}
                    alt="Design mockup"
                    className="w-full h-36 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`mb-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our process</p>
            <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              Campaign website delivery in a clear sequence
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.n} className={`bg-background p-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
                <p className="text-xs font-mono text-primary mb-4">{step.n}</p>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 bg-foreground">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`mb-12 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Technology</p>
            <h2 className="font-serif text-3xl font-bold text-white" style={{ letterSpacing: '-0.02em' }}>
              We use modern, battle-tested tools
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10">
            {techStack.map(({ name, tag }) => (
              <div key={name} className={`bg-foreground px-6 py-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
                <p className="text-xs text-white/35 uppercase tracking-widest mb-1">{tag}</p>
                <p className="font-semibold text-white text-lg">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL WIDTH IMAGE ── */}
      <div className="h-72 lg:h-96 overflow-hidden">
        <img
          src={img(IMGS.collaboration, 1600, 600)}
          alt="Team collaborating on a web project"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── CTA ── */}
      <section className="py-24 bg-background border-t border-border">
        <div className={`max-w-2xl mx-auto px-6 ${dir === 'rtl' ? 'text-right' : 'text-center'}`}>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-5" style={{ letterSpacing: '-0.02em' }}>
            Ready to build your campaign website?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Tell us about your campaign. We will review your brief and get back to you within one business day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start Your Campaign
          </Link>
        </div>
      </section>
    </div>
  );
}
