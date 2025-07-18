// ContactSection.jsx
import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import useWeb3Forms from '@web3forms/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const accessKey = import.meta.env.VITE_WEB3FORM_KEY;
  const { submit } = useWeb3Forms({ access_key: accessKey });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await submit(formData);
    console.log(res); // Debug hasil submit

    if (res.success) {
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error("Failed to send: " + res.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-600">crazywar19@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Location</p>
                  <p className="text-gray-600">Malang, East Java, Indonesia</p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/ImamIryunullah" target="_blank" className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center group">
                <Github className="text-gray-600 group-hover:text-blue-600" size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center group">
                <Linkedin className="text-gray-600 group-hover:text-blue-600" size={24} />
              </a>
              <a href="mailto:crazywar19@gmail.com" className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center group">
                <Mail className="text-gray-600 group-hover:text-blue-600" size={24} />
              </a>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
