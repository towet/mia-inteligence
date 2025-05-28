import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, Globe2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // When opening mobile menu, close services dropdown
    if (!isMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
  };

  // Detect scroll position to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsServicesOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const services = [
    { path: '/services/web-development', name: 'Web Development' },
    { path: '/services/ai-development', name: 'AI Development' },
    { path: '/services/custom-ai-agents', name: 'Custom AI Agents' },
    { path: '/services/social-media-marketing', name: 'Social Media Marketing' },
    { path: '/services/search-engine-optimization', name: 'SEO' },
    { path: '/services/data-analytics', name: 'Data Analytics' },
    { path: '/services/research-academic-writing', name: 'Research & Writing' },
    { path: '/services/paid-advertising', name: 'Paid Advertising' },
    { path: '/services/security-services', name: 'Security Services' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-3'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="flex -space-x-1">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
                <Shield className="w-3 sm:w-4 h-3 sm:h-4" />
              </div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                <Globe2 className="w-3 sm:w-4 h-3 sm:h-4" />
              </div>
            </div>
            <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900">Global Experts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link to="/" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={toggleServices}
                className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 z-10 grid grid-cols-1 gap-1 border border-gray-100">
                  {services.map((service) => (
                    <Link 
                      key={service.path} 
                      to={service.path} 
                      className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/portfolio" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Portfolio
            </Link>
            
            <Link to="/#contact" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Contact
            </Link>
            
            <Link to="/#about" className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              About
            </Link>
          </div>

          {/* No CTA Button */}

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-3' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 space-y-3 pb-4">
          <Link to="/" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
            Home
          </Link>
          
          {/* Mobile Services Accordion */}
          <div className="rounded-lg overflow-hidden">
            <button 
              onClick={toggleServices}
              className="w-full px-4 py-2 text-left text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-between"
            >
              <span>Services</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${isServicesOpen ? 'max-h-screen' : 'max-h-0'}`}>
              <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-lg mt-1">
                {services.map((service) => (
                  <Link 
                    key={service.path} 
                    to={service.path} 
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link to="/portfolio" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
            Portfolio
          </Link>
          
          <Link to="/#contact" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
            Contact
          </Link>
          
          <Link to="/#about" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
            About
          </Link>
          
          {/* No Mobile CTA */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
