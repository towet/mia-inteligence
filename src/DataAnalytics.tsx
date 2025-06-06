import { useState, useEffect, useRef } from 'react';
import { 
  BarChart2, 
  ArrowRight, 
  CheckCircle, 
  Database, 
  LineChart, 
  TrendingUp, 
  Users, 
  DollarSign
} from 'lucide-react';

const DataAnalytics = () => {
  // State to manage animations and interactions
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const handleCTAClick = () => {
    // Navigate to homepage with query parameter to open consultation form
    window.location.href = '/?openConsultation=true';
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
    <div className="data-analytics-page overflow-hidden">
      {/* Hero Section - Clean design with consistent pattern */}
      <section className="relative min-h-screen flex items-center pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-20 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        {/* Abstract code background - subtle */}
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
        </div>
      
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-in-left">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-2 animate-pulse">
                  <BarChart2 className="w-4 h-4" />
                  <span>Aztech Intelligence | 97% Client Satisfaction</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-gray-900">Increase Your ROI by</span>
                  <div className="relative">
                    <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500 text-transparent bg-clip-text">
                      157% with Data Analytics
                    </span>
                    <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500 rounded-full transform scale-x-0 transition-transform duration-1000 animate-scale-x-full"></div>
                  </div>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  <strong>Stop making guesses. Start making decisions based on data.</strong> Our business intelligence solutions help you identify opportunities, reduce costs, and gain a competitive advantage.
                </p>
              </div>
              
              {/* Success metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow-md p-3 text-center border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600">157%</div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-3 text-center border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600">35%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-3 text-center border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600">14 Days</div>
                  <div className="text-sm text-gray-600">Implementation</div>
                </div>
              </div>
              
              {/* Client testimonial */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg mb-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">SL</div>
                  <div>
                    <div className="font-semibold">Safaricom Limited</div>
                    <div className="text-sm text-gray-600">Enterprise Client</div>
                  </div>
                </div>
                <p className="text-sm italic text-gray-700 mb-2">
                  "Their data analytics solution helped us identify customer patterns we'd never seen before. We were able to reduce churn by 27% and increase our ARPU by 18% in just one quarter."
                </p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  onClick={handleCTAClick} 
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold 
                          hover:bg-blue-700 transition-all duration-300 transform hover:scale-105
                          shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 group"
                >
                  Get Free Data Consultation
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <div className="flex items-center text-blue-600 font-medium animate-pulse">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span className="text-sm">Limited Offer: Free Business Intelligence Audit ($2,000 Value)</span>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span><strong>100%</strong> Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span><strong>Quick</strong> Implementation</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span><strong>Expert</strong> Team</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span><strong>100%</strong> Satisfaction</span>
                </div>
              </div>
            </div>
          
            <div className="relative hidden lg:block">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-10 blur-3xl"></div>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500 relative z-10">
                <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-sm font-medium">Data Analytics Dashboard</span>
                  </div>
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div className="p-5 bg-white">
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="rounded-lg bg-blue-50 p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-blue-600">User Engagement</span>
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="text-2xl font-bold text-gray-800">78%</div>
                      <div className="mt-1 text-xs text-green-600">+5.3% from last month</div>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-blue-600">Conversion Rate</span>
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="text-2xl font-bold text-gray-800">4.9%</div>
                      <div className="mt-1 text-xs text-green-600">+0.7% from last month</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Need It - Benefits with Cards */}
      <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-slate-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Your Business Needs Data Analytics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's digital-first world, data analytics isn't just a competitive advantage—it's a business necessity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards with Icons */}
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
                title: "Drive Growth",
                description: "Identify trends, forecast future outcomes, and make data-backed decisions to accelerate business growth."
              },
              {
                icon: <Users className="w-6 h-6 text-blue-500" />,
                title: "Understand Your Customers",
                description: "Gain deep insights into customer behavior, preferences, and journeys to personalize experiences and boost loyalty."
              },
              {
                icon: <Database className="w-6 h-6 text-blue-500" />,
                title: "Optimize Operations",
                description: "Find inefficiencies, reduce costs, and streamline processes with data-driven operational intelligence."
              },
              {
                icon: <LineChart className="w-6 h-6 text-blue-500" />,
                title: "Track Performance",
                description: "Monitor KPIs, track goals, and measure success with real-time dashboards and automated reporting."
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
                title: "Mitigate Risk",
                description: "Detect anomalies, identify potential risks, and make proactive decisions using predictive analytics."
              },
              {
                icon: <DollarSign className="w-6 h-6 text-blue-500" />,
                title: "Increase ROI",
                description: "Optimize marketing spend, improve conversion rates, and maximize return on investment across all channels."
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="group rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4 gap-4">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-500">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver section - Completely redesigned */}
      <section className="py-24 bg-white overflow-hidden relative">
        {/* Modern background elements */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-400/5 to-pink-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block text-blue-600 text-sm font-semibold mb-2 px-3 py-1 bg-blue-50 rounded-full">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">How We Deliver Data Analytics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach transforms your raw data into actionable business intelligence
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-center max-w-6xl mx-auto relative">
            {/* Hexagon timeline with animated connection */}
            <div className="absolute h-[90%] w-1 left-1/2 top-[5%] transform -translate-x-1/2 bg-gradient-to-b from-blue-100 via-blue-50 to-white"></div>
            
            {/* Timeline dots with pulse animation */}
            <div className="absolute h-[90%] left-1/2 top-[5%] transform -translate-x-1/2 flex flex-col justify-between items-center">
              {[0, 1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-white border-4 border-blue-500 relative z-10">
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping-slow opacity-75"></div>
                </div>
              ))}
            </div>
            
            {/* Timeline steps */}
            {[
              {
                icon: <Database className="w-7 h-7 text-blue-600" />,
                title: "Data Discovery",
                description: "We start by understanding your business objectives and identifying what metrics matter most to your success.",
                position: "left"
              },
              {
                icon: <LineChart className="w-7 h-7 text-blue-600" />,
                title: "Data Integration",
                description: "We connect to your existing systems, from databases to APIs, and blend disparate data sources into a unified view.",
                position: "right"
              },
              {
                icon: <BarChart2 className="w-7 h-7 text-blue-600" />,
                title: "Dashboard Design",
                description: "We create visually intuitive dashboards that present complex data in easy-to-understand formats tailored to your needs.",
                position: "left"
              },
              {
                icon: <TrendingUp className="w-7 h-7 text-blue-600" />,
                title: "Advanced Analytics",
                description: "We apply statistical models and machine learning to uncover deeper insights and predictive intelligence.",
                position: "right"
              },
              {
                icon: <Users className="w-7 h-7 text-blue-600" />,
                title: "Implementation & Training",
                description: "We deploy your analytics solution and train your team to ensure everyone can leverage data insights effectively.",
                position: "left"
              },
              {
                icon: <CheckCircle className="w-7 h-7 text-blue-600" />,
                title: "Ongoing Optimization",
                description: "We continually refine your analytics to adapt to changing business needs and maximize ROI.",
                position: "right"
              }
            ].map((step, index) => (
              <div key={index} 
                className={`grid grid-cols-2 gap-12 my-12 ${step.position === 'right' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`${step.position === 'left' ? 'justify-self-end' : 'justify-self-start'} ${step.position === 'right' ? 'order-2' : 'order-1'}`}>
                  <div 
                    className="transform transition-all duration-500 hover:scale-105 bg-white p-8 rounded-xl shadow-xl border border-gray-50 max-w-lg animation-delay-300"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center mb-4 gap-3">
                      <div className="flex items-center justify-center p-3 bg-blue-50 rounded-lg">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className={`${step.position === 'right' ? 'order-1' : 'order-2'}`}></div>
              </div>
            ))}
          </div>
          
          {/* Mobile version */}
          <div className="lg:hidden">
            <div className="relative pl-8 border-l-2 border-blue-100">
              {[
                {
                  icon: <Database className="w-6 h-6 text-blue-600" />,
                  title: "Data Discovery",
                  description: "We start by understanding your business objectives and identifying what metrics matter most to your success."
                },
                {
                  icon: <LineChart className="w-6 h-6 text-blue-600" />,
                  title: "Data Integration",
                  description: "We connect to your existing systems, from databases to APIs, and blend disparate data sources into a unified view."
                },
                {
                  icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
                  title: "Dashboard Design",
                  description: "We create visually intuitive dashboards that present complex data in easy-to-understand formats tailored to your needs."
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
                  title: "Advanced Analytics",
                  description: "We apply statistical models and machine learning to uncover deeper insights and predictive intelligence."
                },
                {
                  icon: <Users className="w-6 h-6 text-blue-600" />,
                  title: "Implementation & Training",
                  description: "We deploy your analytics solution and train your team to ensure everyone can leverage data insights effectively."
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "Ongoing Optimization",
                  description: "We continually refine your analytics to adapt to changing business needs and maximize ROI."
                }
              ].map((step, index) => (
                <div key={index} className="mb-10 last:mb-0 relative animate-on-scroll" id={`process-step-${index}`}>
                  <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-500">
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping-slow opacity-75 animation-delay-300" style={{ animationDelay: `${index * 150}ms` }}></div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2 gap-3">
                      <div className="flex items-center justify-center p-2 bg-blue-50 rounded-lg">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-blue-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to unlock the power of your data?</h3>
                <p className="mb-6 text-blue-100">
                  Get in touch with our team of data experts for a free consultation and discover how data analytics can transform your business.
                </p>
                <button 
                  onClick={handleCTAClick}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="p-10 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What you'll get:</h3>
                <ul className="space-y-3">
                  {[
                    "Free needs assessment and strategy session",
                    "Custom dashboard demo based on your data",
                    "ROI calculation for your business",
                    "Roadmap for implementation",
                    "Transparent pricing with no hidden costs"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes orb-float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(20px) translateX(10px);
          }
          75% {
            transform: translateY(20px) translateX(-10px);
          }
        }
        
        @keyframes orb-float-reverse {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(20px) translateX(-10px);
          }
          50% {
            transform: translateY(-10px) translateX(-20px);
          }
          75% {
            transform: translateY(-15px) translateX(10px);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-x-full {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-scale-x-full {
          animation: scale-x-full 1.5s ease-out forwards;
        }
        
        .slide-in-left {
          animation: slide-left 1s ease-out forwards;
        }
        
        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-orb-float {
          animation: orb-float 20s ease-in-out infinite;
        }
        
        .animate-orb-float-reverse {
          animation: orb-float-reverse 25s ease-in-out infinite;
        }

        /* Fade in animation for page elements */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Animation for timeline dots */
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        /* Animation delays */
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        /* Staggered entry animations for timeline */
        @keyframes fade-in-bottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DataAnalytics;
