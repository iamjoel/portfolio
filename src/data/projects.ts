import { Project } from '../types';
import creativePortfolio from '../projects/creative-portfolio/config';
import ecommerceDashboard from '../projects/ecommerce-dashboard/config';
import socialMediaPlatform from '../projects/social-media-platform/config';
import learningManagement from '../projects/learning-management/config';
import weatherForecast from '../projects/weather-forecast/config';
import fitnessTracking from '../projects/fitness-tracking/config';
import foodDelivery from '../projects/food-delivery/config';
import travelCompanion from '../projects/travel-companion/config';
import financeManager from '../projects/finance-manager/config';
import languageLearning from '../projects/language-learning/config';
import brandIdentity from '../projects/brand-identity/config';
import productPackaging from '../projects/product-packaging/config';
import editorialMagazine from '../projects/editorial-magazine/config';
import designSystem from '../projects/design-system/config';
import motionGraphics from '../projects/motion-graphics/config';

export const projects: Project[] = [
  creativePortfolio,
  ecommerceDashboard,
  socialMediaPlatform,
  learningManagement,
  weatherForecast,
  fitnessTracking,
  foodDelivery,
  travelCompanion,
  financeManager,
  languageLearning,
  brandIdentity,
  productPackaging,
  editorialMagazine,
  designSystem,
  motionGraphics,
].map(config => ({
  id: config.id,
  title: config.title,
  description: config.description,
  category: config.category,
  imageUrl: config.images?.[0]?.url || '',
  link: config.link || '#'
}));