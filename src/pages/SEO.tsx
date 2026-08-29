import { Link } from 'react-router';
import { useLanguage } from '../i18n/context';
import { img, IMGS } from '../data/content';

const seoServices = [
  {
    title: 'Search Visibility Setup',
    desc: 'We ensure the campaign website is correctly indexed and visible in search results for relevant queries — including technical setup, sitemap submission, and search console configuration.',
    tags: ['Google Search Console', 'Technical Setup', 'Indexing', 'Site Speed'],
  },
  {
    title: 'Website Analytics',
    desc: 'We set up and configure Google Analytics, traffic monitoring, audience data collection, and behaviour reporting so campaign leadership has accurate website performance data.',
    tags: ['Google Analytics 4', 'Traffic Reports', 'Audience Data', 'Behaviour Tracking'],
  },
  {
    title: 'Social Media Analytics',
    desc: 'Performance tracking across all campaign social media platforms — reach, engagement, follower growth, and content performance — reported clearly and regularly.',
    tags: ['Reach & Engagement', 'Follower Growth', 'Content Performance', 'Platform Reports'],
  },
  {
    title: 'Campaign Reporting Dashboards',
    desc: 'Custom reporting dashboards that give campaign leadership a single, clear view of all digital performance data — website, social media, and online presence — in one place.',
    tags: ['Custom Dashboards', 'Unified Reporting', 'Real-time Data', 'Executive Summaries'],
  },
  {
    title: 'Online Presence Management',
    desc: 'Monitoring and managing the campaign digital presence across platforms — ensuring information accuracy, profile consistency, and a professional digital footprint throughout the campaign.',
    tags: ['Profile Management', 'Information Accuracy', 'Presence Monitoring', 'Consistency'],
  },
];

const whySeoMatters = [
  { stat: '50+', label: 'campaign digital presences managed' },
  { stat: '120+', label: 'digital projects delivered on time' },
  { stat: '5+', label: 'years of campaign digital experience' },
  { stat: '98%', label: 'client satisfaction rate' },
];

const process = [
  { n: '01', title: 'Setup & Configuration', desc: 'Analytics platform setup, tracking configuration, and initial baseline measurement for all digital channels.' },
  { n: '02', title: 'Baseline Assessment', desc: 'Review of existing digital performance data to establish benchmarks and identify priority areas.' },
  { n: '03', title: 'Dashboard Build', desc: 'Custom campaign reporting dashboards built to surface the data that matters most to campaign leadership.' },
  { n: '04', title: 'Regular Reporting', desc: 'Scheduled performance reports delivered clearly and on time, covering all digital campaign channels.' },
  { n: '05', title: 'Monitoring', desc: 'Ongoing monitoring of website performance, search visibility, and online presence throughout the campaign.' },
  { n: '06', title: 'Review & Optimise', desc: 'Regular review of digital performance data to identify opportunities and inform campaign digital decisions.' },
];

export default function SEO() {
  const { t, dir } = useLanguage();

  return (
    <div className="bg-background">

      {/* ── HERO ── */}
      <section className="pt-36 pb-0 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`grid lg:grid-cols-2 gap-16 items-end ${dir === 'rtl' ? 'lg:flex lg:flex-row-reverse' : ''}`}>
            <div className={`pb-16 ${dir === 'rtl' ? 'text-right' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">Digital Marketing & Analytics</p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                {t('seoPage.title')}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-prose">{t('seoPage.subtitle')}</p>
              <div className={`flex flex-wrap gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background text-sm font-semibold rounded-lg hover:bg-foreground/85 transition-colors"
                >
                  Talk to Our Team
                  <svg className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-muted transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="hidden lg:block self-end">
              <img
                src={img(IMGS.seo, 800, 560)}
                alt="SEO analytics and performance tracking"
                className="w-full h-[420px] object-cover rounded-t-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SEO MATTERS ── */}
      <section className="border-b border-border bg-foreground">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className={`grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 ${dir === 'rtl' ? 'divide-x-reverse' : ''}`}>
            {whySeoMatters.map((s, i) => (
              <div key={i} className="px-6 py-4 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-1" style={{ letterSpacing: '-0.03em' }}>{s.stat}</p>
                <p className="text-xs text-white/40 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANALYTICS IMAGE SPLIT ── */}
      <section className="bg-secondary border-b border-border">
        <div className={`max-w-6xl mx-auto px-0 flex flex-col lg:flex-row min-h-[400px] ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`flex-1 flex flex-col justify-center px-8 lg:px-14 py-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Data-driven campaign digital</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-5" style={{ letterSpacing: '-0.02em' }}>
              Performance data you can act on.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Every campaign digital decision should be informed by data. We set up the tracking, build the dashboards, and deliver the reporting — so campaign leadership always has an accurate, up-to-date picture of digital performance.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img src={img(IMGS.seo2, 400, 280)} alt="Analytics dashboard" className="w-full h-28 object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src={img(IMGS.analytics, 400, 280)} alt="Search data" className="w-full h-28 object-cover" />
              </div>
            </div>
          </div>
          <div className="flex-none w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden">
            <img
              src={img(IMGS.seo3, 900, 600)}
              alt="SEO performance data"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── SEO SERVICES LIST ── */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`mb-12 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our digital marketing services</p>
            <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              Complete digital infrastructure for campaigns
            </h2>
          </div>
          <div className="divide-y divide-border">
            {seoServices.map((service, i) => (
              <div key={service.title} className={`py-10 grid lg:grid-cols-12 gap-6 items-start ${dir === 'rtl' ? 'text-right' : ''}`}>
                <div className="lg:col-span-1">
                  <p className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, '0')}</p>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-semibold text-foreground text-base">{service.title}</h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
                <div className={`lg:col-span-3 flex flex-wrap gap-2 ${dir === 'rtl' ? 'justify-end' : ''}`}>
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`mb-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">How it works</p>
            <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              Our approach to campaign digital analytics
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <div key={step.n} className={`bg-secondary p-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
                <p className="text-xs font-mono text-primary mb-4">{step.n}</p>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL WIDTH IMAGE ── */}
      <div className="h-64 lg:h-80 overflow-hidden">
        <img
          src={img(IMGS.marketing, 1600, 500)}
          alt="Digital strategy and SEO planning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── CTA ── */}
      <section className="py-24 bg-foreground">
        <div className={`max-w-2xl mx-auto px-6 ${dir === 'rtl' ? 'text-right' : 'text-center'}`}>
          <h2 className="font-serif text-3xl font-bold text-white mb-5" style={{ letterSpacing: '-0.02em' }}>
            Get clear digital performance data for your campaign
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Tell us about your campaign digital requirements and we will recommend the right analytics and reporting setup.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
