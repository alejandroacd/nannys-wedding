'use client'
import React, { useEffect, createContext, useState, useContext, ReactNode } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';

// Define the shape of the context
interface LanguageContextType {
  locale: string;
  changeLanguage: (lng: string) => void;
  t: (key: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define the provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en');

  // Translations object
  const translations: any = { en, es };

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      setLocale(savedLanguage);
    }
  }, []);

  // Function to change the language
  const changeLanguage = (lng: string) => {
    setLocale(lng);
  };

  // Function to get translations
  const t = (key: string) => {
    return translations[locale][key] || key; // Fallback to the key if translation is missing
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};