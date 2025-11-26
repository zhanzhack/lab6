import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { AppRoute } from '../../App';

type Props = { setRoute: React.Dispatch<React.SetStateAction<AppRoute>> };

export default function WelcomePL({ setRoute }: Props) {
  const { setLanguage } = useLanguage();
  const { setTheme, themeStyles } = useTheme();

  return (
    <View style={[styles.root, themeStyles.container, { padding: 20 }]}>
      <Text style={themeStyles.title}>Witamy w Paragrafowej Grze</Text>

      <View style={themeStyles.card}>
        <Text style={themeStyles.text}>Wybierz język:</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity onPress={() => setLanguage('pl')} style={[themeStyles.button, { backgroundColor: '#FF5722', marginRight: 8 }]}>
            <Text style={themeStyles.buttonText}>Polski</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLanguage('en')} style={[themeStyles.button, { backgroundColor: '#2196F3' }]}>
            <Text style={themeStyles.buttonText}>Angielski</Text>
          </TouchableOpacity>
        </View>

        <Text style={[themeStyles.text, { marginTop: 16 }]}>Wybierz motyw:</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity onPress={() => setTheme('light')} style={[themeStyles.button, { backgroundColor: '#8BC34A', marginRight: 8 }]}>
            <Text style={themeStyles.buttonText}>Jasny</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTheme('dark')} style={[themeStyles.button, { backgroundColor: '#607D8B' }]}>
            <Text style={themeStyles.buttonText}>Ciemny</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => setRoute('game')} style={[themeStyles.button, { backgroundColor: '#4CAF50', marginTop: 20 }]}>
          <Text style={themeStyles.buttonText}>Rozpocznij grę</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
