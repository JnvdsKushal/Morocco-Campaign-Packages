import { Link } from 'react-router';
import { useLanguage } from '../i18n/context';
import { img, IMGS } from '../data/content';

export default function About() {
  const { t, dir } = useLanguage();

  const values = [1, 2, 3, 4].map((n) => ({
    title: t(`about.values.item${n}.title`) as string,
    desc: t(`about.values.item${n}.desc`) as string,
  }));

  return (
    <div className="bg-background">
      {/* ── HERO ── */}
      <section className="pt-36 pb-0 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`grid lg:grid-cols-2 gap-16 items-end pb-0 ${dir === 'rtl' ? 'lg:flex lg:flex-row-reverse' : ''}`}>
            <div className={`pb-16 ${dir === 'rtl' ? 'text-right' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">About us</p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                {t('about.heroHeadline')}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-prose">{t('about.heroSub')}</p>
              <div className={`grid grid-cols-2 gap-8 border-t border-border pt-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
                {[
                  { val: '50+', lbl: t('stats.clients.label') },
                  { val: '120+', lbl: t('stats.projects.label') },
                  { val: '5+', lbl: t('stats.years.label') },
                  { val: '98%', lbl: t('stats.satisfaction.label') },
                ].map((s) => (
                  <div key={s.lbl as string}>
                    <p className="font-serif text-3xl font-bold text-foreground mb-1" style={{ letterSpacing: '-0.03em' }}>{s.val}</p>
                    <p className="text-muted-foreground text-sm">{s.lbl}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block self-end">
              <img
                src={img(IMGS.about, 800, 560)}
                alt="MoroccoPack Digital team at work"
                className="w-full h-[420px] object-cover rounded-t-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / APPROACH ── */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`grid lg:grid-cols-3 gap-px bg-border ${dir === 'rtl' ? 'direction-rtl' : ''}`}>
            {(['mission', 'vision'] as const).map((key) => (
              <div key={key} className={`bg-background p-10 ${dir === 'rtl' ? 'text-right' : ''}`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                  {t(`about.${key}.title`)}
                </p>
                <p className="text-foreground leading-relaxed">{t(`about.${key}.desc`)}</p>
              </div>
            ))}
            <div className={`bg-foreground p-10 ${dir === 'rtl' ? 'text-right' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                {t('about.approach.title')}
              </p>
              <p className="text-white/65 leading-relaxed">{t('about.approach.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`mb-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('about.values.title')}</p>
            <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              What guides everything we do for campaigns
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className={`flex gap-6 ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}>
                <p className="text-3xl font-bold text-border leading-none font-mono shrink-0">{String(i + 1).padStart(2, '0')}</p>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM PHOTO ── */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className={`mb-10 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('about.team.title')}</p>
            <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              The team behind the work
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src={img(IMGS.team, 1400, 560)}
              alt="MoroccoPack Digital team"
              className="w-full h-72 lg:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-foreground">
        <div className={`max-w-2xl mx-auto px-6 ${dir === 'rtl' ? 'text-right' : 'text-center'}`}>
          <h2 className="font-serif text-3xl font-bold text-white mb-5" style={{ letterSpacing: '-0.02em' }}>{t('cta.headline')}</h2>
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
