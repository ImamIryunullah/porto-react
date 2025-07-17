import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MessageCircle, User, Briefcase, Code, Home, BookOpen, Award, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'projects', 'certificates', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#education', label: 'Education', icon: GraduationCap },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#certificates', label: 'Certificates', icon: Award },
    { href: '#patents', label: 'Patents', icon: Award },
    { href: '#skills', label: 'Skills', icon: Code },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-3 transform transition-all duration-300 hover:scale-110 ${
              scrolled ? 'shadow-lg' : 'shadow-white/20'
            }`}>
              <Code className="w-5 h-5 text-white" />
            </div>
            <h1 className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text transition-all duration-300 ${
              scrolled ? 'text-transparent' : 'text-white'
            }`}>
              Portfolio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    isActive
                      ? scrolled
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-white bg-white/20'
                      : scrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </span>
                  {isActive && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                      scrolled ? 'bg-blue-600' : 'bg-white'
                    }`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 rounded-xl transition-all duration-300 ${
                scrolled
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}
            >
              <div className="w-6 h-6 relative">
                <Menu
                  size={24}
                  className={`absolute inset-0 transform transition-all duration-300 ${
                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transform transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 py-3 bg-white/98 backdrop-blur-xl border-t border-gray-200/50 shadow-xl">
          <div className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 shadow-sm border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <div className={`p-2 rounded-lg mr-3 transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}>
                    <item.icon size={18} />
                  </div>
                  <span className="text-base">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;