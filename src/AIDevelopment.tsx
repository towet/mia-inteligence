import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, Database, Bot, Brain, BarChart2, MessageSquare, ArrowRight, Eye
} from 'lucide-react';

// Helper functions for styling based on color
const getGradientByColor = (color: string) => {
  switch(color) {
    case 'blue': return 'bg-gradient-to-r from-blue-400 to-blue-600';
    case 'orange': return 'bg-gradient-to-r from-orange-400 to-red-500';
    case 'violet': return 'bg-gradient-to-r from-violet-500 to-purple-600';
    case 'teal': return 'bg-gradient-to-r from-teal-400 to-emerald-500';
    case 'fuchsia': return 'bg-gradient-to-r from-fuchsia-400 to-pink-600';
    case 'amber': return 'bg-gradient-to-r from-amber-400 to-yellow-500';
    default: return 'bg-gradient-to-r from-gray-400 to-gray-600';
  }
};

const getBackgroundByColor = (color: string) => {
  switch(color) {
    case 'blue': return 'bg-blue-500';
    case 'orange': return 'bg-orange-500';
    case 'violet': return 'bg-violet-500';
    case 'teal': return 'bg-teal-500';
    case 'fuchsia': return 'bg-fuchsia-500';
    case 'amber': return 'bg-amber-500';
    default: return 'bg-gray-500';
  }
};

const getHoverTextByColor = (color: string) => {
  switch(color) {
    case 'blue': return 'group-hover:text-blue-600';
    case 'orange': return 'group-hover:text-orange-500';
    case 'violet': return 'group-hover:text-violet-600';
    case 'teal': return 'group-hover:text-teal-600';
    case 'fuchsia': return 'group-hover:text-fuchsia-600';
    case 'amber': return 'group-hover:text-amber-600';
    default: return 'group-hover:text-gray-600';
  }
};

const getTextByColor = (color: string) => {
  switch(color) {
    case 'blue': return 'text-blue-600';
    case 'orange': return 'text-orange-600';
    case 'violet': return 'text-violet-600';
    case 'teal': return 'text-teal-600';
    case 'fuchsia': return 'text-fuchsia-600';
    case 'amber': return 'text-amber-600';
    default: return 'text-gray-600';
  }
};

const getLightBgByColor = (color: string) => {
  switch(color) {
    case 'blue': return 'bg-blue-50';
    case 'orange': return 'bg-orange-50';
    case 'violet': return 'bg-violet-50';
    case 'teal': return 'bg-teal-50';
    case 'fuchsia': return 'bg-fuchsia-50';
    case 'amber': return 'bg-amber-50';
    default: return 'bg-gray-50';
  }
};

const getBorderByColor = (color: string) => {
  switch(color) {
    case 'blue': return 'border-blue-200';
    case 'orange': return 'border-orange-200';
    case 'violet': return 'border-violet-200';
    case 'teal': return 'border-teal-200';
    case 'fuchsia': return 'border-fuchsia-200';
    case 'amber': return 'border-amber-200';
    default: return 'border-gray-200';
  }
};

