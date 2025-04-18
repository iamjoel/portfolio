import { ProjectConfig } from '../../types';

const config: ProjectConfig = {
  id: 'fitness-tracking',
  title: 'Fitness Tracking App',
  description: 'A comprehensive fitness tracking application for monitoring workouts, nutrition, and health metrics.',
  category: 'mobile',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800',
      alt: 'Fitness App Interface'
    }
  ],
  technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'HealthKit']
}

export default config;