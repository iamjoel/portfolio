import { ProjectConfig } from '../../types';

const config: ProjectConfig = {
  id: 'food-delivery',
  title: 'Food Delivery Platform',
  description: 'A mobile-first food delivery platform connecting users with local restaurants and real-time order tracking.',
  category: 'mobile',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
      alt: 'Food Delivery App'
    }
  ],
  technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe']
}

export default config;