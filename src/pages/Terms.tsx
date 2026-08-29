import { useLanguage } from '../i18n/context';

export default function Terms() {
  const { t, dir } = useLanguage();

  const sections = t('terms.sections') as unknown as { title: string; content: string }[];

  return (
    <div>
      <section className="pt-32 pb-16 bg-gradient-to-br from-foreground to-foreground/90">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-4">{t('terms.title')}</h1>
          <p className="text-white/50 text-sm">{t('terms.lastUpdated')}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className={`space-y-10 ${dir === 'rtl' ? 'text-right' : ''}`}>
            {Array.isArray(sections) && sections.map((s: { title: string; content: string }, i: number) => (
              <div key={i}>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
