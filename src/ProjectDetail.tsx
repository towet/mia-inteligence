import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Trophy, 
  ChevronRight, 
  Code,
  CheckCircle,
  BarChart,
  ArrowRight
} from 'lucide-react';

// Define Project interface
interface Project {
  id: string;
  title: string;
  client: string;
  clientLogo: string;
  description: string;
  fullDescription: string;
  tags: string[];
  category: string;
  features: string[];
  results: string[];
  images: string[];
  stats: Record<string, string>;
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  timeline: {
    start: string;
    end: string;
    duration: string;
  };
  related: string[];
}

// This would normally come from an API or database
const projects: Project[] = [
  {
    id: 'smart-gadgets-ai',
    title: 'Smart Gadgets AI Assistant',
    client: 'Consumer Electronics Corporation',
    clientLogo: 'https://placehold.co/200x80/eef/fff?text=TechCorp',
    description: 'An intelligent virtual assistant platform for consumer electronics customer support, product information, and troubleshooting.',
    fullDescription: `
      The Smart Gadgets AI Assistant platform represents a breakthrough in customer support for the consumer electronics industry. Our client faced increasing support costs and customer satisfaction challenges with their growing product line. Our solution leverages advanced AI technologies to create an intelligent virtual assistant that provides 24/7 support, accurate product information, and step-by-step troubleshooting.
      
      The platform integrates with the client's existing knowledge base but enhances it with natural language processing capabilities, allowing customers to interact in a conversational manner. The system continuously learns from interactions, improving its responses over time and identifying common issues that may require product improvements.
    `,
    tags: ['AI/ML', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    category: 'tech-ai',
    features: [
      'Natural language processing for human-like interactions',
      'Multi-modal support accepting text, image, and voice inputs',
      'Contextual awareness retaining conversation history',
      'Automatic escalation to human agents for complex issues',
      'Customer sentiment analysis and satisfaction tracking',
      'Continuous learning from interactions to improve responses',
      'Product-specific knowledge base with regular updates',
      'Detailed analytics dashboard for support insights'
    ],
    results: [
      'Reduced support costs by 45% in the first six months',
      'Increased customer satisfaction ratings from 72% to 93%',
      'Decreased average resolution time from 24 hours to under 5 minutes',
      'Successfully handles 85% of customer inquiries without human intervention',
      'Product defect identification led to improvements in next-gen products'
    ],
    images: [
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    ],
    stats: {
      satisfaction: '98%',
      responseTime: '< 2s',
      knowledgeBase: '10k+ articles'
    },
    testimonial: {
      quote: "The AI Assistant platform has transformed how we support our customers. It's not just handling routine inquiries—it's actually providing better, more consistent answers than our human agents in many cases. The ROI has been incredible.",
      author: "Sarah Johnson",
      position: "CTO, Consumer Electronics Corporation"
    },
    timeline: {
      start: "January 2023",
      end: "June 2023",
      duration: "6 months"
    },
    related: ['nestly-real-estate', 'language-learning', 'neo-green']
  },
  {
    id: 'nestly-real-estate',
    title: 'Nestly Real Estate Platform',
    client: 'Nestly Properties Ltd.',
    clientLogo: 'https://placehold.co/200x80/efe/fff?text=Nestly',
    description: 'A comprehensive real estate platform streamlining property search, listing, and management for both residential and commercial properties.',
    fullDescription: `
      Nestly represents a complete digital transformation for the real estate industry, addressing the fragmented nature of property search and management. Our client needed a modern platform that would differentiate them in a competitive market and provide a seamless experience for buyers, sellers, and agents.
      
      The platform centralizes property listings, agent communications, viewing scheduling, and market analytics in one intuitive interface. We implemented advanced search algorithms that understand user preferences and behavior to provide more relevant property suggestions over time. The map integration allows spatial exploration of neighborhoods with rich data overlays showing amenities, school districts, crime rates, and property value trends.
    `,
    tags: ['Angular', 'TypeScript', 'Firebase', 'Bootstrap', 'Material UI', 'Leaflet Maps'],
    category: 'real-estate',
    features: [
      'Intelligent property matching based on user preferences',
      'Interactive map-based property exploration',
      'Virtual tours and 3D property visualization',
      'Secure messaging between buyers, sellers, and agents',
      'Automated viewing scheduling with calendar integration',
      'Market trend analysis and property value estimation',
      'Document signing and transaction management',
      'Comprehensive property management dashboard'
    ],
    results: [
      'Platform now manages over 5,000 active property listings',
      'Average time to property sale reduced by 35%',
      'User engagement increased 300% compared to previous solution',
      'Agent productivity improved by 45% through automation',
      '92% of users report higher satisfaction compared to competitor platforms'
    ],
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1296&q=80',
      'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80'
    ],
    stats: {
      properties: '5,000+',
      users: '25k+',
      transactions: '500+ monthly'
    },
    testimonial: {
      quote: "Nestly has revolutionized how we operate. The platform's intuitive design and powerful features have allowed us to scale rapidly while providing an exceptional experience for our clients. It's given us a significant competitive advantage.",
      author: "Michael Odhiambo",
      position: "CEO, Nestly Properties Ltd."
    },
    timeline: {
      start: "March 2022",
      end: "December 2022",
      duration: "10 months"
    },
    related: ['smart-gadgets-ai', 'fleet-management', 'neo-green']
  },
  {
    id: 'boma-bora',
    title: 'Boma Bora Agricultural Platform',
    client: 'Dairy Producers Cooperative',
    clientLogo: 'https://placehold.co/200x80/efe/fff?text=BomaBora',
    description: 'A comprehensive agricultural management platform connecting farmers with collection agents and streamlining the dairy supply chain.',
    fullDescription: `
      The Boma Bora platform addresses critical inefficiencies in the dairy supply chain, particularly for smallholder farmers in rural areas. Our client, a cooperative of dairy producers, needed a solution to improve milk collection logistics, ensure quality standards, and provide transparent payment processes for their member farmers.
      
      We developed a comprehensive platform that digitizes the entire collection process, from scheduling pickups to quality testing and payment processing. The mobile-first approach ensures accessibility even in areas with limited connectivity, with offline capabilities for data collection that syncs when connectivity is restored.
    `,
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Progressive Web App'],
    category: 'agriculture',
    features: [
      'GPS-enabled collection route optimization',
      'Digital farmer profiles with production history',
      'Quality testing data capture and analysis',
      'Automated payment calculations based on volume and quality',
      'SMS notifications for farmers without smartphones',
      'Offline-first data collection with background syncing',
      'Real-time dashboards for cooperative management',
      'Weather integration for production forecasting'
    ],
    results: [
      'Increased collection efficiency by 35%',
      'Reduced milk spoilage by 60%',
      'Improved farmer payments by eliminating middlemen',
      'Enhanced quality control leading to better market prices',
      'Platform now supports over 1,200 smallholder farmers'
    ],
    images: [
      'https://images.unsplash.com/photo-1631233859262-0d7b12ea7d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1595058582385-4019d9a31ed6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'
    ],
    stats: {
      farmers: '1,200+',
      efficiency: '+35%',
      collections: '10k+ monthly'
    },
    testimonial: {
      quote: "Boma Bora has transformed our cooperative. Before, we struggled with inefficient collections, quality issues, and farmer distrust. Now, everything is transparent, efficient, and our members are seeing real income improvements. This technology has been life-changing for our rural community.",
      author: "Grace Wanjiku",
      position: "Chairperson, Dairy Producers Cooperative"
    },
    timeline: {
      start: "August 2022",
      end: "March 2023",
      duration: "8 months"
    },
    related: ['meal-planner', 'fleet-management', 'neo-green']
  }
];

