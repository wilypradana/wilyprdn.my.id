import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          bg-gradient-to-br from-pink-400 to-purple-500 
          text-white 
          w-14 h-14 
          rounded-full 
          shadow-lg 
          flex items-center justify-center 
          transition-all duration-300 ease-in-out
          hover:scale-110 hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
        `}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-7 h-7" />
      </button>
    </div>
  );
}

export default ScrollToTopButton;