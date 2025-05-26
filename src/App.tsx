import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Globe2,
  Rocket,
  MessageSquare,
  Share2,
  Search,
  PenTool,
  Users,
  Target,
  Code2,
  TrendingUp,
  Shield,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Settings,
  BarChart2,
  X,
  Mail,
  Phone,
  Trophy,
  Lightbulb,
  MapPin,
  Award,
  Menu
} from 'lucide-react';
import heroImage from './assets/hero.png';
import WebDevelopment from './WebDevelopment';
import AIDevelopment from './AIDevelopment';
import CustomAIAgents from './CustomAIAgents';
import SocialMediaMarketing from './SocialMediaMarketing';
import SearchEngineOptimization from './SearchEngineOptimization';
import DataAnalytics from './DataAnalytics';
import ScrollToTop from './ScrollToTop';

// Main App component that contains the home page content
const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254755295635', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:frankyfreaky103@gmail.com';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/254755295635', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:nexuscollective103@gmail.com', '_blank');
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal, .slide-in-left, .slide-in-right, .fade-scale, .rotate-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <header className="pt-28 pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left slide-in-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Transforming Ideas into
                <span className="text-orange-500 block">Digital Reality</span>
              </h1>
              <p className="text-xl text-gray-600">
                Your trusted partner in digital transformation. We create innovative solutions that help your business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setShowContact(true)}
                  className="px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 
                           transition-all duration-300 flex items-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => setShowContact(true)}
                  className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-xl font-semibold
                           hover:bg-orange-50 transition-all duration-300 flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
            <div className="relative slide-in-right">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Digital Innovation"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 top-0">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-orange-500 fade-scale">Global Digital Experts</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 reveal stagger-1">Home</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 reveal stagger-2">Services</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 reveal stagger-3">About</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 reveal stagger-4">Portfolio</a>
              <button 
                onClick={() => setShowContact(true)}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 reveal stagger-5"
              >
                Contact Us
              </button>
            </div>
            <button className="md:hidden text-gray-600 hover:text-orange-500 transition-colors duration-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Popup */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative transform transition-all duration-300 scale-100 shadow-2xl">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
              <p className="text-gray-600">Choose your preferred way to reach us</p>
            </div>

            <div className="space-y-6">
              <a
                href="https://wa.me/254755295635"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-green-600 mb-1">WhatsApp</h3>
                  <p className="text-green-700">Chat with us instantly</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-500 group-hover:translate-x-2 transition-transform duration-300" />
              </a>

              <a
                href="mailto:frankyfreaky103@gmail.com"
                className="flex items-center p-6 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-red-600 mb-1">Gmail</h3>
                  <p className="text-red-700">Send us an email</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-500 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
            </div>
          </div>
        </div>
      )}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative transform transition-all duration-300 scale-100">
            <button 
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Us</h3>
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-green-600 transition-colors duration-300 group"
              >
                <img 
                  src="https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png" 
                  alt="WhatsApp"
                  className="w-8 h-8 object-contain"
                />
                <span className="font-semibold">Chat on WhatsApp</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={handleEmail}
                className="w-full bg-red-500 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-red-600 transition-colors duration-300 group"
              >
                <img 
                  src="https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png" 
                  alt="Gmail"
                  className="w-8 h-8 object-contain"
                />
                <span className="font-semibold">Send Email</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* About Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-50 rounded-bl-[100px] transform rotate-6"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-50 rounded-tr-[100px] transform -rotate-6"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 reveal">
              <div>
                <span className="text-orange-500 font-semibold text-lg mb-4 block reveal-from-bottom">Our Journey</span>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Driving Digital Innovation Since 2024</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We've been at the forefront of digital transformation, helping businesses across Kenya embrace the power of technology. Our journey has been marked by innovation, excellence, and a commitment to delivering exceptional results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Client-Centric Approach",
                    description: "Your success is our priority. We tailor our solutions to meet your unique needs.",
                    icon: Users,
                    delay: 0
                  },
                  {
                    title: "Innovation at Core",
                    description: "We stay ahead of digital trends to provide cutting-edge solutions.",
                    icon: Lightbulb,
                    delay: 100
                  },
                  {
                    title: "Local Expertise",
                    description: "Deep understanding of the Kenyan market and its digital landscape.",
                    icon: MapPin,
                    delay: 200
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="reveal p-6 rounded-xl bg-white border border-orange-100 hover:border-orange-500 transition-all duration-300 
                             shadow-lg hover:shadow-xl group"
                    style={{ transitionDelay: `${feature.delay}ms` }}
                  >
                    <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4
                                 group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(feature.icon, { className: 'w-6 h-6 text-white' })}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "500+", label: "Satisfied Clients", icon: Trophy },
                  { number: "50+", label: "Awards Won", icon: Award }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="reveal flex items-center gap-4 p-4 rounded-xl bg-orange-50 group hover:bg-orange-100 transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center shrink-0
                                 group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(stat.icon, { className: 'w-6 h-6 text-white' })}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Team working together"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-white text-xl font-semibold mb-2"></div>
                  <p className="text-white/80">Working together to bring your digital vision to life</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-orange-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">OUR EXPERTISE</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Innovative Digital <span className="text-orange-500">Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We provide cutting-edge services to transform your business with modern technology and creative strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-orange-200"
                style={{ transitionDelay: '0ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" 
                  alt="Web Development"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Globe2 className="w-6 h-6 text-orange-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-md">
                    🌐 Web Development
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-all duration-300">
                    Custom Website Design & Development
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-md">Responsive Design</span>
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">E-commerce</span>
                    <span className="inline-block px-2 py-1 bg-green-50 text-green-600 text-xs rounded-md">SEO-optimized</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    Custom web applications and e-commerce solutions built with cutting-edge technology for maximum performance and user engagement.
                  </p>
                  <Link to="/services/web-development" 
                    className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>

            {/* AI Chatbot Development */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-200"
                style={{ transitionDelay: '100ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://www.orientsoftware.com/Themes/Content/Images/blog/2023-12-12/chatbot-implementation-in-business.jpg" 
                  alt="AI Chatbot Development"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <MessageCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-md">
                    🤖 AI Development
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">
                    AI Chatbot Development
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">24/7 Support</span>
                    <span className="inline-block px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md">Lead Generation</span>
                    <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md">NLP Powered</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    AI-powered chatbots for 24/7 customer support and lead generation, providing intelligent automated conversations that feel natural and helpful.
                  </p>
                  <Link to="/services/ai-development" 
                    className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>

            {/* Custom AI Agents */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-purple-200"
                style={{ transitionDelay: '200ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://yourgpt.ai/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fassets.yourgpt.ai%2Fcontent%2Fuploads%2F2024%2F07%2F03144738%2Ffeatured.jpg&w=3840&q=75" 
                  alt="Custom AI Agents"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Rocket className="w-6 h-6 text-purple-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-purple-500 text-white text-xs font-semibold rounded-md">
                    🧠 Custom AI
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-500 transition-all duration-300">
                    Custom AI Agents for Automation
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md">Task Automation</span>
                    <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md">LLM Integration</span>
                    <span className="inline-block px-2 py-1 bg-fuchsia-50 text-fuchsia-600 text-xs rounded-md">Custom Workflows</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    Tailored AI agents that automate complex business tasks, leveraging the latest in large language models and machine learning to boost efficiency.
                  </p>
                  <Link to="/services/custom-ai-agents" 
                    className="inline-flex items-center text-purple-500 font-semibold hover:text-purple-600 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>

            {/* Social Media Marketing */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-pink-200"
                style={{ transitionDelay: '300ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.ctfassets.net/cpumif18y1gd/4lswR4QQwwXyOrZ1sCcLpU/eb59409ea03a832082576110d3527965/How_to_be_a_Social_Media_Manager_625x417.png" 
                  alt="Social Media Marketing"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Share2 className="w-6 h-6 text-pink-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-pink-500 text-white text-xs font-semibold rounded-md">
                    📱 Social Media
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-500 transition-all duration-300">
                    Social Media Marketing & Management
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-pink-50 text-pink-600 text-xs rounded-md">Content Creation</span>
                    <span className="inline-block px-2 py-1 bg-red-50 text-red-600 text-xs rounded-md">Community Management</span>
                    <span className="inline-block px-2 py-1 bg-rose-50 text-rose-600 text-xs rounded-md">Ad Campaigns</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    Strategic content creation and community engagement to boost your brand presence across all social media platforms.
                  </p>
                  <Link to="/services/social-media-marketing" 
                    className="inline-flex items-center text-pink-500 font-semibold hover:text-pink-600 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500/0 via-pink-500 to-pink-500/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>
            
            {/* SEO & Digital Marketing */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-green-200"
                style={{ transitionDelay: '400ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://www.webappsplanet.com/images/search-engine-optimization.png" 
                  alt="SEO & Digital Marketing"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Search className="w-6 h-6 text-green-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-md">
                    🔍 SEO & Marketing
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-500 transition-all duration-300">
                    Search Engine Optimization (SEO)
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-green-50 text-green-600 text-xs rounded-md">Keyword Research</span>
                    <span className="inline-block px-2 py-1 bg-emerald-50 text-emerald-600 text-xs rounded-md">On-page SEO</span>
                    <span className="inline-block px-2 py-1 bg-teal-50 text-teal-600 text-xs rounded-md">Backlink Strategy</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    Data-driven strategies to improve your search rankings and online visibility, driving organic traffic and qualified leads to your business.
                  </p>
                  <Link to="/services/search-engine-optimization" 
                    className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>
            
            {/* Data Analytics & Visualization */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-cyan-200"
                style={{ transitionDelay: '500ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://www.orangemantra.com/blog/wp-content/uploads/2023/03/MicrosoftTeams-image-56-min.png" 
                  alt="Data Analytics & Visualization"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <BarChart2 className="w-6 h-6 text-cyan-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-md">
                    📊 Data Analytics
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-500 transition-all duration-300">
                    Data Analytics & Visualization
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-cyan-50 text-cyan-600 text-xs rounded-md">Real-time Dashboards</span>
                    <span className="inline-block px-2 py-1 bg-sky-50 text-sky-600 text-xs rounded-md">Business Intelligence</span>
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">AI Insights</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    Transform raw data into actionable insights with custom dashboards and AI-powered analytics that drive better business decisions.
                  </p>
                  <Link to="/services/data-analytics" 
                    className="inline-flex items-center text-cyan-500 font-semibold hover:text-cyan-600 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>
          </div>
          
          {/* View All Services Button */}
          <div className="mt-16 text-center reveal">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold 
                        hover:from-orange-600 hover:to-orange-700 transition-all duration-300 
                        shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-500/5 rounded-tr-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-orange-500 font-semibold text-lg mb-4 block reveal-from-bottom">Why Choose Us</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Driving Digital Innovation Since 2024</h2>
            <p className="text-gray-600 text-lg">
              Empowering businesses across Kenya with cutting-edge digital solutions and transformative strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team of seasoned professionals brings years of experience and deep expertise to every project.",
                icon: Users,
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              },
              {
                title: "Customized Solutions",
                description: "We create tailored digital solutions that perfectly align with your business objectives and market needs.",
                icon: Settings,
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              },
              {
                title: "Proven Results",
                description: "Our track record speaks for itself - we consistently deliver outstanding results that exceed expectations.",
                icon: TrendingUp,
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="reveal group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:border-orange-500/20 border border-transparent"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                </div>
                <div className="p-8 relative">
                  <div className="bg-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 -mt-16 relative z-10 mx-auto
                               shadow-lg group-hover:rotate-6 transition-all duration-300">
                    <div className="text-white transition-all duration-300">
                      {React.createElement(feature.icon, { className: 'w-8 h-8' })}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center group-hover:text-orange-500 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center group-hover:text-gray-700 transition-all duration-300">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 
                              transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Client Testimonials</h2>
            <p className="text-gray-600 text-lg">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Kamau",
                position: "Small Business Owner, Nairobi",
                image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                quote: "Their digital solutions helped my local business reach customers across Kenya. The results were amazing!"
              },
              {
                name: "Wanjiku Maina",
                position: "Digital Creator, Mombasa",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                quote: "They understood my vision and helped me build a strong online presence that resonates with my audience."
              },
              {
                name: "David Ochieng",
                position: "Startup Founder, Kisumu",
                image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                quote: "The team's expertise in digital marketing helped my startup gain visibility across East Africa."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="reveal bg-white rounded-xl p-8 group relative overflow-hidden border border-gray-100 hover:border-orange-500/20 transition-all duration-300"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-orange-500/20"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-orange-500/20"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 relative pl-4 border-l-2 border-orange-500/30">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-900 via-blue-900/95 to-blue-800/90">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-lg mb-8 text-white/80 leading-relaxed max-w-2xl mx-auto">
                Join hundreds of successful businesses that have revolutionized their digital strategy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleContactClick}
                className="bg-white/90 text-blue-900 hover:bg-white px-8 py-3 rounded-lg text-lg font-semibold 
                         transition-all transform hover:scale-105 hover:shadow-lg flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={handleContactClick}
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg 
                         transition-all backdrop-blur-sm"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Globe2 className="w-8 h-8 text-accent mr-4" />
            <h2 className="text-xl font-bold">Global Digital Experts</h2>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Global Digital Experts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ai-development" element={<AIDevelopment />} />
        <Route path="/services/custom-ai-agents" element={<CustomAIAgents />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/search-engine-optimization" element={<SearchEngineOptimization />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;
