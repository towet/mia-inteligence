import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, Code, Users, Shield, BarChart2, CheckCircle, ChevronRight, Trophy } from 'lucide-react';

// Import project images from assets folder
import smartGadgetsImg from '../../assets/smartgadgets.png';
import nestlyImg from '../../assets/Nestify.png';
import bomaBoraImg from '../../assets/bomabora.png';
import fleetManagementImg from '../../assets/fleetmanagement.png';
import orionSafarisImg from '../../assets/orionsafariss.png';
import languageLearningImg from '../../assets/languagelearning.png';
import mealPlannerImg from '../../assets/meal-planner.png';
import willingnessOfMindImg from '../../assets/willingness of the mind.png';
import payrollImg from '../../assets/payroll.png';

// Import the project data from Portfolio component to maintain consistency
// This would typically be imported from a shared data source
const featuredProjects = [
  {
    id: 'smart-gadgets-ai',
    title: 'Smart Gadgets AI Assistant',
    category: 'tech-ai',
    description: 'An intelligent virtual assistant platform for consumer electronics customer support, product information, and troubleshooting.',
    tags: ['AI/ML', 'React', 'TypeScript'],
    image: smartGadgetsImg,
    stats: {
      satisfaction: '98%',
      responseTime: '< 2s'
    },
    livePreviewUrl: 'https://smartgadgets-ai.netlify.app/'
  },
  {
    id: 'nestly-real-estate',
    title: 'Nestly Real Estate Platform',
    category: 'real-estate',
    description: 'A comprehensive real estate platform streamlining property search, listing, and management for both residential and commercial properties.',
    tags: ['Angular', 'TypeScript', 'Firebase'],
    image: nestlyImg,
    stats: {
      properties: '5,000+',
      users: '25k+'
    },
    livePreviewUrl: 'https://smartgadgets-ai.netlify.app/'
  },
  {
    id: 'boma-bora',
    title: 'Boma Bora Agricultural Platform',
    category: 'agriculture',
    description: 'A comprehensive agricultural management platform connecting farmers with collection agents and streamlining the dairy supply chain.',
    tags: ['React', 'TypeScript', 'Supabase'],
    image: bomaBoraImg,
    stats: {
      farmers: '1,200+',
      efficiency: '+35%'
    },
    livePreviewUrl: 'https://smartgadgets-ai.netlify.app/'
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management System',
    category: 'business',
    description: 'A comprehensive fleet management solution for tracking, maintenance, and optimization of vehicle operations.',
    tags: ['React', 'Node.js', 'Firebase'],
    image: fleetManagementImg,
    stats: {
      vehicles: '500+',
      fuelSavings: '22%'
    },
    livePreviewUrl: 'https://deezayecofuel.com/'
  },
  {
    id: 'language-learning',
    title: 'Language Learning Platform',
    category: 'education',
    description: 'An interactive language learning platform with AI-powered pronunciation feedback and personalized lesson plans.',
    tags: ['React', 'AI/ML', 'Node.js'],
    image: languageLearningImg,
    stats: {
      languages: '12',
      activeUsers: '50k+'
    },
    livePreviewUrl: 'https://multilanguagetutor.netlify.app/'
  },
  {
    id: 'orion-safaris',
    title: 'Orion Safaris Booking Platform',
    category: 'travel',
    description: 'A modern booking platform for safari experiences with real-time availability, itinerary planning and customer management.',
    tags: ['React', 'Node.js', 'Supabase'],
    image: orionSafarisImg,
    stats: {
      bookings: '200+ monthly',
      satisfaction: '4.9/5'
    },
    livePreviewUrl: 'https://orionsafaris.info/'
  }
];

