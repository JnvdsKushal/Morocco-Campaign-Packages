import { useState } from 'react';
import { useLanguage } from '../i18n/context';
import { img, IMGS, portfolio } from '../data/content';

const categories = ['All', 'Web', 'Marketing', 'Branding', 'SEO'];

export default function Portfolio() {
  const { t, dir } = useLanguage();
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? portfolio : portfolio.filter((p) => p.category === active);

  const filterLabels: Record<string, string> = {
    All: t('portfolio.filterAll'),
    Web: t('portfolio.filterWeb'),
    Marketing: t('portfolio.filterMarketing'),
    Branding: t('portfolio.filterBranding'),
    SEO: t('portfolio.filterSeo'),
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-foreground to-foreground/90">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">{t('portfolio.title')}</h1>
          <p className="text-white/60 text-lg">{t('portfolio.subtitle')}</p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Filter bar */}
          <div className={`flex flex-wrap gap-2 mb-12 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-primary text-white'
                    : 'bg-card border border-border text-foreground/70 hover:bg-muted'
                }`}
              >
                {filterLabels[cat]}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-52 overflow-hidden">
                  <img
                    src={img(IMGS[p.imgKey], 600, 400)}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className={`flex items-center flex-wrap gap-2 mb-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xs font-medium bg-secondary text-primary px-2.5 py-1 rounded-full">{p.category}</span>
                    <span className="text-xs text-muted-foreground">{p.client}</span>
                  </div>
                  <h3 className={`font-serif font-semibold text-foreground mb-2 ${dir === 'rtl' ? 'text-right' : ''}`}>{p.title}</h3>
                  <p className={`text-sm text-muted-foreground leading-relaxed mb-3 ${dir === 'rtl' ? 'text-right' : ''}`}>{p.desc}</p>
                  <div className={`flex flex-wrap gap-1.5 mb-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    {p.services.map((s) => (
                      <span key={s} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md">{s}</span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {p.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
