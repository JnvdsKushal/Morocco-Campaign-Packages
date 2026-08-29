import { Link } from 'react-router';
import { useLanguage } from '../i18n/context';
import { img, IMGS } from '../data/content';

const services = [
  { key: 'webDev', link: '/services/web-development' },
  { key: 'webApps', link: '/contact' },
  { key: 'socialMedia', link: '/services/social-media' },
  { key: 'digitalMarketing', link: '/contact' },
  { key: 'seo', link: '/services/seo' },
  { key: 'branding', link: '/contact' },
  { key: 'contentCreation', link: '/contact' },
  { key: 'digitalStrategy', link: '/contact' },
];

export default function Services() {
  const { t, dir } = useLanguage();

  return (
    <div className="bg-background">
      {/* ── HERO ── */}
      <section className="pt-36 pb-20 border-b border-border">
        <div className={`max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 ${dir === 'rtl' ? 'text-right' : ''}`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">Services</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl" style={{ letterSpacing: '-0.02em' }}>
            {t('servicesPage.heroTitle')}
          </h1>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl leading-relaxed">{t('servicesPage.heroSub')}</p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="py-0 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="divide-y divide-border">
            {services.map(({ key, link }, i) => (
              <div key={key} className={`py-12 grid lg:grid-cols-4 gap-8 items-start ${dir === 'rtl' ? 'text-right' : ''}`}>
                {/* Number */}
                <div className={`flex items-start ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <p className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, '0')}</p>
                </div>
                {/* Name */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
                    {t(`servicesPage.${key}.title`)}
                  </h2>
                  <p className="text-primary text-sm font-medium mt-1">{t(`servicesPage.${key}.sub`)}</p>
                </div>
                {/* Description */}
                <div className="lg:col-span-1">
                  <p className="text-muted-foreground leading-relaxed text-sm">{t(`servicesPage.${key}.desc`)}</p>
                </div>
                {/* CTA */}
                <div className={`${dir === 'rtl' ? 'text-left' : 'lg:text-right'}`}>
                  <Link
                    to={link}
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                  >
                    Learn more
                    <svg className={`w-3.5 h-3.5 ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISUAL BREAK ── */}
      <div className="h-64 lg:h-80 overflow-hidden border-t border-border">
        <img
          src={img(IMGS.collaboration, 1600, 500)}
          alt="Our team delivering digital services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── CTA ── */}
      <section className="py-24 bg-foreground border-t border-border">
        <div className={`max-w-2xl mx-auto px-6 ${dir === 'rtl' ? 'text-right' : 'text-center'}`}>
          <h2 className="font-serif text-3xl font-bold text-white mb-5" style={{ letterSpacing: '-0.02em' }}>
            {t('cta.headline')}
          </h2>
          <p className="text-white/50 mb-8">{t('cta.sub')}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            {t('cta.primaryBtn')}
          </Link>
        </div>
      </section>
    </div>
  );
}
