import { ProjectConfig } from '../../types';

const config: ProjectConfig = {
  id: 'social-media-platform',
  title: 'Social Media Platform',
  description: 'A modern social networking platform with real-time messaging, post sharing, and community features.',
  category: 'web',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      alt: 'Social Media Platform Interface'
    }
  ],
  technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS']
}

export default config;