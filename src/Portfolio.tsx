import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight, ExternalLink, Bookmark, Star, Calendar, Trophy, Code, Users, LayoutGrid, CheckCircle, X } from 'lucide-react';

// Import project images from assets folder
import smartGadgetsImg from '../assets/smartgadgets.png';
import nestlyImg from '../assets/Nestify.png';
import bomaBoraImg from '../assets/bomabora.png';
import fleetManagementImg from '../assets/fleetmanagement.png';
import orionSafarisImg from '../assets/orionsafariss.png';
import languageLearningImg from '../assets/languagelearning.png';
import budgetManagementImg from '../assets/budgetmanagement.png';
import mealPlannerImg from '../assets/meal-planner.png';
import kabarakMaintenanceImg from '../assets/kabarak maintainance sports .png';
import payrollImg from '../assets/payroll.png';
import resourceAllocationImg from '../assets/resourceallocation.png';
import lostAndFoundImg from '../assets/lostandfound.png';
import willingnessOfMindImg from '../assets/willingness of the mind.png';

// Define project categories with icons
const categories = [
  { id: 'all', name: 'All Projects', icon: LayoutGrid },
  { id: 'tech-ai', name: 'Technology & AI', icon: Code },
  { id: 'real-estate', name: 'Real Estate', icon: Bookmark },
  { id: 'agriculture', name: 'Agriculture & Food', icon: Star },
  { id: 'business', name: 'Business Management', icon: Users },
  { id: 'travel', name: 'Travel & Tourism', icon: ExternalLink },
  { id: 'education', name: 'Education & Learning', icon: Calendar },
  { id: 'sustainability', name: 'Sustainability', icon: Trophy }
];

// Define project technology tags
const technologies = [
  'React', 'Angular', 'TypeScript', 'Firebase', 'Supabase', 
  'Node.js', 'AI/ML', 'Tailwind CSS', 'Material UI', 'Bootstrap',
  'Google Maps', 'Chart.js', 'Netlify'
];

