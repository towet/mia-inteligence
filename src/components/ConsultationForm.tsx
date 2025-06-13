import React, { useState } from 'react';
import { X, Send, ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'form' | 'chat'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web-development',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormSubmitted(false); // Reset submitted state before new submission

    try {
      // Ensure this URL matches your backend. 
      // For production, you might use a relative path or an environment variable for the API base URL.
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setFormSubmitting(false);
      const result = await response.json();

      if (response.ok) {
        console.log('Form submitted successfully:', result);
        setFormSubmitted(true); // Indicate success
// Fire Google Ads conversion event
if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
  window.gtag('event', 'conversion', {
    send_to: 'AW-17149078669'
    // Add additional parameters here if needed
  });
}
        // Optionally reset form fields if desired after successful submission
        // setFormData({ name: '', email: '', phone: '', service: 'web-development', message: '' });
        
        // Close form after a delay
        setTimeout(() => {
          setFormSubmitted(false); // Reset for next time
          if (onClose) onClose(); // Call onClose if it's provided
        }, 3000);
      } else {
        console.error('Form submission error:', result.error, result.details);
        // You might want to display a more user-friendly error message here
        alert(`Error: ${result.error || 'Failed to submit form.'} ${result.details ? '('+result.details+')' : ''}`);
      }
    } catch (error) {
      setFormSubmitting(false);
      console.error('Network or other error during form submission:', error);
      // Display a generic error message to the user
      alert('An error occurred while submitting the form. Please check your network connection and try again.');
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/254740525106?text=Hi, I'm interested in ${formData.service || 'your services'}. My name is ${formData.name || '[Your Name]'}.`, '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me/yourusername', '_blank'); // Replace with your actual Telegram username
  };

  const handleCall = () => {
    window.location.href = 'tel:+254740525106';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-3xl overflow-y-auto max-h-[95vh] shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Image and Message */}
          <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between relative">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M0,0 L100,0 L100,100 L0,100 Z" />
                <path fill="white" d="M0,0 L100,0 L100,100 L0,100 Z" transform="translate(25, 25) scale(0.5)" />
                <path fill="white" d="M0,0 L100,0 L100,100 L0,100 Z" transform="translate(50, 50) scale(0.25)" />
              </svg>
            </div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Boost Your Business With Expert Solutions</h2>
              <p className="text-white/80 mb-6">Get a customized strategy designed to meet your unique business needs and goals.</p>
              
              {/* Core Services Highlights */}
              <div className="mb-6 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3 bg-blue-700/30 px-3 py-2 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-500/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Web Development</span>
                </div>
                
                <div className="flex items-center gap-3 bg-blue-700/30 px-3 py-2 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-500/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">AI Development</span>
                </div>
                
                <div className="flex items-center gap-3 bg-blue-700/30 px-3 py-2 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-500/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Digital Marketing</span>
                </div>
              </div>
              
              {/* Value Propositions */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Free strategy session</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Custom growth plan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">30-day performance guarantee</span>
              </div>
            </div>
            
            <div className="mt-8 md:mt-12 relative">
              <p className="text-white/90 font-medium">500+ satisfied clients</p>
              <div className="flex -space-x-2 mt-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-400/70 border-2 border-blue-700 flex items-center justify-center text-xs font-semibold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-400/50 border-2 border-blue-700 flex items-center justify-center text-xs font-semibold">
                  +
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form and Chat Options */}
          <div className="md:w-3/5 p-4 sm:p-6">
            {/* Mobile Quick Action */}
            <div className="md:hidden flex justify-between mb-4 bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
              <div className="flex-1 text-center border-r border-blue-200 pr-2">
                <button 
                  onClick={() => setActiveTab('form')} 
                  className={`w-full flex flex-col items-center ${activeTab === 'form' ? 'text-blue-600' : 'text-gray-500'}`}
                >
                  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-xs">Form</span>
                </button>
              </div>
              <div className="flex-1 text-center pl-2">
                <button 
                  onClick={() => setActiveTab('chat')} 
                  className={`w-full flex flex-col items-center ${activeTab === 'chat' ? 'text-blue-600' : 'text-gray-500'} relative`}
                >
                  <img src="https://banner2.cleanpng.com/20240205/kxo/transparent-whatsapp-logo-clean-and-modern-green-square-whatsapp-1710885529680.webp" className="w-5 h-5 mb-1 object-contain" alt="WhatsApp" />
                  <span className="text-xs">Chat</span>
                  <span className="absolute top-0 right-6 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </button>
              </div>
            </div>
            {/* Tabs */}
            <div className="flex mb-6 border-b">
              <button 
                className={`py-3 px-4 font-medium transition-colors ${activeTab === 'form' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('form')}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Fill Form
                </span>
              </button>
              <button 
                className={`py-3 px-4 font-medium transition-colors ${activeTab === 'chat' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('chat')}
              >
                <span className="flex items-center gap-2">
                  <img src="https://banner2.cleanpng.com/20240205/kxo/transparent-whatsapp-logo-clean-and-modern-green-square-whatsapp-1710885529680.webp" className="w-5 h-5 object-contain" alt="WhatsApp" />
                  <span className="relative">
                    Chat Directly
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </span>
                </span>
              </button>
            </div>

            {/* Form Tab */}
            {activeTab === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service You're Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="web-development">Web Development</option>
                    <option value="ai-development">AI Development</option>
                    <option value="custom-ai-agents">Custom AI Agents</option>
                    <option value="social-media-marketing">Social Media Marketing</option>
                    <option value="search-engine-optimization">Search Engine Optimization</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="research-academic-writing">Research & Academic Writing</option>
                    <option value="paid-advertising">Paid Advertising</option>
                    <option value="security-services">Security Services</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your project or business needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting || formSubmitted}
                  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all 
                  ${formSubmitted ? 'bg-green-600' : formSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {formSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : formSubmitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Submitted Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Request
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Chat Tab */}
            {activeTab === 'chat' && (
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 mb-4">
                  <p className="text-blue-700 font-medium mb-1">Get Instant Support</p>
                  <p className="text-gray-600 text-sm">Choose your preferred way to connect with our experts:</p>
                </div>
                
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-100 hover:bg-green-50 transition-all duration-300 group shadow-sm hover:shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <img src="https://banner2.cleanpng.com/20240205/kxo/transparent-whatsapp-logo-clean-and-modern-green-square-whatsapp-1710885529680.webp" className="w-8 h-8 object-contain" alt="WhatsApp" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-green-600 text-sm">Chat with us instantly on WhatsApp</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-green-500 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={handleTelegram}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50 transition-all duration-300 group shadow-sm hover:shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.25l-1.97 9.293c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.534-.197 1.001.12.832.93z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900">Telegram</h3>
                    <p className="text-blue-600 text-sm">Message us on Telegram</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={handleCall}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50 transition-all duration-300 group shadow-sm hover:shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900">Phone Call</h3>
                    <p className="text-blue-600 text-sm">+254 795 704 273</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => setActiveTab('form')}
                  className="mt-6 text-center w-full py-3 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Or fill the form instead</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
