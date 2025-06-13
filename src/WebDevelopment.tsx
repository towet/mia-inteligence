import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, Globe, Code, ShoppingCart, Zap, Layout, 
  Database, AlertTriangle, Clock, UserX, Settings, Phone, Mail,
  MonitorSmartphone, Layers, Repeat, Shield, Palette, Star, MessageSquare, Briefcase,
  Brain, BarChart2, Bot, Sparkles, Menu
} from 'lucide-react';

const WebDevelopment: React.FC = () => {
  // Function to handle CTA button clicks to open consultation form
  const handleCTAClick = () => {
    // Navigate to homepage with query parameter to open consultation form
    window.location.href = '/?openConsultation=true';
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

  // Handler for CTA buttons is defined above

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
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
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
            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Home</Link>
            <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Services</Link>
            <Link to="/portfolio" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Portfolio</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>About</Link>
            <Link to="/contact" className="block px-4 py-2 text-orange-600 font-medium hover:bg-orange-50 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Contact Us</Link>
          </div>
        </div>
      </nav>
      
      {/* Hero Section with Parallax Effect */}
      <section className="py-8 sm:py-20 md:py-24 relative overflow-hidden bg-gray-50 hero-section">
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

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-5 sm:space-y-8 slide-in-left">
              <div className="space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-semibold mb-2 animate-pulse">
                  <div className="flex -space-x-1">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] sm:text-xs">✓</div>
                    <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] sm:text-xs">✓</div>
                  </div>
                  <span className="text-xs sm:text-sm">Trusted By 200+ Kenyan Businesses</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left">
                  <span className="block text-gray-900">Double Your <br className="md:hidden"/>Online Revenue With</span>
                  <div className="relative mt-1 sm:mt-2">
                    <span className="block bg-gradient-to-r from-orange-600 via-red-500 to-orange-500 text-transparent bg-clip-text">
                      Custom Website Solutions
                    </span>
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 w-full bg-gradient-to-r from-orange-600 via-red-500 to-orange-500 rounded-full transform scale-x-0 transition-transform duration-1000 animate-scale-x-full"></div>
                  </div>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                  <strong>Average 92% increase in leads</strong> for our clients. Get a conversion-optimized website custom-built to attract your ideal customers and grow your business 24/7.
                </p>
              </div>
              
              {/* Social proof */}
              <div className="bg-gray-50 border border-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                <div className="shrink-0">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <svg key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-gray-600 font-semibold text-xs sm:text-sm">5.0/5 (127 Reviews)</div>
                </div>
                <div className="border-l border-gray-200 pl-3 sm:pl-4">
                  <div className="italic text-gray-600 text-xs sm:text-sm">"Our new website increased our conversions by 215% in just 3 months."</div>
                  <div className="text-gray-800 font-semibold text-xs sm:text-sm">— Sarah K., Business Owner</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <button 
                  onClick={handleCTAClick} 
                  className="px-5 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-lg sm:rounded-xl font-semibold 
                          hover:bg-orange-600 transition-all duration-300 transform hover:scale-105
                          shadow-md sm:shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2 group text-sm sm:text-base w-full sm:w-auto"
                >
                  Get Free Website Audit
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="text-xs sm:text-sm text-orange-600 animate-pulse flex items-center">
                  <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-1" />
                  <span className="whitespace-normal sm:whitespace-nowrap">Limited Time: 50% Off Development + Free SEO</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-500 text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-500" />
                  <span>100% Responsive</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-500" />
                  <span>SEO Optimized</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-500" />
                  <span>Fast Loading</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-500" />
                  <span>E-commerce Ready</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-500" />
                  <span>30-Day Delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-500" />
                  <span>Lifetime Support</span>
                </div>
              </div>
              
              <div className="pt-3 sm:pt-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 text-left">RECENT CLIENTS</p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-start opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <img src="https://res.cloudinary.com/dtbzsezyo/image/upload/v1720016992/client-logo-1_lqohes.png" alt="Client 1" className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                  <img src="https://res.cloudinary.com/dtbzsezyo/image/upload/v1720016992/client-logo-2_bwgibr.png" alt="Client 2" className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                  <img src="https://res.cloudinary.com/dtbzsezyo/image/upload/v1720016992/client-logo-3_vdnajq.png" alt="Client 3" className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            </div>
            
            <div className="relative slide-in-right">
              {/* Floating Browser Mockup */}
              <div className="relative mx-auto z-20 shadow-2xl rounded-xl overflow-hidden
                            transform transition-all duration-700 hover:scale-105 hover:rotate-1">
                <div className="bg-gray-800 h-8 rounded-t-xl flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto bg-gray-700 rounded-full px-4 py-1 text-xs text-gray-300 flex items-center">
                    <Globe className="w-3 h-3 mr-1" />
                    yourawesomesite.com
                  </div>
                </div>
                <div className="bg-white aspect-video relative">
                  {/* Mock website content */}
                  <img 
                    src="https://qodeinteractive.com/magazine/wp-content/uploads/2021/10/An-Exploration-of-the-80s-Retro-Style-in-Modern-Web-Design.jpg" 
                    alt="Modern website design" 
                    className="w-full h-full object-cover"
                  />
                  {/* Animated loading bar at top */}
                  <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 animate-loading-bar"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
              
              {/* Code snippet */}
              <div className="absolute -bottom-3 -right-3 md:bottom-10 md:right-10 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl
                          transform rotate-3 text-xs text-gray-800 font-mono animate-float-code">
                <div className="text-blue-600">function&nbsp;</div>
                <div className="text-purple-600">createAmazing</div>
                <div className="text-blue-600">()</div>
                <div>&nbsp;{`{`}</div>
                <div>&nbsp;&nbsp;<span className="text-green-600">return</span>&nbsp;<span className="text-orange-600">'websites'</span>;</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Most Websites Fail Section - Redesigned to be more stylish and interactive */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* Background decorative elements */}
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-red-50 opacity-60 blur-xl animate-pulse-slow will-change-transform"></div>
          <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-red-100 opacity-40 blur-lg animate-float-slow will-change-transform"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10 reveal">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 mb-4 shadow-md shadow-red-500/20 animate-pulse-slow">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="text-red-600 relative">
                  Why Most Websites Fail
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-600 transform scale-x-0 transition-transform duration-1000 group-hover:scale-x-100 animate-scale-x-full"></span>
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 mb-8">
              {/* Interactive Problem Cards - Redesigned to be more compact and animated */}
              {[
                {
                  icon: <Palette className="w-5 h-5" />,
                  title: "Look Outdated",
                  stat: "0.05s",
                  statText: "to judge quality",
                  color: "red"
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: "Load Too Slow",
                  stat: "53%",
                  statText: "leave slow sites",
                  color: "orange"
                },
                {
                  icon: <UserX className="w-5 h-5" />,
                  title: "Poor Conversion",
                  stat: "$$$",
                  statText: "revenue loss",
                  color: "amber"
                },
                {
                  icon: <Layers className="w-5 h-5" />,
                  title: "Break Easily",
                  stat: "70%",
                  statText: "need rebuilds",
                  color: "rose"
                }
              ].map((problem, index) => {
                const colorClasses = {
                  red: "from-red-500 to-red-600 shadow-red-500/20 border-red-100",
                  orange: "from-orange-500 to-orange-600 shadow-orange-500/20 border-orange-100",
                  amber: "from-amber-500 to-amber-600 shadow-amber-500/20 border-amber-100",
                  rose: "from-rose-500 to-rose-600 shadow-rose-500/20 border-rose-100"
                };
                
                return (
                  <div 
                    key={index}
                    className={`group cursor-pointer reveal bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 will-change-transform hover:-translate-y-1 ${colorClasses[problem.color as keyof typeof colorClasses].split(' ')[4]}`}
                  >
                    <div className={`h-1 w-full bg-gradient-to-r ${colorClasses[problem.color as keyof typeof colorClasses].split(' ').slice(0,2).join(' ')}`}></div>
                    <div className="p-3 sm:p-4">
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center bg-gradient-to-br ${colorClasses[problem.color as keyof typeof colorClasses].split(' ').slice(0,2).join(' ')} transform transition-transform duration-300 group-hover:scale-110 shadow-sm ${colorClasses[problem.color as keyof typeof colorClasses].split(' ')[3]}`}>
                          <div className="text-white">{problem.icon}</div>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800 mb-1">{problem.title}</h3>
                        <div className="flex flex-col">
                          <span className={`text-xl font-bold bg-gradient-to-r ${colorClasses[problem.color as keyof typeof colorClasses].split(' ').slice(0,2).join(' ')} bg-clip-text text-transparent`}>
                            {problem.stat}
                          </span>
                          <span className="text-xs text-gray-500">{problem.statText}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Animation for Revenue Leaking */}
            <div className="mt-6 text-center reveal">
              <div 
                className="inline-flex flex-col sm:flex-row items-center justify-center py-3 px-4 sm:px-6 rounded-lg bg-gradient-to-r from-red-50 to-red-100 text-red-700 font-semibold text-sm gap-2 shadow-sm cursor-pointer hover:shadow-md transition-all duration-300 group animate-pulse-slow"
                onClick={() => console.log('Clicked revenue leak warning')}
              >
                <div className="flex items-center gap-2">
                  <span className="animate-bounce inline-block">💰</span>
                  <span>That's revenue leaking from your site</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute right-10 bottom-20 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-5">
              <Check className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              What You Get With Our <span className="text-green-600">Web Development Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              We don't just build websites—we build digital growth machines.
            </p>
          </div>

          {/* Feature/Benefit Cards - Improved Mobile Responsiveness */}
          <div className="reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-0">
              {[
                {
                  feature: "Custom Website Design",
                  benefit: "Tailored design that reflects your brand, not a cookie-cutter template.",
                  icon: <Palette className="w-5 h-5" />,
                  color: "blue"
                },
                {
                  feature: "E-Commerce Solutions",
                  benefit: "Fully integrated online store with payments, cart, shipping, and more.",
                  icon: <ShoppingCart className="w-5 h-5" />,
                  color: "indigo"
                },
                {
                  feature: "Responsive Design",
                  benefit: "Flawless mobile & tablet experience to retain users everywhere.",
                  icon: <MonitorSmartphone className="w-5 h-5" />,
                  color: "cyan"
                },
                {
                  feature: "Performance Optimization",
                  benefit: "Blazing speed, SEO best practices, and Core Web Vitals compliance.",
                  icon: <Zap className="w-5 h-5" />,
                  color: "amber"
                },
                {
                  feature: "UI/UX Design",
                  benefit: "Interfaces that feel as good as they look—designed for conversion.",
                  icon: <Layout className="w-5 h-5" />,
                  color: "purple"
                },
                {
                  feature: "Web App Development",
                  benefit: "Build powerful dashboards, CRMs, or portals custom-fit to your needs.",
                  icon: <Code className="w-5 h-5" />,
                  color: "green"
                },
                {
                  feature: "CMS Setup",
                  benefit: "WordPress, Shopify, Webflow & others—manage your content with ease.",
                  icon: <Database className="w-5 h-5" />,
                  color: "red"
                },
                {
                  feature: "Custom Forms & Workflows",
                  benefit: "From booking systems to auto-quoting calculators.",
                  icon: <Repeat className="w-5 h-5" />,
                  color: "pink"
                },
                {
                  feature: "Security & Maintenance",
                  benefit: "SSL, backups, firewall, and ongoing support to keep you safe.",
                  icon: <Shield className="w-5 h-5" />,
                  color: "teal"
                }
              ].map((item, index) => {
                const colorClasses = {
                  blue: "bg-blue-50 text-blue-600 border-blue-200",
                  indigo: "bg-indigo-50 text-indigo-600 border-indigo-200",
                  cyan: "bg-cyan-50 text-cyan-600 border-cyan-200",
                  amber: "bg-amber-50 text-amber-600 border-amber-200",
                  purple: "bg-purple-50 text-purple-600 border-purple-200",
                  green: "bg-green-50 text-green-600 border-green-200",
                  red: "bg-red-50 text-red-600 border-red-200",
                  pink: "bg-pink-50 text-pink-600 border-pink-200",
                  teal: "bg-teal-50 text-teal-600 border-teal-200"
                };
                const iconBgClass = `bg-${item.color}-100 text-${item.color}-500`;
                
                return (
                  <div 
                    key={index} 
                    className={`flex gap-3 p-4 rounded-lg border hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${colorClasses[item.color as keyof typeof colorClasses]}`}
                  >
                    <div className="mt-1">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBgClass.replace('text', 'bg').replace('500', '100')}`}>
                        <div className={iconBgClass.replace('bg', 'text')}>{item.icon}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 text-sm sm:text-base">{item.feature}</div>
                      <div className="text-xs sm:text-sm mt-1 text-gray-600 leading-relaxed">{item.benefit}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Service Explorer - Mobile Responsive */}
          <div className="mt-12 sm:mt-16 bg-white p-5 sm:p-8 rounded-2xl shadow-lg reveal mx-2 sm:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">Need help choosing the right service?</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Tell us about your project goals and timeline, and we'll recommend the perfect web development package for your needs.</p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start sm:items-center gap-2 will-change-transform hover:-translate-x-1 transition-transform duration-300">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <p className="text-gray-700 text-sm sm:text-base">Free consultation with a web development expert</p>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 will-change-transform hover:-translate-x-1 transition-transform duration-300">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <p className="text-gray-700 text-sm sm:text-base">Custom quote based on your specific requirements</p>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 will-change-transform hover:-translate-x-1 transition-transform duration-300">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <p className="text-gray-700 text-sm sm:text-base">Transparent pricing with no hidden fees</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center md:items-end space-y-3 sm:space-y-4 mt-4 md:mt-0">
                <button 
                  onClick={handleCTAClick}
                  className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold 
                        hover:from-blue-600 hover:to-blue-700 transition-all duration-300 will-change-transform
                        shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-2 group
                        text-sm sm:text-base">
                  Get Custom Quote
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={handleCTAClick}
                  className="w-full md:w-auto px-6 sm:px-8 py-2 sm:py-3 border-2 border-gray-300 bg-white text-gray-700 rounded-xl font-medium
                        hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group
                        text-sm sm:text-base">
                  View Service Comparison
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Call-to-Action - Mobile Responsive */}
          <div className="mt-12 sm:mt-16 text-center reveal mx-2 sm:mx-0">
            <button 
              onClick={handleCTAClick}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold 
                      hover:from-green-600 hover:to-green-700 transition-all duration-300 
                      shadow-lg hover:shadow-green-500/20 transform hover:-translate-y-1
                      text-sm sm:text-base"
            >
              Get Your Custom Website
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Web Solutions Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Optimized background blurs - reduced size for performance */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-2xl will-change-transform"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full opacity-20 blur-2xl will-change-transform"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 reveal px-2 sm:px-0">
            <span className="inline-block px-3 sm:px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">OUR EXPERTISE</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              <span className="text-blue-600">Web Development</span> Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
              Tailored solutions for every business need, from simple websites to complex web applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-2 sm:px-0">
            {[
              {
                icon: <Database className="w-5 h-5" />,
                title: "Backend/API",
                desc: "Secure backend logic & APIs your platform needs.",
                tagline: "For dynamic content, user logins",
                color: "indigo"
              },
              {
                icon: <Settings className="w-5 h-5" />,
                title: "Maintenance",
                desc: "Keep your site updated, secure & bug-free.",
                tagline: "For peace of mind after deployment",
                color: "cyan"
              },
              {
                icon: <Layout className="w-5 h-5" />,
                title: "WordPress & CMS",
                desc: "CMS development to simplify content updates.",
                tagline: "For content publishers, local businesses",
                color: "blue"
              },
              {
                icon: <MonitorSmartphone className="w-5 h-5" />,
                title: "Web Integrations",
                desc: "HubSpot, Mailchimp & custom AI chatbots.",
                tagline: "For marketing, sales, customer support",
                color: "purple"
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "Business Sites",
                desc: "Fast-loading, SEO-optimized custom sites.",
                tagline: "For startups, agencies, SMEs",
                color: "green"
              },
              {
                icon: <ShoppingCart className="w-5 h-5" />,
                title: "E-commerce",
                desc: "Online stores with payments & inventory.",
                tagline: "For retailers & product sellers",
                color: "amber"
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Landing Pages",
                desc: "High-conversion pages for specific actions.",
                tagline: "For campaigns & lead generation",
                color: "rose"
              },
              {
                icon: <Code className="w-5 h-5" />,
                title: "Web Applications",
                desc: "Custom apps with complex functionality.",
                tagline: "For SaaS, portals, dashboards",
                color: "orange"
              }
            ].map((service, index) => {
              const colorMap = {
                indigo: "bg-indigo-100 text-indigo-600",
                cyan: "bg-cyan-100 text-cyan-600",
                blue: "bg-blue-100 text-blue-600",
                purple: "bg-purple-100 text-purple-600",
                green: "bg-green-100 text-green-600",
                amber: "bg-amber-100 text-amber-600",
                rose: "bg-rose-100 text-rose-600",
                orange: "bg-orange-100 text-orange-600"
              };
              
              return (
                <div 
                  key={index}
                  className="reveal bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center ${colorMap[service.color as keyof typeof colorMap].split(' ')[0]}`}>
                        <div className={colorMap[service.color as keyof typeof colorMap].split(' ')[1]}>
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-800">{service.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">{service.desc}</p>
                    <p className={`text-xs sm:text-sm font-medium mt-auto ${colorMap[service.color as keyof typeof colorMap].split(' ')[1]}`}>
                      {service.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Service Explorer */}
          <div className="mt-10 sm:mt-12 bg-white p-5 sm:p-6 rounded-xl shadow-md reveal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Need help choosing?</h3>
                <p className="text-gray-600 mb-4 text-sm">Tell us about your project goals and we'll recommend the perfect web development package.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 will-change-transform hover:-translate-x-1 transition-transform duration-300">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Free consultation with a web expert</p>
                  </div>
                  <div className="flex items-center gap-2 will-change-transform hover:-translate-x-1 transition-transform duration-300">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Custom quote based on your requirements</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center md:items-end space-y-3">
                <button 
                  onClick={handleCTAClick}
                  className="w-full md:w-auto px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium 
                        hover:from-blue-600 hover:to-blue-700 transition-all duration-300 will-change-transform
                        shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-1 text-sm">
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
          
      {/* Web Services Showcase - Additional Details */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Popular <span className="text-orange-500">Solutions</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Our most requested services, delivered by experts in web technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Backend/API Development */}
            <div className="reveal bg-white rounded-lg shadow-sm p-4 hover:shadow transition-all duration-300 border border-gray-100 hover:border-indigo-100">
              <div className="flex gap-3 items-start">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Database className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1 text-gray-900">Backend Development</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Secure APIs and robust database systems
                  </p>
                </div>
              </div>
            </div>
            
            {/* Maintenance & Support */}
            <div className="reveal bg-white rounded-lg shadow-sm p-4 hover:shadow transition-all duration-300 border border-gray-100 hover:border-cyan-100">
              <div className="flex gap-3 items-start">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <Settings className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1 text-gray-900">Maintenance Support</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Keep your site secure and bug-free
                  </p>
                </div>
              </div>
            </div>
            
            {/* WordPress & CMS */}
            <div className="reveal bg-white rounded-lg shadow-sm p-4 hover:shadow transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <div className="flex gap-3 items-start">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Layout className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1 text-gray-900">CMS Development</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    WordPress and custom content systems
                  </p>
                </div>
              </div>
            </div>
            
            {/* Web Integrations */}
            <div className="reveal bg-white rounded-lg shadow-sm p-4 hover:shadow transition-all duration-300 border border-gray-100 hover:border-purple-100">
              <div className="flex gap-3 items-start">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <MonitorSmartphone className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1 text-gray-900">API Integrations</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    CRMs, payment systems, and AI tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Web Experiences We Build Section - More compact and visually appealing */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 reveal">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">OUR PROJECTS</span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Web Experiences</span> That Convert
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Modern web solutions built for real business results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                icon: <Zap className="w-5 h-5 text-amber-500" />,
                title: "Landing Pages",
                description: "High-converting",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                delay: 0,
                color: "amber"
              },
              {
                icon: <ShoppingCart className="w-5 h-5 text-emerald-500" />,
                title: "E-commerce",
                description: "Sales-optimized",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
                delay: 50,
                color: "emerald"
              },
              {
                icon: <Briefcase className="w-5 h-5 text-purple-500" />,
                title: "Portfolios",
                description: "Visually striking",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
                delay: 100,
                color: "purple"
              },
              {
                icon: <Database className="w-5 h-5 text-blue-500" />,
                title: "Custom Apps",
                description: "Powerful functionality",
                image: "https://images.unsplash.com/photo-1581092921461-39b90de3f0e4",
                delay: 150,
                color: "blue"
              },
              {
                icon: <Layout className="w-5 h-5 text-rose-500" />,
                title: "Dashboards",
                description: "Data visualization",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
                delay: 200,
                color: "rose"
              },
              {
                icon: <Globe className="w-5 h-5 text-teal-500" />,
                title: "Client Portals",
                description: "Secure & intuitive",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
                delay: 250,
                color: "teal"
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="reveal bg-white rounded-lg overflow-hidden shadow-sm hover:shadow group transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={`${item.image}?auto=format&fit=crop&w=600&q=80`} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
                  <div className="absolute top-3 right-3">
                    <div className={`p-1.5 rounded-md backdrop-blur-sm bg-${item.color}-500/20`}>
                      {item.icon}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                    <div className={`p-1.5 rounded-full bg-${item.color}-100 text-${item.color}-500 transform translate-y-1 transition-transform group-hover:-translate-y-0 group-hover:bg-${item.color}-500 group-hover:text-white duration-300`}>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className="mt-8 text-center reveal">
            <button 
              onClick={handleCTAClick}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors duration-300 text-sm font-medium">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern and Compact */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50/50 to-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-yellow-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute left-0 bottom-0 w-32 h-32 bg-orange-100 rounded-full opacity-30 blur-2xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 reveal">
            <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium mb-3">CLIENT SUCCESS</span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">
              What Our <span className="text-yellow-600">Clients Say</span>
            </h2>
            <p className="text-sm text-gray-600">
              Real feedback from businesses we've helped succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {[
              {
                quote: "3x increase in qualified leads after site launch",
                name: "Sarah K.",
                company: "Tech Startup",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                stars: 5
              },
              {
                quote: "Checkout abandonment dropped 47% with their redesign",
                name: "Michael T.",
                company: "E-commerce Brand",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                stars: 5
              },
              {
                quote: "Mobile design got compliments from our customers",
                name: "Jennifer L.",
                company: "Fashion Boutique",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                stars: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="reveal bg-white rounded-lg shadow-sm p-4 hover:shadow transition-all duration-300 group border border-gray-100 hover:border-yellow-200"
              >
                {/* Stars */}
                <div className="flex mb-2">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 text-sm mb-3">"{testimonial.quote}"</p>
                
                {/* Author */}
                <div className="flex items-center gap-2">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-8 h-8 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Social Proof Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-6 sm:mt-10 reveal">
            <div className="flex flex-col items-center">
              <span className="text-blue-600 font-bold text-2xl">98%</span>
              <span className="text-xs text-gray-500">Client satisfaction</span>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-blue-600 font-bold text-2xl">100+</span>
              <span className="text-xs text-gray-500">Completed projects</span>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-blue-600 font-bold text-2xl">24/7</span>
              <span className="text-xs text-gray-500">Support & maintenance</span>
            </div>
          </div>
        </div>
      </section>
      {/* Section removed as requested */}

      {/* AI-Powered Add-ons Section - Modern and Compact */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 reveal">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-3">AI INTEGRATION</span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">AI-Powered</span> Features
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Enhance your website with cutting-edge artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: <Bot className="w-5 h-5" />,
                title: "AI Chatbot",
                description: "24/7 customer support",
                color: "purple"
              },
              {
                icon: <MessageSquare className="w-5 h-5" />,
                title: "Smart Forms",
                description: "Lead qualification",
                color: "blue"
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "Personalization",
                description: "Adaptive content",
                color: "amber"
              },
              {
                icon: <BarChart2 className="w-5 h-5" />,
                title: "AI Analytics",
                description: "Performance insights",
                color: "emerald"
              }
            ].map((addon, index) => (
              <div 
                key={index}
                className="reveal bg-white rounded-lg shadow-sm p-4 hover:shadow border border-gray-100 hover:border-purple-200
                          transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`flex items-center gap-3 mb-2`}>
                  <div className={`bg-${addon.color}-100 text-${addon.color}-600 p-2 rounded-lg`}>
                    {addon.icon}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">{addon.title}</h3>
                </div>
                <p className="text-xs text-gray-600 ml-9">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Featured AI Integration */}
          <div className="mt-8 sm:mt-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg shadow-lg overflow-hidden reveal">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 sm:p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-white/10 rounded-md">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-medium text-purple-200">FEATURED AI INTEGRATION</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Intelligent Content Generation</h3>
                <p className="text-sm text-purple-100 mb-4">Automate content creation with AI that learns your brand voice and generates SEO-optimized blog posts, product descriptions, and more.</p>
                
                <button 
                  onClick={handleCTAClick}
                  className="inline-flex items-center gap-1 text-xs font-medium bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors duration-300">
                  Learn more
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="bg-purple-800 p-6 sm:p-8 hidden md:block">
                <div className="rounded-md bg-purple-900/50 p-4 border border-purple-700/50 h-full flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                    <p className="text-purple-200 text-xs">AI-powered content that converts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section - Modern and Compact */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Content */}
                <div className="lg:col-span-7 p-6 sm:p-8 reveal order-2 lg:order-1">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-4">
                    CASE STUDY
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-500">School Timetable System</span>
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    A full-stack scheduling solution that reduced administrative work by 85% for a large educational institution.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      {icon: <Layout className="w-4 h-4" />, text: "Intuitive admin panel"},
                      {icon: <MonitorSmartphone className="w-4 h-4" />, text: "Fully responsive design"},
                      {icon: <Zap className="w-4 h-4" />, text: "Real-time updates"},
                      {icon: <Clock className="w-4 h-4" />, text: "85% time savings"}
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="text-blue-600 mt-0.5">
                          {feature.icon}
                        </div>
                        <p className="text-gray-700 text-xs">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleCTAClick}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-medium 
                                hover:bg-blue-700 transition-colors duration-300 flex items-center gap-1"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {["https://randomuser.me/api/portraits/men/32.jpg", "https://randomuser.me/api/portraits/women/44.jpg"].map((img, i) => (
                          <img key={i} src={img} alt="Team member" className="w-6 h-6 rounded-full border-2 border-white" loading="lazy" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">8-week project</span>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="lg:col-span-5 order-1 lg:order-2 reveal">
                  <div className="relative h-full min-h-[200px]">
                    <img 
                      src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740" 
                      alt="Dashboard Design" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-70"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium text-blue-700">
                      Education Sector
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technology Pills */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center reveal">
              {["React", "Node.js", "MongoDB", "Tailwind CSS", "GraphQL"].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-xs transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mb-5">
              <Settings className="w-7 h-7 text-gray-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              <span className="text-gray-900">Tech Stack</span> We Use
            </h2>
            <p className="text-lg text-gray-600">
              Modern, robust technologies that ensure your website is built for performance and longevity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto reveal">
            {[
              { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
              { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
              { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
              { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
              { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Vite", image: "https://vitejs.dev/logo.svg" },
              { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
              { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
              { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
              { name: "WordPress", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
              { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
              { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
            ].map((tech, index) => (
              <div key={index} className="group flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-xl bg-gray-50 flex items-center justify-center p-4 mb-3
                           transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                  <img src={tech.image} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Something That Works?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's turn your vision into a website that works hard for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <button 
                onClick={handleCTAClick}
                className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-4 rounded-xl shadow-xl transition-all duration-300
                        flex items-center justify-center gap-2 group font-semibold"
              >
                <Phone className="w-5 h-5" />
                Book a Free Strategy Call
              </button>
              
              <button 
                onClick={handleCTAClick}
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-4 rounded-xl shadow-lg transition-all duration-300
                        flex items-center justify-center gap-2 group font-semibold"
              >
                <MessageSquare className="w-5 h-5" />
                Chat With a Developer
              </button>
              
              <button 
                onClick={handleCTAClick}
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-4 rounded-xl shadow-lg transition-all duration-300
                        flex items-center justify-center gap-2 group font-semibold"
              >
                <Mail className="w-5 h-5" />
                View Packages & Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;

// Add animation keyframes to index.css
/*
@keyframes loading-bar {
  0% { width: 0; }
  50% { width: 70%; }
  100% { width: 100%; }
}

@keyframes scale-x-full {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes float-slow {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

@keyframes float-code {
  0% { transform: translate(0, 0) rotate(3deg); }
  50% { transform: translate(-5px, -5px) rotate(5deg); }
  100% { transform: translate(0, 0) rotate(3deg); }
}

.animate-loading-bar {
  animation: loading-bar 3s ease-in-out infinite;
}

.animate-scale-x-full {
  animation: scale-x-full 1.5s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-code {
  animation: float-code 5s ease-in-out infinite;
}
*/
