// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import ProjectSection from './pages/ProjectSection';
import SkillSection from './pages/SkillSection';
import ContactSection from './pages/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
