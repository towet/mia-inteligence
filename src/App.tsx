import React, { useState, useEffect, createContext, useContext } from 'react';
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
  Menu,
  FileText,
  Check,
  ChevronRight,
  LineChart,
  Database,
  ArrowDown,
  Clock
} from 'lucide-react';
// Use hero image from assets folder
import heroImage from '../assets/reti.png';
import WebDevelopment from './WebDevelopment';
import AIDevelopment from './AIDevelopment';
import CustomAIAgents from './CustomAIAgents';
import SocialMediaMarketing from './SocialMediaMarketing';
import SearchEngineOptimization from './SearchEngineOptimization';
import DataAnalytics from './DataAnalytics';
import ResearchAndAcademicWriting from './ResearchAndAcademicWriting';
import PaidAdvertising from './PaidAdvertising';
import SecurityServices from '../SecurityServices';
import Portfolio from './Portfolio';
import ProjectDetail from './ProjectDetail';
import ScrollToTop from './ScrollToTop';
import FeaturedProjects from './components/FeaturedProjects';
import Navbar from './components/Navbar';
import ContactFloat from './components/ContactFloat';
import ConsultationForm from './components/ConsultationForm';

// Create a context to share the consultation form toggle function
export const ConsultationContext = createContext<{
  openConsultationForm: () => void;
}>({ openConsultationForm: () => {} });

