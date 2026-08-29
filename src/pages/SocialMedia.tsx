import { Link } from 'react-router';
import { useLanguage } from '../i18n/context';
import { img, IMGS } from '../data/content';

const platforms = [
  { name: 'Facebook', color: 'bg-blue-50 text-blue-600 border-blue-100', desc: 'Pages, Groups, Events, Community management' },
  { name: 'Instagram', color: 'bg-pink-50 text-pink-600 border-pink-100', desc: 'Visual content, Stories, Reels, Campaign graphics' },
  { name: 'X / Twitter', color: 'bg-zinc-50 text-zinc-700 border-zinc-100', desc: 'Real-time updates, Campaign announcements, Engagement' },
  { name: 'LinkedIn', color: 'bg-sky-50 text-sky-700 border-sky-100', desc: 'Professional network, Stakeholder communication' },
  { name: 'YouTube', color: 'bg-red-50 text-red-600 border-red-100', desc: 'Video content, Channel management, Thumbnails' },
  { name: 'TikTok', color: 'bg-slate-50 text-slate-700 border-slate-100', desc: 'Short-form video, Wider reach, Creative content' },
];

const whatIsIncluded = [
  { title: 'Account Setup & Optimisation', desc: 'Professional setup and configuration of campaign social media accounts across all relevant platforms.' },
  { title: 'Content Strategy', desc: 'A documented strategy defining the campaign voice, content themes, posting frequency and key messages.' },
  { title: 'Monthly Content Calendar', desc: 'Every post planned in advance. Copy, visuals, and timing — all prepared and approved before publication.' },
  { title: 'Visual Content Creation', desc: 'On-brand graphics, campaign visuals, and digital assets designed for each platform\'s format and audience.' },
  { title: 'Publishing & Scheduling', desc: 'Managed publishing workflows ensuring consistent, timely posting across all campaign social media accounts.' },
  { title: 'Community Management', desc: 'Monitoring of comments and messages. Timely, professional responses to maintain a positive campaign presence.' },
  { title: 'Analytics & Reporting', desc: 'Monthly performance reports with reach, engagement, follower growth and content performance — clearly presented.' },
  { title: 'Cross-Platform Consistency', desc: 'A unified campaign visual identity and messaging consistency maintained across all platforms at all times.' },
];

const metrics = [
  { value: '50+', label: 'Campaign accounts managed' },
  { value: '120+', label: 'Digital projects delivered' },
  { value: '5+', label: 'Years of campaign digital experience' },
  { value: '98%', label: 'Client satisfaction rate' },
];

export default function SocialMedia() {
  const { t, dir } = useLanguage();

  return (
    <div className="bg-background">

      {/* ── HERO ── */}
      <section className="pt-36 pb-0 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`grid lg:grid-cols-2 gap-16 items-end ${dir === 'rtl' ? 'lg:flex lg:flex-row-reverse' : ''}`}>
            <div className={`pb-16 ${dir === 'rtl' ? 'text-right' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">Campaign Social Media Management</p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                {t('socialMediaPage.title')}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-prose">{t('socialMediaPage.subtitle')}</p>
              <div className={`flex flex-wrap gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background text-sm font-semibold rounded-lg hover:bg-foreground/85 transition-colors"
                >
                  Get Started Today
                  <svg className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-muted transition-colors"
                >
                  See Results
                </Link>
              </div>
            </div>
            <div className="hidden lg:block self-end">
              <img
                src={img(IMGS.social, 800, 560)}
                alt="Social media content creation"
                className="w-full h-[420px] object-cover rounded-t-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS BAND ── */}
      <section className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className={`grid grid-cols-2 lg:grid-cols-4 divide-x divide-border ${dir === 'rtl' ? 'divide-x-reverse' : ''}`}>
            {metrics.map((m, i) => (
              <div key={i} className="px-6 py-4 text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-1" style={{ letterSpacing: '-0.03em' }}>{m.value}</p>
                <p className="text-xs text-muted-foreground leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`mb-12 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Platforms</p>
            <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              Every platform your campaign audience uses
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map(({ name, color, desc }) => (
              <div key={name} className={`border rounded-xl p-6 ${color} ${dir === 'rtl' ? 'text-right' : ''}`}>
                <h3 className="font-bold text-lg mb-2">{name}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT VISUAL ── */}
      <section className="bg-muted border-t border-border">
        <div className={`max-w-6xl mx-auto px-0 flex flex-col lg:flex-row min-h-[400px] ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
          <div className="flex-none w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden">
            <img
              src={img(IMGS.social2, 900, 600)}
              alt="Social media content strategy session"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`flex-1 flex flex-col justify-center px-8 lg:px-14 py-14 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Campaign content creation</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-5" style={{ letterSpacing: '-0.02em' }}>
              Professional campaign content, delivered consistently
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We create platform-native campaign content — not recycled graphics. Every post is designed for the platform where it will appear, aligned to the campaign visual identity and key messages. Consistent, professional, on-schedule.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img src={img(IMGS.social3, 400, 280)} alt="Content example" className="w-full h-28 object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src={img(IMGS.social4, 400, 280)} alt="Campaign visual" className="w-full h-28 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`mb-12 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Complete campaign service</p>
            <h2 className="font-serif text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              Everything handled. Nothing missed.
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-2">
            {whatIsIncluded.map((item) => (
              <div key={item.title} className={`bg-background p-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL WIDTH IMAGE ── */}
      <div className="h-64 lg:h-80 overflow-hidden">
        <img
          src={img(IMGS.marketing2, 1600, 500)}
          alt="Digital marketing campaign planning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── CTA ── */}
      <section className="py-24 bg-foreground">
        <div className={`max-w-2xl mx-auto px-6 ${dir === 'rtl' ? 'text-right' : 'text-center'}`}>
          <h2 className="font-serif text-3xl font-bold text-white mb-5" style={{ letterSpacing: '-0.02em' }}>
            Build your campaign social media presence
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Tell us about your campaign. Our team will assess your current presence and recommend the right approach.
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
