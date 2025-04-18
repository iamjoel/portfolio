import { ProjectConfig } from '../../types';

const config: ProjectConfig = {
  id: 'creative-portfolio',
  title: 'Creative Portfolio Website',
  description: 'A modern portfolio website built with React and Framer Motion, featuring smooth animations, responsive design, and dynamic content filtering.',
  category: 'web',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      alt: 'Portfolio Website Dashboard'
    },
    {
      url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
      alt: 'Portfolio Projects View'
    },
    {
      url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800',
      alt: 'Portfolio Mobile View'
    }
  ],
  // link: '#',
  githubLink: 'https://github.com/example/portfolio',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
}

export default config;