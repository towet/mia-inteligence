import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Shield, Lock, Database, Search, 
  Camera, FileCheck, HardDrive, CheckCircle, 
  Zap, Users, Clock, Globe, MapPin, Droplet,
  Menu
} from 'lucide-react';

const SecurityServices: React.FC = () => {
  // Service data
  const securityServices = [
    {
      id: 'osint',
      title: 'OSINT Intelligence',
      icon: <Search className="w-6 h-6" />,
      color: 'blue',
      description: 'Gain strategic advantage with Open Source Intelligence (OSINT) tools that legally gather and analyze publicly available information to protect your business interests.',
      features: [
        'Competitive Intelligence Gathering',
        'Digital Footprint Assessment',
        'Social Media Monitoring',
        'Reputation Management',
        'Brand Protection Strategies',
      ],
      stats: {
        value: '3x',
        label: 'Faster Threat Detection'
      }
    },
    {
      id: 'data-recovery',
      title: 'Data Recovery',
      icon: <HardDrive className="w-6 h-6" />,
      color: 'green',
      description: 'State-of-the-art data recovery services to retrieve lost, deleted, or corrupted data from any storage device with a 98.5% recovery success rate.',
      features: [
        'Hard Drive & SSD Recovery',
        'RAID System Reconstruction',
        'Database Repair & Recovery',
        'Deleted File Retrieval',
        'Emergency Response (4hr)',
      ],
      stats: {
        value: '98.5%',
        label: 'Recovery Success Rate'
      }
    },
    {
      id: 'forensics',
      title: 'Digital Forensics',
      icon: <FileCheck className="w-6 h-6" />,
      color: 'purple',
      description: 'Professional digital forensic services to investigate security incidents, establish evidence chains, and support legal proceedings with court-admissible findings.',
      features: [
        'Incident Response & Investigation',
        'Evidence Collection & Preservation',
        'Malware & Ransomware Analysis',
        'Mobile Device Forensics',
        'Expert Witness Services',
      ],
      stats: {
        value: '100%',
        label: 'Court-Admissible Reports'
      }
    },
    {
      id: 'cctv',
      title: 'CCTV Installation',
      icon: <Camera className="w-6 h-6" />,
      color: 'red',
      description: 'Comprehensive CCTV security systems designed and installed by certified professionals, with 24/7 monitoring options and mobile integration.',
      features: [
        'HD & 4K Camera Systems',
        'AI-Powered Motion Detection',
        'Remote Viewing & Alerts',
        'Night Vision Capabilities',
        'Secure Cloud Storage',
      ],
      stats: {
        value: '24/7',
        label: 'Continuous Monitoring'
      }
    },
    {
      id: 'car-tracking',
      title: 'Vehicle Tracking',
      icon: <MapPin className="w-6 h-6" />,
      color: 'indigo',
      description: 'Advanced GPS-based vehicle tracking systems for fleet management, theft prevention, and real-time location monitoring of your vehicles.',
      features: [
        'Real-Time GPS Tracking',
        'Geofencing & Route History',
        'Anti-Theft Recovery System',
        'Driver Behavior Monitoring',
        'Mobile App Integration',
      ],
      stats: {
        value: '99.8%',
        label: 'Location Accuracy'
      }
    },
    {
      id: 'fuel-monitoring',
      title: 'Fuel Monitoring',
      icon: <Droplet className="w-6 h-6" />,
      color: 'amber',
      description: 'Precision fuel monitoring systems to prevent theft, optimize fuel consumption, and provide detailed analytics for your fleet management needs.',
      features: [
        'Real-Time Fuel Level Tracking',
        'Fuel Theft Detection & Alerts',
        'Consumption Analysis Reports',
        'Fuel Economy Optimization',
        'Integration with Fleet Management',
      ],
      stats: {
        value: '15-30%',
        label: 'Fuel Cost Reduction'
      }
    },
    {
      id: 'internet',
      title: 'Secure Internet Services',
      icon: <Globe className="w-6 h-6" />,
      color: 'orange',
      description: 'Enterprise-grade internet services with built-in security features, including VPN tunneling, DDoS protection, and advanced firewall systems.',
      features: [
        'Dedicated Business Lines',
        'Advanced Firewall Protection',
        'DDoS Mitigation',
        'VPN & Secure Remote Access',
        'Traffic Encryption',
      ],
      stats: {
        value: '99.9%',
        label: 'Uptime Guarantee'
      }
    }
  ];

  // Function to handle CTA button clicks
  const handleCTAClick = () => {
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

  // Active service tab state
  const [activeService, setActiveService] = useState('osint');
  
  // Service animation states
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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
      {/* Navbar - Simplified to match screenshot */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-lg text-gray-900">Global Expert<span className="text-blue-600">.</span></div>
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
            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Home</Link>
            <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Services</Link>
            <Link to="/portfolio" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Portfolio</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>About</Link>
            <Link to="/contact" className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors duration-300" onClick={closeAllMenus}>Contact Us</Link>
          </div>
        </div>
      </nav>
      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-4 sm:pt-8 md:pt-16 pb-12 sm:pb-16 md:pb-20 mt-2 sm:mt-4 md:mt-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Decorative elements */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-bl-full" 
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gray-500/5 rounded-tr-full"
          style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
        ></div>
        
        {/* Abstract security pattern background - subtle */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-5 sm:space-y-8 slide-in-left">
              <div className="space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-gray-100 rounded-full text-xs sm:text-sm font-semibold mb-2 animate-pulse">
                  <div className="flex -space-x-1">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] sm:text-xs"><Shield className="w-2.5 sm:w-3 h-2.5 sm:h-3" /></div>
                    <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] sm:text-xs"><Lock className="w-2.5 sm:w-3 h-2.5 sm:h-3" /></div>
                  </div>
                  <span className="hidden sm:inline text-xs sm:text-sm">Kenya's Leading Security Solutions Provider | 500+ Protected Businesses</span>
                  <span className="sm:hidden text-xs">500+ Protected Businesses</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left mt-4 md:mt-6">
                  <span className="block text-gray-900">Protect Your <br className="md:hidden"/>Business</span>
                  <div className="relative mt-1 sm:mt-2 mb-2 md:mb-3">
                    <span className="block bg-gradient-to-r from-blue-600 via-gray-700 to-blue-600 text-transparent bg-clip-text">
                      With Advanced Security
                    </span>
                    <div className="absolute -bottom-3 sm:-bottom-4 left-0 h-0.5 sm:h-1 w-full bg-gradient-to-r from-blue-600 via-gray-700 to-blue-600 rounded-full transform scale-x-0 transition-transform duration-1000 animate-scale-x-full"></div>
                  </div>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  <strong>Comprehensive security solutions</strong> for your business - from OSINT intelligence gathering to CCTV installation, data recovery, digital forensics, and secure internet services.
                </p>
              </div>
              
              {/* Success metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-white rounded-lg shadow-md p-2 sm:p-3 text-left sm:text-center border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">99.8%</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">Incident Prevention</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-2 sm:p-3 text-left sm:text-center border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">4hrs</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">Avg. Response Time</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-2 sm:p-3 text-left sm:text-center border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">98.5%</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">Data Recovery Rate</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={handleCTAClick}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg sm:rounded-xl font-semibold hover:from-blue-600 hover:to-blue-800 
                           transition-all duration-300 flex items-center justify-center gap-2 group shadow-md sm:shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto"
                >
                  Get a Free Security Audit
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => {
                    setActiveService('osint'); // Scroll to services section
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-600 hover:text-white
                           transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              <div className="flex items-center text-xs sm:text-sm text-blue-600 animate-pulse mt-2 sm:mt-3">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="sm:inline hidden">Limited Time: 30% Off All Security Services + Free Audit</span>
                <span className="sm:hidden">30% Off + Free Audit</span>
              </div>
              
              {/* Client testimonial */}
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 border border-blue-100">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700 text-sm sm:text-base">KT</div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Kenya Tourism Board</div>
                    <div className="text-xs sm:text-sm text-gray-600">IT Security Department</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm italic text-gray-700 mb-2 text-left">
                  "After experiencing a major security breach, we brought in this team. They not only recovered 100% of our data but also implemented a comprehensive security system that has prevented any further incidents for over 3 years."
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-gray-500">Verified Client</span>
                </div>
              </div>
              
              {/* Trust Points */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-green-600" />
                  </div>
                  <span>24/7 Monitoring</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-green-600" />
                  </div>
                  <span>Certified Experts</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-green-600" />
                  </div>
                  <span>Fast Response</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-green-600" />
                  </div>
                  <span>Guaranteed Results</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-green-600" />
                  </div>
                  <span>Data Protection</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-green-600" />
                  </div>
                  <span>100% Confidential</span>
                </div>
              </div>
            </div>
            
            {/* Hero visual - Animated Security Dashboard */}
            <div className="hidden lg:block relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-gray-600 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="h-10 bg-gray-100 dark:bg-gray-800 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-xs font-medium text-gray-500 dark:text-gray-400">Security Dashboard</div>
                </div>
                
                <div className="p-6 grid grid-cols-2 gap-4">
                  {/* Security stats and visualizations */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-400">System Status</h3>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">CCTV Systems</span>
                        <span className="text-xs font-medium text-green-600">Online</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Data Backup</span>
                        <span className="text-xs font-medium text-green-600">Active</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Network Security</span>
                        <span className="text-xs font-medium text-green-600">Protected</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800/40 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Threat Detection</h3>
                      <Shield className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="mt-1">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '2%' }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">2 minor threats blocked</span>
                        <span className="text-xs font-medium text-green-600">Protected</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800/40 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Data Recovery</h3>
                      <Database className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="mt-1">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">Last backup</span>
                        <span className="text-xs font-medium text-blue-600">5 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-400">CCTV Monitoring</h3>
                      <Camera className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="mt-1 grid grid-cols-2 gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-gray-200 dark:bg-gray-700 h-8 rounded animate-pulse"></div>
                      ))}
                    </div>
                    <div className="text-center mt-1">
                      <span className="text-xs text-gray-500">12 cameras active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold mb-4">Our Security Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions for modern businesses in Kenya. 
              Our certified experts provide end-to-end protection for your digital and physical assets.
            </p>
          </div>
          
          {/* Services Tabs - Improved Mobile Responsiveness */}
          <div className="mb-12 reveal">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {securityServices.map((service) => {
                const isActive = activeService === service.id;
                const isHovered = hoveredService === service.id;
                const colorMap: {[key: string]: string} = {
                  blue: 'bg-blue-600 hover:bg-blue-700 text-blue-100',
                  green: 'bg-green-600 hover:bg-green-700 text-green-100',
                  purple: 'bg-purple-600 hover:bg-purple-700 text-purple-100',
                  red: 'bg-red-600 hover:bg-red-700 text-red-100',
                  orange: 'bg-orange-600 hover:bg-orange-700 text-orange-100'
                };
                
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`relative px-2 sm:px-3 md:px-4 py-2 rounded-lg md:rounded-full flex items-center min-w-[80px] sm:min-w-0 justify-center gap-1 sm:gap-2 transition-all duration-300 ${isActive ? `${colorMap[service.color]} shadow-md` : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} ${isActive || isHovered ? 'scale-105' : ''}`}
                  >
                    <div className={`${isActive ? 'text-white' : `text-${service.color}-600`}`}>
                      {service.icon}
                    </div>
                    <span className="font-medium text-xs sm:text-sm">{service.title}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 hidden md:block"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Active Service Content */}
          {securityServices.map((service) => {
            const isActive = activeService === service.id;
            const colorClass = `text-${service.color}-600`;
            const bgColorClass = `bg-${service.color}-50`;
            
            return (
              <div 
                key={service.id}
                className={`transition-all duration-500 ${isActive ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden absolute pointer-events-none'}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-8 slide-in-right">
                  {/* Content */}
                  <div className="lg:col-span-3 space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-3 md:px-0">
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${colorClass}`}>{service.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 sm:gap-3">
                          <div className={`p-0.5 sm:p-1 rounded-full ${bgColorClass}`}>
                            <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClass}`} />
                          </div>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-3 sm:pt-4">
                      <button 
                        onClick={handleCTAClick}
                        className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-${service.color}-600 text-white rounded-lg font-medium sm:font-semibold 
                                hover:bg-${service.color}-700 transition-all duration-300 transform hover:scale-105
                                shadow-lg hover:shadow-${service.color}-500/20 flex items-center justify-center gap-1 sm:gap-2 group text-xs sm:text-sm md:text-base w-full sm:w-auto`}
                      >
                        Get Started with {service.title}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Visual - Mobile Responsive */}
                  <div className="lg:col-span-2 relative mt-4 sm:mt-6 lg:mt-0">
                    <div className={`absolute inset-0 bg-${service.color}-500/10 rounded-xl sm:rounded-3xl blur-xl z-0`}></div>
                    <div className="relative z-10 h-full flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
                      <div className={`bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 md:p-6 lg:p-8 border border-${service.color}-100 transform transition-all duration-500 hover:scale-105 w-full`}>
                        <div className="mb-6 flex justify-center">
                          <div className={`w-20 h-20 rounded-full bg-${service.color}-100 flex items-center justify-center`}>
                            <div className={`w-12 h-12 ${colorClass}`}>
                              {service.icon}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center mb-6">
                          <div className={`text-4xl font-bold ${colorClass}`}>{service.stats.value}</div>
                          <div className="text-gray-600">{service.stats.label}</div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-gray-100 rounded-full p-3 flex items-center justify-between">
                            <span className="text-sm font-medium">Success Rate</span>
                            <span className={`text-sm font-bold ${colorClass}`}>98%</span>
                          </div>
                          <div className="bg-gray-100 rounded-full p-3 flex items-center justify-between">
                            <span className="text-sm font-medium">Client Satisfaction</span>
                            <span className={`text-sm font-bold ${colorClass}`}>4.9/5</span>
                          </div>
                          <div className="bg-gray-100 rounded-full p-3 flex items-center justify-between">
                            <span className="text-sm font-medium">Response Time</span>
                            <span className={`text-sm font-bold ${colorClass}`}>Under 4 hours</span>
                          </div>
                        </div>
                        
                        <div className="mt-8 text-center">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                            <Users className="w-4 h-4 mr-1" />
                            <span>100+ Active Clients</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Client Testimonials - Mobile Responsive */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Read what our valued clients have to say about our security services and the protection we've provided for their businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 reveal">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex text-amber-400 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-4">"Global Expert's OSINT intelligence service helped us identify and mitigate potential threats to our reputation before they became problematic. Their team is exceptionally thorough and professional."</p>
                </div>
                <div className="mt-auto flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">JK</div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">James Kamau</p>
                    <p className="text-sm text-gray-500">CEO, Nairobi Tech Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex text-amber-400 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-4">"After experiencing a data breach, we turned to Global Expert for their data recovery services. They not only recovered our critical data but also implemented a robust security system to prevent future incidents."</p>
                </div>
                <div className="mt-auto flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">SW</div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Sarah Wanjiku</p>
                    <p className="text-sm text-gray-500">Operations Manager, Mombasa Logistics</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex text-amber-400 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-4">"The CCTV installation by Global Expert has transformed our security posture. The quality of the equipment and the professionalism of their team exceeded our expectations. We feel much safer now."</p>
                </div>
                <div className="mt-auto flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg">DO</div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">David Omondi</p>
                    <p className="text-sm text-gray-500">Property Manager, Kisumu Heights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-950 to-blue-950 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Protect Your Business Today</h2>
            <p className="text-lg sm:text-xl text-center">
              Don't wait until a security breach happens. Our team of certified security experts is ready to provide a comprehensive security assessment for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={handleCTAClick}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg sm:rounded-xl font-semibold 
                         transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base w-full sm:w-auto">
                Get Free Security Assessment
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-500 text-white rounded-lg sm:rounded-xl font-semibold 
                           hover:bg-blue-900 transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base w-full sm:w-auto">
                Schedule a Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="pt-8 flex flex-wrap justify-center gap-4 sm:gap-8">
              <div className="flex flex-col items-center gap-1.5 w-[70px] sm:w-auto">
                <div className="rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-800">
                  <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm text-white text-center">100% Secure</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 w-[70px] sm:w-auto">
                <div className="rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-800">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm text-white text-center">24/7 Support</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 w-[70px] sm:w-auto">
                <div className="rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-800">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm text-white text-center">Certified Experts</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 w-[70px] sm:w-auto">
                <div className="rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-800">
                  <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm text-white text-center">Fast Implementation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityServices;
