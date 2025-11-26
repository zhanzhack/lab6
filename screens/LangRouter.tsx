import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WelcomeEN from './en/Welcome';
import GameEN from './en/Game';
import WelcomePL from './pl/Welcome';
import GamePL from './pl/Game';
import { AppRoute } from '../App';

type Props = {
  route: AppRoute;
  setRoute: React.Dispatch<React.SetStateAction<AppRoute>>;
};

export default function LangRouter({ route, setRoute }: Props) {
  const { language } = useLanguage();

  if (language === 'en') {
    return route === 'welcome' ? <WelcomeEN setRoute={setRoute} /> : <GameEN setRoute={setRoute} />;
  }
  return route === 'welcome' ? <WelcomePL setRoute={setRoute} /> : <GamePL setRoute={setRoute} />;
}
