import { useState } from 'react';
import { useLanguage } from '../i18n/context';
import { img, IMGS, blogPosts } from '../data/content';

const categoryKeys = ['all', 'webDev', 'marketing', 'seo', 'branding'] as const;
const categoryValues = ['All', 'Web Dev', 'Marketing', 'SEO', 'Branding'];

export default function Blog() {
  const { t, dir } = useLanguage();
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-foreground to-foreground/90">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">{t('blogPage.title')}</h1>
          <p className="text-white/60 text-lg">{t('blogPage.subtitle')}</p>
        </div>
      </section>

      {/* Filter + Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Filter */}
          <div className={`flex flex-wrap gap-2 mb-12 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {categoryKeys.map((k, i) => (
              <button
                key={k}
                onClick={() => setActive(categoryValues[i])}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === categoryValues[i]
                    ? 'bg-primary text-white'
                    : 'bg-card border border-border text-foreground/70 hover:bg-muted'
                }`}
              >
                {t(`blogPage.categories.${k}`)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article key={post.id} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={img(IMGS[post.imgKey], 600, 400)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className={`flex items-center gap-3 mb-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xs font-medium bg-secondary text-primary px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className={`font-serif font-semibold text-foreground mb-3 leading-snug ${dir === 'rtl' ? 'text-right' : ''}`}>
                    {post.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground leading-relaxed mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
                    {post.excerpt}
                  </p>
                  <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    {t('blogPage.readMore')} →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
