import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Code, Database, Globe, ChevronRight, Star, Trophy, Target } from 'lucide-react';

const EducationTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeTab] = useState('academic');
  const observerRef = useRef(null);

  const academicEducation = [
    {
      id: 1,
      institution: 'Universitas Negeri Malang',
      degree: 'Bachelor of Engineering',
      field: 'Informatics Engineering',
      period: '2022 - 2026',
      location: 'Malang, East Java',
      gpa: '3.75/4.00',
      status: 'Graduated',
      description: 'Specialized in fullstack web dev. Completed more 15+ projects.',
      achievements: [
        'Capstone Project: Information System for Bunulrejo Subdistrict',
        'Technology for Society (TfS) Program Participant',
        'Dean\'s List for 3 consecutive semesters',
        'Outstanding Student in Database Management Course'
      ],
      skills: ['JavaScript', 'PHP', 'Laravel', 'MySQL', 'Python', 'Data Structures', 'Algorithms', 'Software Engineering'],
      color: 'blue'
    },
    {
      id: 2,
      institution: '',
      degree: 'Internship at Universiti Teknikal Malaysia Melaka',
      field: 'Student Mobility Programme focused on Web Developing',
      period: '2024 - 2025',
      location: 'Melaka, Malaysia',
      gpa: '80/100',
      status: 'Graduated',
      description: 'Focused on mathematics, physics, and computer science. Developed early interest in programming and technology.',
      achievements: [
        'Top 3 of graduating class',
        'Regional Mathematics Olympiad Participant',
      ],
      skills: ['Laravel', 'PHP', 'Problem Solving', 'Leadership'],
      color: 'green'
    },
    {
      id: 3,
      institution: 'SMA Negeri 1 Kota Bima',
      degree: 'High School Diploma',
      field: 'Science (Mathematics and Natural Sciences)',
      period: '2019 - 2022',
      location: 'Kota Bima, West Nusa Tenggara',
      gpa: '95.5/100',
      status: 'Graduated',
      description: 'Focused on mathematics, physics, and computer science. Developed early interest in programming and technology.',
      achievements: [
        'Top 3 of graduating class',
        'Regional Mathematics Olympiad Participant',
      ],
      skills: ['Mathematics', 'Physics', 'Basic Programming', 'Problem Solving', 'Leadership'],
      color: 'yellow'
    }
  ];

  const currentEducation = activeTab === 'academic' ? academicEducation : professionalEducation;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-id]');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => {
          observerRef.current.unobserve(el);
        });
      }
    };
  }, [activeTab]);

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500 border-blue-200 text-blue-800',
      green: 'bg-green-500 border-green-200 text-green-800',
      purple: 'bg-purple-500 border-purple-200 text-purple-800',
      orange: 'bg-orange-500 border-orange-200 text-orange-800',
      teal: 'bg-teal-500 border-teal-200 text-teal-800'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Educational Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive timeline of my academic achievements and professional development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 rounded-full shadow-lg"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {currentEducation.map((item, index) => (
              <div
                key={item.id}
                data-id={item.id}
                className={`relative flex items-center transition-all duration-1000 ${
                  visibleItems.has(item.id.toString())
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${getColorClasses(item.color).split(' ')[0]} rounded-full border-4 border-white shadow-lg z-10 transition-all duration-500 hover:scale-125`}></div>
                
                {/* Content Card */}
                <div className={`w-full ${index % 2 === 0 ? 'pr-1/2 mr-8' : 'pl-1/2 ml-8'}`}>
                  <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 p-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                    index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                        <div className="flex items-center text-blue-600 mb-2">
                          <BookOpen className="w-5 h-5 mr-2" />
                          <span className="font-semibold">{item.institution}</span>
                        </div>
                        <p className="text-gray-600 font-medium">{item.field}</p>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                        item.status === 'Graduated' || item.status === 'Completed' || item.status === 'Certified'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                        <span className="font-medium">{item.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-3 text-red-500" />
                        <span>{item.location}</span>
                      </div>
                      {item.gpa && (
                        <div className="flex items-center text-gray-600">
                          <Star className="w-5 h-5 mr-3 text-yellow-500" />
                          <span className="font-medium">GPA: {item.gpa}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-2">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-purple-500" />
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm font-medium border ${
                              getColorClasses(item.color).split(' ').slice(1).join(' ')
                            } bg-opacity-10 hover:bg-opacity-20 transition-all duration-200`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;