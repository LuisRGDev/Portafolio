import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="group relative bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-gray-700 text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;