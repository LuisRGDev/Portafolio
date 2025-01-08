import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import { projects, skills } from './data';
import { socialLinks } from './data/social';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/80">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                With {socialLinks.experience} in software development, I specialize in building scalable web applications
                and creating exceptional digital experiences.
              </p>
              <p className="text-lg text-gray-300">
                Based in {socialLinks.location}, I'm {socialLinks.availability.toLowerCase()} and eager to take on new challenges.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Education</h3>
                <p className="text-gray-300">{socialLinks.education}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Languages</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {socialLinks.languages.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Technical Skills
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <Experience />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Let's Connect
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Interested in working together? Let's talk about your project.
          </p>
          <a
            href={`mailto:${socialLinks.email}`}
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900/80 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} {socialLinks.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;