// Sample project data with categorization - in a real scenario, this would come from an API or database
const projects = [
  {
    id: 'smart-gadgets-ai',
    title: 'Smart Gadgets AI Assistant',
    category: 'tech-ai',
    description: 'An intelligent virtual assistant platform for consumer electronics customer support, product information, and troubleshooting.',
    tags: ['AI/ML', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: smartGadgetsImg,
    stats: {
      satisfaction: '98%',
      responseTime: '< 2s',
      knowledgeBase: '10k+ articles'
    },
    featured: true
  },
  {
    id: 'nestly-real-estate',
    title: 'Nestly Real Estate Platform',
    category: 'real-estate',
    description: 'A comprehensive real estate platform streamlining property search, listing, and management for both residential and commercial properties.',
    tags: ['Angular', 'TypeScript', 'Firebase', 'Bootstrap', 'Material UI'],
    image: nestlyImg,
    stats: {
      properties: '5,000+',
      users: '25k+',
      transactions: '500+ monthly'
    },
    featured: true
  },
  {
    id: 'boma-bora',
    title: 'Boma Bora Agricultural Platform',
    category: 'agriculture',
    description: 'A comprehensive agricultural management platform connecting farmers with collection agents and streamlining the dairy supply chain.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: bomaBoraImg,
    stats: {
      farmers: '1,200+',
      efficiency: '+35%',
      collections: '10k+ monthly'
    },
    featured: true
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management System',
    category: 'business',
    description: 'A comprehensive fleet management solution for tracking, maintenance, and optimization of vehicle operations.',
    tags: ['React', 'Node.js', 'Firebase', 'Google Maps'],
    image: fleetManagementImg,
    stats: {
      vehicles: '500+',
      fuelSavings: '22%',
      maintenance: '-15% costs'
    },
    featured: false
  },
  {
    id: 'orion-safaris',
    title: 'Orion Safaris Booking Platform',
    category: 'travel',
    description: 'A modern booking platform for safari experiences with real-time availability, itinerary planning and customer management.',
    tags: ['React', 'Node.js', 'Supabase', 'Tailwind CSS'],
    image: orionSafarisImg,
    stats: {
      bookings: '200+ monthly',
      destinations: '25+',
      satisfaction: '4.9/5'
    },
    featured: false
  },
  {
    id: 'language-learning',
    title: 'Language Learning Platform',
    category: 'education',
    description: 'An interactive language learning platform with AI-powered pronunciation feedback and personalized lesson plans.',
    tags: ['React', 'AI/ML', 'Node.js', 'Firebase'],
    image: languageLearningImg,
    stats: {
      languages: '12',
      activeUsers: '50k+',
      lessonsCompleted: '2M+'
    },
    featured: true
  },
  {
    id: 'budget-management',
    title: 'Budget Management System',
    category: 'business',
    description: 'A comprehensive budgeting and financial management platform for businesses of all sizes.',
    tags: ['Angular', 'TypeScript', 'Chart.js', 'Material UI'],
    image: budgetManagementImg,
    stats: {
      accuracy: '99.9%',
      timeSaved: '15+ hrs/month',
      ROI: '320%'
    },
    featured: false
  },
  {
    id: 'meal-planner',
    title: 'AI Meal Planner Chatbot',
    category: 'agriculture',
    description: 'An intelligent chatbot that creates personalized meal plans and recipes based on dietary preferences and restrictions.',
    tags: ['React', 'AI/ML', 'Node.js', 'Tailwind CSS'],
    image: mealPlannerImg,
    stats: {
      recipes: '10k+',
      diets: '15+ types',
      userSatisfaction: '4.8/5'
    },
    featured: false
  },
  {
    id: 'neo-green',
    title: 'Neo Green Environmental Platform',
    category: 'sustainability',
    description: 'A sustainability platform for tracking, reporting, and improving environmental impacts for businesses and organizations.',
    tags: ['React', 'Node.js', 'Chart.js', 'Tailwind CSS'],
    image: willingnessOfMindImg,
    stats: {
      carbonReduction: '45k tons',
      organizations: '120+',
      initiatives: '300+'
    },
    featured: true
  },
  {
    id: 'kabarak-maintenance',
    title: 'Kabarak Maintenance System',
    category: 'education',
    description: 'A facility maintenance management system for educational institutions to track, schedule, and optimize maintenance operations.',
    tags: ['React', 'Firebase', 'Material UI'],
    image: kabarakMaintenanceImg,
    stats: {
      facilities: '50+',
      responseTime: '-40%',
      costSavings: '25%'
    },
    featured: false
  },
  {
    id: 'payroll-processing',
    title: 'Payroll Processing System',
    category: 'business',
    description: 'A comprehensive payroll processing solution with automated tax calculations, compliance, and employee self-service.',
    tags: ['Angular', 'Node.js', 'Material UI'],
    image: payrollImg,
    stats: {
      employees: '10k+',
      accuracy: '99.99%',
      compliance: '100%'
    },
    featured: false
  },
  {
    id: 'resource-allocation',
    title: 'Resource Allocation Platform',
    category: 'business',
    description: 'An intelligent resource allocation and project management platform for optimizing team performance and project outcomes.',
    tags: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    image: resourceAllocationImg,
    stats: {
      productivity: '+30%',
      projects: '500+ managed',
      onTimeDelivery: '96%'
    },
    featured: false
  },
  {
    id: 'lost-and-found',
    title: 'Lost & Found Management System',
    category: 'business',
    description: 'A digital lost and found solution for businesses, venues, and public spaces to manage, track, and return lost items efficiently.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    image: lostAndFoundImg,
    stats: {
      itemsReturned: '80%',
      processingTime: '-60%',
      userSatisfaction: '4.9/5'
    },
    featured: false
  },
  {
    id: 'willingness-of-mind',
    title: 'Willingness of Mind Wellness Platform',
    category: 'education',
    description: 'A mental wellness and personal development platform with guided exercises, progress tracking, and personalized content.',
    tags: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=899&q=80',
    stats: {
      users: '100k+',
      sessions: '2M+',
      improvements: '87% reported'
    },
    featured: false
  }
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showFilters, setShowFilters] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Filter projects based on active category and tags
  useEffect(() => {
    let filtered = projects;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.category === activeCategory);
    }
    
    if (activeTags.length > 0) {
      filtered = filtered.filter(project => 
        activeTags.some(tag => project.tags.includes(tag))
      );
    }
    
    setFilteredProjects(filtered);
  }, [activeCategory, activeTags]);

  // Intersection Observer for animations
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

  const handleTagToggle = (tag: string) => {
    setActiveTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setActiveTags([]);
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-50 py-20">
      {/* Header Section */}
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
            Award-Winning Projects <br/>
            <span className="text-blue-600">That Drive Success</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Explore our diverse portfolio of transformative digital solutions that have helped businesses across various industries achieve their goals and exceed expectations.
          </p>
        </div>

        {/* Category Navigation - Mobile Responsive */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-4 sm:mb-6 justify-center overflow-x-auto pb-1 px-1">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md sm:shadow-lg shadow-blue-200 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                <div className={`transition-all duration-500 ${activeCategory === category.id ? 'rotate-0 scale-110' : '-rotate-10'}`}>
                  {React.createElement(category.icon, { 
                    className: `w-4 h-4 ${activeCategory === category.id ? 'animate-pulse' : ''}`,
                    strokeWidth: activeCategory === category.id ? 2.5 : 2
                  })}
                </div>
                {category.name}
              </button>
            ))}
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 rounded-xl text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md flex items-center gap-2 ml-2 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <Filter className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180 text-blue-600' : 'rotate-0'}`} />
              Filters
              {activeTags.length > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {activeTags.length}
                </span>
              )}
            </button>
          </div>

          {/* Technology Filters */}
          {showFilters && (
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8 animate-fade-in overflow-hidden relative">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-50 rounded-full opacity-70"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-50 rounded-full opacity-70"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-800 font-semibold flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    <span>Filter by Technology</span>
                  </h3>
                  {activeTags.length > 0 && (
                    <button 
                      onClick={clearFilters}
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
                    >
                      <X className="w-4 h-4" /> Clear all filters
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <button
                      key={tech}
                      onClick={() => handleTagToggle(tech)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${
                        activeTags.includes(tech)
                          ? 'bg-blue-100 text-blue-800 border border-blue-300 shadow-sm'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent'
                      }`}
                      style={{ transitionDelay: `${index * 30}ms` }}
                    >
                      {activeTags.includes(tech) ? (
                        <div className="animate-scale-in">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                      )}
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 
                transform hover:-translate-y-1 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
                ${hoveredProject === project.id ? 'ring-2 ring-blue-400' : ''} relative flex flex-col`}
              style={{ transitionDelay: `${Math.min(index * 100, 500)}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/10 rounded-full transform group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500/10 rounded-full transform group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              
              {/* Project Image - Mobile Responsive */}
              <div className="relative overflow-hidden" style={{ minHeight: '180px', height: '40vw', maxHeight: '240px' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 bg-blue-50"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://via.placeholder.com/600x400?text=Project+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5 shadow-lg animate-pulse-slow">
                    <Star className="w-3.5 h-3.5" fill="currentColor" /> FEATURED
                  </div>
                )}
                
                {/* View button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-100 scale-95">
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="bg-white/90 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-white transition-colors shadow-lg"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 animate-pulse-slow" />
                  </Link>
                </div>
                
                {/* Tags overlay at bottom - Mobile Optimized */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 bg-gradient-to-t from-gray-900/90 to-transparent">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.slice(0, window.innerWidth < 640 ? 2 : 3).map((tag, tagIndex) => (
                      <span 
                        key={tag} 
                        className="text-[10px] sm:text-xs font-medium text-white bg-blue-600/80 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1 transform transition-transform duration-300"
                        style={{ transitionDelay: `${Math.min(tagIndex * 50, 100)}ms` }}
                      >
                        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full"></div>
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > (window.innerWidth < 640 ? 2 : 3) && (
                      <span className="text-[10px] sm:text-xs font-medium text-white bg-gray-700/80 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                        +{project.tags.length - (window.innerWidth < 640 ? 2 : 3)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Info - Mobile Responsive */}
              <div className="p-3 sm:p-4 md:p-6 relative z-10">
                {/* Category badge */}
                <div className="absolute -top-3 right-3 sm:right-4">
                  <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-medium sm:font-semibold rounded-full shadow-sm flex items-center gap-1 sm:gap-1.5">
                    {React.createElement(categories.find(c => c.id === project.category)?.icon || LayoutGrid, { className: 'w-3 h-3 sm:w-3.5 sm:h-3.5' })}
                    {categories.find(c => c.id === project.category)?.name || 'Project'}
                  </div>
                </div>
                
                {/* Title with animated underline */}
                <div className="mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 inline-block">
                    {project.title}
                    <div className="h-0.5 w-0 group-hover:w-full bg-blue-600 transition-all duration-500 mt-0.5"></div>
                  </h3>
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Project Stats - Mobile Responsive */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-5">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div 
                      key={key} 
                      className="bg-blue-50 p-1.5 sm:p-2 rounded-md sm:rounded-lg text-center border border-blue-100 group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105"
                      style={{ transitionDelay: `${Math.min(statIndex * 50, 100)}ms` }}
                    >
                      <div className="text-blue-600 font-medium sm:font-semibold text-xs sm:text-sm group-hover:text-blue-700 transition-colors duration-300 truncate">{value}</div>
                      <div className="text-gray-500 text-[10px] sm:text-xs truncate">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={`/portfolio/${project.id}`} 
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-800 font-medium text-xs sm:text-sm group bg-blue-50 hover:bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg transition-all duration-300"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center p-12 bg-white rounded-xl shadow-lg mt-8 overflow-hidden relative transform transition-all duration-500 hover:scale-105">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-70 animate-float-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-70 animate-float"></div>
            
            <div className="relative z-10">
              <div className="text-blue-500 mb-6 transform transition-transform hover:scale-110 duration-300">
                <div className="relative">
                  <Filter className="w-16 h-16 mx-auto" />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 rounded-full animate-ping opacity-30"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">No projects match your filters</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">Try adjusting your category or technology filters to see more projects.</p>
              <button 
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-blue-300/50"
              >
                <X className="w-4 h-4" />
                <span>Clear All Filters</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
