# Portfolio Template
A modern portfolio showcase template to display your projects beautifully.

## Features
- Project showcase with categories
- Responsive design
- Easy to customize

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or other package managers(yarn, pnpm)

### Installation
```bash
npm install
```

### Running the Development Server
```bash
npm run dev
```

## Building for Production
```bash
npm run build
```

## Adding New Projects
1. Create a new folder under /projects with your project name
2. Add a config.ts file with this structure:
```
export default {
  id: 'The same as project name',
  title: 'Project Title',
  description: 'Project description',
  category: 'design' | 'development' | 'other',
  images: [{
    url: '/path/to/image.jpg',
    alt: 'Image description'
  }],
  link: 'https://project-url.com' // Optional
  githubLink: 'https://github.com/URL_ADDRESS' // Optional
}
```
3. Import and add your project to `/src/data/projects.ts`:  
```
import myNewProject from '../projects/my-new-project/config';

export const projects: Project[] = [
  // ... existing projects ...
  myNewProject
].map(config => ({
  // ... existing mapping logic ...
}));
```

## Setting the website
Setting the website in `/src/data/site.ts`:
```
export enum Category {
  'all' = 'all',
  'web' = 'web',
  ...
}

const site = {
  title: 'Portfolio',
  description: 'A collection of portfolios.',
  categories: [
    { id: Category.all, label: 'All Works' },
    { id: Category.web, label: 'Web Development' },
    ...
  ]
}
```


