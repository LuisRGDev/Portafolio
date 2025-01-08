import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Led development of enterprise-scale applications, mentored junior developers, and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "AWS", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects, improved application performance by 40%.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"]
  },
  {
    title: "Frontend Developer",
    company: "WebCraft Agency",
    period: "2017 - 2019",
    description: "Created responsive web applications and implemented modern UI/UX practices.",
    technologies: ["React", "TypeScript", "SASS", "Jest"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/60">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Professional Experience
          </span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300">{exp.title}</h3>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Briefcase size={16} />
                    {exp.company}
                  </p>
                </div>
                <p className="text-gray-400 flex items-center gap-2">
                  <Calendar size={16} />
                  {exp.period}
                </p>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-gray-700 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;