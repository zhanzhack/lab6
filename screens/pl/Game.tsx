import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { AppRoute } from '../../App';

type Props = { setRoute: React.Dispatch<React.SetStateAction<AppRoute>> };

const STORY: Record<string, { text: string; choices: { id: string; text: string }[] }> = {
  start: {
    text: 'Stoisz na skraju ciemnego lasu. Co robisz?',
    choices: [
      { id: 'enter', text: 'Wejdź do lasu' },
      { id: 'walk', text: 'Idź wzdłuż jego krawędzi' },
    ],
  },
  enter: {
    text: 'W środku znajdujesz dziwnie świecący kamień.',
    choices: [
      { id: 'take', text: 'Zabierz kamień' },
      { id: 'leave', text: 'Zostaw go' },
    ],
  },
  walk: {
    text: 'Spotykasz wędrownego handlarza.',
    choices: [
      { id: 'talk', text: 'Porozmawiaj z nim' },
      { id: 'ignore', text: 'Zignoruj i idź dalej' },
    ],
  },
  take: { text: 'Kamień daje ci wizję. Koniec.', choices: [] },
  leave: { text: 'Odchodzisz bezpiecznie. Koniec.', choices: [] },
  talk: { text: 'Kupujesz mapę. Koniec.', choices: [] },
  ignore: { text: 'Później się gubisz. Koniec.', choices: [] },
};

export default function GamePL({ setRoute }: Props) {
  const [node, setNode] = useState('start');
  const { themeStyles } = useTheme();

  return (
    <ScrollView style={[{ padding: 20 }, themeStyles.container]}>
      <Text style={[themeStyles.title, { marginBottom: 12 }]}>{STORY[node].text}</Text>

      <View style={{ marginTop: 8 }}>
        {STORY[node].choices.length === 0 ? (
          <TouchableOpacity
            onPress={() => setRoute('welcome')}
            style={[themeStyles.button, { backgroundColor: '#2196F3', marginTop: 16 }]}
          >
            <Text style={themeStyles.buttonText}>Powrót do menu</Text>
          </TouchableOpacity>
        ) : (
          STORY[node].choices.map((c) => (
            <TouchableOpacity
              key={c.id}
              onPress={() => setNode(c.id)}
              style={[themeStyles.card, { marginBottom: 8 }]}
            >
              <Text style={themeStyles.text}>{c.text}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
}
