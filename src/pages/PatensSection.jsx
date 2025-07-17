import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  FileText, 
  Download, 
  Calendar, 
  Shield, 
  Eye, 
  Copyright,
  BookOpen,
  Briefcase,
  CheckCircle,
  ExternalLink,
  Clock,
  Globe
} from 'lucide-react';

const PatentsSection = () => {
  const [selectedPatent, setSelectedPatent] = useState(null);
  const [hoveredPatent, setHoveredPatent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

  // Sample data - replace with your actual patent information
  const patents = [
    {
      id: 1,
      title: 'Advanced Web Application Framework',
      description: 'A comprehensive web application framework designed for rapid development of scalable enterprise applications with built-in security features and modern architecture patterns.',
      type: 'copyright',
      registrationNumber: 'CR-2024-001',
      filingDate: '2024-12-15',
      status: 'granted',
      category: 'software',
      abstract: 'This copyright covers an innovative web application framework that integrates modern development practices with enterprise-grade security and scalability features. The framework provides developers with pre-built components, automated testing tools, and deployment pipelines.',
      claims: [
        'Automated code generation for CRUD operations',
        'Built-in authentication and authorization system',
        'Real-time data synchronization capabilities',
        'Responsive UI component library',
        'Integrated testing and deployment tools'
      ],
      technicalFields: ['Web Development', 'Software Engineering', 'Enterprise Applications'],
      inventors: ['Imam Iryunullah'],
      pdfUrl: '#', // Replace with actual PDF URL
      previewImage: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Parallel Image Processing Algorithm',
      description: 'An efficient parallel processing algorithm for image enhancement and analysis, optimized for multi-core systems with significant performance improvements over traditional methods.',
      type: 'copyright',
      registrationNumber: 'CR-2024-002',
      filingDate: '2024-11-20',
      status: 'granted',
      category: 'algorithm',
      abstract: 'This copyright protects a novel parallel processing algorithm designed specifically for image enhancement and computer vision tasks. The algorithm utilizes advanced threading techniques and memory optimization to achieve superior performance.',
      claims: [
        'Multi-threaded image processing pipeline',
        'Memory-optimized data structures',
        'Real-time edge detection algorithms',
        'Scalable architecture for various image formats',
        'Performance benchmarking tools'
      ],
      technicalFields: ['Computer Vision', 'Parallel Computing', 'Image Processing'],
      inventors: ['Imam Iryunullah'],
      pdfUrl: '#', // Replace with actual PDF URL
      previewImage: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Smart File Organization System',
      description: 'An intelligent file management system that automatically categorizes and organizes files based on content analysis, metadata, and user behavior patterns.',
      type: 'copyright',
      registrationNumber: 'CR-2024-003',
      filingDate: '2024-10-10',
      status: 'granted',
      category: 'system',
      abstract: 'This copyright covers an intelligent file organization system that uses machine learning algorithms to automatically categorize and manage digital files. The system learns from user behavior and file characteristics to optimize organization strategies.',
      claims: [
        'Machine learning-based file categorization',
        'Automated folder structure generation',
        'Duplicate file detection and removal',
        'User behavior analysis for optimization',
        'Cross-platform compatibility'
      ],
      technicalFields: ['Machine Learning', 'File Systems', 'Data Management'],
      inventors: ['Imam Iryunullah'],
      pdfUrl: '#', // Replace with actual PDF URL
      previewImage: '/api/placeholder/400/300'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Rights', icon: Globe },
    { id: 'software', name: 'Software', icon: BookOpen },
    { id: 'algorithm', name: 'Algorithms', icon: Briefcase },
    { id: 'system', name: 'Systems', icon: Shield }
  ];

  const filteredPatents = filter === 'all' 
    ? patents 
    : patents.filter(patent => patent.category === filter);

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

  const openModal = (patent) => {
    setSelectedPatent(patent);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPatent(null);
    document.body.style.overflow = 'unset';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'granted': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'patent': return Award;
      case 'copyright': return Copyright;
      default: return FileText;
    }
  };

  return (
    <section ref={sectionRef} id="patents" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Patents & Copyrights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my intellectual property portfolio showcasing innovative solutions, registered copyrights, and protected innovations in technology and software development
          </p>
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-indigo-600">{patents.length}</p>
                <p className="text-gray-600">Total Rights</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-full">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-green-600">{patents.filter(p => p.status === 'granted').length}</p>
                <p className="text-gray-600">Granted</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-purple-600">{new Date().getFullYear()}</p>
                <p className="text-gray-600">Active Year</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
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
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Patents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPatents.map((patent, index) => {
            const TypeIcon = getTypeIcon(patent.type);
            return (
              <div
                key={patent.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-indigo-200 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  background: hoveredPatent === patent.id ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' : 'white'
                }}
                onClick={() => openModal(patent)}
                onMouseEnter={() => setHoveredPatent(patent.id)}
                onMouseLeave={() => setHoveredPatent(null)}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 h-48">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TypeIcon className="w-16 h-16 text-white/80" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(patent.status)}`}>
                      {patent.status.replace('_', ' ').toUpperCase()}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {patent.type.toUpperCase()}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <div className="text-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 mb-4">
                        <p className="text-gray-800 font-medium">Click to view details</p>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-600">{formatDate(patent.filingDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-indigo-600">{patent.registrationNumber}</span>
                    <span className="text-sm text-gray-500">{patent.category.toUpperCase()}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                    {patent.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {patent.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {patent.technicalFields.slice(0, 2).map((field, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-medium hover:bg-indigo-200 transition-colors duration-200"
                      >
                        {field}
                      </span>
                    ))}
                    {patent.technicalFields.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        +{patent.technicalFields.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                      <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors duration-300 text-sm">
                        <Download className="w-4 h-4" />
                        <span>PDF</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(patent.filingDate).getFullYear()}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedPatent && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-slideUp">
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 h-80">
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 rotate-45" />
                </button>

                {/* Patent Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedPatent.status)}`}>
                      {selectedPatent.status.replace('_', ' ').toUpperCase()}
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                      {selectedPatent.type.toUpperCase()}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedPatent.title}
                  </h3>
                  
                  <div className="flex items-center space-x-6 text-white/90">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5" />
                      <span>{selectedPatent.registrationNumber}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>{formatDate(selectedPatent.filingDate)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>{selectedPatent.category.charAt(0).toUpperCase() + selectedPatent.category.slice(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Abstract</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedPatent.abstract}
                    </p>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Inventors</h4>
                    <div className="space-y-2">
                      {selectedPatent.inventors.map((inventor, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{inventor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Claims</h4>
                    <ul className="space-y-2 mb-6">
                      {selectedPatent.claims.map((claim, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{claim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Technical Fields</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedPatent.technicalFields.map((field, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-indigo-800 text-sm rounded-lg px-4 py-2 text-center font-medium hover:from-indigo-100 hover:to-purple-100 transition-colors duration-200"
                      >
                        {field}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 flex items-center space-x-2">
                      <span className="text-gray-600 text-sm">Filing Date:</span>
                      <span className="text-gray-900 font-medium text-sm">{formatDate(selectedPatent.filingDate)}</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <Eye className="w-5 h-5 mr-2" />
                      Preview
                    </button>
                    <a
                      href={selectedPatent.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download PDF
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

export default PatentsSection;