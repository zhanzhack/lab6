import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  themeStyles: ReturnType<typeof createStyles>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type Props = { children: ReactNode };

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { backgroundColor: theme === 'light' ? '#F2F3F7' : '#121212', flex: 1 },
    card: {
      backgroundColor: theme === 'light' ? '#FFFFFF' : '#1E1E1E',
      padding: 20,
      borderRadius: 16,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: theme === 'light' ? 0.1 : 0.5,
      shadowRadius: 8,
      elevation: 5,
    },
    text: { color: theme === 'light' ? '#333' : '#EEE', fontSize: 16, lineHeight: 22 },
    title: { color: theme === 'light' ? '#111' : '#EEE', fontSize: 28, fontWeight: '800', marginBottom: 12 },
    button: {
      padding: 14,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    buttonText: { color: '#FFF', fontWeight: '700', fontSize: 16 },
  });

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeStyles: createStyles(theme) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
