import React, { useState, useEffect } from 'react';
import { ChevronDown, User, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';
import FotoProfile from '../assets/profile/foto.jpeg'

// SVG Logo Components
const ReactLogo = ({ size = 40, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <g stroke="#61DAFB" strokeWidth="0.5" fill="none">
      <ellipse cx="12" cy="12" rx="11" ry="4.2" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
    </g>
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);

const JSLogo = ({ size = 40, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#F7DF1E">
    <rect width="24" height="24" rx="2" fill="#F7DF1E" />
    <path d="M7.5 15.5c0 1.5-1 2.5-2.5 2.5S2.5 17 2.5 15.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5zM16.5 15.5c0 1.5-1 2.5-2.5 2.5s-2.5-1-2.5-2.5 1-2.5 2.5-2.5 2.5 1 2.5 2.5z" fill="#000" />
  </svg>
);

const NodeLogo = ({ size = 40, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#68A063">
    <path d="M12 2l10 6v8l-10 6-10-6V8z" stroke="#68A063" strokeWidth="1" fill="none" />
    <circle cx="12" cy="12" r="3" fill="#68A063" />
  </svg>
);

const GoLogo = ({ size = 40, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#00ADD8">
    <path d="M6 9h12v6H6z" fill="#00ADD8" />
    <path d="M4 11h2v2H4zM18 11h2v2h-2z" fill="#00ADD8" />
  </svg>
);

const PythonLogo = ({ size = 40, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#3776AB">
    <path d="M12 2C8 2 6 4 6 8v2h6v1H4c-1 0-2 1-2 2v2c0 1 1 2 2 2h2v-2c0-2 2-4 4-4h6c1 0 2-1 2-2V8c0-4-2-6-6-6z" fill="#3776AB" />
    <path d="M12 22c4 0 6-2 6-6v-2h-6v-1h8c1 0 2-1 2-2v-2c0-1-1-2-2-2h-2v2c0 2-2 4-4 4H8c-1 0-2 1-2 2v1c0 4 2 6 6 6z" fill="#FFD43B" />
  </svg>
);

const DockerLogo = ({ size = 40, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#2496ED">
    <rect x="2" y="8" width="20" height="8" rx="1" fill="#2496ED" />
    <rect x="6" y="10" width="2" height="4" fill="white" />
    <rect x="10" y="10" width="2" height="4" fill="white" />
    <rect x="14" y="10" width="2" height="4" fill="white" />
  </svg>
);

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const codingLogos = [
    { Component: ReactLogo, name: "React", color: "#61DAFB" },
    { Component: JSLogo, name: "JavaScript", color: "#F7DF1E" },
    { Component: NodeLogo, name: "Node.js", color: "#68A063" },
    { Component: GoLogo, name: "Golang", color: "#00ADD8" },
    { Component: PythonLogo, name: "Python", color: "#3776AB" },
    { Component: DockerLogo, name: "Docker", color: "#2496ED" }
  ];

  const OrbitingLogo = ({ logo, index, total, radius = 300, duration = 20 }) => {
    const angle = (index / total) * 360;
    const animationDelay = (index / total) * duration;

    return (
      <div
        className="absolute opacity-30 hover:opacity-80 transition-opacity duration-300"
        style={{
          animation: `orbit ${duration}s linear infinite`,
          animationDelay: `-${animationDelay}s`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="absolute hover:scale-125 transition-transform duration-300"
          style={{
            width: `${radius}px`,
            height: `${radius}px`,
            transform: `rotate(${angle}deg)`,
          }}
        >
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translateX(-50%) translateY(-50%) rotate(-${angle}deg)`,
            }}
          >
            <logo.Component size={45} className="drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300" />
          </div>
        </div>
      </div>
    );
  };

  const texts = ['Full Stack Web Developer', 'Golang Enthusiast', 'Digital Innovator', 'Problem Solver'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingElement = ({ delay, duration, size, opacity }) => (
    <div
      className={`absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-sm animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: opacity,
      }}
    />
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16">

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />

      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <FloatingElement
            key={i}
            delay={i * 0.2}
            duration={4 + Math.random() * 3}
            size={50 + Math.random() * 100}
            opacity={0.1 + Math.random() * 0.2}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {codingLogos.map((logo, index) => (
          <OrbitingLogo
            key={logo.name}
            logo={logo}
            index={index}
            total={codingLogos.length}
            radius={280}
            duration={25}
          />
        ))}
      </div>
      <div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
        }}
      />

      <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="mb-8">
          <div className="relative group">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1 group">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center relative overflow-hidden">

                <img
                  src={FotoProfile}
                  alt="Foto Profil"
                  className="w-full h-full object-cover rounded-full"
                />
              
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              M Imam Iryunullah
            </span>
          </h1>

          <div className="relative h-12 mb-6 overflow-hidden">
            <p className="text-2xl md:text-3xl text-blue-300 font-semibold absolute w-full transition-all duration-500 transform">
              <span className="inline-block animate-pulse bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {texts[currentText]}
              </span>
            </p>
          </div>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Passionate developer creating
            <span className="text-blue-400 font-semibold"> amazing digital experiences </span>
            with modern technologies and innovative solutions
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {[
            { icon: Github, href: "#", color: "hover:text-gray-400" },
            { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
            { icon: Mail, href: "#", color: "hover:text-red-400" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color} transform hover:rotate-12`}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-12">
          <a
            href="#projects"
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={20} />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#certificates"
            className="group relative bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={20} />
              View My CV
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="group relative border-2 border-white/50 text-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:bg-white overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
        </div>

        <div className="relative">
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-white/70 hover:text-white transition-colors duration-300" />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;