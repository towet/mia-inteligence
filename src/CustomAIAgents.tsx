import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, MessageSquare, Database, FileText, Clock, CheckCircle, Users, Mail, Zap, Shield, Search, LineChart, Menu } from 'lucide-react';

// Color helper functions
const getGradientByColor = (color: string): string => {
  const gradients = {
    violet: 'bg-gradient-to-br from-violet-500 to-violet-600',
    orange: 'bg-gradient-to-br from-orange-400 to-orange-500',
    blue: 'bg-gradient-to-br from-blue-400 to-blue-500',
    amber: 'bg-gradient-to-br from-amber-400 to-amber-500',
    teal: 'bg-gradient-to-br from-teal-400 to-teal-500',
    fuchsia: 'bg-gradient-to-br from-fuchsia-400 to-fuchsia-500',
    emerald: 'bg-gradient-to-br from-emerald-400 to-emerald-500',
    indigo: 'bg-gradient-to-br from-indigo-400 to-indigo-500',
    pink: 'bg-gradient-to-br from-pink-400 to-pink-500',
    cyan: 'bg-gradient-to-br from-cyan-400 to-cyan-500',
  };
  return gradients[color as keyof typeof gradients] || gradients.violet;
};

const getBackgroundByColor = (color: string): string => {
  const backgrounds = {
    violet: 'bg-violet-500',
    orange: 'bg-orange-500',
    blue: 'bg-blue-500',
    amber: 'bg-amber-500',
    teal: 'bg-teal-500',
    fuchsia: 'bg-fuchsia-500',
    emerald: 'bg-emerald-500',
    indigo: 'bg-indigo-500',
    pink: 'bg-pink-500',
    cyan: 'bg-cyan-500',
  };
  return backgrounds[color as keyof typeof backgrounds] || backgrounds.violet;
};

const getLightBgByColor = (color: string): string => {
  const lightBackgrounds = {
    violet: 'bg-violet-50',
    orange: 'bg-orange-50',
    blue: 'bg-blue-50',
    amber: 'bg-amber-50',
    teal: 'bg-teal-50',
    fuchsia: 'bg-fuchsia-50',
    emerald: 'bg-emerald-50',
    indigo: 'bg-indigo-50',
    pink: 'bg-pink-50',
    cyan: 'bg-cyan-50',
  };
  return lightBackgrounds[color as keyof typeof lightBackgrounds] || lightBackgrounds.violet;
};

const getTextByColor = (color: string): string => {
  const textColors = {
    violet: 'text-violet-600',
    orange: 'text-orange-600',
    blue: 'text-blue-600',
    amber: 'text-amber-600',
    teal: 'text-teal-600',
    fuchsia: 'text-fuchsia-600',
    emerald: 'text-emerald-600',
    indigo: 'text-indigo-600',
    pink: 'text-pink-600',
    cyan: 'text-cyan-600',
  };
  return textColors[color as keyof typeof textColors] || textColors.violet;
};

const getBorderByColor = (color: string): string => {
  const borderColors = {
    violet: 'border-violet-200',
    orange: 'border-orange-200',
    blue: 'border-blue-200',
    amber: 'border-amber-200',
    teal: 'border-teal-200',
    fuchsia: 'border-fuchsia-200',
    emerald: 'border-emerald-200',
    indigo: 'border-indigo-200',
    pink: 'border-pink-200',
    cyan: 'border-cyan-200',
  };
  return borderColors[color as keyof typeof borderColors] || borderColors.violet;
};

const getHoverTextByColor = (color: string): string => {
  const hoverTextColors = {
    violet: 'group-hover:text-violet-600',
    orange: 'group-hover:text-orange-600',
    blue: 'group-hover:text-blue-600',
    amber: 'group-hover:text-amber-600',
    teal: 'group-hover:text-teal-600',
    fuchsia: 'group-hover:text-fuchsia-600',
    emerald: 'group-hover:text-emerald-600',
    indigo: 'group-hover:text-indigo-600',
    pink: 'group-hover:text-pink-600',
    cyan: 'group-hover:text-cyan-600',
  };
  return hoverTextColors[color as keyof typeof hoverTextColors] || hoverTextColors.violet;
};

