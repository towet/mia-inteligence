import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Phone, Mail } from 'lucide-react';

const ContactFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Show button when scrolling down and track scrolling state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        setIsScrolling(true);
        
        // Clear any existing timer
        if (scrollTimerRef.current) {
          clearTimeout(scrollTimerRef.current);
        }
        
        // Set a timer to detect when scrolling stops
        scrollTimerRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 1000); // Hide text 1 second after scrolling stops
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/254740525106', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:nexuscollective103@gmail.com';
  };

  const handleTelegram = () => {
    window.open('https://t.me/yourusername', '_blank'); // Replace with your actual Telegram username
  };

  const handleCall = () => {
    window.location.href = 'tel:+254740525106';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options Popup */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl p-3 mb-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex justify-between items-center border-b pb-2 mb-3">
            <h3 className="font-semibold text-gray-800">Contact Us</h3>
            <button 
              onClick={toggleOpen}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            <button 
              onClick={handleWhatsApp}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">WhatsApp</div>
                <div className="text-xs text-gray-500">Chat with us instantly</div>
              </div>
            </button>
            
            <button 
              onClick={handleEmail}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium">Email</div>
                <div className="text-xs text-gray-500">Send us a message</div>
              </div>
            </button>
            
            <button 
              onClick={handleTelegram}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.25l-1.97 9.293c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.534-.197 1.001.12.832.93z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">Telegram</div>
                <div className="text-xs text-gray-500">Message us on Telegram</div>
              </div>
            </button>
            
            <button 
              onClick={handleCall}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium">Call</div>
                <div className="text-xs text-gray-500">Speak to us directly</div>
              </div>
            </button>
          </div>
        </div>
      )}
      
      {/* Main Button */}
      <button
        onClick={toggleOpen}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center relative group"
      >
        <MessageSquare className="w-6 h-6" />
        
        {/* Online Indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-ping opacity-75"></div>
        </div>
        
        {/* Online Text Indicator - Shows only during scrolling */}
        <div className={`absolute -top-8 right-0 transform translate-x-1/2 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs px-2 py-1 rounded-md font-medium whitespace-nowrap transition-opacity duration-300 ${isScrolling ? 'opacity-100' : 'opacity-0'}`}>
          Online
        </div>
        
        {/* Text Label - Visible while scrolling */}
        <span className={`absolute right-full mr-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${isScrolling ? 'opacity-100' : 'opacity-0'}`}>
          Talk to Us
        </span>
      </button>
    </div>
  );
};

export default ContactFloat;
