// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-4">
              Thank you for visiting my portfolio. Let's create something amazing together!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="#certificates" className="text-gray-300 hover:text-white transition-colors duration-300">Certificates</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Portfolio. All rights reserved. M Imam Iryunullah
          </p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
