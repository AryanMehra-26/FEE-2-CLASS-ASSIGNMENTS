function makeProductImage(emoji) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><text x="60" y="82" text-anchor="middle" font-size="64">${emoji}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 2499,
    emoji: '🎧',
    image: makeProductImage('🎧'),
    description: 'Comfortable headphones for music and calls.'
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 3299,
    emoji: '⌚',
    image: makeProductImage('⌚'),
    description: 'A simple watch for everyday activity tracking.'
  },
  {
    id: 3,
    name: 'Everyday Backpack',
    category: 'Accessories',
    price: 1299,
    emoji: '🎒',
    image: makeProductImage('🎒'),
    description: 'A lightweight backpack for college and travel.'
  },
  {
    id: 4,
    name: 'Coffee Mug',
    category: 'Home',
    price: 299,
    emoji: '☕',
    image: makeProductImage('☕'),
    description: 'A sturdy mug for your morning coffee or tea.'
  },
  {
    id: 5,
    name: 'Desk Lamp',
    category: 'Home',
    price: 899,
    emoji: '💡',
    image: makeProductImage('💡'),
    description: 'A compact light for your study desk.'
  },
  {
    id: 6,
    name: 'Classic Sunglasses',
    category: 'Accessories',
    price: 799,
    emoji: '🕶️',
    image: makeProductImage('🕶️'),
    description: 'Simple, everyday sunglasses with a classic look.'
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 1599,
    emoji: '🔊',
    image: makeProductImage('🔊'),
    description: 'A portable speaker for music at home or outdoors.'
  },
  {
    id: 8,
    name: 'Reusable Water Bottle',
    category: 'Accessories',
    price: 499,
    emoji: '🧴',
    image: makeProductImage('🧴'),
    description: 'A reusable bottle for classes, workouts, and trips.'
  }
];

export default products;
