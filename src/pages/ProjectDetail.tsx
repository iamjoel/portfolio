import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { ProjectConfig } from '../types';
import { Github, Link as LinkIcon, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectConfig | null>(null);
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjectData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load the config and description
        const configModule = await import(`../projects/${id}/config.ts`);
        const description = await import(`../projects/${id}/description.md?raw`);

        setProject(configModule.default);
        setMarkdown(description.default);
      } catch (error) {
        console.error('Failed to load project data:', error);
        setError('Project not found');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProjectData();
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <Link
        className='z-10 absolute top-2 left-2 hidden md:flex w-8 h-8 bg-black items-center justify-center rounded-full cursor-pointer'
        to='/'
      >
        <Home className="w-4 h-4 text-white" />
      </Link>
      {project.images && project.images.length > 0 && (
        <ProjectCarousel images={project.images} />
      )}

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="md:flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <div className="mt-2 md:mt-0 flex space-x-1.5">
              {project.githubLink && (
                <Button
                  size='icon'
                  title='Github'
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
              )}
              {project.link && (
                <Button
                  variant="outline"
                  size='icon'
                  title='项目预览地址'
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <LinkIcon className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </motion.div>
  );
};