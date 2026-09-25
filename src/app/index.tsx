import { FlatList, StyleSheet, Text } from 'react-native';

import { Card } from '../components/Card';
import { CARDS } from '../data/cards';

export default function HomeScreen() {
  return (
    <FlatList
      data={CARDS}
      keyExtractor={(card) => card.id}
      renderItem={({ item }) => <Card card={item} />}
      ListHeaderComponent={<Text style={styles.heading}>testing</Text>}
      contentContainerStyle={styles.list}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  list: {
    padding: 16,
    gap: 12,
  },
  heading: {
    fontSize: 15,
    color: '#666',
    marginBottom: 4,
  },
});
