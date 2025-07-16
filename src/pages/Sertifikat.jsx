import React, { useState, useEffect } from 'react';
import { ExternalLink, Award, Calendar, Building2, X, CheckCircle, Star, Trophy } from 'lucide-react';
import LearnovaImg from '../assets/sertif/learnova.png'
import CiscoImg from '../assets/sertif/cisco.png'
import CapstoneImg from '../assets/sertif/capstone.png'
import VinixImg from '../assets/sertif/vinix.png'
import MagangImg from '../assets/sertif/magang.png'
import IbluImg from '../assets/sertif/iblu.png'

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'English for IT Professionals Certification',
      issuer: 'LearnovaUM',
      date: '2022',
      image: LearnovaImg,
      description: 'has succesfully completed the course',
      credentialId: 'qJ58zXGBBj',
      skills: ['Basic Of English IT'],
      verified: true,
    },
    {
      id: 2,
      title: 'Cisco Networking Academy',
      issuer: 'Amazon Web Services',
      date: '2022',
      image: CiscoImg,
      description: 'has successfully achieved student level credential for completing IT Essentials course administered by the undersigned instructor. The student was able to proficiently',
      credentialId: '',
      skills: ['Windows operating systems.Implement basic host, data, and network security.' ],
      verified: true,
    },
    {
      id: 3,
      title: 'Technology for Society Capstone: Sistem Informasi Kelurahan Bunulrejo Malang',
      issuer: 'Malang State University',
      date: '2024',
      image: CapstoneImg,
      description: 'An integrated information system developed to support administrative services and citizen reporting for Bunulrejo Subdistrict in Malang. This project was part of the Technology for Society (TfS) program, utilizing Laravel and JavaScript to streamline letter processing and citizen data management through a digital web platform.',
      credentialId: '16.5.74/UN32.5.1/KM/2024',
      skills: ['JavaScript', 'PHP', 'Laravel', 'MySql'],
      verified: true,
    },
    {
      id: 4,
      title: 'MSIB: Junior Data Scientist Batch II',
      issuer: 'Vinix7',
      date: '2025',
      image: VinixImg,
      description: 'Successfully completed an internship at PT. Inovasi Lantera Cipta Kreasi under the Vinix7 Independent Study and Internship Program (SIB Mandiri), serving as a Junior Data Scientist in the Data Science Division.',
      credentialId: '007/Batch-II-MSIB-VINIX7/Div-DataSains',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'SQL', 'Data Visualization', 'Machine Learning'],
      verified: true,
    },
    {
      id: 5,
      title: 'Internship Certification',
      issuer: 'PT Vinix Seven Aurum',
      date: '2025',
      image: MagangImg,
      description: 'Data analysis and machine learning with Python and popular libraries. Advanced statistical analysis, data visualization, and predictive modeling techniques.',
      credentialId: '007/BATCH-II-MG/VINIX7/DIV-DATASAINS ',
      skills: ['Junior Data Scientist'],
      verified: true,
    },
    {
      id: 6,
      title: 'Certificate Of "Menciptakan Presentasi Efektif Menggunakan Power Point dengan Bantuan AI"',
      issuer: 'iBLU Academy',
      date: '2024',
      image: IbluImg,
      description: 'Actively participated in creating effective presentations using PowerPoint with the assistance of AI tools.',
      credentialId: '007/Dik-KT/II/2024',
      skills: ['PowerPoint', 'AI Tools', 'Presentation Design', 'Visual Communication', 'Public Speaking'],
      verified: true,
    },
    {
      id: 7,
      title: 'Certificate Of "Menciptakan Presentasi Efektif Menggunakan Power Point dengan Bantuan AI"',
      issuer: 'iBLU Academy',
      date: '2024',
      image: IbluImg,
      description: 'Actively participated in creating effective presentations using PowerPoint with the assistance of AI tools.',
      credentialId: '007/Dik-KT/II/2024',
      skills: ['PowerPoint', 'AI Tools', 'Presentation Design', 'Visual Communication', 'Public Speaking'],
      verified: true,
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="certificates" className="py-20 bg-slate-50 relative overflow-hidden">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-black bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional certifications and achievements that validate my expertise across various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-3 border border-gray-100 hover:border-blue-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                background: hoveredCard === cert.id ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' : 'white'
              }}
              onClick={() => openModal(cert)}
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Verified Badge */}
                {cert.verified && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <div className="text-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 mb-2">
                      <p className="text-gray-800 text-sm font-medium">Click to view details</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    ID: {cert.credentialId.split('-').pop()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn mt-16">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-slideUp">
              <div className="relative">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Badges on Image */}
                <div className="absolute top-6 left-6 flex space-x-2">
                  {selectedCertificate.verified && (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>Verified</span>
                    </div>
                  )}
                
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedCertificate.title}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-white/90">
                      <Building2 className="w-5 h-5 mr-2" />
                      <span className="font-medium">{selectedCertificate.issuer}</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{selectedCertificate.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-500">
                    Credential ID: <span className="font-mono font-medium">{selectedCertificate.credentialId}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {selectedCertificate.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    Skills & Technologies Covered
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedCertificate.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-800 text-sm rounded-lg px-4 py-2 text-center font-medium hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-800 font-medium">Certificate Verified</span>
                    </div>
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

export default CertificatesSection;