export type CardItem = {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  color: string;
};

export const CARDS: CardItem[] = [
  {
    id: 'mountains',
    title: 'Mountains',
    subtitle: 'Peaks and trails',
    body: 'High-altitude hikes, alpine lakes, and routes worth the climb.',
    color: '#4F7CAC',
  },
  {
    id: 'ocean',
    title: 'Ocean',
    subtitle: 'Coasts and reefs',
    body: 'Beaches, tide pools, and the best spots to watch the sunset.',
    color: '#2A9D8F',
  },
  {
    id: 'forest',
    title: 'Forest',
    subtitle: 'Woods and wildlife',
    body: 'Quiet trails under old-growth canopy and the creatures that live there.',
    color: '#588157',
  },
  {
    id: 'desert',
    title: 'Desert',
    subtitle: 'Dunes and canyons',
    body: 'Sandstone arches, slot canyons, and clear night skies.',
    color: '#E76F51',
  },
];

export function getCard(id: string): CardItem | undefined {
  return CARDS.find((card) => card.id === id);
}
