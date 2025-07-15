// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MessageCircle, User, Briefcase, Code } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: User },
    { href: '#about', label: 'About', icon: User },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#skills', label: 'Skills', icon: Code },
    { href: '#contact', label: 'Contact', icon: MessageCircle },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>Portfolio</h1>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={`px-3 py-2 text-sm font-medium hover:scale-105 rounded-md transition-all duration-300 ${
                scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-md ${
              scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200 hover:bg-white/10'
            }`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 bg-white/95 backdrop-blur-md shadow-lg">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              <item.icon className="inline mr-2" size={20} />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
