import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations } from './translations';

export type Lang = 'en' | 'fr' | 'ar';

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
  dir: 'ltr' | 'rtl';
}

const Context = createContext<LanguageCtx>(null!);

function getVal(obj: Record<string, unknown>, path: string): string {
  const result = path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[key];
    return undefined;
  }, obj);
  return typeof result === 'string' ? result : path;
}

function getStored(): Lang {
  const v = localStorage.getItem('mp_lang');
  if (v === 'en' || v === 'fr' || v === 'ar') return v;
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getStored);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('mp_lang', l);
  };

  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  const t = (path: string) => getVal(translations[lang] as Record<string, unknown>, path);

  return <Context.Provider value={{ lang, setLang, t, dir }}>{children}</Context.Provider>;
}

export const useLanguage = () => useContext(Context);
