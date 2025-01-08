import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../../data/social';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          {socialLinks.name}
        </a>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <Github size={20} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${socialLinks.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;