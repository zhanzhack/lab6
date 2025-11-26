import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { AppRoute } from '../../App';

type Props = { setRoute: React.Dispatch<React.SetStateAction<AppRoute>> };

const STORY: Record<string, { text: string; choices: { id: string; text: string }[] }> = {
  start: {
    text: 'You are standing at the edge of a dark forest. What will you do?',
    choices: [
      { id: 'enter', text: 'Enter the forest' },
      { id: 'walk', text: 'Walk along the border' },
    ],
  },
  enter: {
    text: 'Inside the forest you find a strange glowing stone.',
    choices: [
      { id: 'take', text: 'Take the stone' },
      { id: 'leave', text: 'Leave it' },
    ],
  },
  walk: {
    text: 'Walking along, you meet a wandering merchant.',
    choices: [
      { id: 'talk', text: 'Talk to him' },
      { id: 'ignore', text: 'Ignore and move on' },
    ],
  },
  take: { text: 'The stone grants you a vision. The End.', choices: [] },
  leave: { text: 'You walk away safe. The End.', choices: [] },
  talk: { text: 'He sells you a map. The End.', choices: [] },
  ignore: { text: 'You get lost later. The End.', choices: [] },
};

export default function GameEN({ setRoute }: Props) {
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
            <Text style={themeStyles.buttonText}>Back to menu</Text>
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