const CustomAIAgents = () => {
  const [animatedStep, setAnimatedStep] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
  };

  // Handle CTA button click - opens consultation form
  const handleCTAClick = () => {
    window.location.href = '/?openConsultation=true';
  };

  // Scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      // Reveal elements on scroll
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Navbar - Simplified mobile-first design */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-lg text-gray-900">Aztech Intelligence<span className="text-violet-600">.</span></div>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="text-gray-700 focus:outline-none" 
              onClick={toggleMobileMenu}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`bg-white ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-3 space-y-1">
            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-violet-50 hover:text-violet-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Home</Link>
            <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-violet-50 hover:text-violet-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Services</Link>
            <Link to="/portfolio" className="block px-4 py-2 text-gray-800 hover:bg-violet-50 hover:text-violet-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Portfolio</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-violet-50 hover:text-violet-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>About</Link>
            <Link to="/contact" className="block px-4 py-2 text-violet-600 font-medium hover:bg-violet-50 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Contact Us</Link>
          </div>
        </div>
      </nav>
      
      {/* Hero Section with Floating 3D Elements */}
      <section className="relative pt-4 sm:pt-8 md:pt-16 pb-12 sm:pb-16 md:pb-20 mt-2 sm:mt-4 md:mt-8 overflow-hidden bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Decorative elements - like WebDevelopment page */}
          <div 
            className="absolute top-0 right-0 w-1/3 h-1/3 bg-violet-500/5 rounded-bl-full" 
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-fuchsia-500/5 rounded-tr-full"
            style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
          ></div>
          
          {/* Abstract code background - subtle - exactly like WebDevelopment */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
               
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => {
            const size = Math.random() * 5 + 2;
            return (
              <div 
                key={i} 
                className="absolute bg-white rounded-full opacity-30 animate-float-slow"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 15}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}>
              </div>
            );
          })}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="lg:w-1/2 ">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-violet-100 to-fuchsia-100 rounded-full text-sm font-semibold mb-2 animate-pulse">
                <Bot className="w-4 h-4 text-violet-600" />
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text font-bold">
                  AI Automation Experts | 85% Time Reduction
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">Save 40+ Hours/Week</span>
                <div className="relative">
                  <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-500 text-transparent bg-clip-text">
                    With Custom AI Agents
                  </span>
                  <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-500 rounded-full transform scale-x-0 transition-transform duration-1000 animate-scale-x-full"></div>
                </div>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                <strong>Stop wasting time on repetitive tasks.</strong> Our AI agents work 24/7 to handle your emails, data extraction, customer service, and more—with <strong>human-like intelligence</strong> at machine speed.
              </p>
              
              {/* ROI Stats */}
              <div className="grid grid-cols-3 gap-4 my-6">
                <div className="bg-white rounded-lg shadow-md p-3 text-center border border-violet-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 text-transparent bg-clip-text">85%</div>
                  <div className="text-xs text-gray-600">Time Saved</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-3 text-center border border-violet-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-violet-600 text-transparent bg-clip-text">24/7</div>
                  <div className="text-xs text-gray-600">Availability</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-3 text-center border border-violet-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 text-transparent bg-clip-text">192%</div>
                  <div className="text-xs text-gray-600">Average ROI</div>
                </div>
              </div>
              
              {/* Client testimonial */}
              <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 p-4 rounded-lg mb-6 border border-violet-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-200 to-fuchsia-200 flex items-center justify-center font-bold text-violet-700">KP</div>
                  <div>
                    <div className="font-semibold">Kenya Power & Lighting</div>
                    <div className="text-sm text-gray-600">Customer Support Department</div>
                  </div>
                </div>
                <p className="text-sm italic text-gray-700 mb-2">
                  "The AI agent handles 73% of our customer inquiries without human intervention. Our support team now focuses on complex issues while response times decreased from 24 hours to 3 minutes."
                </p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button 
                  onClick={handleCTAClick}
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-bold 
                          hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-105
                          shadow-lg hover:shadow-violet-500/20 flex items-center justify-center gap-2 group">
                  Get Free AI Consultation
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <div className="flex items-center text-violet-600 font-medium animate-pulse">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Limited Offer: 30-Day Free Trial + Implementation</span>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-gray-600 text-sm bg-gradient-to-r from-gray-50 to-violet-50 p-3 rounded-lg">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span><strong>Custom</strong> Solutions</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span><strong>No-Code</strong> Setup</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span><strong>Secure</strong> Data</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span><strong>Fast</strong> Deployment</span>
                </div>
              </div>
            </div>
            
            {/* 3D Illustration */}
            <div className="lg:w-1/2 ">
              <div className="relative">
                {/* Main robot/agent */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-3xl blur-2xl z-0 animate-pulse-slow"></div>
                <div className="relative z-10 p-1 lg:p-6">
                  <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl overflow-hidden relative">
                    {/* Bot head illustration */}
                    <div className="flex justify-center mb-8">
                      <div className="w-40 h-40 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-fuchsia-500 rounded-3xl animate-float-slow"></div>
                        <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center">
                          <Bot className="w-20 h-20 text-white opacity-80" />
                        </div>
                        {/* Orbiting elements */}
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className="absolute w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full animate-orbit"
                            style={{
                              top: '50%',
                              left: '50%',
                              marginTop: '-5px',
                              marginLeft: '-5px',
                              animationDelay: `${i * 2}s`,
                              animationDuration: '10s'
                            }}>
                            <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center">
                              {i === 0 ? <Database className="w-5 h-5 text-amber-400" /> : 
                               i === 1 ? <MessageSquare className="w-5 h-5 text-fuchsia-400" /> :
                               <FileText className="w-5 h-5 text-violet-400" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Task processing animation */}
                    <div className="mb-6 space-y-4">
                      {/* Task input */}
                      <div className="p-4 bg-gray-800/90 border border-gray-700 rounded-xl animate-pulse-slow">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center mr-3">
                            <Mail className="w-4 h-4 text-violet-300" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 w-3/4 bg-violet-500/30 rounded-full mb-2"></div>
                            <div className="h-3 w-1/2 bg-violet-500/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Processing */}
                      <div className="relative h-8 flex items-center justify-center">
                        <div className="absolute left-1/2 top-1/2 w-8 h-8 -ml-4 -mt-4">
                          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-violet-500 animate-spin"></div>
                        </div>
                      </div>
                      
                      {/* Task output */}
                      <div className="p-4 bg-gray-800/90 border border-gray-700 rounded-xl">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center mr-3">
                            <CheckCircle className="w-4 h-4 text-emerald-300" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 w-2/3 bg-emerald-500/30 rounded-full mb-2"></div>
                            <div className="h-3 w-1/2 bg-emerald-500/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick stats */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: <Clock className="w-4 h-4" />, label: "24/7 Operation", color: "violet" },
                        { icon: <Zap className="w-4 h-4" />, label: "10x Productivity", color: "fuchsia" },
                        { icon: <Shield className="w-4 h-4" />, label: "Secure & Private", color: "amber" }
                      ].map((stat, i) => (
                        <div key={i} className="p-3 bg-gray-800/80 border border-gray-700 rounded-xl text-center">
                          <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${getBackgroundByColor(stat.color)}`}>
                            {stat.icon}
                          </div>
                          <div className="text-xs text-gray-300">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-gray-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>
      
      {/* Why Businesses Need Custom AI Agents Section - Mobile Responsive */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0 max-w-md px-2 sm:px-0">
              <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-xs font-medium mb-2 sm:mb-3">
                <span className="mr-1">💡</span> Benefits of Custom AI Agents
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Transform Your Business with <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Intelligent Automation</span>
              </h2>
              
              <p className="text-gray-600 text-xs sm:text-sm">
                Our custom AI agents deliver substantial advantages, from enhanced productivity to cost savings and improved accuracy.
              </p>
            </div>
            
            {/* Stats bar - Mobile Responsive */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 lg:gap-4 justify-center lg:justify-end">
              {[
                { value: "10x", label: "Productivity", icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" />, color: "violet", description: "Boost efficiency on routine tasks" },
                { value: "24/7", label: "Availability", icon: <Clock className="w-3 h-3 sm:w-4 sm:h-4" />, color: "fuchsia", description: "Zero downtime, continuous operation" },
                { value: "99.8%", label: "Accuracy", icon: <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />, color: "blue", description: "Consistent output with minimal errors" },
                { value: "60%", label: "Cost Reduction", icon: <LineChart className="w-3 h-3 sm:w-4 sm:h-4" />, color: "amber", description: "Save on hiring and training costs" }
              ].map((stat, index) => (
                <div key={index} className="group relative mt-1 mb-1 sm:mt-0 sm:mb-0">
                  <div className={`flex items-center gap-1 sm:gap-2 py-1 sm:py-1.5 px-2 sm:px-3 rounded-md ${getLightBgByColor(stat.color)} 
                                  hover:shadow-md transition-all duration-300 cursor-pointer`}>
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${getBackgroundByColor(stat.color)} text-white 
                                  flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className={`text-sm sm:text-base font-bold ${getTextByColor(stat.color)}`}>{stat.value}</div>
                      <div className="text-[10px] sm:text-xs text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                  
                  {/* Tooltip on hover - hidden on mobile */}
                  <div className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-[180px] 
                              bg-gray-800 text-white text-xs rounded-lg py-1.5 px-2 opacity-0 invisible group-hover:opacity-100 
                              group-hover:visible transition-all duration-300 z-10 pointer-events-none">
                    {stat.description}
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits - Mobile Responsive Design */}
          <div className="relative mb-8 sm:mb-12 px-2 sm:px-0">
            {/* Benefits content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 sm:gap-x-8 lg:gap-x-16 gap-y-4 sm:gap-y-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: "Manual Tasks Slow Teams Down",
                  description: "Repetitive tasks drain valuable time and resources better spent on strategic initiatives.",
                  color: "violet"
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  title: "Scale Without Adding Headcount",
                  description: "Handle increased workloads without expanding your team.",
                  color: "fuchsia"
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "Higher Accuracy & Consistency",
                  description: "Eliminate human error and ensure consistent, high-quality results.",
                  color: "amber"
                },
                {
                  icon: <Bot className="w-5 h-5" />,
                  title: "Perfect Fit For Your Needs",
                  description: "Custom agents perfectly align with your exact requirements.",
                  color: "emerald"
                },
                {
                  icon: <Database className="w-5 h-5" />,
                  title: "Control Your Data & Security",
                  description: "Full control over functionality and data security protocols.",
                  color: "blue"
                },
                {
                  icon: <Brain className="w-5 h-5" />,
                  title: "Focus on Strategic Work",
                  description: "Empower employees to focus on tasks that need human intelligence.",
                  color: "indigo"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="reveal fade-up bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 
                         hover:shadow-md transition-all duration-300 group"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <div className="flex items-center p-2 sm:p-3">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${getBackgroundByColor(benefit.color)} text-white 
                                shadow-md flex items-center justify-center transform transition-all duration-300 
                                group-hover:scale-110`}>
                        <div className="w-4 h-4 sm:w-5 sm:h-5">{benefit.icon}</div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-3 sm:ml-4 flex-grow">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-0.5 group-hover:text-violet-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-[10px] sm:text-xs text-gray-600 m-0 line-clamp-2 sm:line-clamp-none">
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Colored indicator */}
                    <div className={`w-1 sm:w-1.5 h-8 sm:h-10 ${getBackgroundByColor(benefit.color)} rounded-full ml-1 sm:ml-2 opacity-70`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* The old stats grid has been removed and integrated into the header */}
        </div>
      </section>

      {/* How We Build Custom AI Agents Section with Interactive Steps */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-gray-50" id="how-we-build">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100 to-orange-100 rounded-full opacity-30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal fade-up">
            <div className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 font-medium text-sm mb-4">
              <span>⚙️ How We Build Custom AI Agents</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Strategic <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Process</span> for Custom Automation
            </h2>
            
            <p className="text-gray-600 text-lg">
              Our meticulous approach ensures your custom AI agent perfectly matches your workflow requirements and integrates seamlessly with your systems.
            </p>
          </div>
          
          {/* Interactive Process Steps */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
              {/* Steps navigation */}
              <div className="md:w-1/3 bg-gray-50 p-6 border-r border-gray-100">
                {[
                  { name: "discovery", icon: <Search className="w-5 h-5" />, title: "Discovery", color: "violet" },
                  { name: "design", icon: <Brain className="w-5 h-5" />, title: "Design", color: "fuchsia" },
                  { name: "development", icon: <Bot className="w-5 h-5" />, title: "Development", color: "indigo" },
                  { name: "integration", icon: <Database className="w-5 h-5" />, title: "Integration", color: "blue" },
                  { name: "training", icon: <Zap className="w-5 h-5" />, title: "Training & Optimization", color: "amber" }
                ].map((step, index) => (
                  <button 
                    key={index}
                    className={`w-full text-left p-4 mb-2 rounded-xl transition-all duration-300 group flex items-center
                              ${animatedStep === index ? 
                                `${getBackgroundByColor(step.color)} text-white shadow-lg` : 
                                'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setAnimatedStep(index)}
                  >
                    <div className={`w-10 h-10 rounded-lg mr-3 flex items-center justify-center transition-all duration-300
                                  ${animatedStep === index ? 
                                    'bg-white/20' : 
                                    `${getLightBgByColor(step.color)} ${getTextByColor(step.color)}`}`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="font-medium">{step.title}</div>
                      <div className={`text-xs ${animatedStep === index ? 'text-white/70' : 'text-gray-500'}`}>Step {index + 1}</div>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Step content */}
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                {animatedStep === 0 && (
                  <div className="reveal fade-up">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Discovery</h3>
                    <p className="text-gray-600 mb-6">We start by analyzing your repetitive processes and pain points. Our team works closely with yours to understand your unique workflows, bottlenecks, and automation opportunities.</p>
                    <div className="bg-violet-50 p-4 rounded-xl border border-violet-100">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-violet-500 mt-1 mr-3" />
                        <div>
                          <div className="font-medium text-violet-700 mb-1">Key Activities:</div>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Identify repetitive, time-consuming tasks</li>
                            <li>• Analyze current workflow inefficiencies</li>
                            <li>• Document business rules and logic</li>
                            <li>• Prioritize automation opportunities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {animatedStep === 1 && (
                  <div className="reveal fade-up">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Design</h3>
                    <p className="text-gray-600 mb-6">We define the AI agent's logic, data sources, decision flows, and integrations. This creates the blueprint for your custom solution, ensuring it meets your specific requirements.</p>
                    <div className="bg-fuchsia-50 p-4 rounded-xl border border-fuchsia-100">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-fuchsia-500 mt-1 mr-3" />
                        <div>
                          <div className="font-medium text-fuchsia-700 mb-1">Design Elements:</div>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Agent architecture and workflow diagrams</li>
                            <li>• Decision tree and logic mapping</li>
                            <li>• Data source identification</li>
                            <li>• User interaction flows and interfaces</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {animatedStep === 2 && (
                  <div className="reveal fade-up">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Development</h3>
                    <p className="text-gray-600 mb-6">Our engineers build your agent using the latest AI models (e.g., GPT-4, RAG systems, ML algorithms) tailored to your specific use case and performance requirements.</p>
                    <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 mr-3" />
                        <div>
                          <div className="font-medium text-indigo-700 mb-1">Technical Components:</div>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Selection of appropriate AI/ML models</li>
                            <li>• Custom prompting and fine-tuning</li>
                            <li>• Development of processing pipelines</li>
                            <li>• Implementation of security protocols</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {animatedStep === 3 && (
                  <div className="reveal fade-up">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Integration</h3>
                    <p className="text-gray-600 mb-6">We seamlessly plug your AI agent into your existing tech stack—whether that's email systems, CRMs, spreadsheets, databases, or custom software.</p>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                        <div>
                          <div className="font-medium text-blue-700 mb-1">Integration Points:</div>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>• API connections to existing systems</li>
                            <li>• Data flow configuration</li>
                            <li>• Authentication and permission setup</li>
                            <li>• Webhook and automation triggers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {animatedStep === 4 && (
                  <div className="reveal fade-up">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Training & Optimization</h3>
                    <p className="text-gray-600 mb-6">Your agent learns from your data and improves continuously. We fine-tune, test, and optimize for maximum accuracy and efficiency in your specific environment.</p>
                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-1 mr-3" />
                        <div>
                          <div className="font-medium text-amber-700 mb-1">Continuous Improvement:</div>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Supervised training with real data</li>
                            <li>• Performance monitoring and analytics</li>
                            <li>• User feedback implementation</li>
                            <li>• Regular model updates and enhancements</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Progress indicator */}
                <div className="flex mt-10 space-x-2">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <button 
                      key={step}
                      onClick={() => setAnimatedStep(step)}
                      className={`h-2 rounded-full transition-all duration-300 ${animatedStep === step ? 'w-10 bg-violet-500' : 'w-6 bg-gray-200'}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section with Interactive Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50" id="use-cases">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal fade-up">
            <div className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 font-medium text-sm mb-4">
              <span>🚀 Popular Use Cases</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Versatile AI Agents for
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent"> Every Department</span>
            </h2>
            
            <p className="text-gray-600 text-lg">
              From handling emails to processing invoices, our custom AI agents streamline operations across your entire organization.
            </p>
          </div>
          
          {/* Featured Use Cases Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Email Response Automation Agent",
                subtitle: "Instant Customer Support",
                description: "Automatically reads incoming customer emails, classifies them, and drafts personalized responses using your brand voice.",
                useCase: "E-commerce support desks, SaaS platforms, HR departments",
                icon: <Mail className="w-8 h-8" />,
                color: "violet",
                features: ["Auto-classification", "Personalized responses", "Sentiment analysis", "Priority routing"]
              },
              {
                title: "Data Entry & Report Generation",
                subtitle: "Automate Information Workflows",
                description: "Scrapes or extracts data from PDFs, emails, or websites and populates databases, then generates custom reports.",
                useCase: "Finance, real estate, HR, or logistics companies",
                icon: <FileText className="w-8 h-8" />,
                color: "fuchsia",
                features: ["PDF data extraction", "Database population", "Scheduled reports", "Multi-format output"]
              },
              {
                title: "Meeting Summary & Follow-up Agent",
                subtitle: "Never Miss a Detail",
                description: "Listens to meetings (via transcript), summarizes discussions, extracts action items, and sends follow-ups.",
                useCase: "Project managers, consulting firms, remote teams",
                icon: <CheckCircle className="w-8 h-8" />,
                color: "blue",
                features: ["Auto-transcription", "Key point extraction", "Action item tracking", "Follow-up automation"]
              },
              {
                title: "AI Order Fulfillment Agent",
                subtitle: "Streamline Commerce Operations",
                description: "Automatically processes new orders, updates inventory, generates invoices, and sends confirmation messages.",
                useCase: "Online retailers, wholesalers, distributors",
                icon: <Bot className="w-8 h-8" />,
                color: "emerald",
                features: ["Order processing", "Inventory updates", "Invoice generation", "Customer notifications"]
              },
              {
                title: "CRM Automation Agent",
                subtitle: "Supercharge Your Sales Team",
                description: "Reads new lead entries, enriches them with company/social data, assigns priority scores, and notifies sales.",
                useCase: "Sales agencies, CRM-based businesses",
                icon: <Users className="w-8 h-8" />,
                color: "amber",
                features: ["Lead enrichment", "Priority scoring", "Sales notifications", "Activity tracking"]
              },
              {
                title: "Personal Knowledge Base Agent",
                subtitle: "Internal Support & Knowledge",
                description: "Answers employee questions based on internal documents using retrieval-augmented generation (RAG).",
                useCase: "Onboarding, internal support, HR, operations",
                icon: <Brain className="w-8 h-8" />,
                color: "indigo",
                features: ["Document indexing", "Natural language Q&A", "Context-aware responses", "Multi-source knowledge"]
              }
            ].map((useCase, index) => (
              <div 
                key={index} 
                className="reveal fade-up bg-white rounded-xl overflow-hidden shadow-xl border border-violet-100/50 group hover-card-rise transition-all duration-500"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="h-2 w-full bg-gradient-to-r from-white via-white to-white group-hover:via-transparent
                             group-hover:from-transparent group-hover:to-transparent transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 ${getGradientByColor(useCase.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
                
                <div className="p-6 pb-5">
                  {/* Icon with number */}
                  <div className="flex justify-between items-start mb-5">
                    <div className={`w-16 h-16 rounded-2xl ${getBackgroundByColor(useCase.color)} flex items-center justify-center text-white 
                                   group-hover:scale-110 transform transition-all duration-500 relative overflow-hidden shadow-md`}>
                      <div className="absolute inset-0 w-full h-full shine-effect"></div>
                      <div className="relative z-10">{useCase.icon}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-1 text-gray-800 ${getHoverTextByColor(useCase.color)} transition-colors duration-300`}>  
                    {useCase.title}
                  </h3>
                  
                  <div className="text-sm text-gray-500 mb-3">{useCase.subtitle}</div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {useCase.description}
                  </p>
                  
                  {/* Use Case */}
                  <div className={`bg-gray-50 rounded-lg p-3 mb-5 border ${getBorderByColor(useCase.color)}`}>
                    <div className={`text-xs font-semibold ${getTextByColor(useCase.color)} mb-1`}>USE CASE</div>
                    <div className="text-sm text-gray-700">{useCase.useCase}</div>
                  </div>
                  
                  {/* Features */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-1">
                      {useCase.features.map((feature, i) => (
                        <span 
                          key={i}
                          className={`text-xs py-1 px-2 rounded-full ${getLightBgByColor(useCase.color)} ${getTextByColor(useCase.color)}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Learn More buttons removed as requested */}
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-12">
            <button 
              onClick={handleCTAClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-violet-200 text-violet-600 hover:bg-violet-50 transition-colors duration-300 shadow-sm"
            >
              <span>View More Use Cases</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Duplicate benefits section removed */}
      
      {/* Call to Action Section */}
      <section className="min-h-screen bg-white py-12 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span className="block mb-2">Automate What Matters Most</span>
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">to Your Business</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Say goodbye to repetitive tasks and hello to custom-built AI agents that work around the clock—just for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleCTAClick}
                className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 
                        text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 
                        shadow-lg hover:shadow-fuchsia-500/30 group w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let's Build Your Agent
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                
                {/* Button animation effects */}
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-700 via-fuchsia-700 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-out blur-xl"></span>
              </button>
              
              <a href="#use-cases" className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-gray-200 bg-white rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300 w-full sm:w-auto">
                Explore Use Cases
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <p className="mt-6 text-gray-500 flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Book a free consultation to map out your custom AI automation opportunity</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomAIAgents;
