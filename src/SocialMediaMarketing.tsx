import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Users, 
  MessageCircle, 
  Award, 
  BarChart2, 
  Calendar, 
  Shield, 
  Zap, 
  Clock, 
  CheckCircle, 
  Target, 
  DollarSign, 
  Eye, 
  Globe,
  TrendingUp, 
  ShoppingBag, 
  Briefcase, 
  Building, 
  Bot, 
  Search, 
  Hash, 
  Star, 
  ThumbsUp,
  Heart
} from 'lucide-react';

const SocialMediaMarketing = () => {
  // Control animation states
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState(0);
  const [activePlatform, setActivePlatform] = useState('instagram');
  
  // Handle scroll animations and intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all sections that should animate on scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle CTA button click
  const handleCTAClick = () => {
    // Navigate to homepage with query parameter to open consultation form
    window.location.href = '/?openConsultation=true';
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-28 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
          {/* Floating social icons */}
          <div className="absolute inset-0">
            {['facebook', 'instagram', 'twitter', 'linkedin', 'youtube'].map((platform, index) => (
              <div 
                key={platform}
                className="absolute animate-float opacity-10"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${index * 0.7}s`,
                  transform: `scale(${0.5 + Math.random() * 1.5})`
                }}
              >
                {platform === 'facebook' && <Facebook size={40} className="text-blue-500" />}
                {platform === 'instagram' && <Instagram size={40} className="text-pink-500" />}
                {platform === 'twitter' && <Twitter size={40} className="text-blue-400" />}
                {platform === 'linkedin' && <Linkedin size={40} className="text-blue-700" />}
                {platform === 'youtube' && <Youtube size={40} className="text-red-500" />}
              </div>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="lg:w-1/2" id="hero-content">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full text-sm font-semibold text-white mb-4 animate-pulse">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <span className="font-bold">Aztech Intelligence | Social Media Excellence</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block text-gray-900">Grow Your Following &</span>
                <div className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-transparent bg-clip-text inline-block">
                    Triple Your Engagement
                  </span>
                  <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-full transform origin-left animate-expand"></div>
                </div>
              </h1>
              
              <p className="text-xl text-gray-700 mb-4 max-w-xl animate-fade-in font-medium">
                <strong>Get real, measurable results</strong> with our data-driven social media strategies that <strong>convert followers into customers</strong> and boost your brand's visibility.
              </p>
              
              {/* Success metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white rounded-lg shadow-sm p-3 text-center border border-purple-100">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">+187%</div>
                  <div className="text-xs text-gray-600">Avg. Engagement</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-3 text-center border border-purple-100">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-600 text-transparent bg-clip-text">+312%</div>
                  <div className="text-xs text-gray-600">Follower Growth</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-3 text-center border border-purple-100">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">3.2x</div>
                  <div className="text-xs text-gray-600">ROI</div>
                </div>
              </div>
              
              {/* Client testimonial snippet */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg mb-6 border border-purple-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center font-bold text-purple-700">JD</div>
                  <div>
                    <div className="font-medium text-sm">Java House Kenya</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm italic text-gray-600">"Our Instagram following grew by 10,000+ in just 3 months and sales from social increased by 43%!"</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button 
                  onClick={handleCTAClick}
                  className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 
                           text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 
                           shadow-lg hover:shadow-pink-500/30 group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Free Social Audit
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  
                  {/* Button animation effects */}
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-out blur-xl"></span>
                </button>
                
                <div className="flex items-center gap-2 text-purple-700 animate-pulse">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Limited Time: First Month 50% Off + Free Content Calendar</span>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-col gap-2 text-gray-600">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-pink-400"></div>
                    ))}
                  </div>
                  <span className="text-sm">Trusted by <span className="font-semibold">500+</span> businesses worldwide</span>
                </div>
              </div>
            </div>
            
            {/* Hero visual */}
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Social Media Dashboard Mockup */}
                <div className="relative z-10 bg-white rounded-xl shadow-xl p-4 transform rotate-1 animate-float">
                  <div className="h-3 w-20 bg-gray-200 rounded-full mb-4"></div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                      <div className="text-2xl font-bold">2.4K</div>
                      <div className="text-xs">Followers</div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 text-white">
                      <div className="text-2xl font-bold">312</div>
                      <div className="text-xs">Engagements</div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                      <div className="text-2xl font-bold">87%</div>
                      <div className="text-xs">Growth</div>
                    </div>
                  </div>
                  
                  <div className="h-24 bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 h-16 w-full">
                      <div className="absolute bottom-0 left-0 w-8 h-12 bg-blue-400 rounded-t-md"></div>
                      <div className="absolute bottom-0 left-10 w-8 h-16 bg-pink-400 rounded-t-md"></div>
                      <div className="absolute bottom-0 left-20 w-8 h-8 bg-purple-400 rounded-t-md"></div>
                      <div className="absolute bottom-0 left-30 w-8 h-14 bg-blue-400 rounded-t-md"></div>
                      <div className="absolute bottom-0 left-40 w-8 h-10 bg-pink-400 rounded-t-md"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white">
                      <TrendingUp size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="h-2.5 bg-gray-200 rounded-full w-3/4 mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
                
                {/* Platform Icons */}
                <div className="absolute -top-6 -right-10 bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
                  <Facebook className="text-white w-8 h-8" />
                </div>
                <div className="absolute top-1/4 -right-14 bg-gradient-to-br from-yellow-400 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '4s', animationDelay: '0.2s'}}>
                  <Instagram className="text-white w-7 h-7" />
                </div>
                <div className="absolute top-1/2 -right-8 bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.4s'}}>
                  <Twitter className="text-white w-6 h-6" />
                </div>
                <div className="absolute bottom-1/4 -right-12 bg-blue-700 w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '2.8s', animationDelay: '0.6s'}}>
                  <Linkedin className="text-white w-7 h-7" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-red-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '3.2s', animationDelay: '0.8s'}}>
                  <Youtube className="text-white w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section removed as requested */}
      
      {/* Why Businesses Need It Section - Redesigned */}
      <section className="py-16 relative overflow-hidden" id="why-businesses-need-it">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDuration: '18s', animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDuration: '20s', animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium mb-6 shadow-md animate-pulse-slow">
              <span className="mr-1">✨</span> Why Businesses Need It
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent inline-block">Power Up Your Brand's Social Presence</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Strategic social media marketing is no longer optional - it's essential for business growth in the digital age</p>
          </div>
          
          {/* Interactive Hexagon Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Meet Your Audience",
                description: "Your audience spends hours a day on social platforms—meet them there.",
                color: "blue",
                gradient: "from-blue-400 to-indigo-600",
                delay: 0
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Build Trust",
                description: "Develop credibility at scale through consistent quality content.",
                color: "purple",
                gradient: "from-purple-500 to-indigo-600",
                delay: 0.1
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Drive Traffic & Sales",
                description: "Channel social engagement into website traffic and conversions.",
                color: "pink",
                gradient: "from-pink-500 to-rose-600",
                delay: 0.2
              },
              {
                icon: <ShoppingBag className="w-6 h-6" />,
                title: "Influence Decisions",
                description: "Shape purchase decisions through content and social proof.",
                color: "indigo",
                gradient: "from-indigo-500 to-blue-600",
                delay: 0.3
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: "Stay Top Of Mind",
                description: "Keep your brand relevant with consistent, engaging presence.",
                color: "fuchsia",
                gradient: "from-fuchsia-500 to-purple-600",
                delay: 0.4
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Enhance Support",
                description: "Provide responsive customer service through social channels.",
                color: "cyan",
                gradient: "from-cyan-500 to-blue-600",
                delay: 0.5
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
                style={{animationDelay: `${item.delay}s`}}
              >
                {/* Interactive gradient background that appears on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                
                {/* Floating animated shapes */}
                <div className={`absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-700 transform group-hover:scale-125`}></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon with animated gradient background */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-lg blur-sm opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125`}></div>
                    <div className={`relative w-12 h-12 flex items-center justify-center bg-gradient-to-br ${item.gradient} text-white rounded-lg shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 animate-pulse-subtle`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Title with animated underline on hover */}
                    <h3 className={`text-lg font-bold mb-1 group-hover:text-${item.color}-600 transition-colors duration-300`}>
                      {item.title}
                      <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-500 mt-1 rounded-full`}></div>
                    </h3>
                    
                    {/* Description with subtle color change on hover */}
                    <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
                
                {/* Interactive button that appears on hover */}
                <div className={`mt-3 flex items-center text-sm font-medium text-${item.color}-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0`}>
                  <span className="mr-1">Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Animated stats row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 px-5 py-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg max-w-4xl mx-auto border border-gray-100">
            {[
              { value: "3.2B+", label: "Social Media Users", icon: <Globe className="w-5 h-5" />, color: "blue", gradient: "from-blue-400 to-indigo-600" },
              { value: "6.7h", label: "Daily Usage", icon: <Clock className="w-5 h-5" />, color: "purple", gradient: "from-purple-500 to-indigo-600" },
              { value: "70%", label: "Research Products", icon: <Search className="w-5 h-5" />, color: "pink", gradient: "from-pink-500 to-rose-600" },
              { value: "54%", label: "Purchase Via Social", icon: <DollarSign className="w-5 h-5" />, color: "cyan", gradient: "from-cyan-500 to-blue-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center mb-2 bg-gradient-to-br ${stat.gradient} text-white p-2 rounded-lg w-10 h-10 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {stat.icon}
                </div>
                <div className={`text-xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent animate-count-up`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* AI-Enhanced Social Media Section - Redesigned */}
      <section className="py-14 bg-gradient-to-r from-gray-50 to-slate-100" id="ai-features">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium mb-4 shadow-sm">
              <span className="mr-1">✨</span> AI-Powered Solutions
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Supercharge Your Strategy With AI</span>
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base">
              Our custom AI agents enhance every aspect of your social media presence
            </p>
          </div>
          
          {/* Compact AI Features Grid with Animated Icons - Fixed spacing for consistent display */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                icon: <Target className="w-5 h-5 stroke-[2.5]" />,
                title: "Content Optimization",
                description: "Suggest best times and formats for higher engagement",
                color: "blue",
                gradient: "from-blue-400 to-indigo-500",
                animation: "pulse"
              },
              {
                icon: <Hash className="w-5 h-5 stroke-[2.5]" />,
                title: "Caption & Hashtag Gen",
                description: "Generate viral hashtags tailored to your brand voice",
                color: "purple",
                gradient: "from-purple-400 to-indigo-500",
                animation: "bounce"
              },
              {
                icon: <Bot className="w-5 h-5 stroke-[2.5]" />,
                title: "Social Media Manager",
                description: "Create and schedule posts with minimal intervention",
                color: "indigo",
                gradient: "from-indigo-400 to-blue-500",
                animation: "pulse"
              },
              {
                icon: <ThumbsUp className="w-5 h-5 stroke-[2.5]" />,
                title: "Sentiment Analysis",
                description: "Monitor public mood and engagement in real-time",
                color: "pink",
                gradient: "from-pink-400 to-purple-500",
                animation: "bounce"
              },
              {
                icon: <Search className="w-5 h-5 stroke-[2.5]" />,
                title: "Social Listening",
                description: "Track mentions and competitor activity",
                color: "indigo",
                gradient: "from-indigo-400 to-purple-500",
                animation: "pulse"
              },
              {
                icon: <BarChart2 className="w-5 h-5 stroke-[2.5]" />,
                title: "Performance Predictor",
                description: "Forecast content performance before posting",
                color: "cyan",
                gradient: "from-cyan-400 to-blue-500",
                animation: "bounce"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl p-5 border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 overflow-visible hover:scale-105"
              >
                {/* Hover effect with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="flex items-start gap-3">
                  {/* Icon with animated background - Fixed to prevent display issues */}
                  <div className="relative flex-shrink-0 w-11 h-11 flex items-center justify-center">
                    <div className={`absolute inset-0.5 bg-gradient-to-br ${feature.gradient} rounded-full blur-sm opacity-30 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 z-0`}></div>
                    <div className={`absolute inset-0 rounded-full z-10`}></div>
                    <div className={`relative z-20 w-10 h-10 flex items-center justify-center bg-gradient-to-r ${feature.gradient} text-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Title with animated underline on hover - Fixed animation */}
                    <h3 className={`text-sm font-bold mb-1 group-hover:text-${feature.color}-600 transition-colors duration-300`}>
                      {feature.title}
                      <div className="relative h-0.5 w-full mt-0.5 overflow-hidden">
                        <div className={`absolute left-0 top-0 h-full w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} transition-all duration-500 rounded-full`}></div>
                      </div>
                    </h3>
                    
                    {/* Description with smaller text for space efficiency */}
                    <p className="text-xs text-gray-500 leading-tight">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Added interactive CTA button */}
          <div className="mt-8 text-center">
            <button className="group relative inline-flex items-center gap-1 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span>Explore AI Solutions</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* How We Deliver Results Section */}
      <section className="py-20 bg-purple-50" id="how-we-deliver">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
              <span className="mr-1">⚙️</span> How We Deliver Results
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">Our Process for Social Success</span>
            </h2>
          </div>
          
          {/* Process Steps */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Connection Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 transform -translate-x-1/2 hidden md:block"></div>
              
              {[
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "Audit & Strategy",
                  description: "We analyze your current presence and design a data-driven content + growth strategy tailored to your business goals.",
                  highlight: "Comprehensive analysis of your current social media performance"
                },
                {
                  icon: <MessageCircle className="w-8 h-8" />,
                  title: "Content Creation",
                  description: "We create posts, videos, carousels, captions, hashtags, and stories that align with your brand and resonate with your audience.",
                  highlight: "Eye-catching visuals that stop the scroll"
                },
                {
                  icon: <Calendar className="w-8 h-8" />,
                  title: "Scheduling & Automation",
                  description: "We schedule content using smart timing for each platform to ensure maximum visibility and engagement.",
                  highlight: "Consistent posting with optimal timing"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Community Management",
                  description: "We monitor comments, DMs, and mentions to engage users, build relationships, and foster loyalty.",
                  highlight: "Real-time response to audience interactions"
                },
                {
                  icon: <BarChart2 className="w-8 h-8" />,
                  title: "Analytics & Reporting",
                  description: "We track KPIs and continually refine our strategy based on performance data and insights.",
                  highlight: "Data-driven optimization for continuous improvement"
                }
              ].map((step, index) => (
                <div key={index} className="relative z-10 mb-12 md:mb-24 animate-on-scroll" id={`process-step-${index}`}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    {/* Step Bubble */}
                    <div className="md:w-1/2 flex justify-center">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-xl relative ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-20 animate-pulse"></div>
                        <div className="relative z-10 text-purple-600">
                          {step.icon}
                        </div>
                        <div className="absolute -right-1 -top-1 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                      <h3 className="text-xl font-bold mb-2 text-purple-600">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="flex items-center gap-2 text-sm font-medium text-purple-700 bg-purple-50 py-2 px-3 rounded-lg">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-70"></div>
                        {step.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Results Banner */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl p-8 text-white text-center shadow-lg transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform rotate-45 translate-x-full scale-x-150"></div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Ready to Amplify Your Social Media Impact?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto relative z-10">Let our expert team develop a tailored strategy that gets your brand noticed.</p>
              <button onClick={handleCTAClick} className="relative overflow-hidden px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/30 group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let's Grow Together
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white" id="benefits">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
              <span className="mr-1">🚀</span> Benefits of Social Media Marketing
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">Transform Your Online Presence</span>
            </h2>
          </div>
          
          {/* Benefits Grid with Animated Icons */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {[
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Boost Brand Visibility",
                description: "Increase awareness and recognition across platforms",
                color: "purple",
                animation: "pulse"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Build Loyal Audience",
                description: "Create an engaged community of brand advocates",
                color: "pink",
                animation: "bounce"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Drive Website Traffic",
                description: "Channel social followers to your website or store",
                color: "blue",
                animation: "pulse"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Increase Conversions",
                description: "Turn followers into leads and customers",
                color: "purple",
                animation: "bounce"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Stay Ahead of Competitors",
                description: "Differentiate with creative campaigns",
                color: "pink",
                animation: "pulse"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Save Time & Resources",
                description: "Efficient management and automation tools",
                color: "blue",
                animation: "bounce"
              },
              {
                icon: <BarChart2 className="w-8 h-8" />,
                title: "Get Performance Insights",
                description: "Clear analytics and ROI tracking",
                color: "purple",
                animation: "pulse"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Build Brand Loyalty",
                description: "Create deeper connections with your audience",
                color: "pink",
                animation: "bounce"
              }
            ].map((benefit, index) => (
              <div key={index} className="animate-on-scroll" id={`benefit-item-${index}`}>
                <div className="flex items-start gap-4 group hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-600 text-white shadow-md group-hover:shadow-lg transition-all duration-300 animate-${benefit.animation}`} style={{animationDuration: '3s'}}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-purple-600 transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-fuchsia-50 py-12 sm:py-16 md:py-20 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
              <span className="mr-1">📌</span> Use Cases
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">Perfect For Any Industry</span>
            </h2>
          </div>
          
          {/* Tabs Interface */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="flex overflow-x-auto pb-4 mb-6 gap-2 justify-center no-scrollbar">
              {[
                { id: 0, label: "Startups", icon: <Zap className="w-4 h-4" /> },
                { id: 1, label: "E-commerce", icon: <ShoppingBag className="w-4 h-4" /> },
                { id: 2, label: "Service Providers", icon: <Briefcase className="w-4 h-4" /> },
                { id: 3, label: "Corporate Brands", icon: <Building className="w-4 h-4" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap font-medium transition-all duration-300 ${activeTab === tab.id 
                    ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500">
              {activeTab === 0 && (
                <div className="p-8 animate-fade-in">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Startups & Product Launches</h3>
                      <p className="text-gray-600">Generate hype, awareness, and email signups before launching.</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-purple-50 p-5 rounded-xl">
                      <h4 className="font-bold mb-3 text-purple-700">Pre-Launch Strategy</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Build anticipation with countdown posts and teasers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Collect emails through engaging lead magnets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Early-access promotions and waitlists</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-pink-50 p-5 rounded-xl">
                      <h4 className="font-bold mb-3 text-pink-700">Launch & Beyond</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <span>Coordinated launch announcements across platforms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <span>Highlight early adopter testimonials and success stories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <span>Investor-targeted content for further funding rounds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 1 && (
                <div className="p-8 animate-fade-in">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center shadow-lg">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">E-commerce Brands</h3>
                      <p className="text-gray-600">Promote products, run campaigns, and retarget potential customers.</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-blue-50 p-5 rounded-xl">
                      <h4 className="font-bold mb-3 text-blue-700">Product Showcase</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Highlight new arrivals with visually stunning content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Create shoppable posts with direct product links</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Showcase products in real-life scenarios</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-cyan-50 p-5 rounded-xl">
                      <h4 className="font-bold mb-3 text-cyan-700">Conversion Tactics</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>Time-sensitive promotions and flash sales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>Retarget cart abandoners with personalized ads</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>Customer testimonials and user-generated content</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 2 && (
                <div className="p-8 animate-fade-in">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-lg">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Service Providers</h3>
                      <p className="text-gray-600">Build authority through educational content and client success stories.</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-amber-50 p-5 rounded-xl">
                      <h4 className="font-bold mb-3 text-amber-700">Authority Building</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>Educational content that showcases expertise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>Thought leadership articles and industry insights</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>Service process explanations and FAQs</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-5 rounded-xl">
                      <h4 className="font-bold mb-3 text-orange-700">Social Proof</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Client testimonials and success stories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Behind-the-scenes content of your team at work</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Case studies showing transformative results</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 3 && (
                <div className="p-8 animate-fade-in">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow-lg">
                      <Building className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Corporate Brands</h3>
                      <p className="text-gray-600">Strengthen employer branding and showcase company culture.</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-indigo-50 p-5 rounded-xl">
                      <h4 className="font-bold mb-3 text-indigo-700">Employer Branding</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>Highlight company culture and team activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>Employee spotlights and achievement recognition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>Recruitment campaigns and career opportunities</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-5 rounded-xl">
                      <h4 className="font-bold mb-3 text-blue-700">Corporate Communication</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Company news and important announcements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>CSR initiatives and community involvement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Industry leadership and partnership announcements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-white" id="cta">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/5 p-10 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Turn Followers Into Fans, and Fans Into Customers
                </h2>
                
                <p className="text-lg text-blue-100 mb-8">
                  Let our expert team and smart tools elevate your social media game—so your brand stands out and sells more.
                </p>
                
                <button 
                  onClick={handleCTAClick}
                  className="relative overflow-hidden px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-700/20 group inline-flex items-center gap-2"
                >
                  Book Your Free Strategy Session
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                
                <p className="mt-6 text-blue-100 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Let's talk about how we'll grow your audience and revenue through social</span>
                </p>
              </div>
              
              <div className="lg:w-2/5 bg-white/10 backdrop-blur-sm p-10 lg:p-16 flex items-center justify-center relative overflow-hidden">
                <div className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 w-full max-w-sm bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                      <div>
                        <div className="font-bold">@yourbrand</div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                      </div>
                    </div>
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </div>
                  
                  <div className="h-40 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-3xl">🚀</div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="h-3 w-full bg-gray-200 rounded-full"></div>
                    <div className="h-3 w-5/6 bg-gray-200 rounded-full"></div>
                    <div className="h-3 w-4/6 bg-gray-200 rounded-full"></div>
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <div className="flex items-center gap-1 text-red-500">
                      <Heart className="w-5 h-5 fill-red-500" />
                      <span className="text-xs font-medium">1.2k</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-xs font-medium">248</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-500">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-xs font-medium">+43%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
