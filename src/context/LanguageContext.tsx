'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';
import { translations } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('hi'); // Default to Hindi as per UP local context, toggleable to English

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kailash_dairy_lang') as Language;
      if (saved === 'en' || saved === 'hi') {
        setLanguageState(saved);
      }
    } catch {
      // localStorage may fail in restricted mode
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('kailash_dairy_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'hi' : 'en';
    setLanguage(next);
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

