import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { useLanguage, type Lang } from '../i18n/context';

const langOptions: { code: Lang; label: string; short: string; native: string }[] = [
  { code: 'en', label: 'English', short: 'EN', native: 'English' },
  { code: 'fr', label: 'Français', short: 'FR', native: 'Français' },
  { code: 'ar', label: 'Arabic', short: 'AR', native: 'العربية' },
];

function LangSwitcher({ light = false, mobile = false }: { light?: boolean; mobile?: boolean }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = langOptions.find((l) => l.code === lang)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (mobile) {
    return (
      <div className="px-3 py-3 border border-border rounded-lg">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2.5">Language</p>
        <div className="flex gap-2">
          {langOptions.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`flex-1 py-2 text-sm font-medium rounded transition-colors border ${
                lang === l.code
                  ? 'bg-primary text-white border-primary'
                  : 'border-border text-foreground/70 hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {l.native}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-1.5 px-3 py-2 rounded text-sm font-medium transition-colors duration-300 border ${
          light
            ? 'border-white/40 text-white hover:border-white/70'
            : 'border-border text-muted-foreground hover:text-foreground'
        }`}
      >
        <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        {current.short}
        <svg className={`w-3 h-3 transition-transform opacity-60 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full mt-2 end-0 w-40 bg-white border border-border rounded-lg shadow-lg overflow-hidden z-50" role="listbox">
          {langOptions.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={lang === l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors text-start ${
                lang === l.code
                  ? 'bg-primary/5 text-primary font-medium'
                  : 'text-foreground/70 hover:bg-muted hover:text-foreground'
              }`}
            >
              <span>{l.native}</span>
              {lang === l.code && (
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ServicesDropdown({ light = false }: { light?: boolean }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const triggerColor = light
    ? 'text-white/90 hover:text-white'
    : 'text-foreground/60 hover:text-foreground';

  const subServices = [
    { to: '/services/web-development', label: t('nav.webDev') },
    { to: '/services/social-media', label: t('nav.socialMedia') },
    { to: '/services/seo', label: t('nav.seo') },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${triggerColor}`}
      >
        {t('nav.services')}
        <svg className={`w-3.5 h-3.5 opacity-60 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full mt-2 start-0 w-52 bg-white border border-border rounded-lg shadow-lg overflow-hidden z-50">
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 text-sm font-medium text-primary border-b border-border hover:bg-primary/5 transition-colors"
          >
            {t('nav.services')} — All
          </Link>
          {subServices.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { t, dir } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Transparent-over-hero state only applies at the very top of the
  // homepage. Any other route, any scroll past ~20px, or the mobile menu
  // being open all fall back to the existing solid/white navbar.
  const isHome = location.pathname === '/';
  const isSolid = !isHome || scrolled || menuOpen;

  const textColor = isSolid ? 'text-foreground' : 'text-white';
const subTextColor = 'text-foreground/60 hover:text-foreground';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between h-20 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2.5 shrink-0 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <img
  src="/logo.png"
  alt="MoroccoPack Digital"
  className={`w-12 h-12 object-contain shrink-0 transition-all duration-300 ${!isSolid ? 'drop-shadow-md' : ''}`}
/>
<span className="font-serif text-xl font-semibold transition-colors duration-300 text-foreground">
  MoroccoPack<span className="text-accent"> Digital</span>
</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-5 xl:gap-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${isActive && isSolid ? 'text-primary' : subTextColor}`
              }
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${isActive && isSolid ? 'text-primary' : subTextColor}`
              }
            >
              {t('nav.about')}
            </NavLink>
            <ServicesDropdown light={false} />
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${isActive && isSolid ? 'text-primary' : subTextColor}`
              }
            >
              {t('nav.portfolio')}
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${isActive && isSolid ? 'text-primary' : subTextColor}`
              }
            >
              {t('nav.pricing')}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${isActive && isSolid ? 'text-primary' : subTextColor}`
              }
            >
              {t('nav.contact')}
            </NavLink>
          </nav>

          {/* Right side */}
          <div className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
<div className="hidden lg:block">
  <LangSwitcher light={false} />
</div>
           <Link
  to="/contact"
  className="hidden lg:inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
>
              {t('nav.getStarted')}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
className="lg:hidden p-2 rounded transition-colors duration-300 text-foreground"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — always solid/white regardless of scroll position, per isSolid including menuOpen */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="px-5 py-5 flex flex-col gap-1">
            <div className="mb-3">
              <LangSwitcher mobile />
            </div>
            {[
              { to: '/', label: t('nav.home'), end: true },
              { to: '/about', label: t('nav.about'), end: false },
              { to: '/services', label: t('nav.services'), end: false },
              { to: '/services/web-development', label: `  ↳ ${t('nav.webDev')}`, end: false },
              { to: '/services/social-media', label: `  ↳ ${t('nav.socialMedia')}`, end: false },
              { to: '/services/seo', label: `  ↳ ${t('nav.seo')}`, end: false },
              { to: '/portfolio', label: t('nav.portfolio'), end: false },
              { to: '/pricing', label: t('nav.pricing'), end: false },
              { to: '/faq', label: t('nav.faq'), end: false },
              { to: '/contact', label: t('nav.contact'), end: false },
            ].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex justify-center items-center px-5 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('nav.getStarted')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}