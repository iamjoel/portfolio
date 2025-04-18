import { ProjectConfig } from '../../types';

const config: ProjectConfig = {
  id: 'weather-forecast',
  title: 'Weather Forecast App',
  description: 'A modern weather application providing real-time forecasts, radar maps, and detailed weather data visualization.',
  category: 'web',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800',
      alt: 'Weather Forecast Dashboard'
    }
  ],
  technologies: ['React', 'TypeScript', 'OpenWeather API', 'D3.js', 'Tailwind CSS']
}

export default config;