import { ProjectConfig } from '../../types';

const config: ProjectConfig = {
  id: 'learning-management',
  title: 'Learning Management System',
  description: 'An educational platform for online courses, featuring video lectures, quizzes, and progress tracking.',
  category: 'web',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
      alt: 'Learning Platform Dashboard'
    }
  ],
  technologies: ['React', 'Express.js', 'PostgreSQL', 'AWS', 'Tailwind CSS']
}

export default config;