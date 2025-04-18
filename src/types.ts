export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface ProjectConfig {
  id: string;
  title: string;
  description: string;
  category: string;
  images?: ProjectImage[];
  link?: string;
  githubLink?: string;
  technologies: string[];
}

export type Category = 'all' | 'web' | 'mobile' | 'design';