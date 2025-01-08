import React from 'react';
import { Terminal } from 'lucide-react';
import { socialLinks } from '../../data/social';
import TypewriterEffect from '../ui/TypewriterEffect';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            {socialLinks.name}
          </span>
        </h1>
        <TypewriterEffect phrases={socialLinks.roles} />
        <p className="text-lg text-cyan-300 mt-6 mb-8 max-w-2xl mx-auto">
          {socialLinks.shortBio}
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
        >
          Let's Work Together
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Terminal className="text-cyan-400" size={32} />
      </div>
    </div>
  );
};

export default Hero;