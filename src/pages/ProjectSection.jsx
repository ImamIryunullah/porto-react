import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import LpkniImg from '../assets/project/lpkni.png';
import pepImg from '../assets/project/pep.png';
import qmasImg from '../assets/project/qmas.png';
import Piong from '../assets/project/mikrotik.png';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'LPKNI - Lembaga Perlindungan Konsumen Indonesia',
      description: 'Front End solution with Vue JS, Node.js, MySql, Tailwind CSS dan Golang',
      image: LpkniImg,
      technologies: ['Vue.js', 'Node.js', 'MySql', 'TailwindCSS', 'Golang'],
      github: '#',
      live: 'https://lpkni.id',
      featured: true
    },
    {
      id: 2,
      title: 'PEP Mini Olympic 2025 Palembang – Sumatera Selatan',
      description: 'Full Stack Web Dev',
      image: pepImg,
      technologies: ['Vue.js', 'Golang', 'Tailwind CSS', 'MySql', 'CDN Deployment (Cloudflare, jsDelivr)'],
      github: 'https://github.com/ImamIryunullah/PEP',
      live: 'https://https://pep-miniolympics2025.com/',
      featured: true
    },
    {
      id: 3,
      title: 'Management Of Product Qmas Air Minum Malang',
      description: 'Frontend for a responsive product management system using Vue.js and TailwindCSS. Integrated Three.js for dynamic visuals and Animate.css for smooth transitions.',
      image: qmasImg,
      technologies: ['Vue.js', 'Tailwind CSS', 'Three.js', 'Animate.css', 'Node.js'],
      github: 'https://github.com/ImamIryunullah/qmas',
      live: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Mikrotik Login - Piong Sejahtera',
      description: '',
      image: Piong,
      technologies: ['Vue.js', 'Node.js', 'Tailwind CSS', 'FastAPI'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star size={16} className="mr-1" />
                    Featured
                  </span>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github} target='_blank'
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live} target='_blank'
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
