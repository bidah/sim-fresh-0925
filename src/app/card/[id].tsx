import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { getCard } from '../../data/cards';

export default function CardDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const card = getCard(id);

  if (!card) {
    return (
      <View style={styles.missing}>
        <Stack.Screen options={{ title: 'Not found' }} />
        <Text style={styles.body}>No card with id “{id}”.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <Stack.Screen options={{ title: card.title }} />
      <View style={[styles.hero, { backgroundColor: card.color }]}>
        <Text style={styles.heroTitle}>{card.title}</Text>
        <Text style={styles.heroSubtitle}>{card.subtitle}</Text>
      </View>
      <Text style={styles.body}>{card.body}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    margin: 16,
    padding: 24,
    borderRadius: 18,
    minHeight: 160,
    justifyContent: 'flex-end',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  heroSubtitle: {
    marginTop: 4,
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
  },
  body: {
    marginHorizontal: 16,
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  missing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