const AIDevelopment: React.FC = () => {
  // Intersection Observer for animations
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

    document.querySelectorAll('.reveal, .fade-in, .slide-up, .scale-in, .slide-in-left, .slide-in-right').forEach(
      el => observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  // Parallax scrolling effect
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handler for CTA buttons - opens consultation form
  const handleCTAClick = () => {
    // Navigate to homepage with query parameter to open consultation form
    window.location.href = '/?openConsultation=true';
  };

  // Navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navbar - Simplified mobile-first design */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-lg text-gray-900">Aztech Intelligence<span className="text-orange-600">.</span></div>
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
            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Home</Link>
            <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Services</Link>
            <Link to="/portfolio" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Portfolio</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>About</Link>
            <Link to="/contact" className="block px-4 py-2 text-orange-600 font-medium hover:bg-orange-50 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Contact Us</Link>
          </div>
        </div>
      </nav>
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-12 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-violet-50 via-white to-amber-50">
        {/* Decorative elements */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 rounded-bl-full" 
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-tr-full"
          style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
        ></div>
        
        {/* Abstract code background - subtle */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-in-left">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm font-semibold mb-2 animate-pulse">
                  <Brain className="w-4 h-4 text-orange-600" />
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text font-bold">
                    East Africa's Leading AI Solutions Provider | 76 Enterprises Transformed
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-gray-900">Grow Your Business with</span>
                  <div className="relative">
                    <span className="block bg-gradient-to-r from-orange-600 via-red-500 to-orange-500 text-transparent bg-clip-text">
                      AI-Powered Innovation
                    </span>
                    <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-orange-600 via-red-500 to-orange-500 rounded-full transform scale-x-0 transition-transform duration-1000 animate-scale-x-full"></div>
                  </div>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  <strong>Don't get left behind in the AI revolution.</strong> Our custom AI solutions deliver <strong>measurable ROI</strong> by automating tasks, improving decision-making, and creating new revenue streams for your business.
                </p>
              </div>
              
              {/* Success metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow-md p-3 text-center border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text">267%</div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-3 text-center border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-600 text-transparent bg-clip-text">76%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-3 text-center border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text">3-5x</div>
                  <div className="text-sm text-gray-600">Productivity Boost</div>
                </div>
              </div>
              
              {/* Client testimonial */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg mb-6 border border-orange-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-200 to-red-200 flex items-center justify-center font-bold text-orange-700">EC</div>
                  <div>
                    <div className="font-semibold">Equity Bank</div>
                    <div className="text-sm text-gray-600">Enterprise Client</div>
                  </div>
                </div>
                <p className="text-sm italic text-gray-700 mb-2">
                  "Their AI chatbot reduced our customer service costs by 62% while improving customer satisfaction scores by 28%. It's been a game-changer for our digital transformation strategy."
                </p>
                <div className="flex">
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
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 
                           text-white rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-orange-500/30 
                           flex items-center gap-2 transform hover:-translate-y-1"
                >
                  Get Free AI Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <div className="flex items-center text-orange-600 font-medium animate-pulse">
                  <span className="mr-2 bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-bold">LIMITED TIME</span>
                  50% Off Strategy Session + Free POC Development
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-gray-600 text-sm bg-gradient-to-r from-gray-50 to-orange-50 p-3 rounded-lg">
                <div className="flex items-center gap-1">
                  <Bot className="w-4 h-4 text-orange-500" />
                  <span><strong>Future-Proof</strong> Solutions</span>
                </div>
                <div className="flex items-center gap-1">
                  <Brain className="w-4 h-4 text-orange-500" />
                  <span><strong>Expert</strong> AI Team</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4 text-orange-500" />
                  <span><strong>24/7</strong> Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <Database className="w-4 h-4 text-orange-500" />
                  <span><strong>100%</strong> Data Security</span>
                </div>
              </div>
            </div>
            
            {/* Right side illustration */}
            <div className="order-1 lg:order-2 reveal fade-in">
              <div className="relative w-full max-w-md mx-auto" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
                <div className="relative z-10 aspect-square">
                  {/* Floating Browser Mockup */}
                  <div className="absolute inset-0 bg-white rounded-xl shadow-2xl animate-float-code overflow-hidden">
                    {/* Browser header */}
                    <div className="h-5 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center px-2">
                      <div className="flex space-x-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-xs text-gray-500 mx-auto">AI Development</div>
                    </div>
                    
                    {/* Browser content - AI themed */}
                    <div className="p-2 h-full bg-gradient-to-br from-blue-50 to-orange-50 overflow-hidden">
                      {/* Animated node visualization */}
                      <div className="relative h-full flex items-center justify-center">
                        <div className="absolute inset-0 opacity-10">
                          <svg width="100%" height="100%" viewBox="0 0 100 100">
                            <defs>
                              <linearGradient id="neuron-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF5733" />
                                <stop offset="100%" stopColor="#3498DB" />
                              </linearGradient>
                            </defs>
                            <g strokeWidth="0.5" stroke="url(#neuron-gradient)">
                              <line x1="10" y1="10" x2="90" y2="90" className="animate-connection-line" />
                              <line x1="10" y1="90" x2="90" y2="10" className="animate-connection-line" />
                              <line x1="50" y1="10" x2="50" y2="90" className="animate-connection-line" />
                              <line x1="10" y1="50" x2="90" y2="50" className="animate-connection-line" />
                            </g>
                          </svg>
                        </div>
                        
                        {/* Neural network visualization */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="w-3/4 h-3/4 relative">
                            <Brain className="w-full h-full text-orange-500 animate-pulse-slow opacity-90" />
                            
                            {/* Orbiting elements */}
                            {[
                              { icon: <Database className="w-full h-full" />, delay: '0s', color: 'bg-blue-500' },
                              { icon: <MessageSquare className="w-full h-full" />, delay: '1s', color: 'bg-orange-500' },
                              { icon: <Bot className="w-full h-full" />, delay: '2s', color: 'bg-blue-500' },
                              { icon: <BarChart2 className="w-full h-full" />, delay: '3s', color: 'bg-orange-500' },
                              { icon: <MessageSquare className="w-full h-full" />, delay: '4s', color: 'bg-blue-500' },
                            ].map((item, index) => {
                              const angle = (index / 5) * Math.PI * 2;
                              const x = Math.cos(angle) * 45 + 50;
                              const y = Math.sin(angle) * 45 + 50;
                              return (
                                <div 
                                  key={index}
                                  className={`absolute w-6 h-6 ${item.color} rounded-lg flex items-center justify-center
                                         animate-float-orbit shadow-md text-white p-1 z-30`}
                                  style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    animationDelay: item.delay
                                  }}
                                >
                                  {item.icon}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative code blocks */}
                  <div className="absolute -right-12 -bottom-8 w-32 h-24 bg-white rounded-lg shadow-lg transform rotate-6 animate-float-code animation-delay-1000 p-2">
                    <div className="text-xs text-gray-500 font-mono overflow-hidden h-full">
                      <div className="text-blue-600">function</div>
                      <div><span className="text-orange-500">trainModel</span>(data) &#123;</div>
                      <div className="pl-3 text-gray-700">return AI.train()</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                  
                  <div className="absolute -left-10 -top-6 w-28 h-20 bg-white rounded-lg shadow-lg transform -rotate-12 animate-float-code animation-delay-2000 p-2">
                    <div className="text-xs text-gray-500 font-mono overflow-hidden h-full">
                      <div><span className="text-orange-500">const</span> <span className="text-blue-600">ai</span> = new AI();</div>
                      <div>ai.analyze(data);</div>
                      <div><span className="text-green-500">// Smart!</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Need AI Development Section - Mobile Responsive */}
      <section className="py-12 sm:py-16 relative overflow-hidden bg-gray-50">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-orange-500/5 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-blue-500/5 rounded-full"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 reveal px-2 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              <span className="text-gray-900">Why Businesses Need </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">AI Development</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              AI transforms how businesses operate, creating unprecedented opportunities for efficiency, insights, and innovation.
            </p>
          </div>
          
          {/* Interactive Benefits Grid - Mobile Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-2 sm:px-0">
            {[
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Automate Complex Tasks",
                description: "Eliminate repetitive work and automate end-to-end processes with AI-powered systems.",
                color: "blue",
                delayValue: "0.1s"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "24/7 Customer Support",
                description: "Deploy AI assistants that engage customers and resolve issues without human fatigue.",
                color: "orange",
                delayValue: "0.2s"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Unstructured Data Insights",
                description: "Extract valuable patterns from text, images and speech that humans might miss.",
                color: "blue",
                delayValue: "0.3s"
              },
              {
                icon: <BarChart2 className="w-8 h-8" />,
                title: "Predictive Decision-Making",
                description: "Forecast trends and make data-driven decisions with confidence using AI analysis.",
                color: "orange",
                delayValue: "0.4s"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Personalized Experiences",
                description: "Deliver highly targeted content and recommendations based on user behavior.",
                color: "blue",
                delayValue: "0.5s"
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Scale Faster",
                description: "Handle growing demands without proportional increases in human resources or costs.",
                color: "orange",
                delayValue: "0.6s"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="reveal fade-in hover-card-rise"
                style={{ animationDelay: benefit.delayValue }}
              >
                <div className="h-full bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg group">
                  <div className="p-4 sm:p-6 relative h-full flex flex-col">
                    {/* Icon with gradient background */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg ${benefit.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'} flex items-center justify-center mb-3 sm:mb-4 text-white transform transition-transform duration-300 group-hover:scale-110`}>
                      {benefit.icon}
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs sm:text-sm flex-grow">
                      {benefit.description}
                    </p>
                    
                    {/* Bottom accent */}
                    <div className={`h-1 w-12 sm:w-16 mt-3 sm:mt-4 bg-gradient-to-r ${benefit.color === 'blue' ? 'from-blue-400 to-blue-600' : 'from-orange-400 to-red-500'} transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-left rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats Highlight - Mobile Responsive */}
          <div className="mt-10 sm:mt-16 bg-white rounded-xl p-4 sm:p-6 md:p-8 reveal slide-up max-w-5xl mx-auto shadow-md border border-gray-100 mx-2 sm:mx-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-2 text-center">
              {[
                { stat: "60%", label: "Reduced Support Costs", color: "blue" },
                { stat: "35%", label: "Increase in Efficiency", color: "orange" },
                { stat: "24/7", label: "Availability", color: "blue" },
                { stat: "45%", label: "Better Decision Making", color: "orange" },
                { stat: "3X", label: "Faster Time to Market", color: "blue" },
                { stat: "90%", label: "Customer Satisfaction", color: "orange" },
              ].map((item, index) => (
                <div key={index} className="relative group hover-card-rise p-2">
                  <div className={`text-xl sm:text-2xl font-bold ${item.color === 'blue' ? 'text-blue-600' : 'text-orange-500'} mb-1`}>{item.stat}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{item.label}</div>
                  <div className={`absolute -inset-1 ${item.color === 'blue' ? 'bg-blue-500/5' : 'bg-orange-500/5'} scale-0 group-hover:scale-100 rounded-lg transition-all duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver AI Development Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        {/* Background element */}
        <div className="absolute h-full w-1 bg-gradient-to-b from-blue-500/20 via-orange-500/20 to-blue-500/20 left-1/2 transform -translate-x-1/2 hidden md:block"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">How We Deliver </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">AI Development</span>
            </h2>
            <p className="text-gray-600 text-base">
              Our proven methodology ensures we deliver AI solutions that solve real business problems with measurable ROI.
            </p>
          </div>
          
          {/* Timeline Steps */}
          <div className="relative max-w-5xl mx-auto">
            {[
              {
                title: "Discovery & Use Case Identification",
                description: "We identify high-impact use cases across your business through workshops and data discovery sessions.",
                icon: <Brain className="w-8 h-8" />,
                color: "blue"
              },
              {
                title: "AI Model Design & Architecture",
                description: "We design AI models tailored to your specific data, requirements, and business goals.",
                icon: <Database className="w-8 h-8" />,
                color: "orange"
              },
              {
                title: "Training & Validation",
                description: "We train and rigorously test these models to ensure accuracy, reliability, and performance.",
                icon: <BarChart2 className="w-8 h-8" />,
                color: "blue"
              },
              {
                title: "Integration & Deployment",
                description: "We seamlessly integrate the AI systems into your workflows, applications, or website.",
                icon: <ArrowRight className="w-8 h-8" />,
                color: "orange"
              },
              {
                title: "Monitoring & Improvement",
                description: "We provide dashboards, analytics, and continuous improvements as your business evolves.",
                icon: <Bot className="w-8 h-8" />,
                color: "blue"
              }
            ].map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`relative flex ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-12 last:mb-0`}
                >
                  {/* Center icon for desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 hidden md:flex items-center justify-center">
                    <div className={`w-12 h-12 ${step.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'} rounded-full
                                   flex items-center justify-center z-10 text-white reveal scale-in shadow-md`} 
                         style={{ animationDelay: `${0.2 * index}s` }}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content box */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:text-right' : 'md:text-left'} reveal ${isEven ? 'slide-in-left' : 'slide-in-right'}`}
                       style={{ animationDelay: `${0.2 * index}s` }}>
                    {/* Mobile icon */}
                    <div className={`w-12 h-12 ${step.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'} rounded-full
                                 flex items-center justify-center mb-4 md:hidden mx-auto text-white`}>
                      {step.icon}
                    </div>
                    
                    <div className="bg-white shadow-md border border-gray-100 rounded-lg p-6
                                 transition-all duration-300 group hover-card-rise">
                      <div className="flex items-center mb-3">
                        <div className={`w-8 h-8 rounded-full ${step.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'} flex items-center justify-center mr-3 text-sm font-bold`}>
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                      
                      {/* Bottom accent */}
                      <div className={`h-1 w-16 mt-4 ${step.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'} transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-left rounded-full ${isEven ? 'ml-auto' : ''}`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative overflow-hidden bg-gray-50">
        {/* Background element */}
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-orange-500/5 rounded-full"></div>
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-blue-500/5 rounded-full"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Benefits of </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">Our AI Solutions</span>
            </h2>
            <p className="text-gray-600 text-base">
              Our AI development brings tangible business value across operations, customer experience, and strategic decision-making.
            </p>
          </div>
          
          {/* Benefits alternating layout */}
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                title: "Increased Operational Efficiency",
                description: "Automate repetitive tasks, streamline processes, and reduce human error to drastically cut operational costs and time investments.",
                icon: <ArrowRight className="w-8 h-8" />,
                color: "blue",
                imageSrc: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&auto=format",
                stats: [{ value: "60%", label: "Faster Processing" }, { value: "40%", label: "Cost Reduction" }],
                direction: "right"
              },
              {
                title: "Enhanced Customer Experiences",
                description: "Create personalized, responsive interactions that understand customer intent and provide intelligent responses or recommendations.",
                icon: <MessageSquare className="w-8 h-8" />,
                color: "orange",
                imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format",
                stats: [{ value: "24/7", label: "Support Coverage" }, { value: "90%", label: "Satisfaction Rate" }],
                direction: "left"
              },
              {
                title: "Competitive Edge Through Innovation",
                description: "Leverage cutting-edge AI to deliver features and capabilities your competitors can't match, creating significant market differentiation.",
                icon: <Brain className="w-8 h-8" />,
                color: "blue",
                imageSrc: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&auto=format",
                stats: [{ value: "3X", label: "Faster Innovation" }, { value: "67%", label: "Competitive Edge" }],
                direction: "right"
              },
              {
                title: "Scalable Solutions for Growth",
                description: "Our AI systems grow with your business, handling increasing workloads and evolving requirements without proportional cost increases.",
                icon: <BarChart2 className="w-8 h-8" />,
                color: "orange",
                imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format",
                stats: [{ value: "10X", label: "Scaling Capacity" }, { value: "50%", label: "Lower Scale Costs" }],
                direction: "left"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="reveal fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={`flex flex-col ${benefit.direction === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center`}>
                  {/* Image with overlay */}
                  <div className="w-full md:w-5/12 overflow-hidden rounded-lg relative hover-card-rise shadow-md">
                    <div className="aspect-video relative overflow-hidden group">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 
                                 group-hover:scale-110"
                        style={{ backgroundImage: `url(${benefit.imageSrc})` }}
                      ></div>
                      <div className={`absolute inset-0 ${benefit.color === 'blue' ? 'bg-gradient-to-br from-blue-600/80 to-blue-900/50' : 'bg-gradient-to-br from-orange-600/80 to-red-700/50'} opacity-80`}></div>
                      
                      {/* Floating icon */}
                      <div className={`absolute top-4 ${benefit.direction === 'left' ? 'left-4' : 'right-4'} w-12 h-12 rounded-full bg-white/90 
                                     flex items-center justify-center animate-pulse-slow ${benefit.color === 'blue' ? 'text-blue-600' : 'text-orange-600'}`}>
                        {benefit.icon}
                      </div>
                      
                      {/* Stats */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                        {benefit.stats.map((stat, i) => (
                          <div key={i} className="bg-white/90 rounded-lg px-3 py-2 shadow-md">
                            <div className={`text-xl font-bold ${benefit.color === 'blue' ? 'text-blue-600' : 'text-orange-600'}`}>{stat.value}</div>
                            <div className="text-xs text-gray-600">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full md:w-7/12 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 text-base">
                      {benefit.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="grid grid-cols-1 gap-3 pt-2">
                      {[1,2,3].map((_, i) => {
                        const features = [
                          "Reduced manual intervention", "Time and cost savings", "Improved accuracy",
                          "Real-time insights", "Personalized interactions", "Proactive intelligence",
                          "Seamless integration", "Predictive capabilities", "Continuous learning",
                          "Scalable architecture", "High availability", "Enterprise-grade security"
                        ];
                        return (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-5 h-5 rounded-full ${benefit.color === 'blue' ? 'bg-blue-100' : 'bg-orange-100'} flex items-center justify-center`}>
                              <div className={`w-2 h-2 rounded-full ${benefit.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
                            </div>
                            <span className="text-sm text-gray-600">
                              {features[index * 3 + i]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-blue-50">
        {/* Colorful background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-300/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-300/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: "radial-gradient(#f97316 1px, transparent 1px), radial-gradient(#8b5cf6 1px, transparent 1px), radial-gradient(#06b6d4 1px, transparent 1px)",
               backgroundSize: "40px 40px, 40px 40px, 40px 40px",
               backgroundPosition: "0 0, 20px 20px, 10px 10px"
             }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-violet-700 rounded-full text-xs font-medium mb-4 border border-violet-500/20 backdrop-blur-sm shadow-sm">
              TAILORED AI SOLUTIONS
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Use Cases for </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500">AI Development</span>
            </h2>
            <p className="text-gray-600 text-base">
              From intelligent chatbots to computer vision and NLP, we build AI systems for diverse business applications.
            </p>
          </div>
          
          {/* Grid for Use Cases - equal height cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "AI Chatbot Development",
                subtitle: "Customer Support & Lead Generation",
                description: "Build intelligent, conversational bots that handle customer queries, qualify leads, and schedule calls.",
                useCase: "E-commerce stores, SaaS platforms, service businesses",
                icon: <MessageSquare className="w-8 h-8" />,
                color: "violet",
                features: ["Natural language understanding", "Multi-channel deployment", "Lead qualification", "Integration with CRM"]
              },
              {
                title: "Custom AI Agents for Task Automation",
                subtitle: "Workflow Optimization",
                description: "Agents that automate data entry, emails, workflows, or any rule-based process using advanced logic and learning.",
                useCase: "HR, logistics, operations, finance departments",
                icon: <Bot className="w-8 h-8" />,
                color: "orange",
                
                features: ["Process automation", "Adaptive learning", "Cross-system integration", "Error reduction"]
              },
              {
                title: "Social Media Management Agents",
                subtitle: "Content Generation & Engagement",
                description: "Automatically generate post ideas, write captions, schedule content, and respond to audience comments—all aligned with your brand voice.",
                useCase: "Influencers, e-commerce brands, agencies managing multiple clients",
                icon: <Database className="w-8 h-8" />,
                color: "teal",
                height: "tall",
                features: ["Content ideation", "Caption writing", "Scheduling", "Engagement monitoring", "Comment responses", "Performance analytics"]
              },
              {
                title: "Natural Language Processing (NLP)",
                subtitle: "Text Understanding & Generation",
                description: "Includes sentiment analysis, keyword extraction, text summarization, and chat understanding for smarter human-AI interactions.",
                useCase: "Surveys, reviews, internal communication, social listening",
                icon: <BarChart2 className="w-8 h-8" />,
                color: "blue",
                
                features: ["Sentiment analysis", "Entity extraction", "Text summarization", "Intent classification"]
              },
              {
                title: "Image Recognition & Computer Vision",
                subtitle: "Visual Intelligence",
                description: "Detects and classifies images, scans barcodes, verifies documents, or tracks objects in video feeds.",
                useCase: "Retail (inventory), agriculture (crop analysis), security (facial recognition), health (X-ray diagnostics)",
                icon: <Eye className="w-8 h-8" />,
                color: "fuchsia",
                
                features: ["Object detection", "Facial recognition", "Document scanning", "Quality control"]
              },
              {
                title: "Recommendation Systems",
                subtitle: "Personalization Engines",
                description: "Suggests products, articles, or content based on user behavior, preferences, or similar users — boosting conversions.",
                useCase: "E-commerce, e-learning, media platforms",
                icon: <Brain className="w-8 h-8" />,
                color: "amber",
                
                features: ["Collaborative filtering", "Content-based recommendations", "Behavioral analysis", "A/B testing"]
              }
            ].map((useCase, index) => (
              <div 
                key={index}
                className="reveal fade-in"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <div className="h-full bg-white rounded-xl overflow-hidden shadow-md group relative hover-card-rise flex flex-col" style={{minHeight: '420px'}}>
                  {/* Top accent bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-white via-white to-white group-hover:via-transparent
                               group-hover:from-transparent group-hover:to-transparent transition-all duration-500 relative overflow-hidden">
                    <div className={`absolute inset-0 ${getGradientByColor(useCase.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Icon with animated background */}
                    <div className="flex items-start mb-4">
                      <div className={`w-16 h-16 rounded-xl ${getBackgroundByColor(useCase.color)} 
                                    flex items-center justify-center transform transition-all duration-300 text-white
                                    group-hover:scale-110 group-hover:rotate-3 shadow-md relative overflow-hidden`}>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 w-full h-full shine-effect"></div>
                        <div className="relative z-10">{useCase.icon}</div>
                      </div>
                      <div className="ml-4">
                        <h3 className={`text-lg font-semibold text-gray-800 ${getHoverTextByColor(useCase.color)} transition-colors duration-300`}>
                          {useCase.title}
                        </h3>
                        <div className="text-xs text-gray-500 mt-1">{useCase.subtitle}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {useCase.description}
                    </p>
                    
                    {/* Use Case Target */}
                    <div className={`${getLightBgByColor(useCase.color)} rounded-lg p-3 mb-4`}>
                      <div className={`text-xs font-medium ${getTextByColor(useCase.color)} mb-1`}>USE CASE</div>
                      <div className="text-sm text-gray-700">{useCase.useCase}</div>
                    </div>
                    
                    {/* Features */}
                    <div className="mt-auto pt-4">
                      <div className={`text-xs font-medium ${getTextByColor(useCase.color)} mb-2`}>KEY FEATURES</div>
                      <div className="flex flex-wrap gap-2">
                        {useCase.features.slice(0, 4).map((feature, i) => (
                          <span 
                            key={i} 
                            className={`text-xs py-1 px-2 rounded-full ${getLightBgByColor(useCase.color)} ${getTextByColor(useCase.color)} border ${getBorderByColor(useCase.color)}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Animated decorative elements */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 ${getLightBgByColor(useCase.color)} rounded-full 
                                  transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-out opacity-30`}></div>
                    <div className={`absolute -bottom-16 -left-16 w-32 h-32 ${getLightBgByColor(useCase.color)} rounded-full 
                                  transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-out opacity-20 delay-100`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-amber-50">
        {/* Background elements - colorful shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-gradient-to-br from-fuchsia-200/20 to-purple-300/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-[15%] left-[5%] w-72 h-72 bg-gradient-to-tr from-amber-200/20 to-orange-300/20 rounded-full blur-xl"></div>
          <div className="absolute top-[40%] left-[20%] w-40 h-40 bg-gradient-to-br from-teal-200/20 to-emerald-300/20 rounded-full blur-xl"></div>
          
          {/* Animated dots pattern */}
          <div className="absolute inset-0 opacity-5"
               style={{
                 backgroundImage: "radial-gradient(#7c3aed 1px, transparent 1px), radial-gradient(#f59e0b 1px, transparent 1px)",
                 backgroundSize: "30px 30px",
                 backgroundPosition: "0 0, 15px 15px"
               }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-500/10 to-fuchsia-500/10 text-fuchsia-700 rounded-full text-xs font-medium mb-4 border border-amber-500/10 backdrop-blur-sm shadow-sm">
              ENTERPRISE-READY AI
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Core </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500">Features</span>
            </h2>
            <p className="text-gray-600 text-base mb-8">
              Our AI development services come with a comprehensive set of features to ensure your solution is enterprise-ready.
            </p>
          </div>
          
          {/* Feature cards - horizontally scrollable on mobile */}
          <div className="relative max-w-6xl mx-auto">
            {/* Scroll indicators (mobile only) */}
            <div className="flex justify-between mb-4 md:hidden">
              <div className="text-xs text-gray-400">← Scroll to see more</div>
              <div className="text-xs text-gray-400">→</div>
            </div>
            
            {/* Scrollable container */}
            <div className="overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
              <div className="flex md:grid md:grid-cols-3 gap-4 w-[200%] md:w-full">
                {[
                  {
                    title: "Custom-trained AI Models",
                    description: "AI systems built specifically for your business needs, trained on your unique data, not generic solutions.",
                    icon: <Brain className="w-6 h-6" />,
                    color: "violet"
                  },
                  {
                    title: "API & Platform Integration",
                    description: "Seamlessly connect your AI solution with existing systems through robust APIs and platform integrations.",
                    icon: <Database className="w-6 h-6" />,
                    color: "teal"
                  },
                  {
                    title: "Data Privacy & Security",
                    description: "Enterprise-grade security and compliance with data privacy regulations built into every solution.",
                    icon: <Bot className="w-6 h-6" />,
                    color: "fuchsia"
                  },
                  {
                    title: "Real-time Processing",
                    description: "Process data in real-time or batch mode depending on your specific performance requirements.",
                    icon: <BarChart2 className="w-6 h-6" />,
                    color: "amber"
                  },
                  {
                    title: "Multi-language Support",
                    description: "NLP and chatbot solutions capable of understanding and responding in multiple languages.",
                    icon: <MessageSquare className="w-6 h-6" />,
                    color: "blue"
                  },
                  {
                    title: "Analytics Dashboard",
                    description: "Comprehensive analytics and reporting to track performance and optimize your AI systems.",
                    icon: <BarChart2 className="w-6 h-6" />,
                    color: "orange"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className="reveal fade-in min-w-[280px] md:min-w-0"
                    style={{ animationDelay: `${0.15 * index}s` }}
                  >
                    <div className="h-full bg-white shadow-md rounded-xl p-6 hover-card-rise group relative overflow-hidden">
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white via-white to-white group-hover:via-transparent
                                   group-hover:from-transparent group-hover:to-transparent transition-all duration-500 overflow-hidden">
                        <div className={`absolute inset-0 ${getGradientByColor(feature.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-lg ${getBackgroundByColor(feature.color)} text-white
                                       flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                                       shadow-md relative overflow-hidden`}>
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 w-full h-full shine-effect"></div>
                          <div className="relative z-10">{feature.icon}</div>
                        </div>
                        <div className="ml-4">
                          <h3 className={`font-semibold text-gray-800 ${getHoverTextByColor(feature.color)} transition-colors duration-300`}>
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                      
                      {/* Decorative elements */}
                      <div className={`h-1 w-0 ${getBackgroundByColor(feature.color)} rounded-full mt-4 group-hover:w-16 transition-all duration-500 ease-out`}></div>
                      <div className={`absolute -bottom-16 -right-16 w-32 h-32 ${getLightBgByColor(feature.color)} rounded-full opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-100 transition-all duration-500`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional feature highlight - cloud platforms */}
          <div className="mt-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 reveal fade-in max-w-4xl mx-auto
                        shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-200/20 to-fuchsia-200/20 rounded-full blur-xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-200/20 to-orange-200/20 rounded-full blur-xl -z-10"></div>
                
            <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/10 to-violet-500/10 text-violet-700 rounded-full text-xs font-medium mb-3 border border-purple-200">
                  ENTERPRISE SOLUTIONS
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">Cloud Platform</span> Deployment
                </h3>
                <p className="text-gray-600 text-base mb-6">
                  We deploy your AI solutions on industry-leading cloud platforms with scalable infrastructure, ensuring optimal performance and reliability.                
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "AWS", color: "amber" },
                    { name: "Google Cloud", color: "teal" },
                    { name: "Microsoft Azure", color: "blue" }
                  ].map((platform, i) => (
                    <div key={i} className={`py-1.5 px-4 ${getLightBgByColor(platform.color)} rounded-full text-sm ${getTextByColor(platform.color)} border ${getBorderByColor(platform.color)} hover-card-rise transition-transform duration-300`}>
                      {platform.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-violet-200 to-fuchsia-200 opacity-40 blur-lg animate-pulse-slow"></div>
                  <div className="w-32 h-32 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-3 translate-y-3 bg-gradient-to-br from-amber-200 to-orange-200 opacity-40 blur-lg animate-pulse-slow delay-700"></div>
                  <div className="w-24 h-24 rounded-xl bg-white shadow-lg flex items-center justify-center relative z-10 rotate-12 hover-card-rise">
                    <Eye className="w-14 h-14 text-fuchsia-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-amber-50">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Colorful gradient blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-fuchsia-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/10 to-teal-300/10 rounded-full blur-3xl"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => {
              const colors = ['bg-violet-400', 'bg-fuchsia-400', 'bg-amber-400', 'bg-orange-400', 'bg-blue-400', 'bg-teal-400'];
              const randomColor = colors[Math.floor(Math.random() * colors.length)];
              return (
                <div 
                  key={i}
                  className={`absolute ${randomColor} opacity-20 rounded-full animate-float-slow`}
                  style={{
                    width: `${Math.random() * 8 + 3}px`,
                    height: `${Math.random() * 8 + 3}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 20 + 15}s`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                ></div>
              );
            })}
          </div>
          
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-5"
               style={{
                 backgroundImage: "radial-gradient(#8b5cf6 1px, transparent 1px), radial-gradient(#f59e0b 1px, transparent 1px)",
                 backgroundSize: "40px 40px",
                 backgroundPosition: "0 0, 20px 20px"
               }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl reveal fade-in relative">
            {/* Top colorful accent bar */}
            <div className="h-2 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-500"></div>
            
            <div className="p-10 md:p-16">
              <div className="text-center mb-10">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 text-violet-700 rounded-full text-xs font-medium mb-4 border border-violet-200 shadow-sm">
                  UNLOCK AI POTENTIAL
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gray-900">Build Intelligent Systems </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500">That Work While You Sleep</span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                  Whether it's a chatbot, a computer vision system, or an entire fleet of AI agents—we'll help you develop and deploy custom AI solutions for growth.
                </p>
              </div>
              
              {/* Stylish benefits grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
                {[
                  { icon: <Brain className="w-5 h-5" />, text: "Custom AI Models", color: "violet" },
                  { icon: <Bot className="w-5 h-5" />, text: "24/7 Automation", color: "fuchsia" },
                  { icon: <Database className="w-5 h-5" />, text: "Scalable Solutions", color: "blue" },
                  { icon: <BarChart2 className="w-5 h-5" />, text: "Data-Driven Insights", color: "amber" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 rounded-xl border hover-card-rise transition-all duration-300 group"
                    style={{ borderColor: `rgba(var(--${item.color}-200-rgb), 0.5)` }}
                  >
                    <div className={`w-10 h-10 rounded-lg ${getBackgroundByColor(item.color)} flex items-center justify-center mr-3 text-white
                                   shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900">{item.text}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <button 
                  onClick={handleCTAClick}
                  className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 
                           text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 
                           shadow-lg hover:shadow-fuchsia-500/30 group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Schedule Your Free Strategy Session
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  
                  {/* Button animation effects */}
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-700 via-fuchsia-700 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-out blur-xl"></span>
                </button>
                
                <div className="mt-4 text-gray-500 flex justify-center gap-1 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Let's explore how AI can unlock new value in your business—risk-free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDevelopment;
