import { ProjectConfig } from '../../types';

const config: ProjectConfig = {
  id: 'language-learning',
  title: 'Language Learning App',
  description: 'An interactive language learning platform with speech recognition and personalized lessons.',
  category: 'mobile',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
      alt: 'Language Learning Interface'
    }
  ],
  technologies: ['React Native', 'TypeScript', 'TensorFlow.js', 'Firebase', 'Web Speech API']
}

export default config;