// src/sections/SkillsSection.jsx
import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Layers, 
  Globe, 
  Zap,
  Cpu,
  Cloud,
  GitBranch,
  Container
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: <Globe className="w-6 h-6" />, description: 'Modern UI library' },
        { name: 'Vue.js', icon: <Layers className="w-6 h-6" />, description: 'Progressive framework' },
        { name: 'TypeScript', icon: <Code className="w-6 h-6" />, description: 'Type-safe JavaScript' },
        { name: 'Tailwind CSS', icon: <Cpu className="w-6 h-6" />, description: 'Utility-first CSS' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: <Server className="w-6 h-6" />, description: 'JavaScript runtime' },
        { name: 'Python', icon: <Cpu className="w-6 h-6" />, description: 'Versatile language' },
        { name: 'PHP', icon: <Globe className="w-6 h-6" />, description: 'Web development' },
        { name: 'Express.js', icon: <Zap className="w-6 h-6" />, description: 'Fast web framework' },
        { name: 'FastAPI', icon: <Layers className="w-6 h-6" />, description: 'Modern Python API' },
      ]
    },
    {
      title: 'Database & DevOps',
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', icon: <Database className="w-6 h-6" />, description: 'NoSQL database' },
        { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, description: 'Relational database' },
        { name: 'Git', icon: <GitBranch className="w-6 h-6" />, description: 'Version control' },
        { name: 'Docker', icon: <Container className="w-6 h-6" />, description: 'Containerization' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group/skill"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white flex-shrink-0 group-hover/skill:scale-110 transition-transform duration-200`}>
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer accent */}
              <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-700 font-medium">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;