import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Star, Code, Eye, Calendar, Users, Award, Zap, Globe, Database, Server, Smartphone } from 'lucide-react';
import LpkniImg from '../assets/project/lpkni.png'
import PepImg from '../assets/project/pep.png'
import QmasImg from '../assets/project/qmas.png'
import PiongImg from '../assets/project/mikrotik.png'
import UntagImg from '../assets/project/untag.png'
import GravpiksImg from '../assets/project/gravpix.png'
import OrganizerImg from '../assets/project/fileorg.png'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'LPKNI - Lembaga Perlindungan Konsumen Indonesia',
      description: 'Full-stack consumer protection platform with modern Vue.js frontend, robust Node.js backend, and comprehensive MySQL database integration. Features real-time notifications, advanced search capabilities, and responsive design.',
      image: LpkniImg,
      technologies: ['Vue.js', 'Node.js', 'MySql', 'TailwindCSS', 'Golang', 'Docker'],
      github: '#',
      live: 'https://lpkni.id',
      featured: true,
      category: 'fullstack',
      
      year: '2024',
      team: 4,
      duration: '6 months',
      highlights: ['Real-time notifications', 'Advanced search', 'Admin dashboard', 'Mobile responsive']
    },
    {
      id: 2,
      title: 'PEP Mini Olympic 2025 Palembang',
      description: 'Complete event management system for Olympic games with participant registration, live scoring, event scheduling, and real-time updates. Built with scalable architecture and CDN deployment.',
      image: PepImg,
      technologies: ['Vue.js', 'Golang', 'Tailwind CSS', 'MySql', 'CDN Deployment', 'Docker'],
      github: 'https://github.com/ImamIryunullah/PEP',
      live: 'https://pep-miniolympics2025.com/',
      featured: true,
      category: 'fullstack',
      
      year: '2024',
      team: 3,
      duration: '4 months',
      highlights: ['Event management', 'Live scoring', 'Registration system', 'Real-time updates']
    },
    {
      id: 3,
      title: 'Management Of Product Qmas Air Minum Malang',
      description: 'Sophisticated product management system with 3D visualizations, smooth animations, and comprehensive inventory tracking. Features advanced filtering, reporting, and analytics dashboard.',
      image: QmasImg,
      technologies: ['Vue.js', 'Tailwind CSS', 'Three.js', 'Animate.css', 'Node.js'],
      github: 'https://github.com/ImamIryunullah/qmas',
      live: '#',
      featured: true,
      category: 'frontend',
      
      year: '2024',
      team: 2,
      duration: '3 months',
      highlights: ['3D visualizations', 'Inventory tracking', 'Analytics dashboard', 'Real-time updates']
    },
    {
      id: 4,
      title: 'Mikrotik Login - Piong Sejahtera',
      description: 'Secure authentication system for Mikrotik router with modern UI/UX design, session management, and network monitoring capabilities. Built with performance optimization in mind.',
      image: PiongImg,
      technologies: ['Vue.js', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/ImamIryunullah/mikrotik',
      live: '#',
      featured: false,
      category: 'frontend',
      
      year: '2023',
      team: 1,
      duration: '2 months',
      highlights: ['Secure authentication', 'Session management', 'Network monitoring', 'Performance optimized']
    },
    {
      id: 5,
      title: 'Treasure Hunt - UNTAG',
      description: 'Interactive treasure hunt application with GPS tracking, real-time quiz system, leaderboards, and team collaboration features. Currently in active development with exciting new features.',
      image: UntagImg,
      technologies: ['Vue.js', 'Node.js', 'Golang', 'Tailwind CSS', 'MySQL', 'Docker'],
      github: '#',
      live: '#',
      featured: true,
      category: 'fullstack',
      year: '2024',
      team: 3,
      duration: '4 months',
      highlights: ['GPS tracking', 'Real-time quiz', 'Leaderboards', 'Team collaboration']
    },
    {
      id: 6,
      title: 'Parallel Image Processing - Gravpix',
      description: 'High-performance image processing tool utilizing parallel computing for grayscale conversion and edge detection. Optimized for speed and efficiency with advanced algorithms.',
      image: GravpiksImg,
      technologies: ['Python'],
      github: 'https://github.com/ImamIryunullah/Parallel-Image-Processing-',
      live: '#',
      featured: false,
      category: 'backend',
      
      year: '2023',
      team: 1,
      duration: '1 month',
      highlights: ['Parallel computing', 'Edge detection', 'Performance optimized', 'Advanced algorithms']
    },
    {
      id: 7,
      title: 'File Organizer',
      description: 'Intelligent file organization system that automatically categorizes and sorts files based on type, date, and custom rules. Features batch processing and smart folder creation.',
      image: OrganizerImg,
      technologies: ['Python'],
      github: 'https://github.com/ImamIryunullah/file-organizer-sederhana',
      live: '#',
      featured: false,
      category: 'backend',
      year: '2023',
      team: 1,
      duration: '2 weeks',
      highlights: ['Auto categorization', 'Batch processing', 'Smart sorting', 'Custom rules']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'fullstack', name: 'Full Stack', icon: Server },
    { id: 'frontend', name: 'Frontend', icon: Smartphone },
    { id: 'backend', name: 'Backend', icon: Database }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };


  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects that showcase technical expertise, creative problem-solving, and modern development practices
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-blue-200 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                background: hoveredProject === project.id ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' : 'white'
              }}
              onClick={() => openModal(project)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {project.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <div className="text-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 mb-4">
                      <p className="text-gray-800 font-medium">Click to view details</p>
                    </div>
                    <div className="flex space-x-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-600">{project.team} team</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-600">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600">{project.category.toUpperCase()}</span>
                  <span className="text-sm text-gray-500">{project.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 text-sm">
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{project.team}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn mt-16">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-slideUp">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 rotate-45" />
                </button>

                {/* Project Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {selectedProject.featured && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Featured</span>
                      </div>
                    )}
                  
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="flex items-center space-x-6 text-white/90">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>{selectedProject.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>{selectedProject.team} team members</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5" />
                      <span>{selectedProject.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Project Description</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-800 text-sm rounded-lg px-4 py-2 text-center font-medium hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 flex items-center space-x-2">
                      <span className="text-gray-600 text-sm">Category:</span>
                      <span className="text-gray-900 font-medium text-sm capitalize">{selectedProject.category}</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;