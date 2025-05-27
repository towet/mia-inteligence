import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, FileText, GraduationCap, 
  PenTool, BookOpen, Award, FileSearch, Clock, Users,
  Search, FileCheck, MessageSquare, Briefcase, Menu
} from 'lucide-react';

const ResearchAndAcademicWriting: React.FC = () => {
  // Function to handle CTA button clicks
  const handleCTAClick = () => {
    // Scroll to contact form or open contact modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
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

    document.querySelectorAll('.reveal, .slide-in-left, .slide-in-right, .fade-scale, .rotate-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
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
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-lg text-gray-900">Global Expert<span className="text-indigo-600">.</span></div>
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
            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Home</Link>
            <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Services</Link>
            <Link to="/portfolio" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Portfolio</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>About</Link>
            <Link to="/contact" className="block px-4 py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Contact Us</Link>
          </div>
        </div>
      </nav>
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-24 pb-20 mt-16 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        {/* Decorative elements */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-bl-full" 
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-tr-full"
          style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
        ></div>
        
        {/* Abstract background - subtle */}
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
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-2 animate-pulse">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs">A+</div>
                    <div className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs">A+</div>
                  </div>
                  <span>98.7% Client Success Rate</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-gray-900">Get Guaranteed A+ Results</span>
                  <div className="relative">
                    <span className="block bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
                      or Your Money Back
                    </span>
                    <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-500 rounded-full transform scale-x-0 transition-transform duration-1000 animate-scale-x-full"></div>
                  </div>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  <strong>Expert PhD writers</strong> deliver <strong>plagiarism-free</strong> papers that get top grades. Let us handle your research while you focus on what matters most—your studies and well-being.
                </p>
              </div>
              
              {/* Testimonial */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">JM</div>
                  <div>
                    <div className="font-semibold">James M.</div>
                    <div className="text-sm text-gray-500">Master's Student, University of Nairobi</div>
                  </div>
                </div>
                <div className="italic text-gray-600 text-sm mb-2">
                  "I was struggling with my dissertation until I found this service. Their writers delivered exceptional quality, and I got an A. The turnaround was impressively fast too!"  
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-gray-500">Verified Review</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleCTAClick} 
                  className="px-8 py-4 bg-indigo-500 text-white rounded-xl font-semibold 
                          hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105
                          shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2 group"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex items-center justify-center text-sm text-indigo-600 animate-pulse">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Special Offer: 25% Off All Papers + Free Turnitin Report</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-600 text-sm bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>100%</strong> Plagiarism-Free</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>PhD/MSc</strong> Writers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>24hr</strong> Turnaround Available</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>100%</strong> Confidential</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>Money-Back</strong> Guarantee</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>Free</strong> Unlimited Revisions</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-indigo-100 p-3 rounded-lg">
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-sm font-medium">Used by 10,000+ students from 50+ universities across Kenya</span>
                </div>
                <div className="text-xs font-semibold px-2 py-1 bg-white text-indigo-600 rounded">#1 Rated</div>
              </div>
            </div>
            
            <div className="relative slide-in-right">
              {/* Floating Document Mockup */}
              <div className="relative mx-auto z-20 shadow-2xl rounded-xl overflow-hidden
                            transform transition-all duration-700 hover:scale-105 hover:rotate-1">
                <div className="bg-gray-800 h-8 rounded-t-xl flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto bg-gray-700 rounded-full px-4 py-1 text-xs text-gray-300 flex items-center">
                    <FileText className="w-3 h-3 mr-1" />
                    research-paper-final.pdf
                  </div>
                </div>
                <div className="bg-white aspect-video relative">
                  {/* Mock document content */}
                  <img 
                    src="https://res.cloudinary.com/dtbzsezyo/image/upload/v1720010546/academic-research-paper_kcxhfv.jpg" 
                    alt="Academic research paper" 
                    className="w-full h-full object-cover"
                  />
                  {/* Animated loading bar at top */}
                  <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 animate-loading-bar"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-full animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
              
              {/* Floating books and research elements */}
              <div className="absolute -bottom-3 right-10 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl
                          transform -rotate-3 animate-float-slow">
                <BookOpen className="w-10 h-10 text-indigo-500" />
              </div>
              
              <div className="absolute top-10 -left-3 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl
                          transform rotate-6 animate-float">
                <GraduationCap className="w-10 h-10 text-blue-500" />
              </div>
              
              {/* Citation snippet */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl
                          transform rotate-3 text-xs text-gray-800 font-mono animate-float-code">
                <div className="text-indigo-600">@article</div>
                <div className="text-blue-600">{"{"}<span className="text-purple-600">Author2023,</span>{"}"}</div>
                <div>&nbsp;<span className="text-gray-600">title</span> = {"{"}<span className="text-green-600">Research Findings</span>{"}"}</div>
                <div>&nbsp;<span className="text-gray-600">journal</span> = {"{"}<span className="text-green-600">Journal of Science</span>{"}"}</div>
                <div>&nbsp;<span className="text-gray-600">year</span> = {"{"}<span className="text-orange-600">2023</span>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Academic Writing Services */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* Background decorative elements */}
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-indigo-50 opacity-60 blur-xl animate-pulse-slow will-change-transform"></div>
          <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-blue-100 opacity-40 blur-lg animate-float-slow will-change-transform"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10 reveal">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 mb-4 shadow-md shadow-indigo-500/20 animate-pulse-slow">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 flex flex-col sm:flex-row items-center justify-center gap-2">
                <span>Why Choose Our </span>
                <span className="text-indigo-600 relative">
                  Academic Writing Services
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-indigo-600 transform scale-x-0 transition-transform duration-1000 group-hover:scale-x-100 animate-scale-x-full"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                We combine academic expertise with a passion for helping students and professionals succeed
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: "PhD & Masters Level Experts",
                  description: "Our team includes specialists with advanced degrees across multiple disciplines",
                  icon: GraduationCap,
                  delay: 0
                },
                {
                  title: "Original, Plagiarism-Free Content",
                  description: "Every document is written from scratch and passes strict plagiarism checks",
                  icon: FileCheck,
                  delay: 100
                },
                {
                  title: "Comprehensive Research",
                  description: "In-depth analysis using credible academic sources and databases",
                  icon: Search,
                  delay: 200
                },
                {
                  title: "On-Time Delivery",
                  description: "We respect deadlines and deliver polished work when you need it",
                  icon: Clock,
                  delay: 300
                },
                {
                  title: "Personalized Approach",
                  description: "Tailored to your specific requirements, voice, and academic standards",
                  icon: Users,
                  delay: 400
                },
                {
                  title: "Unlimited Revisions",
                  description: "We refine the work until it meets your complete satisfaction",
                  icon: PenTool,
                  delay: 500
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="reveal p-6 rounded-xl bg-white border border-indigo-100 hover:border-indigo-300 transition-all duration-300 
                           shadow-lg hover:shadow-xl group flex gap-4"
                  style={{ transitionDelay: `${feature.delay}ms` }}
                >
                  <div className="bg-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center shrink-0
                               group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(feature.icon, { className: 'w-6 h-6 text-white' })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-indigo-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button 
                onClick={handleCTAClick} 
                className="px-8 py-4 bg-indigo-500 text-white rounded-xl font-semibold 
                        hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105
                        shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2 group mx-auto"
              >
                Get Your Custom Quote
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Research & Writing Process */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 reveal px-2 sm:px-0">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-3 sm:mb-4 shadow-md shadow-blue-500/20">
              <FileSearch className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">
              Our Research & Writing <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
              A methodical approach that ensures quality, originality, and academic excellence
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16 relative">
              {[
                {
                  title: "Initial Consultation",
                  description: "We begin with a thorough discussion of your requirements, expectations, and academic goals to ensure perfect alignment.",
                  icon: MessageSquare,
                  position: "left"
                },
                {
                  title: "In-Depth Research",
                  description: "Our experts conduct comprehensive research using credible academic sources, journals, and databases relevant to your topic.",
                  icon: Search,
                  position: "right"
                },
                {
                  title: "Detailed Outline",
                  description: "We create a structured outline that maps the logical flow of ideas and arguments for your approval.",
                  icon: FileText,
                  position: "left"
                },
                {
                  title: "Writing & Citation",
                  description: "The document is crafted with meticulous attention to academic standards, proper citation formats, and scholarly language.",
                  icon: PenTool,
                  position: "right"
                },
                {
                  title: "Quality Assurance",
                  description: "Multiple rounds of proofreading, plagiarism checks, and fact verification ensure impeccable quality.",
                  icon: FileCheck,
                  position: "left"
                },
                {
                  title: "Delivery & Support",
                  description: "We deliver the final document and remain available for any clarifications or revisions you may need.",
                  icon: Briefcase,
                  position: "right"
                }
              ].map((step, index) => (
                <div key={index} className={`flex items-center relative ${step.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col mb-10 sm:mb-0`}>
                  <div className={`md:w-1/2 space-y-2 sm:space-y-4 ${step.position === 'left' ? 'md:pr-8 lg:pr-12 md:text-right' : 'md:pl-8 lg:pl-12'} reveal px-2 sm:px-0`}>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2 
                                 group-hover:text-blue-500 transition-colors duration-300
                                 md:flex-row-reverse justify-start md:justify-end">
                      <span>{step.title}</span>
                      <span className="text-blue-500 text-sm sm:text-base">0{index + 1}</span>
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2
                               bg-gradient-to-br from-blue-500 to-indigo-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                               shadow-lg shadow-blue-500/20 z-10 my-3 sm:my-4 md:my-0">
                    {React.createElement(step.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 text-white' })}
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-indigo-600 to-blue-700 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/4 sm:w-1/3 h-1/4 sm:h-1/3 bg-white/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 sm:w-1/3 h-1/4 sm:h-1/3 bg-white/5 rounded-tr-full"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 reveal">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready to elevate your <span className="text-indigo-200">academic work</span>?
              </h2>
              <p className="text-indigo-100 text-sm sm:text-base md:text-lg">
                Let our experts help you achieve academic excellence with custom research and writing support tailored to your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={handleCTAClick} 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 rounded-xl font-semibold 
                          hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105
                          shadow-lg hover:shadow-white/20 flex items-center justify-center gap-2 group
                          text-sm sm:text-base"
                >
                  Get Started Today
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={handleCTAClick}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/50 text-white rounded-xl font-semibold
                          hover:border-white hover:bg-white/10 
                          transition-all duration-300 flex items-center justify-center gap-2 group
                          text-sm sm:text-base"
                >
                  View Service Packages
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-6 reveal">
              {[
                { stat: "95%", label: "Client Satisfaction" },
                { stat: "1000+", label: "Projects Completed" },
                { stat: "100%", label: "On-Time Delivery" },
                { stat: "50+", label: "Academic Experts" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-white">{item.stat}</div>
                  <div className="text-indigo-200 text-sm sm:text-base">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchAndAcademicWriting;

// Add animation keyframes to index.css
/*
@keyframes scale-x-full {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
@keyframes float-code {
  0%, 100% { transform: translateY(0) rotate(3deg); }
  50% { transform: translateY(-10px) rotate(3deg); }
}
@keyframes loading-bar {
  0% { width: 0; }
  100% { width: 100%; }
}
@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.8; }
}
*/
