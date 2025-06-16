import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    const btn = document.getElementById('scrollToTopBtn');

    const handleScroll = () => {
      if (window.scrollY > 200) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="scrollToTopBtn"
      onClick={scrollTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        backgroundColor: '#fbbf24',
        color: 'black',
        padding: '10px 14px',
        borderRadius: '50%',
        border: 'none',
        display: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        zIndex: 1000
      }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
