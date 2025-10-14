import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Import the new futuristic styles

const ScrollToTop = () => {
  // State to track button visibility
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      // Apply CSS classes conditionally for the fade-in animation
      className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;