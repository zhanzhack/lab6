import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: 'en' | 'pl';
  setLanguage: React.Dispatch<React.SetStateAction<'en' | 'pl'>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type Props = { children: ReactNode };

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<'en' | 'pl'>('en');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
