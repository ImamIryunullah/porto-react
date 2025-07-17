// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  M Imam Iryunullah
                </h3>
                <p className="text-lg text-blue-300 font-medium">Full Stack Developer</p>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Passionate about creating innovative web solutions and bringing ideas to life through code. 
                Always eager to tackle new challenges and learn emerging technologies.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Malang, East Java, Indonesia</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>your.email@example.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="group p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-5 h-5 group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="group p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="group p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-5 h-5 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Certificates', 'Skills', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services/Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'API Development', 'Database Design', 'Consulting'].map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center space-x-2 group">
                      <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                      <span>{service}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-300">
                <span>© 2025 Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>by M Imam Iryunullah</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <span className="text-sm text-gray-400">All rights reserved</span>
                <button 
                  onClick={scrollToTop}
                  className="group p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
                >
                  <ArrowUp className="w-4 h-4 text-white group-hover:animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
};

export default Footer;