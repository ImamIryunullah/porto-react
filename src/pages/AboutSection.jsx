import React, { useState, useEffect, useRef } from 'react';
import { Code } from 'lucide-react';

const AboutSection = () => {

  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 mb-4">
                With over 3 years of experience in web development, I've worked with various technologies
                and frameworks to build scalable and user-friendly applications.
              </p>
              <p className="text-gray-600">
                I'm constantly learning and adapting to new technologies, always striving to improve
                my skills and deliver the best possible solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>
                    Frontend Development using modern frameworks like <strong>React</strong> and <strong>Vue.js</strong>, with a focus on performance and responsive design.
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>
                    Backend Development with <strong>Laravel (PHP)</strong>, <strong>Node.js</strong>, <strong>Golang</strong>, and <strong>Python</strong> to build scalable RESTful APIs and robust server-side logic.
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>
                    Database Design & Management using <strong>MySQL</strong>, <strong>PostgreSQL</strong>, and <strong>MongoDB</strong> — ensuring efficient data structures and optimized queries.
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>
                    UI/UX Design & Prototyping with a user-first mindset using tools like <strong>Figma</strong> and <strong>Adobe XD</strong>, delivering intuitive and engaging interfaces.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