// Extended project list for the scrolling section
const scrollingProjects = [
  {
    id: 'fleet-management',
    title: 'Fleet Management System',
    category: 'business',
    description: 'A comprehensive fleet management solution for tracking, maintenance, and optimization of vehicle operations.',
    tags: ['React', 'Node.js', 'Firebase'],
    image: fleetManagementImg,
  },
  {
    id: 'language-learning',
    title: 'Language Learning Platform',
    category: 'education',
    description: 'An interactive language learning platform with AI-powered pronunciation feedback and personalized lesson plans.',
    tags: ['React', 'AI/ML', 'Node.js'],
    image: languageLearningImg,
  },
  {
    id: 'neo-green',
    title: 'Neo Green Environmental Platform',
    category: 'sustainability',
    description: 'A sustainability platform for tracking, reporting, and improving environmental impacts for businesses and organizations.',
    tags: ['React', 'Node.js', 'Chart.js'],
    image: willingnessOfMindImg,
  },
  {
    id: 'meal-planner',
    title: 'AI Meal Planner Chatbot',
    category: 'agriculture',
    description: 'An intelligent chatbot that creates personalized meal plans and recipes based on dietary preferences and restrictions.',
    tags: ['React', 'AI/ML', 'Node.js'],
    image: mealPlannerImg,
  },
  {
    id: 'orion-safaris',
    title: 'Orion Safaris Booking Platform',
    category: 'travel',
    description: 'A modern booking platform for safari experiences with real-time availability, itinerary planning and customer management.',
    tags: ['React', 'Node.js', 'Supabase'],
    image: orionSafarisImg,
  },
  {
    id: 'payroll-processing',
    title: 'Payroll Processing System',
    category: 'business',
    description: 'A comprehensive payroll processing solution with automated tax calculations, compliance, and employee self-service.',
    tags: ['Angular', 'Node.js', 'Material UI'],
    image: payrollImg,
  },
  {
    id: 'healthcare-platform',
    title: 'Healthcare Management Platform',
    category: 'business',
    description: 'A comprehensive healthcare management system for clinics and small hospitals with appointment scheduling and patient records.',
    tags: ['React', 'Node.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
  },
  {
    id: 'education-analytics',
    title: 'Education Analytics Dashboard',
    category: 'education',
    description: 'Advanced analytics dashboard for educational institutions to track student performance, engagement and resource allocation.',
    tags: ['React', 'Chart.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  }
];

// Get category icon
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'tech-ai':
      return Code;
    case 'real-estate':
      return ExternalLink;
    case 'agriculture':
      return Star;
    case 'business':
      return BarChart2;
    case 'education':
      return Users;
    case 'sustainability':
      return Shield;
    default:
      return CheckCircle;
  }
};

// Get category name
const getCategoryName = (category: string) => {
  switch (category) {
    case 'tech-ai':
      return 'Technology & AI';
    case 'real-estate':
      return 'Real Estate';
    case 'agriculture':
      return 'Agriculture & Food';
    case 'business':
      return 'Business Management';
    case 'education':
      return 'Education & Learning';
    case 'sustainability':
      return 'Sustainability';
    case 'travel':
      return 'Travel & Tourism';
    default:
      return 'Project';
  }
};

const FeaturedProjects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0); // Track the currently active card

  const AUTO_SCROLL_SPEED = 0.5; // Reduced from 1 to 0.5 for slower scroll
  const MOBILE_CARD_INTERVAL = 5000; // Increased from 3000ms to 5000ms for slower mobile transitions

  // Card-by-card scrolling effect, especially for mobile
  useEffect(() => {
    if (!scrollContainerRef.current || hovering || !isInView) return;
    
    // Determine if we're on mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // Set up auto-scrolling interval
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        if (isMobile) {
          // Mobile - centered card scrolling
          const nextIndex = (activeCardIndex + 1) % scrollingProjects.length;
          
          // Get all cards
          const cards = Array.from(scrollContainerRef.current.querySelectorAll('.scroll-card'));
          
          // If we have cards, scroll to the next one in a centered way
          if (cards.length > 0 && cards[nextIndex]) {
            const cardElement = cards[nextIndex] as HTMLElement;
            const containerWidth = scrollContainerRef.current.clientWidth;
            const cardWidth = cardElement.offsetWidth;
            
            // Calculate position to center the card
            const scrollPosition = cardElement.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
            
            // Scroll to that position
            scrollContainerRef.current.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            });
          }
          
          // Update the active card index
          setActiveCardIndex(nextIndex);
        } else {
          // Desktop continuous scrolling behavior
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          
          // If we've reached the end, go back to start
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollContainerRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            // Otherwise scroll a bit more
            scrollContainerRef.current.scrollBy({
              left: AUTO_SCROLL_SPEED,
              behavior: 'auto'
            });
          }
        }
      }
    }, isMobile ? MOBILE_CARD_INTERVAL : 16);
    
    return () => clearInterval(scrollInterval);
  }, [activeCardIndex, hovering, isScrolling]);

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Manual scroll event handling
  const handleScroll = () => {
    setIsScrolling(true);
    
    // Clear the timeout if it exists
    const timeoutId = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle grid pattern only - no clouds or blurs */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full text-sm font-semibold mb-4 animate-pulse-slow">
            <div className="flex -space-x-1">
              <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
                <Trophy className="w-3 h-3" />
              </div>
              <div className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">
                <Star className="w-3 h-3" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">AWARD-WINNING PROJECTS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Transformative Digital</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200/50 -rotate-1 rounded-full"></div>
            </span>
            <br/>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">Projects That Deliver Results</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Explore our showcase of cutting-edge digital solutions that have transformed businesses and created exceptional user experiences across industries.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm shadow-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">500+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm shadow-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700">Award-Winning Designs</span>
            </div>
          </div>
        </div>
        
        {/* Top Section - Static Featured Projects in Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 text-transparent bg-clip-text">Featured Projects</h3>
            </div>
            <Link 
              to="/portfolio" 
              className="group flex items-center gap-2 text-sm font-medium px-5 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">View All Projects</span> 
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                <ChevronRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} border border-transparent hover:border-blue-200`}
                style={{ transitionDelay: `${index * 150}ms`, transformOrigin: index % 2 === 0 ? 'top left' : 'top right' }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {/* Background decorative elements */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full transform group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100 delay-100"></div>
                  <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-indigo-500/10 rounded-full transform group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100 delay-200"></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-500"></div>
                  
                  {/* Interactive category badge */}
                  <div className="absolute top-3 left-3 transform group-hover:translate-y-1 group-hover:translate-x-1 transition-transform duration-500">
                    <div className="px-3 py-1.5 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-2 shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {React.createElement(getCategoryIcon(project.category), { className: 'w-3 h-3' })}
                      </div>
                      <span className="whitespace-nowrap">{getCategoryName(project.category)}</span>
                    </div>
                  </div>
                  
                  {/* View project quick button */}
                  <div className="absolute right-3 bottom-3 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Link to={`/portfolio/${project.id}`} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                    </Link>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-5 relative">
                  {/* Project title with animated gradient */}
                  <h3 className="text-xl font-bold mb-2 relative overflow-hidden group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500">
                    {project.title}
                    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-700 mt-1"></div>
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Project Tags with interactive hover effect */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tag} 
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 flex items-center gap-1 group-hover:translate-y-0 translate-y-0"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    {/* Project Stats with interactive animations */}
                    <div className="flex gap-3">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div 
                          key={key} 
                          className="px-2 py-1 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors duration-300 transform group-hover:scale-105"
                          style={{ transitionDelay: `${statIndex * 100}ms` }}
                        >
                          <div className="text-blue-600 font-semibold text-sm group-hover:text-indigo-600 transition-colors duration-300">{value}</div>
                          <div className="text-gray-500 text-xs">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/portfolio/${project.id}`} 
                      className="inline-flex items-center gap-1.5 text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <span>View Project</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Section - Horizontal Scrolling Showcase */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="absolute -top-1 -left-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-900 to-purple-900 text-transparent bg-clip-text text-left">Project Showcase</h3>
            </div>
            <div className="text-xs sm:text-sm font-medium bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm flex items-center gap-2 self-start sm:self-auto">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-indigo-500 animate-pulse"></div>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Scroll to explore more projects</span>
            </div>
          </div>
          
          <div className="relative">
            {/* Left shadow gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right shadow gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide pb-8 pt-2 px-4" // Added px-4 for better mobile padding
              onScroll={handleScroll}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="flex gap-6 sm:gap-8 min-w-max px-4"> {/* Reduced gap for mobile */} 
                {scrollingProjects.map((project, index) => {
                  // Determine card visibility based on active card index (for mobile)
                  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                  const isActive = isMobile ? index === activeCardIndex : true;
                  const isLeaving = isMobile ? index === (activeCardIndex - 1 + scrollingProjects.length) % scrollingProjects.length : false;
                  
                  return (
                    <div 
                      key={project.id}
                      className="group scroll-card w-[75vw] max-w-[230px] sm:w-[350px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-1000 border border-transparent hover:border-blue-200"
                      style={{ 
                        opacity: !isInView ? 0 : 
                                isMobile && !isActive && !isLeaving ? 0 : 
                                isMobile && isLeaving ? 0 : 1,
                        transform: !isInView ? 'translateX(100px)' :
                                  hovering ? 'translateX(0) scale(1)' : 
                                  isMobile && isActive ? 'translateX(0) scale(1.05)' :
                                  isMobile && isLeaving ? 'translateX(-100px) scale(0.95)' :
                                  isMobile ? 'translateX(100px)' :
                                  index % 3 === 0 ? 'translateY(0) scale(1.05)' :
                                  index % 3 === 1 ? 'translateY(-10px) scale(1)' :
                                  'translateY(0) scale(0.98)',
                        transformOrigin: 'center center',
                        transition: `all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                        zIndex: isMobile && isActive ? '10' : '0',
                        pointerEvents: isMobile && !isActive ? 'none' : 'auto'
                      }}
                    >
                     
                      {/* Project Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                        
                        {/* Title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-white font-semibold text-lg truncate">{project.title}</h4>
                          <div className="flex items-center gap-2 mt-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 w-fit">
                            {React.createElement(getCategoryIcon(project.category), { 
                              className: 'w-4 h-4 text-blue-300'
                            })}
                            <span className="text-xs text-blue-200">{getCategoryName(project.category)}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-4">
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
                          {project.description}
                        </p>
                        
                        {/* Project Tags with pop effect */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tag} 
                              className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full flex items-center gap-1 border border-blue-100 transform group-hover:scale-110 opacity-90 group-hover:opacity-100 shadow-sm"
                              style={{ transitionDelay: `${tagIndex * 50 + 200}ms` }}
                            >
                              <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link 
                          to={`/portfolio/${project.id}`} 
                          className="inline-flex items-center gap-1.5 text-sm font-medium group/link bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform group-hover:translate-y-0 translate-y-0"
                        >
                          View Project
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-start sm:justify-center mt-10 sm:mt-12">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 sm:px-7 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-blue-300/30 font-medium transform hover:-translate-y-1 group text-sm sm:text-base"
            >
              <span>Explore Our Full Portfolio</span>
              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
