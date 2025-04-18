import { ProjectConfig } from '../../types';

const config: ProjectConfig = {
  id: 'finance-manager',
  title: 'Personal Finance Manager',
  description: 'A mobile application for managing personal finances, budgeting, and investment tracking.',
  category: 'mobile',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
      alt: 'Finance App Dashboard'
    }
  ],
  technologies: ['React Native', 'Redux', 'Firebase', 'Plaid API', 'Victory Charts']
}

export default config;