import { Link } from 'react-router';
import { useLanguage } from '../i18n/context';
import { pricingTiers } from '../data/content';

export default function Pricing() {
  const { t, dir } = useLanguage();

  const tierTranslations: Record<string, { name: string; price: string; cta: string }> = {
    starter: {
      name: t('pricingPage.starter.name'),
      price: t('pricingPage.starter.price'),
      cta: t('pricingPage.starter.cta'),
    },
    growth: {
      name: t('pricingPage.growth.name'),
      price: t('pricingPage.growth.price'),
      cta: t('pricingPage.growth.cta'),
    },
    professional: {
      name: t('pricingPage.professional.name'),
      price: t('pricingPage.professional.price'),
      cta: t('pricingPage.professional.cta'),
    },
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-foreground to-foreground/90">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">{t('pricingPage.title')}</h1>
          <p className="text-white/60 text-lg leading-relaxed">{t('pricingPage.subtitle')}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier) => {
              const tr = tierTranslations[tier.id];
              return (
                <div
                  key={tier.id}
                  className={`rounded-2xl p-8 border ${
                    tier.highlighted
                      ? 'bg-primary border-primary text-white shadow-2xl shadow-primary/30 scale-105'
                      : 'bg-card border-border'
                  }`}
                >
                  {tier.highlighted && (
                    <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`font-serif text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-foreground'}`}>
                    {tr.name}
                  </h3>
                  <p className={`text-3xl font-bold font-serif mb-8 ${tier.highlighted ? 'text-white' : 'text-primary'}`}>
                    {tr.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                        <svg
                          className={`w-5 h-5 shrink-0 mt-0.5 ${tier.highlighted ? 'text-white/70' : 'text-primary'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={tier.highlighted ? 'text-white/80' : 'text-foreground/70'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-3.5 rounded-xl font-semibold transition-colors ${
                      tier.highlighted
                        ? 'bg-white text-primary hover:bg-white/90'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    {tr.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
