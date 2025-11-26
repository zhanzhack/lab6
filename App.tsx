import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import LangRouter from './screens/LangRouter';

export type AppRoute = 'welcome' | 'game';

export default function App() {
  const [route, setRoute] = useState<AppRoute>('welcome');

  return (
    <ThemeProvider>
      <LanguageProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AppContent route={route} setRoute={setRoute} />
        </SafeAreaView>
      </LanguageProvider>
    </ThemeProvider>
  );
}

type AppContentProps = {
  route: AppRoute;
  setRoute: React.Dispatch<React.SetStateAction<AppRoute>>;
};

function AppContent({ route, setRoute }: AppContentProps) {
  const { themeStyles } = useTheme();

  return (
    <View style={[styles.container, themeStyles.container]}>
      <LangRouter route={route} setRoute={setRoute} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
