import { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  BarChart2, 
  Award, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Globe, 
  RefreshCw,
  Settings,
  ArrowUp,
  ArrowDown,
  ChevronDown,
  Shield, 
  TrendingUp,
  Star,
  Target,
  MessageCircle,
  ChevronRight,
  Eye,
  Code,
  Link,
  FileText,
  PenTool
} from 'lucide-react';

const SearchEngineOptimization = () => {
  // State to manage animations and interactions
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const handleCTAClick = () => {
    // Scroll to contact form or open modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((el) => {
      const id = el.id;
      if (!id) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add animation class when element is visible
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(el);
      observers.push(observer);
    });

    // Observer for stats section to trigger counters
    if (statsRef.current) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !countersStarted) {
              setCountersStarted(true);
              statsObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      
      statsObserver.observe(statsRef.current);
      observers.push(statsObserver);
    }
    
    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [countersStarted]);

  return (
    <div className="seo-page overflow-hidden">
      {/* Hero Section - Clean design with web-development pattern */}
      <section className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        {/* Abstract code background - subtle, matching web development page */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-tr-full"></div>
        
        {/* Animated subtle elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Soft animated circles */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-100 opacity-20 blur-3xl animate-orb-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-100 opacity-30 blur-3xl animate-orb-float-reverse"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-3xl animate-orb-float-reverse"></div>
          
          {/* Light floating elements */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-blue-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                opacity: 0.05 + Math.random() * 0.1,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium mb-6 shadow-md animate-pulse">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center text-xs font-bold">#1</div>
                <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center text-xs font-bold">KE</div>
              </div>
              <span>Ranked #1 SEO Agency in Kenya | 254 Businesses Ranked</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="block text-slate-800">Get to Google's Page 1</span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">or You Don't Pay</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 mb-6 max-w-xl font-medium">
              <strong>Stop losing customers to competitors.</strong> Our proven SEO strategies have helped 200+ Kenyan businesses increase their organic traffic by <strong className="text-blue-600">173% on average</strong> in just 90 days.
            </p>
            
            {/* ROI Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-3 border border-blue-50 text-center">
                <div className="text-2xl font-bold text-blue-700">173%</div>
                <div className="text-xs text-gray-600">Traffic Increase</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3 border border-blue-50 text-center">
                <div className="text-2xl font-bold text-blue-700">Top 10</div>
                <div className="text-xs text-gray-600">Rankings in 90 Days</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3 border border-blue-50 text-center">
                <div className="text-2xl font-bold text-blue-700">46%</div>
                <div className="text-xs text-gray-600">Conversion Boost</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg mb-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">NK</div>
                <div>
                  <div className="font-semibold">Nairobi Kitchen Supplies</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-1 text-xs text-gray-600">Verified</span>
                  </div>
                </div>
              </div>
              <p className="text-sm italic text-gray-700">"After trying 3 other SEO agencies with no results, we found this team. Within 2 months, we ranked #1 for 'kitchen supplies Nairobi' and our online orders increased by 278%."</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button 
                onClick={handleCTAClick}
                className="relative group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-white overflow-hidden hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
              >
                <span className="relative z-10">Get Free SEO Audit</span>
                <Search className="h-4 w-4" />
              </button>
              
              <div className="flex items-center text-blue-600 font-medium animate-pulse">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Limited Time: 50% Off First Month + Free Website Audit</span>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 text-gray-600 text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><strong>No</strong> Long Contracts</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><strong>30-Day</strong> Results</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><strong>100%</strong> Transparent</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><strong>Weekly</strong> Reports</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative" data-aos="fade-left">
            <div className="relative">
              {/* 3D floating search result mockup */}
              <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transform hover:rotate-y-3 hover:scale-105 transition-all duration-500 ease-out">
                <div className="h-14 bg-gray-100 flex items-center px-4 border-b border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 flex-1 bg-gray-200 h-6 rounded-full flex items-center px-4 text-xs text-gray-600">
                    <Search className="w-3 h-3 mr-2 text-blue-500" />
                    yourwebsite.com
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="h-5 w-40 bg-gray-800 rounded"></div>
                      <div className="h-3 w-64 bg-blue-500 rounded mt-1"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-3">
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  
                  <div className="mt-4 flex items-center text-xs text-green-600">
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    <Star className="w-3 h-3 mr-1" fill="currentColor" />
                    <span className="ml-1">5.0 (243 reviews)</span>
                  </div>
                </div>
                
                <div className="h-10 bg-blue-50 flex items-center px-4 justify-between text-xs text-blue-800 font-medium">
                  <span className="flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Rank #1
                  </span>
                  <span>|</span>
                  <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    +145% Traffic
                  </span>
                  <span>|</span>
                  <span className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    High CTR
                  </span>
                </div>
              </div>
              
              {/* Floating rank indicators */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-xl shadow-lg transform -rotate-12 animate-float-slow">
                #1
              </div>
              
              <div className="absolute -bottom-2 -left-2 bg-blue-600 text-white rounded-lg py-2 px-3 text-sm font-medium shadow-md transform rotate-6 animate-float">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +238%
                </div>
              </div>
              
              {/* Particle connection lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400">
                  <path d="M50,100 Q150,50 250,150 T450,100" stroke="url(#blue-gradient)" strokeWidth="1" fill="none" strokeDasharray="5,5" className="animate-dash" />
                  <path d="M100,50 Q200,150 300,100 T450,200" stroke="url(#cyan-gradient)" strokeWidth="1" fill="none" strokeDasharray="5,5" className="animate-dash-reverse" />
                  <defs>
                    <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-blue-200 text-sm mb-2 animate-bounce">Scroll Down</div>
          <ChevronDown className="w-6 h-6 text-blue-200 animate-bounce" />
        </div>
      </section>

      {/* Why Businesses Need SEO - Award-winning interactive section */}
      <section className="py-24 relative bg-white" id="why-businesses-need-it">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="mr-2">💡</span> Why Businesses Need SEO
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Drive Growth With Strategic SEO
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-10">
              In today's digital landscape, search engine visibility is essential for business success. 
              Here's why SEO should be at the core of your online strategy:
            </p>
          </div>
          
          {/* Modern interactive stats visualization */}
          <div className="relative max-w-5xl mx-auto py-10" ref={statsRef}>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl"></div>
            
            {/* Connected neon line effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <svg className="absolute w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
                <path 
                  d="M100,200 C300,100 400,300 600,250 S800,400 900,300" 
                  stroke="url(#blue-gradient)" 
                  strokeWidth="1" 
                  fill="none" 
                  className="animate-draw-path"
                />
                <defs>
                  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Interactive stats grid with modern design */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 relative z-10">
              {[
                {
                  icon: <Search className="w-6 h-6" />,
                  stat: "93%",
                  text: "online experiences start with search",
                  color: "blue",
                  animDelay: "0"
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  stat: "85%",
                  text: "consumers find local businesses online",
                  color: "indigo",
                  animDelay: "100"
                },
                {
                  icon: <BarChart2 className="w-6 h-6" />,
                  stat: "70%",
                  text: "marketers: SEO beats PPC for leads",
                  color: "cyan",
                  animDelay: "200"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  stat: "53%",
                  text: "website traffic comes from organic search",
                  color: "blue",
                  animDelay: "300"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  stat: "75%", 
                  text: "users never scroll past first page",
                  color: "indigo",
                  animDelay: "400"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  stat: "5.7x",
                  text: "higher conversion rate than outbound",
                  color: "cyan",
                  animDelay: "500"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${item.animDelay}ms` }}
                >
                  {/* Floating ring around icon */}
                  <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-full border border-${item.color}-500/30 animate-ping-slow opacity-75`}></div>
                    <div className={`absolute inset-1 rounded-full border border-${item.color}-500/20 animate-ping-slow opacity-50 animation-delay-300`}></div>
                    <div className={`absolute inset-2 rounded-full border border-${item.color}-500/10 animate-ping-slow opacity-25 animation-delay-600`}></div>
                  </div>
                  
                  {/* Icon with pulse effect */}
                  <div className="flex items-center mb-1 relative">
                    <div className={`flex-shrink-0 mr-2 w-8 h-8 rounded-lg bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 flex items-center justify-center text-white shadow-lg shadow-${item.color}-500/20 group-hover:shadow-${item.color}-500/40 transition-all duration-300`}>
                      {item.icon}
                      <div className={`absolute inset-0 rounded-lg bg-${item.color}-400 animate-pulse opacity-0 group-hover:opacity-30`}></div>
                    </div>
                    
                    {/* Stat with counting effect */}
                    <div className={`text-3xl font-bold bg-gradient-to-r from-${item.color}-600 via-${item.color}-500 to-${item.color}-600 bg-clip-text text-transparent group-hover:from-${item.color}-500 group-hover:to-${item.color}-700 transition-all duration-300 counter flex-shrink-0`}>
                      {countersStarted ? item.stat : "0%"}
                    </div>
                  </div>
                  
                  {/* Text with animated underline */}
                  <p className="text-sm text-gray-600 relative pl-10">
                    {item.text}
                    <span className={`absolute bottom-0 left-10 h-[1px] w-0 bg-${item.color}-500/50 group-hover:w-full transition-all duration-500 ease-in-out`}></span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional SEO benefits with animated icons */}
          <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield />,
                title: "Build Long-Term Visibility",
                description: "Once established, SEO continues delivering results long after paid campaigns end."
              },
              {
                icon: <MessageCircle />,
                title: "Increase Brand Authority",
                description: "Higher rankings boost credibility and establish you as an industry leader."
              },
              {
                icon: <Target />,
                title: "Appear at the Right Time",
                description: "Capture users with high purchase intent when they're actively searching."
              },
              {
                icon: <TrendingUp />,
                title: "Support Other Channels",
                description: "Enhance content marketing, social media, and paid advertising efficiency."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-500">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Optimize Your Search Presence - Interactive Process Flow */}
      <section className="py-24 relative bg-gradient-to-b from-blue-50 to-white overflow-hidden" id="how-we-optimize">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100 opacity-30 transform -skew-x-12"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="mr-2">⚙️</span> How We Optimize Your Search Presence
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Our Process for Search Success
              </span>
            </h2>
          </div>
          
          {/* Process Flow with Interactive 3D Cards */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Animated Process Flow Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-400 to-cyan-400 transform -translate-x-1/2 hidden md:block">
                <div className="absolute top-0 left-0 w-full h-full bg-white">
                  <div className="w-full h-full bg-gradient-to-b from-blue-400 via-indigo-400 to-cyan-400 animate-reveal-line"></div>
                </div>
              </div>
              
              {[
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "SEO Audit",
                  description: "We run a deep technical and content audit to identify SEO gaps",
                  highlight: "Complete website analysis including technical issues, content quality, and competitors",
                  color: "blue"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Keyword Research",
                  description: "We find high-intent, low-competition keywords your customers actually use",
                  highlight: "Strategic keyword selection based on search volume, competition, and user intent",
                  color: "indigo"
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "On-Page Optimization",
                  description: "We optimize your titles, meta descriptions, headings, content, images, and internal links",
                  highlight: "Comprehensive content optimization for both users and search engines",
                  color: "cyan"
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Technical SEO",
                  description: "We fix crawlability, speed, mobile-friendliness, structured data, and site health",
                  highlight: "Performance optimization for core web vitals and technical requirements",
                  color: "blue"
                },
                {
                  icon: <PenTool className="w-8 h-8" />,
                  title: "Content Strategy",
                  description: "We plan and create blog posts, landing pages, and pillar content that drive authority",
                  highlight: "Strategic content creation that satisfies user search intent and builds expertise",
                  color: "indigo"
                },
                {
                  icon: <Link className="w-8 h-8" />,
                  title: "Off-Page SEO",
                  description: "We build backlinks, manage citations, and improve domain reputation",
                  highlight: "Quality link building from authoritative sources in your industry",
                  color: "cyan"
                },
                {
                  icon: <BarChart2 className="w-8 h-8" />,
                  title: "Reporting",
                  description: "We track your rankings, traffic, and conversions—and continuously improve",
                  highlight: "Transparent performance data with actionable insights for ongoing optimization",
                  color: "blue"
                }
              ].map((step, index) => (
                <div key={index} className="relative z-10 mb-12 md:mb-24 animate-on-scroll" id={`process-step-${index}`}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    {/* Step Number Bubble */}
                    <div className="md:w-1/2 flex justify-center">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-xl relative ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                        <div className={`absolute inset-2 rounded-full bg-gradient-to-br from-${step.color}-500 via-${step.color}-500 to-${step.color}-400 opacity-20 animate-pulse`}></div>
                        <div className="relative z-10 text-blue-600">
                          {step.icon}
                        </div>
                        <div className="absolute -right-1 -top-1 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    
                    {/* Step Content Card with 3D Animation */}
                    <div className="md:w-1/2">
                      <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-xl transform perspective-1000 hover:rotate-y-1 hover:translate-z-10">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${step.color}-100 text-${step.color}-600 text-sm font-medium mb-4`}>
                          Step {index + 1}
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-2 text-${step.color}-600 group-hover:text-${step.color}-500 transition-colors duration-300`}>
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 py-2 px-3 rounded-lg">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-400 opacity-70`}></div>
                          {step.highlight}
                        </div>
                        
                        {/* Interactive expanding detail section */}
                        <div className="mt-4 overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-24">
                          <div className={`p-3 bg-${step.color}-50 rounded-lg text-sm text-gray-600`}>
                            <div className="flex items-center gap-2">
                              <div className={`text-${step.color}-500`}>
                                <CheckCircle className="w-4 h-4" />
                              </div>
                              <span>Advanced {step.title.toLowerCase()} techniques customized for your business</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Interactive Insight Box */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="relative group bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-1 shadow-lg transform hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transform rotate-45 translate-x-full scale-x-150 group-hover:translate-x-1/2 transition-transform duration-700 ease-in-out"></div>
              
              <div className="bg-white rounded-xl p-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our SEO Philosophy</h3>
                    <p className="text-gray-600 mb-4">We combine technical excellence with content quality and user experience. Our approach focuses on sustainable growth through white-hat tactics that provide lasting results.</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {["Data-Driven", "User-Focused", "Technically Sound", "Content-Rich", "Transparent"].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits of SEO Section with Interactive Elements */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="benefits">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="mr-2">🚀</span> Benefits of SEO
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Transform Your Online Visibility
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-10">
              Search Engine Optimization delivers measurable returns that compound over time, 
              giving your business sustainable online growth.
            </p>
          </div>
          
          {/* Isometric 3D Benefit Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Increased Organic Traffic",
                description: "Drive qualified visitors without paying for each click",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Better Lead Quality",
                description: "Attract users actively searching for your solutions",
                icon: <Users className="w-6 h-6" />,
                color: "indigo"
              },
              {
                title: "Long-term ROI",
                description: "Build sustainable traffic that keeps growing",
                icon: <Clock className="w-6 h-6" />,
                color: "purple"
              },
              {
                title: "Greater Trust & Credibility",
                description: "Build authority with high rankings and quality content",
                icon: <Shield className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Competitive Edge",
                description: "Stay ahead of competitors in your industry",
                icon: <Award className="w-6 h-6" />,
                color: "indigo"
              },
              {
                title: "Enhanced User Experience",
                description: "Create better sites that satisfy both users and Google",
                icon: <Eye className="w-6 h-6" />,
                color: "purple"
              }
            ].map((benefit, index) => (
              <div key={index} className="animate-on-scroll" id={`benefit-${index}`}>
                <div className="group h-full bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* Animated corner accent */}
                  <div className={`absolute -top-12 -right-12 w-24 h-24 bg-${benefit.color}-500 opacity-10 transform rotate-45 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  {/* Isometric icon container */}
                  <div className="mb-6 transform perspective-1000">
                    <div className={`relative w-16 h-16 ${index % 2 === 0 ? 'transform -rotate-6' : 'transform rotate-6'}`}>
                      <div className={`absolute inset-0 bg-${benefit.color}-100 rounded-2xl transform skew-y-3`}></div>
                      <div className={`absolute inset-1 bg-${benefit.color}-50 rounded-xl transform -skew-y-2`}></div>
                      <div className={`absolute inset-0 flex items-center justify-center text-${benefit.color}-500 transform transition-transform duration-500 group-hover:scale-110`}>
                        {benefit.icon}
                      </div>
                      
                      {/* Animated shadow */}
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-${benefit.color}-900 opacity-10 blur-sm rounded-full transition-all duration-500 group-hover:opacity-20 group-hover:w-14`}></div>
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 text-${benefit.color}-600 group-hover:text-${benefit.color}-500 transition-colors duration-300`}>
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  
                  {/* Interactive feature list that reveals on hover */}
                  <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100">
                    <div className={`mt-4 pt-4 border-t border-${benefit.color}-100`}>
                      <ul className="space-y-2">
                        {[
                          index % 2 === 0 ? "Measurable results" : "Sustainable growth",
                          index % 3 === 0 ? "Data-driven approach" : "Customized strategy"
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className={`w-4 h-4 text-${benefit.color}-500`} />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Animated Comparison Chart */}
          <div className="max-w-4xl mx-auto mt-20 bg-white rounded-xl shadow-xl overflow-hidden p-1">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 px-8 text-center">
              <h3 className="text-xl font-bold">SEO vs. Paid Advertising</h3>
              <p className="text-blue-100">Long-term value comparison</p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="col-span-1"></div>
                <div className="text-center font-bold text-blue-600">SEO</div>
                <div className="text-center font-bold text-gray-500">Paid Ads</div>
              </div>
              
              {[
                {
                  metric: "Cost Over Time",
                  seo: "Decreases",
                  paid: "Increases",
                  seoValue: 85,
                  paidValue: 30,
                  seoBetter: true
                },
                {
                  metric: "Long-term ROI",
                  seo: "Compounds",
                  paid: "Static",
                  seoValue: 90,
                  paidValue: 40,
                  seoBetter: true
                },
                {
                  metric: "Traffic After Stopping",
                  seo: "Continues",
                  paid: "Stops Immediately",
                  seoValue: 75,
                  paidValue: 5,
                  seoBetter: true
                },
                {
                  metric: "Initial Results",
                  seo: "Slower",
                  paid: "Immediate",
                  seoValue: 30,
                  paidValue: 95,
                  seoBetter: false
                },
                {
                  metric: "Brand Credibility",
                  seo: "Higher",
                  paid: "Lower",
                  seoValue: 80,
                  paidValue: 50,
                  seoBetter: true
                }
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 items-center">
                  <div className="font-medium text-gray-700">{row.metric}</div>
                  
                  <div className="">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full animate-grow-bar" style={{width: `${row.seoValue}%`}}></div>
                      </div>
                      <span className={`text-sm font-medium ${row.seoBetter ? 'text-blue-600' : 'text-gray-500'}`}>{row.seo}</span>
                    </div>
                  </div>
                  
                  <div className="">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gray-500 h-2.5 rounded-full animate-grow-bar" style={{width: `${row.paidValue}%`, animationDelay: '0.5s'}}></div>
                      </div>
                      <span className={`text-sm font-medium ${!row.seoBetter ? 'text-blue-600' : 'text-gray-500'}`}>{row.paid}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Modern, Stylish SEO vs. Paid Advertising Comparison - Award-Winning Design */}
          <div className="max-w-5xl mx-auto mt-12 sm:mt-16 relative px-4 sm:px-6 lg:px-0">
            {/* Enhanced background decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-500/5 rounded-full blur-xl"></div>
            
            {/* Floating animated orbs with more sophisticated animations */}
            <div className="absolute top-0 right-10 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-500/20 animate-float"></div>
            <div className="absolute bottom-20 left-5 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400/20 to-indigo-500/30 animate-orb-float-reverse"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-cyan-400/20 animate-pulse opacity-70"></div>
            
            {/* Enhanced heading with more sophisticated gradient and animation */}
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 animate-gradient-x">
                SEO vs. Paid Advertising
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                Long-term value comparison with interactive metrics
                <span className="hidden sm:inline"> — Hover for insights</span>
                <span className="inline sm:hidden"> — Tap for insights</span>
              </p>
            </div>
            
            {/* Interactive comparison chart with enhanced mobile responsiveness */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-6 md:p-10 relative overflow-hidden transform perspective-1000 hover:shadow-2xl transition-all duration-500">
              {/* Chart header - improved for mobile */}
              <div className="flex flex-col sm:grid sm:grid-cols-3 mb-6 sm:mb-8 relative z-10">
                <div className="hidden sm:block sm:col-span-1"></div>
                <div className="flex justify-center gap-4 sm:gap-0 sm:justify-around sm:col-span-2 md:col-span-2">
                  <div className="text-center">
                    <div className="w-fit mx-auto mb-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-50 text-blue-600 font-medium text-xs sm:text-sm flex items-center">
                      <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                      <span>SEO</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-fit mx-auto mb-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-100 text-slate-600 font-medium text-xs sm:text-sm flex items-center">
                      <BarChart2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                      <span>Paid Ads</span>
                    </div>
                  </div>
                </div>
                <div className="block sm:hidden text-center mb-4">
                  <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 rounded-full"></div>
                </div>
              </div>
              
              {/* Gradient background styling */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-50/50 to-transparent"></div>
              </div>
              
              {/* Mobile-friendly metrics rows with enhanced interactive animations */}
              <div className="space-y-6 sm:space-y-8 relative z-10">
                {[
                  { 
                    metric: "Cost Over Time", 
                    seo: { value: "Decreases", icon: <ArrowDown className="w-3 h-3 text-green-500" /> },
                    paid: { value: "Increases", icon: <ArrowUp className="w-3 h-3 text-red-500" /> },
                    seoValue: 80, 
                    paidValue: 70, 
                    seoBetter: true 
                  },
                  { 
                    metric: "Long-term ROI", 
                    seo: { value: "Compounds", icon: <TrendingUp className="w-3 h-3 text-green-500" /> }, 
                    paid: { value: "Static", icon: <ArrowRight className="w-3 h-3 text-slate-500" /> },
                    seoValue: 90, 
                    paidValue: 40, 
                    seoBetter: true 
                  },
                  { 
                    metric: "Traffic After Stopping", 
                    seo: { value: "Continues", icon: <Zap className="w-3 h-3 text-green-500" /> },
                    paid: { value: "Stops Immediately", icon: <ArrowDown className="w-3 h-3 text-red-500" /> },
                    seoValue: 75, 
                    paidValue: 20, 
                    seoBetter: true 
                  },
                  { 
                    metric: "Initial Results", 
                    seo: { value: "Slower", icon: <Clock className="w-3 h-3 text-slate-500" /> },
                    paid: { value: "Immediate", icon: <Zap className="w-3 h-3 text-green-500" /> },
                    seoValue: 30, 
                    paidValue: 90, 
                    seoBetter: false 
                  },
                  { 
                    metric: "Brand Credibility", 
                    seo: { value: "Higher", icon: <Star className="w-3 h-3 text-green-500" /> },
                    paid: { value: "Lower", icon: <ArrowDown className="w-3 h-3 text-red-500" /> },
                    seoValue: 85, 
                    paidValue: 50, 
                    seoBetter: true 
                  }
                ].map((row, index) => (
                  <div key={index} className="group relative hover:-translate-y-1 transition-all duration-300">
                    {/* Row content with animated hover effects - optimized for mobile */}
                    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-0 sm:items-center relative">
                      {/* Metric name - enhanced for mobile */}
                      <div className="text-slate-700 font-medium text-center sm:text-left mb-2 sm:mb-0 transition-colors group-hover:text-blue-700 border-b sm:border-0 border-slate-100 pb-2 sm:pb-0">{row.metric}</div>
                      
                      {/* SEO value with animated progress - mobile optimized */}
                      <div className="h-12 sm:h-10 relative">
                        {/* Progress bar background */}
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                            {/* Animated fill with gradient and glow effect */}
                            <div 
                              className="h-full rounded-full relative progress-bar-fill" 
                              style={{
                                width: `${row.seoValue}%`,
                                background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
                                boxShadow: row.seoBetter ? '0 0 8px rgba(59, 130, 246, 0.5)' : 'none',
                                animationDelay: `${index * 0.1}s`
                              }}
                            >
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 shine-effect"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Value with tooltip */}
                        <div className="absolute top-0 right-0 flex items-center">
                          <span className={`tooltip-trigger flex items-center text-sm font-medium ${row.seoBetter ? 'text-blue-600' : 'text-slate-600'}`}>
                            {row.seo.icon}
                            <span className="ml-1">{row.seo.value}</span>
                            
                            {/* Tooltip on hover */}
                            <div className="tooltip-content">
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 bg-slate-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                {row.seoBetter ? 
                                  "SEO provides better long-term value in this metric" :
                                  "Paid ads perform better for immediate results"}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      
                      {/* Paid Ads value with animated progress - mobile optimized */}
                      <div className="h-12 sm:h-10 relative">
                        {/* Progress bar background */}
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                            {/* Animated fill with gradient */}
                            <div 
                              className="h-full rounded-full relative progress-bar-fill" 
                              style={{
                                width: `${row.paidValue}%`,
                                background: 'linear-gradient(90deg, #64748b 0%, #94a3b8 100%)',
                                boxShadow: !row.seoBetter ? '0 0 8px rgba(100, 116, 139, 0.5)' : 'none',
                                animationDelay: `${index * 0.1 + 0.5}s`
                              }}
                            >
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 shine-effect"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Value with tooltip */}
                        <div className="absolute top-0 right-0 flex items-center">
                          <span className={`tooltip-trigger flex items-center text-sm font-medium ${!row.seoBetter ? 'text-slate-700' : 'text-slate-600'}`}>
                            {row.paid.icon}
                            <span className="ml-1">{row.paid.value}</span>
                            
                            {/* Tooltip on hover */}
                            <div className="tooltip-content">
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 bg-slate-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                {!row.seoBetter ? 
                                  "Paid advertising performs better for immediate results" :
                                  "SEO provides better long-term value in this metric"}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom divider with animated gradient on hover - enhanced */}
                    <div className="absolute bottom-[-10px] left-0 right-0 h-[1px] group-hover:h-[2px] transition-all duration-300">
                      <div className="h-full w-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:via-blue-400 group-hover:to-blue-200 transition-all duration-500 shadow-sm group-hover:shadow-blue-200/50"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Modern Decorative Dots Pattern */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10">
                <div className="grid grid-cols-6 gap-2">
                  {Array(36).fill(0).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>
                  ))}
                </div>
              </div>
              
              {/* Mobile helper text */}
              <div className="mt-6 text-center block sm:hidden">
                <p className="text-xs text-slate-500 italic">Tap on metrics for more information</p>
              </div>
            </div>
            
            {/* Insights callout - enhanced for mobile with sophisticated design */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-br from-blue-50 to-blue-50/70 backdrop-blur-sm border border-blue-100 rounded-xl p-4 md:p-6 group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-500 shadow-sm hover:shadow-md relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-400/5 rounded-full blur-xl opacity-70"></div>
              <div className="absolute bottom-0 left-10 w-16 h-16 bg-indigo-400/10 rounded-full blur-lg opacity-70"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start relative z-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 mx-auto sm:mx-0 shadow-sm group-hover:shadow-blue-200/50 transition-all duration-300">
                  <Zap className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2 text-center sm:text-left">Key Insight</h4>
                  <p className="text-blue-700/80 text-sm sm:text-base leading-relaxed">
                    While paid advertising delivers faster initial results, SEO provides superior long-term ROI with ongoing traffic that continues even after your active campaign ends. A balanced strategy combining both approaches often yields the best results.
                  </p>
                  
                  {/* Call-to-action button - mobile friendly */}
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <button className="group bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center">
                      <span>Get Customized SEO Strategy</span>
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* SEO benefits with animated icons - enhanced mobile responsiveness */}
          <div className="max-w-4xl mx-auto mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-0">
            {/* SEO benefits section - enhanced with subtle gradients */}
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl shadow-sm border border-slate-100 p-5 sm:p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.01] transform">
              <h3 className="text-xl font-bold mb-6 flex items-center text-blue-700">
                <CheckCircle className="w-6 h-6 mr-2 text-blue-500" />
                Why SEO Outperforms Paid Advertising
              </h3>
              <ul className="space-y-4">
                {[
                  "Generates consistent long-term traffic without ongoing payments",
                  "Builds credibility and trust with your audience",
                  "Higher click-through rates than paid ads (70% of users skip ads)",
                  "Compound growth potential as content accumulates",
                  "Better targeting of users with high purchase intent"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start group hover:bg-blue-50/50 p-2 rounded-lg transition-colors duration-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    <span className="text-slate-700 group-hover:text-blue-900 transition-colors duration-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* When to use paid advertising - enhanced with subtle gradients */}
            <div className="bg-gradient-to-br from-white to-slate-50/50 rounded-xl shadow-sm border border-slate-100 p-5 sm:p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.01] transform">
              <h3 className="text-xl font-bold mb-6 flex items-center text-slate-700">
                <BarChart2 className="w-6 h-6 mr-2 text-slate-500" />
                When Paid Advertising Shines
              </h3>
              <ul className="space-y-4">
                {[
                  "Need immediate visibility for time-sensitive campaigns",
                  "Testing new market segments or product offerings",
                  "Targeting very specific demographics or locations",
                  "Re-engaging past visitors with remarketing campaigns",
                  "Complementing SEO efforts for competitive keywords"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start group hover:bg-slate-50/80 p-2 rounded-lg transition-colors duration-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mt-0.5 mr-3 group-hover:bg-slate-200 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-slate-500 group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Interactive CTA banner */}
          <div className="mt-16 max-w-4xl mx-auto relative perspective-1000">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 shadow-xl hover:shadow-blue-500/20 
                          transition-all duration-500 transform hover:rotate-y-3 hover:scale-[1.02] group">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Ready to see similar results?</h3>
                  <p className="text-blue-100">Let our SEO experts analyze your website and create a customized strategy.</p>
                </div>
                
                <div className="flex-shrink-0">
                  <button className="bg-white text-blue-600 hover:text-blue-800 px-6 py-3 rounded-lg font-medium 
                                    flex items-center group-hover:shadow-lg transition-all duration-300 transform 
                                    group-hover:translate-z-10">
                    <span>Get Free Analysis</span>
                    <Search className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI-Powered SEO Tools Section - Innovative Visualization */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Abstract background patterns */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        {/* Animated circles */}
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-200/20 rounded-full blur-3xl animate-orb-float-reverse"></div>
        <div className="absolute w-64 h-64 bottom-0 left-0 bg-indigo-300/20 rounded-full blur-3xl animate-orb-float"></div>
        
        {/* Digital circuit lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              AI-Powered SEO Suite
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              Harness the power of artificial intelligence to optimize your digital presence
            </p>
          </div>
          
          {/* Interactive 3D tools display */}
          <div className="max-w-7xl mx-auto perspective-1000">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left side: Interactive 3D Tool Display */}
              <div className="relative">
                <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl border border-slate-200/50 bg-white/80 backdrop-blur-sm">
                  {/* Dashboard UI simulation */}
                  <div className="absolute inset-0 p-6 transform rotate-y-3 transition-all duration-500 hover:rotate-y-0">
                    {/* Header of the dashboard */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg mr-3">
                          <Search className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-slate-800">SEO Intelligence Dashboard</h3>
                      </div>
                      <div className="flex space-x-2">
                        {[
                          { bg: "bg-blue-500", icon: <RefreshCw className="w-3 h-3 text-white" /> },
                          { bg: "bg-indigo-500", icon: <Settings className="w-3 h-3 text-white" /> },
                          { bg: "bg-purple-500", icon: <BarChart2 className="w-3 h-3 text-white" /> }
                        ].map((btn, i) => (
                          <div key={i} className={`w-6 h-6 rounded-full ${btn.bg} flex items-center justify-center shadow-sm group hover:scale-110 transition-transform cursor-pointer`}>
                            {btn.icon}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Main metrics display */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { label: "Domain Score", value: "87", change: "+12%", color: "text-emerald-500" },
                        { label: "Keywords", value: "1,458", change: "+287", color: "text-blue-500" },
                        { label: "Backlinks", value: "842", change: "+56", color: "text-indigo-500" }
                      ].map((metric, i) => (
                        <div key={i} className="bg-slate-50 rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                          <div className="text-xs text-slate-500 mb-1">{metric.label}</div>
                          <div className="flex justify-between items-end">
                            <div className="text-xl font-bold text-slate-800">{metric.value}</div>
                            <div className={`text-xs font-medium ${metric.color} flex items-center`}>
                              <ArrowUp className="w-3 h-3 mr-0.5" />
                              {metric.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Keyword rankings visualization */}
                    <div className="mb-6 bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-slate-800 text-sm">Keyword Position Changes</h4>
                        <div className="flex items-center text-xs text-blue-500 font-medium cursor-pointer hover:text-blue-600 transition-colors">
                          <span>Last 30 Days</span>
                          <ChevronDown className="w-3 h-3 ml-1" />
                        </div>
                      </div>
                      
                      {/* Interactive chart visualization */}
                      <div className="h-40 relative">
                        {/* Blue primary line - organic growth */}
                        <svg className="absolute inset-0" viewBox="0 0 400 100" preserveAspectRatio="none">
                          {/* Chart bg grid */}
                          <line x1="0" y1="25" x2="400" y2="25" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
                          <line x1="0" y1="50" x2="400" y2="50" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
                          <line x1="0" y1="75" x2="400" y2="75" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
                          
                          {/* Data line with gradient */}
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#6366f1" />
                            </linearGradient>
                          </defs>
                          
                          <path d="M0,80 C50,70 100,65 150,55 C200,45 250,40 300,30 C350,25 400,20 400,20" 
                                fill="none" stroke="url(#lineGradient)" strokeWidth="2" className="animate-draw-path" />
                          
                          {/* Area fill under the line */}
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                          
                          <path d="M0,80 C50,70 100,65 150,55 C200,45 250,40 300,30 C350,25 400,20 400,20 V100 H0 Z" 
                                fill="url(#areaGradient)" opacity="0.5" />
                          
                          {/* Data points */}
                          {[{ x: 0, y: 80 }, { x: 50, y: 70 }, { x: 100, y: 65 }, { x: 150, y: 55 }, 
                            { x: 200, y: 45 }, { x: 250, y: 40 }, { x: 300, y: 30 }, { x: 350, y: 25 }, { x: 400, y: 20 }].map((point, i) => (
                            <circle key={i} cx={point.x} cy={point.y} r="3" fill="#3b82f6" className="animate-pulse-subtle" />
                          ))}
                        </svg>
                        
                        {/* Chart labels */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-400 px-2">
                          <span>May 8</span>
                          <span>May 15</span>
                          <span>May 22</span>
                          <span>May 29</span>
                          <span>Jun 5</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Top keywords table */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-slate-800 text-sm">Top Performing Keywords</h4>
                        <div className="flex items-center text-xs text-blue-500 font-medium cursor-pointer hover:text-blue-600 transition-colors">
                          <span>View All</span>
                          <ChevronRight className="w-3 h-3 ml-1" />
                        </div>
                      </div>
                      
                      {/* Keywords list */}
                      <div className="space-y-2">
                        {[
                          { keyword: "digital marketing agency", position: 2, volume: "8.2K", trend: "up" },
                          { keyword: "seo services", position: 3, volume: "12K", trend: "up" },
                          { keyword: "content marketing strategy", position: 1, volume: "4.5K", trend: "up" },
                          { keyword: "website optimization", position: 5, volume: "7.3K", trend: "down" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between py-1.5 px-2 text-sm rounded hover:bg-slate-50 transition-colors">
                            <div className="flex-1 font-medium text-slate-700">{item.keyword}</div>
                            <div className="flex items-center">
                              <div className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs mr-3">
                                #{item.position}
                              </div>
                              <div className="w-16 text-slate-600 text-xs">{item.volume}</div>
                              <div className="w-6">
                                {item.trend === "up" ? 
                                  <ArrowUp className="w-3 h-3 text-emerald-500" /> : 
                                  <ArrowDown className="w-3 h-3 text-red-500" />}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 transform">
                  <div className="w-8 h-24 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-l-lg shadow-lg opacity-80"></div>
                </div>
                <div className="absolute -right-4 top-1/4 transform">
                  <div className="w-8 h-16 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-r-lg shadow-lg opacity-80"></div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform">
                  <div className="w-32 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-b-lg shadow-lg opacity-80 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">REAL-TIME ANALYSIS</span>
                  </div>
                </div>
              </div>
              
              {/* Right side: AI SEO Tools List */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-8 text-blue-900">Transform Your SEO Strategy With AI</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Smart Keyword Discovery",
                      description: "Automatically identify high-potential keywords based on search trends, competition analysis, and your website's authority.",
                      icon: <Search className="w-5 h-5" />,
                      color: "blue"
                    },
                    {
                      title: "Content Optimization Engine",
                      description: "Our AI analyzes top-performing content and provides actionable recommendations to improve your content's search visibility.",
                      icon: <FileText className="w-5 h-5" />,
                      color: "indigo"
                    },
                    {
                      title: "Competitive Intelligence",
                      description: "Gain insights into competitors' strategies and identify opportunities to outperform them in search results.",
                      icon: <BarChart2 className="w-5 h-5" />,
                      color: "purple"
                    },
                    {
                      title: "Predictive Ranking Analysis",
                      description: "Our algorithms forecast potential ranking changes and suggest proactive optimizations to maintain and improve positions.",
                      icon: <TrendingUp className="w-5 h-5" />,
                      color: "cyan"
                    }
                  ].map((tool, index) => (
                    <div key={index} className="group relative">
                      {/* Colored animated border effect */}
                      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 opacity-30 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Main content */}
                      <div className="relative flex items-start bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                        <div className={`flex-shrink-0 mr-4 w-10 h-10 rounded-lg bg-${tool.color}-100 text-${tool.color}-600 flex items-center justify-center`}>
                          {tool.icon}
                          <div className={`absolute inset-0 rounded-lg bg-${tool.color}-400/40 animate-pulse opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-1 text-slate-800">{tool.title}</h4>
                          <p className="text-slate-600">{tool.description}</p>
                        </div>
                        
                        {/* Animated indicator on hover */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 transform opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ChevronRight className={`w-5 h-5 text-${tool.color}-500`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <button className="group relative px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium flex items-center shadow-md hover:shadow-xl transition-shadow duration-300">
                    <span>Request AI Analysis Demo</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    
                    {/* Button hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10">Request AI Analysis Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section - Clean Design with matching pattern */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
        {/* Abstract code background - subtle, matching hero section */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-500/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-500/5 rounded-tr-full"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Ready to Improve Your Search Rankings?</h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Take the first step toward transforming your online visibility with our award-winning SEO services
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-bold 
                             shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  <span>Get Started Today</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                
                <button className="bg-white border-2 border-blue-200 text-blue-600 hover:border-blue-300 hover:bg-blue-50
                             px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            opacity: 0.2;
            background-color: rgba(59, 130, 246, 0.1);
          }
          50% {
            opacity: 0.6;
            background-color: rgba(59, 130, 246, 0.3);
          }
        }
        
        @keyframes orb-float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -10px);
          }
          50% {
            transform: translate(20px, 0);
          }
          75% {
            transform: translate(10px, 10px);
          }
        }
        
        @keyframes orb-float-reverse {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-10px, 10px);
          }
          50% {
            transform: translate(-20px, 0);
          }
          75% {
            transform: translate(-10px, -10px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(-12deg);
          }
          50% {
            transform: translateY(-10px) rotate(-8deg);
          }
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: 20;
          }
        }
        
        @keyframes dash-reverse {
          to {
            stroke-dashoffset: -20;
          }
        }
        
        @keyframes rotate-y-180 {
          to {
            transform: rotateY(180deg);
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes draw-path {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        
        .animate-orb-float {
          animation: orb-float 20s ease-in-out infinite;
        }
        
        .animate-orb-float-reverse {
          animation: orb-float-reverse 25s ease-in-out infinite;
        }
        
        .animate-dash {
          animation: dash 30s linear infinite;
        }
        
        .animate-dash-reverse {
          animation: dash-reverse 30s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-3 {
          transform: rotateY(3deg);
        }
        
        .hover\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animate-draw-path {
          animation: draw-path 3s ease-in-out forwards;
        }
        
        /* Counter animation */
        .counter {
          transition: all 2s ease-out;
        }
        
        .is-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .hover\:translate-z-10:hover {
          transform: translateZ(10px);
        }
        
        /* Progress bar animations */
        .progress-bar-fill {
          animation: grow-width 1.5s ease-out forwards;
          transform-origin: left;
        }
        
        @keyframes grow-width {
          from { width: 0; }
          to { width: 100%; }
        }
        
        /* Shine effect animation */
        .shine-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shine 3s infinite;
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          20% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default SearchEngineOptimization;
