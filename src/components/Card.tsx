import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { CardItem } from '../data/cards';

export function Card({ card }: { card: CardItem }) {
  return (
    <Link href={{ pathname: '/card/[id]', params: { id: card.id } }} asChild>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Open ${card.title}`}
        testID={`card-${card.id}`}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      >
        <View style={[styles.swatch, { backgroundColor: card.color }]} />
        <View style={styles.text}>
          <Text style={styles.title}>{card.title}</Text>
          <Text style={styles.subtitle}>{card.subtitle}</Text>
        </View>
        <Text style={styles.chevron}>›</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  pressed: {
    opacity: 0.7,
  },
  swatch: {
    width: 44,
    height: 44,
    borderRadius: 10,
  },
  text: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
  },
  subtitle: {
    marginTop: 2,
    fontSize: 14,
    color: '#666',
  },
  chevron: {
    fontSize: 26,
    color: '#bbb',
  },
});
