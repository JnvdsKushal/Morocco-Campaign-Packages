import { useState } from 'react';
import { useLanguage } from '../i18n/context';

export default function FAQ() {
  const { t, dir } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  const items = t('faqPage.items') as unknown as { q: string; a: string }[];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-foreground to-foreground/90">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">{t('faqPage.title')}</h1>
          <p className="text-white/60 text-lg">{t('faqPage.subtitle')}</p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-3">
            {Array.isArray(items) && items.map((item: { q: string; a: string }, i: number) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full flex items-center justify-between gap-4 p-6 text-start hover:bg-muted transition-colors ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                >
                  <span className="font-serif font-semibold text-foreground">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-primary shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {open === i && (
                  <div className={`px-6 pb-6 text-muted-foreground leading-relaxed ${dir === 'rtl' ? 'text-right' : ''}`}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
