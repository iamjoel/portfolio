import { ProjectConfig } from '../../types';

const config: ProjectConfig = {
  id: 'travel-companion',
  title: 'Travel Companion App',
  description: 'An all-in-one travel companion app for trip planning, itinerary management, and local discoveries.',
  category: 'mobile',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
      alt: 'Travel App Interface'
    }
  ],
  technologies: ['React Native', 'TypeScript', 'GraphQL', 'AWS Amplify', 'MapBox']
}

export default config;