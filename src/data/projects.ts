import { Project } from '../types';
import project1 from '../projects/creative-portfolio/config';
import project2 from '../projects/ecommerce-dashboard/config';
import project3 from '../projects/social-media-platform/config';
import project4 from '../projects/learning-management/config';
import project5 from '../projects/weather-forecast/config';
import project6 from '../projects/fitness-tracking/config';
import project7 from '../projects/food-delivery/config';
import project8 from '../projects/travel-companion/config';
import project9 from '../projects/finance-manager/config';
import project10 from '../projects/language-learning/config';
import project11 from '../projects/brand-identity/config';
import project12 from '../projects/product-packaging/config';
import project13 from '../projects/editorial-magazine/config';
import project14 from '../projects/design-system/config';
import project15 from '../projects/motion-graphics/config';

export const projects: Project[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
].map(config => ({
  id: config.id,
  title: config.title,
  description: config.description,
  category: config.category,
  imageUrl: config.images?.[0]?.url || '',
  link: config.link || '#'
}));