// Component for project details
const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProject = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProject = projects.find(p => p.id === projectId) || null;
        setProject(foundProject);
        setLoading(false);
      }, 500); // Simulating API call
    };

    fetchProject();
  }, [projectId]);

  useEffect(() => {
    // Animation delay
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-lg">
          <div className="text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/portfolio" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 pt-28 pb-20 transition-opacity duration-700 ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <Link to="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-gray-800 font-medium">{project.title}</span>
        </div>
      </div>
      
      {/* Project Header - Mobile Responsive */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
            <img 
              src={project.images[activeImage]} 
              alt={project.title} 
              className="w-full h-full object-cover object-center"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/1200x800?text=Project+Image';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-12">
                <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-600 text-white text-[10px] sm:text-xs font-medium rounded-full mb-2 sm:mb-4">
                  {categories.find(c => c.id === project.category)?.name}
                </span>
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                  {project.title}
                </h1>
                <div className="flex items-center gap-1 sm:gap-2">
                  <img 
                    src={project.clientLogo} 
                    alt={project.client} 
                    className="h-6 sm:h-8 w-auto bg-white rounded p-0.5 sm:p-1"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://via.placeholder.com/200x80?text=Client';
                    }}
                  />
                  <span className="text-white/90 text-xs sm:text-sm md:text-base">Client: {project.client}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Gallery Thumbnails - Mobile Responsive */}
          <div className="bg-gray-100 p-2 sm:p-3 md:p-4 flex items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto hide-scrollbar">
            {project.images.map((image: string, index: number) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`h-12 sm:h-14 md:h-16 w-20 sm:w-22 md:w-24 flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === index ? 'border-blue-600 shadow-md scale-105' : 'border-transparent opacity-70'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${project.title} view ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://via.placeholder.com/100x60?text=Thumbnail';
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Details - Mobile Responsive */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 md:space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Project Overview</h2>
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-600">
                <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">{project.description}</p>
                {project.fullDescription.split('\n\n').map((paragraph: string, idx: number) => (
                  <p key={idx} className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">{paragraph.trim()}</p>
                ))}
              </div>
            </div>
            
            {/* Features - Mobile Responsive */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {project.features.map((feature: string, index: number) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1 mt-0.5 sm:mt-1 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Results - Mobile Responsive */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Results & Impact</h2>
              <div className="mb-4 sm:mb-6">
                <blockquote className="relative p-3 sm:p-4 md:p-6 bg-blue-50 rounded-lg sm:rounded-xl mb-4 sm:mb-6 md:mb-8">
                  <div className="absolute top-0 left-0 transform -translate-x-2 sm:-translate-x-3 md:-translate-x-4 -translate-y-2 sm:-translate-y-3 md:-translate-y-4 text-blue-300 opacity-50">
                    <svg width="24" height="24" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic text-sm sm:text-base md:text-lg mb-3 sm:mb-4">{project.testimonial.quote}</p>
                  <footer className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-xl">
                      {project.testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">{project.testimonial.author}</p>
                      <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm">{project.testimonial.position}</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {project.results.map((result: string, index: number) => (
                  <div 
                    key={index} 
                    className="flex items-start sm:items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 border-l-3 sm:border-l-4 border-green-500 bg-green-50 rounded-r-md sm:rounded-r-lg"
                  >
                    <BarChart className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar - Mobile Responsive */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Project Info Card */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md sm:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Project Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3 pb-2 sm:pb-3 border-b border-gray-200">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Timeline</p>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{project.timeline.start} - {project.timeline.end}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{project.timeline.duration} development time</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3 pb-2 sm:pb-3 border-b border-gray-200">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3 pb-2 sm:pb-3 border-b border-gray-200">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Category</p>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">
                      {categories.find(c => c.id === project.category)?.name}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Technologies</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1.5 sm:mt-2">
                      {project.tags.map((tag: string) => (
                        <span 
                          key={tag} 
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded text-[10px] sm:text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Card - Mobile Responsive */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md sm:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3 md:gap-4">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="bg-blue-50 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-blue-600">{value}</p>
                    <p className="text-gray-600 text-xs sm:text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Related Projects - Mobile Responsive */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md sm:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Related Projects</h3>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {project.related && project.related.map((relatedId: string) => {
                  const relatedProject = projects.find(p => p.id === relatedId);
                  if (!relatedProject) return null;
                  
                  return (
                    <Link 
                      key={relatedId}
                      to={`/portfolio/${relatedId}`}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-md sm:rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={relatedProject.images[0]} 
                          alt={relatedProject.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'https://via.placeholder.com/100x100?text=Project';
                          }}
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base truncate">
                          {relatedProject.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">{relatedProject.description}</p>
                      </div>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>
            
            {/* CTA - Mobile Responsive */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md sm:shadow-lg text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Need a Similar Solution?</h3>
              <p className="text-blue-100 text-sm sm:text-base mb-3 sm:mb-4">Our team can create a customized solution tailored to your specific business needs.</p>
              <Link 
                to="/contact" 
                className="block w-full bg-white text-blue-900 text-center py-2 sm:py-3 rounded-md sm:rounded-lg text-sm sm:text-base font-medium hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper data for categories
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'tech-ai', name: 'Technology & AI' },
  { id: 'real-estate', name: 'Real Estate' },
  { id: 'agriculture', name: 'Agriculture & Food' },
  { id: 'business', name: 'Business Management' },
  { id: 'travel', name: 'Travel & Tourism' },
  { id: 'education', name: 'Education & Learning' },
  { id: 'sustainability', name: 'Sustainability' }
];

export default ProjectDetail;