// Main App component that contains the home page content
const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Function to open consultation form - will be shared via context
  const openConsultationForm = () => {
    setShowConsultation(true);
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254740525106', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aztech.intelligence@gmail.com';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/254740525106', '_blank');
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
      <header className="pt-12 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-5 sm:space-y-6 md:space-y-8 text-left slide-in-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-gray-100 rounded-full text-xs sm:text-sm font-semibold mb-2 animate-pulse">
                <div className="flex -space-x-1">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] sm:text-xs"><Shield className="w-2 sm:w-3 h-2 sm:h-3" /></div>
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] sm:text-xs"><Globe2 className="w-2 sm:w-3 h-2 sm:h-3" /></div>
                </div>
                <span className="text-xs sm:text-sm">Kenya's Premier Tech Agency • Est. 2024</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Skyrocket Your<br className="md:hidden"/> Business <br className="hidden md:block lg:hidden"/>With
                <div className="mt-1 sm:mt-2">
                  <span className="block bg-gradient-to-r from-blue-600 via-gray-700 to-blue-600 text-transparent bg-clip-text">Proven Digital Solutions</span>
                </div>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mx-auto lg:mx-0 max-w-md lg:max-w-none">
                <strong>500+ businesses transformed</strong> through strategic digital services that deliver measurable results. Get a custom solution designed to increase your revenue within 30 days.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-start pt-2">
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-1.5 sm:-space-x-2">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-semibold text-blue-700">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs sm:text-sm ml-1">500+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs sm:text-sm">4.9/5 Rating</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 justify-start">
                <button
                  onClick={() => setShowConsultation(true)}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-lg hover:scale-105 
                            transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto text-sm sm:text-base"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="text-xs sm:text-sm text-blue-600 animate-pulse flex items-center mt-2 sm:mt-0">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="whitespace-nowrap">Limited Time: 50% Off First Month</span>
                </div>
              </div>
              
              {/* Client logos */}
              <div className="pt-6 sm:pt-8 mt-2 sm:mt-4">
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 font-semibold tracking-wide">TRUSTED BY TOP BUSINESSES</p>
                <div className="flex flex-wrap items-center gap-5 sm:gap-8 justify-start">
                  <a href="https://orionsafaris.info/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1">
                    <img src="https://orionsafaris.info/assets/logo-CQGcTeM6.png" alt="Orion Safaris" className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300" />
                  </a>
                  <a href="https://deezayecofuel.com/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1">
                    <img src="https://deezayecofuel.com/assets/Defts%20Final%20Logo'%20PNG-01-CeyamN1k.png" alt="Defts Ecofuel" className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300" />
                  </a>
                  <a href="https://nestl.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1">
                    <img src="https://nestl.netlify.app/assets/logo.png" alt="Nestify Real Estate" className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative slide-in-right mt-6 lg:mt-0 mx-auto max-w-md lg:max-w-none">
              <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
                <img
                  src={heroImage}
                  alt="Digital Innovation"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                />
                
                {/* Floating stats */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-md sm:rounded-lg shadow-lg sm:shadow-xl animate-float-slow">
                  <div className="text-blue-600 font-bold text-base sm:text-xl">+127%</div>
                  <div className="text-gray-700 text-[10px] sm:text-xs">Avg. ROI</div>
                </div>
                
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-md sm:rounded-lg shadow-lg sm:shadow-xl animate-float">
                  <div className="text-blue-600 font-bold text-base sm:text-xl">30 Days</div>
                  <div className="text-gray-700 text-[10px] sm:text-xs">Results Guarantee</div>
                </div>
              </div>
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-blue-600/10 rounded-full hidden sm:block"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 bg-blue-600/10 rounded-full hidden sm:block"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 top-0">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-blue-600 fade-scale">Aztech Intelligence</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 reveal stagger-1">Home</Link>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 reveal stagger-2">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 reveal stagger-3">About</a>
              <Link to="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 reveal stagger-4">Portfolio</Link>
              <button 
                onClick={() => setShowContact(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 reveal stagger-5"
              >
                Contact Us
              </button>
            </div>
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-6 py-4 space-y-3">
              <Link to="/" className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2">Home</Link>
              <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2">Services</a>
              <a href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2">About</a>
              <Link to="/portfolio" className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2">Portfolio</Link>
              <button 
                onClick={() => {
                  setShowContact(true);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2"
              >
                Contact Us
              </button>
            </div>
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
            
            <div className="text-left sm:text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
              <p className="text-gray-600 text-sm sm:text-base">Choose your preferred way to reach us</p>
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
                href="mailto:aztech.intelligence@gmail.com"
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left sm:text-center">Contact Us</h3>
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

      {/* New Consultation Form */}
      <ConsultationForm isOpen={showConsultation} onClose={() => setShowConsultation(false)} />

      {/* About Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 rounded-bl-[100px] transform rotate-6"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 rounded-tr-[100px] transform -rotate-6"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 reveal">
              <div>
                <span className="text-blue-600 font-semibold text-lg mb-4 block reveal-from-bottom">Our Mission</span>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Empowering Global Success Through Digital Excellence</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're dedicated to transforming businesses worldwide with cutting-edge digital solutions. Our approach combines innovative technology, strategic thinking, and a relentless pursuit of excellence to deliver exceptional results that drive growth and create lasting value for our clients.
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
                    title: "Global Perspective",
                    description: "Worldwide expertise with solutions that transcend geographical boundaries.",
                    icon: Globe2,
                    delay: 200
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="reveal p-6 rounded-xl bg-white border border-blue-100 hover:border-blue-600 transition-all duration-300 
                             shadow-lg hover:shadow-xl group"
                    style={{ transitionDelay: `${feature.delay}ms` }}
                  >
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4
                                 group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(feature.icon, { className: 'w-6 h-6 text-white' })}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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
                    className="reveal flex items-center gap-4 p-4 rounded-xl bg-blue-50 group hover:bg-blue-100 transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center shrink-0
                                 group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(stat.icon, { className: 'w-6 h-6 text-white' })}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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
          <div className="text-left sm:text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">RESULTS-DRIVEN SOLUTIONS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
              Grow Your Business <span className="text-blue-600">Guaranteed</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Choose the services that best match your business goals. Each solution is custom-tailored to deliver measurable results within your timeline and budget.
            </p>
            <div className="flex flex-wrap justify-start sm:justify-center items-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Custom Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">30-Day Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Dedicated Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Performance Tracking</span>
              </div>
            </div>
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

          {/* Additional Services in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Research & Academic Writing */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-indigo-200"
                style={{ transitionDelay: '600ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
            <div className="relative h-52 overflow-hidden">
              <img 
                src="https://courses.alsalam.ac.uk/wp-content/uploads/2017/06/Academic-Writing-and-Research-Methodology.jpg" 
                alt="Research & Academic Writing"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <FileText className="w-6 h-6 text-indigo-500" />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="inline-block px-2 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-md">
                  📝 Research & Writing
                </div>
              </div>
            </div>
            
            <div className="p-6 relative">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-500 transition-all duration-300">
                  Research & Academic Writing
                </h3>
                <div className="flex flex-wrap gap-2 my-3">
                  <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md">Research Papers</span>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">Thesis Projects</span>
                  <span className="inline-block px-2 py-1 bg-violet-50 text-violet-600 text-xs rounded-md">Academic Excellence</span>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                  Expert research and academic writing services delivered by PhD specialists across all disciplines with meticulous attention to academic standards.
                </p>
                <Link to="/services/research-academic-writing" 
                  className="inline-flex items-center text-indigo-500 font-semibold hover:text-indigo-600 transition-colors duration-300 group/learn mt-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0 
                          transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>
            
            {/* Security Services */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-blue-200"
                style={{ transitionDelay: '650ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Security Services"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-md">
                    🔒 Cybersecurity
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300">
                    Security Solutions
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">Threat Protection</span>
                    <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md">Data Encryption</span>
                    <span className="inline-block px-2 py-1 bg-sky-50 text-sky-600 text-xs rounded-md">24/7 Monitoring</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    Comprehensive security solutions to protect your physical and digital assets, prevent breaches, and ensure business continuity with enterprise-grade safeguards.from software to cctv 
                  </p>
                  <Link to="/services/security-services" 
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>
          

            {/* Paid Advertising (Google & Meta) */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-gradient-to-r hover:from-red-200 hover:to-blue-200"
                style={{ transitionDelay: '700ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
            <div className="relative h-52 overflow-hidden">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D12AQH-OQBrdvwH5A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705468289659?e=2147483647&v=beta&t=bdfrNdJSFQG2-fsVwZPTxrBWr3ycRkgrf2PiRN5OtxA" 
                alt="Paid Advertising"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <Target className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500" />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="inline-block px-2 py-1 bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs font-semibold rounded-md">
                Google & Meta Advertising
                </div>
              </div>
            </div>
           
            <div className="p-6 relative">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 transition-all duration-300">
                🎯 Paid Advertising
                </h3>
                <div className="flex flex-wrap gap-2 my-3">
                  <span className="inline-block px-2 py-1 bg-red-50 text-red-600 text-xs rounded-md">Google Ads</span>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">Meta Ads</span>
                  <span className="inline-block px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md">ROI Focused</span>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                  Data-driven paid advertising campaigns across Google and Meta platforms that target the right audience and maximize your marketing ROI.
                </p>
                <Link to="/services/paid-advertising" 
                  className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 font-semibold hover:from-red-600 hover:to-blue-600 transition-colors duration-300 group/learn mt-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500 to-blue-500/0 
                          transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>
          </div>
          
          {/* View All Services Button */}
          <div className="mt-16 text-center reveal">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold 
                        hover:from-blue-700 hover:to-blue-800 transition-all duration-300 
                        shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/5 rounded-tr-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-blue-600 font-semibold text-lg mb-4 block reveal-from-bottom">Why Choose Us</span>
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
                className="reveal group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-600/20 border border-transparent"
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
                  <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 -mt-16 relative z-10 mx-auto
                               shadow-lg group-hover:rotate-6 transition-all duration-300">
                    <div className="text-white transition-all duration-300">
                      {React.createElement(feature.icon, { className: 'w-8 h-8' })}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center group-hover:text-blue-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center group-hover:text-gray-700 transition-all duration-300">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 
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
                name: "Alex Thompson",
                position: "E-commerce Director",
                image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                quote: "Their web development team transformed our online store completely. The new site loads 3x faster and our conversion rate has increased by 42%. Their attention to detail and responsive design expertise is unmatched."
              },
              {
                name: "Sarah Chen",
                position: "Innovation Director",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                quote: "The AI solutions they developed for our customer service have revolutionized our business. Our response times decreased by 80% while handling 3x more inquiries. Their expertise in AI implementation is truly world-class."
              },
              {
                name: "Michael Rodriguez",
                position: "Marketing Executive",
                image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                quote: "Their digital marketing strategies doubled our ROI within just 3 months. The data-driven approach and constant optimization of our campaigns delivered results beyond our expectations. Truly exceptional service."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="reveal bg-white rounded-xl p-8 group relative overflow-hidden border border-gray-100 hover:border-blue-600/20 transition-all duration-300"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-blue-600/20"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-600/20"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 relative pl-4 border-l-2 border-blue-600/30">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0c2249] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400/20 rounded-bl-full transform rotate-6"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-400/20 rounded-tr-full transform -rotate-6"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-blue-400/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-400/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-400/30 rounded-full blur-md"></div>
        <div className="absolute top-0 left-0 w-12 h-12 bg-blue-400/30 rounded-full blur-md"></div>
        <div className="absolute top-1/3 left-2/3 w-20 h-20 bg-blue-400/30 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 right-2/3 w-28 h-28 bg-blue-400/30 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/2 right-1/2 w-36 h-36 bg-blue-400/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-400/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl"></div>
        <div className="absolute -top-10 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/5 to-blue-900/10"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-block px-3 py-1 bg-blue-400/30 text-white rounded-full text-sm font-semibold mb-6">
                LIMITED TIME OFFER
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Ready for Measurable Results in Just <span className="text-blue-200">30 Days?</span>
              </h2>
              <p className="text-lg mb-8 text-white/90 leading-relaxed">
                Join the <span className="font-bold text-blue-200">500+ businesses</span> who have transformed their digital presence and significantly increased their revenue with our proven strategies.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Free Strategy Session Worth KSh 25,000",
                  "Custom Growth Plan for Your Business",
                  "30-Day Performance Guarantee",
                  "No Long-Term Contracts Required"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-blue-400 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white/90">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm font-semibold mb-6 animate-pulse">
                <span className="font-bold">⚡ Only 3 spots available this week</span> - Schedule your free consultation now
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Get Your Free Strategy Session</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={handleWhatsApp}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" 
                      alt="WhatsApp"
                      className="w-6 h-6 object-contain"
                    />
                    <span>WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <button 
                    onClick={handleEmail}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" 
                      alt="Email"
                      className="w-6 h-6 object-contain"
                    />
                    <span>Email</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                
                <div className="text-center text-white/80 text-sm">
                  <p className="mb-1">Or call us directly at:</p>
                  <a href="tel:+254740525106" className="text-lg font-bold text-white hover:text-yellow-300 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    +254 795 704 273
                  </a>
                </div>
                
                <div className="border-t border-white/20 pt-4 mt-4">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white/90 text-sm">Rated 4.9/5 by 500+ clients</span>
                  </div>
                  <p className="text-white/60 text-xs text-center">No obligations. Cancel anytime. Your information is secure and will never be shared.</p>
                </div>
              </div>
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
  const [showGlobalConsultation, setShowGlobalConsultation] = useState(false);
  
  // Check for URL parameter to show consultation form
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('openConsultation') === 'true') {
      setShowGlobalConsultation(true);
      // Clean up the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);
  
  // Global function to open consultation form
  const openGlobalConsultationForm = () => {
    setShowGlobalConsultation(true);
  };
  
  return (
    <Router>
      <ScrollToTop />
      <ConsultationContext.Provider value={{ openConsultationForm: openGlobalConsultationForm }}>
        <div className="min-h-screen flex flex-col">
          {/* Import Navbar for consistent navigation across all pages */}
          <Navbar />
          {/* Add floating contact button */}
          <ContactFloat />
          {/* Add top padding to all routes to accommodate fixed navbar */}
          <div className="pt-10 sm:pt-16 md:pt-20 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/ai-development" element={<AIDevelopment />} />
            <Route path="/services/custom-ai-agents" element={<CustomAIAgents />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/search-engine-optimization" element={<SearchEngineOptimization />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/research-academic-writing" element={<ResearchAndAcademicWriting />} />
            <Route path="/services/paid-advertising" element={<PaidAdvertising />} />
            <Route path="/services/security-services" element={<SecurityServices />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
        
        {/* Global consultation form */}
        <ConsultationForm 
          isOpen={showGlobalConsultation} 
          onClose={() => setShowGlobalConsultation(false)} 
        />
      </div>
      </ConsultationContext.Provider>
    </Router>
  );
}

export default App;
