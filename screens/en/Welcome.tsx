import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { AppRoute } from '../../App';

type Props = { setRoute: React.Dispatch<React.SetStateAction<AppRoute>> };

export default function WelcomeEN({ setRoute }: Props) {
  const { setLanguage } = useLanguage();
  const { setTheme, themeStyles } = useTheme();

  return (
    <View style={[styles.root, themeStyles.container, { padding: 20 }]}>
      <Text style={themeStyles.title}>Welcome to Paragraph Fantasy</Text>

      <View style={themeStyles.card}>
        <Text style={themeStyles.text}>Choose language:</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity onPress={() => setLanguage('en')} style={[themeStyles.button, { backgroundColor: '#2196F3', marginRight: 8 }]}>
            <Text style={themeStyles.buttonText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLanguage('pl')} style={[themeStyles.button, { backgroundColor: '#FF5722' }]}>
            <Text style={themeStyles.buttonText}>Polish</Text>
          </TouchableOpacity>
        </View>

        <Text style={[themeStyles.text, { marginTop: 16 }]}>Choose theme:</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity onPress={() => setTheme('light')} style={[themeStyles.button, { backgroundColor: '#8BC34A', marginRight: 8 }]}>
            <Text style={themeStyles.buttonText}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTheme('dark')} style={[themeStyles.button, { backgroundColor: '#607D8B' }]}>
            <Text style={themeStyles.buttonText}>Dark</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => setRoute('game')} style={[themeStyles.button, { backgroundColor: '#4CAF50', marginTop: 20 }]}>
          <Text style={themeStyles.buttonText}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
