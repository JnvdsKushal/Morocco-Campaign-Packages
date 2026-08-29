import { Link } from 'react-router';
import { useLanguage } from '../i18n/context';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-4">{t('notFound.title')}</h1>
        <p className="text-muted-foreground mb-8">{t('notFound.sub')}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
        >
          {t('notFound.backBtn')}
        </Link>
      </div>
    </div>
  );
}
