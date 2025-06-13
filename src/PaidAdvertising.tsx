import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Check, BarChart2, Target, DollarSign, 
  TrendingUp, Zap, Users, Repeat, LineChart, 
  MousePointer, Eye, Share2, PieChart, Smartphone, Search
} from 'lucide-react';

const PaidAdvertising: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-4 sm:pt-8 md:pt-16 pb-12 sm:pb-16 md:pb-20 mt-2 sm:mt-4 md:mt-8 overflow-hidden bg-gradient-to-br from-red-50 via-white to-blue-50">
        {/* Decorative elements */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/5 rounded-bl-full" 
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
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-red-100 to-blue-100 rounded-full text-sm font-semibold mb-2 animate-pulse">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 text-white flex items-center justify-center text-xs">✓</div>
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-red-500 text-white flex items-center justify-center text-xs">✓</div>
                  </div>
                  <span className="bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
                    <strong>Google & Meta Ads Partner | 3.7x Average ROAS</strong>
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-gray-900">Triple Your Sales With</span>
                  <div className="relative">
                    <span className="block bg-gradient-to-r from-red-600 via-blue-500 to-red-500 text-transparent bg-clip-text">
                      Expert Paid Advertising
                    </span>
                    <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-blue-500 to-red-500 rounded-full transform scale-x-0 transition-transform duration-1000 animate-scale-x-full"></div>
                  </div>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  <strong>Stop wasting money on ineffective ads.</strong> Our data-driven campaigns deliver <strong>qualified leads</strong> that convert to sales, with <strong>transparent reporting</strong> and <strong>guaranteed results</strong>.
                </p>
              </div>
              
              {/* ROI Statistics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">+317%</div>
                  <div className="text-sm text-gray-600">Average ROAS</div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text">-41%</div>
                  <div className="text-sm text-gray-600">Cost Per Lead</div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">30</div>
                  <div className="text-sm text-gray-600">Day Guarantee</div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-200 to-blue-200 flex items-center justify-center font-bold text-gray-800">NK</div>
                  <div>
                    <div className="font-semibold">Nairobi Kitchen Supplies</div>
                    <div className="text-sm text-gray-500">E-commerce Store</div>
                  </div>
                </div>
                <div className="italic text-gray-600 text-sm mb-2">
                  "After struggling with Facebook ads for months, we hired this team and saw immediate results. Our cost per lead dropped by 47% and sales increased by 215% in just 2 months!"  
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleCTAClick} 
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-xl font-semibold 
                          hover:from-red-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105
                          shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 group"
                >
                  Get Free Ad Account Audit
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex items-center text-sm text-red-600 font-medium animate-pulse">
                  <span className="mr-2 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold">LIMITED</span>
                  First Month Management 50% Off
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-600 text-sm bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>AI-Powered</strong> Targeting</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>Weekly</strong> Reports</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>ROI</strong> Guarantee</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>No</strong> Long Contracts</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>Unlimited</strong> Revisions</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span><strong>7-Day</strong> Support</span>
                </div>
              </div>
            </div>
            
            <div className="relative slide-in-right">
              {/* Floating Ad Campaign Mockup */}
              <div className="relative mx-auto z-20 shadow-2xl rounded-xl overflow-hidden
                            transform transition-all duration-700 hover:scale-105 hover:rotate-1">
                <div className="bg-gray-800 h-8 rounded-t-xl flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto bg-gray-700 rounded-full px-4 py-1 text-xs text-gray-300 flex items-center">
                    <Target className="w-3 h-3 mr-1" />
                    ad-campaign-dashboard.com
                  </div>
                </div>
                <div className="bg-white aspect-video relative">
                  {/* Mock ad dashboard content */}
                  <img 
                    src="https://res.cloudinary.com/dtbzsezyo/image/upload/v1720014105/ad-campaign-dashboard_gxhlby.jpg" 
                    alt="Ad campaign dashboard" 
                    className="w-full h-full object-cover"
                  />
                  {/* Animated loading bar at top */}
                  <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 animate-loading-bar"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/10 rounded-full animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
              
              {/* Floating platform logos */}
              <div className="absolute -bottom-3 right-10 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl
                          transform -rotate-3 animate-float-slow flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" 
                     alt="Google" 
                     className="w-10 h-10 object-contain" />
              </div>
              
              <div className="absolute top-10 -left-3 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl
                          transform rotate-6 animate-float flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Meta-Logo.png/1024px-Meta-Logo.png" 
                     alt="Meta" 
                     className="w-10 h-10 object-contain" />
              </div>
              
              {/* Ad metrics snippet */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl
                          transform rotate-3 text-xs text-gray-800 font-mono animate-float-code">
                <div className="text-blue-600">// Ad Campaign Stats</div>
                <div className="text-gray-700">CTR: <span className="text-green-600">4.8%</span></div>
                <div className="text-gray-700">CPC: <span className="text-green-600">$1.24</span></div>
                <div className="text-gray-700">ROAS: <span className="text-green-600">320%</span></div>
                <div className="text-gray-700">Conv: <span className="text-green-600">12.7%</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Paid Advertising Services */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* Background decorative elements */}
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-red-50 opacity-60 blur-xl animate-pulse-slow will-change-transform"></div>
          <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-blue-100 opacity-40 blur-lg animate-float-slow will-change-transform"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10 reveal">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-blue-600 mb-4 shadow-md shadow-red-500/20 animate-pulse-slow">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 flex flex-col sm:flex-row items-center justify-center gap-2">
                <span>Why Choose Our </span>
                <span className="bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text relative">
                  Paid Advertising Services
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-blue-600 transform scale-x-0 transition-transform duration-1000 group-hover:scale-x-100 animate-scale-x-full"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                We deliver ROI-focused paid advertising campaigns that maximize your marketing budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: "Targeted Audience Reach",
                  description: "Precision targeting based on demographics, interests, behaviors, and search intent",
                  icon: Target,
                  delay: 0
                },
                {
                  title: "Data-Driven Approach",
                  description: "Campaign decisions backed by analytics and performance metrics for optimal results",
                  icon: BarChart2,
                  delay: 100
                },
                {
                  title: "ROI Maximization",
                  description: "Focus on conversion optimization and cost efficiency to maximize return on ad spend",
                  icon: DollarSign,
                  delay: 200
                },
                {
                  title: "Cross-Platform Expertise",
                  description: "Seamless integration across Google Ads, Facebook Ads, Instagram Ads, and YouTube",
                  icon: Share2,
                  delay: 300
                },
                {
                  title: "Transparent Reporting",
                  description: "Real-time dashboards and regular reports with clear, actionable insights",
                  icon: PieChart,
                  delay: 400
                },
                {
                  title: "Continuous Optimization",
                  description: "Ongoing refinement of campaigns based on performance data for improved results",
                  icon: Repeat,
                  delay: 500
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="reveal p-6 rounded-xl bg-white border border-gray-200 hover:border-gradient-to-r from-red-300 to-blue-300 transition-all duration-300 
                           shadow-lg hover:shadow-xl group flex gap-4"
                  style={{ transitionDelay: `${feature.delay}ms` }}
                >
                  <div className="bg-gradient-to-r from-red-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center shrink-0
                               group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(feature.icon, { className: 'w-6 h-6 text-white' })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 transition-colors duration-300">
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
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-xl font-semibold 
                        hover:from-red-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105
                        shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 group mx-auto"
              >
                Start Your Ad Campaign
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Expertise Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-red-600 mb-4 shadow-md shadow-blue-500/20">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900">
              Platform <span className="bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We maximize your ROI across all major advertising platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Google Ads Platform */}
            <div className="reveal group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dtbzsezyo/image/upload/v1720015115/google-ads-platform_qxwuhp.jpg" 
                  alt="Google Ads Platform"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" 
                    alt="Google"
                    className="w-12 h-12 mb-3"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">Google Ads Expertise</h3>
                  <p className="text-white/80">Search, Display, Shopping & YouTube Campaigns</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Search Ads", icon: Search },
                    { label: "Display Network", icon: Eye },
                    { label: "Shopping Ads", icon: Smartphone },
                    { label: "YouTube Ads", icon: LineChart }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      {React.createElement(feature.icon, { className: 'w-5 h-5 text-red-500' })}
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  Strategically target customers across Google's vast network with data-driven ad campaigns that capture high-intent audiences.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={handleCTAClick}
                    className="text-red-500 font-semibold hover:text-red-600 flex items-center gap-2 group/link"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Meta Ads Platform */}
            <div className="reveal group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200" style={{ transitionDelay: '100ms' }}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dtbzsezyo/image/upload/v1720015115/meta-ads-platform_siwmud.jpg" 
                  alt="Meta Ads Platform"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Meta-Logo.png/1024px-Meta-Logo.png" 
                    alt="Meta"
                    className="w-12 h-12 mb-3"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">Meta Ads Expertise</h3>
                  <p className="text-white/80">Facebook, Instagram, Messenger & Audience Network</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Facebook Ads", icon: Share2 },
                    { label: "Instagram Ads", icon: Smartphone },
                    { label: "Audience Targeting", icon: Users },
                    { label: "Conversion Tracking", icon: TrendingUp }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      {React.createElement(feature.icon, { className: 'w-5 h-5 text-blue-500' })}
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  Create engaging visual campaigns that leverage Meta's powerful targeting options to reach your ideal customers across all platforms.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={handleCTAClick}
                    className="text-blue-500 font-semibold hover:text-blue-600 flex items-center gap-2 group/link"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-blue-700 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-tr-full"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 reveal">
              <h2 className="text-4xl font-bold leading-tight">
                Ready to boost your <span className="text-blue-200">digital advertising</span> results?
              </h2>
              <p className="text-red-100/90 text-lg">
                Let our experts create high-performing ad campaigns that deliver real results for your business across Google and Meta platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleCTAClick} 
                  className="px-8 py-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 rounded-xl font-semibold 
                          hover:bg-gray-100 transition-all duration-300 transform hover:scale-105
                          shadow-lg hover:shadow-white/20 flex items-center justify-center gap-2 group border-2 border-white"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 text-blue-500" />
                </button>
                <button 
                  onClick={handleCTAClick}
                  className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold
                          hover:border-white hover:bg-white/10 
                          transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  View Our Ad Portfolio
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 reveal">
              {[
                { stat: "200%", label: "Average ROAS" },
                { stat: "3.2x", label: "CTR Improvement" },
                { stat: "-35%", label: "CPC Reduction" },
                { stat: "8.5M+", label: "Monthly Ad Impressions" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-3xl font-bold mb-2 text-white">{item.stat}</div>
                  <div className="text-blue-200">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaidAdvertising;
