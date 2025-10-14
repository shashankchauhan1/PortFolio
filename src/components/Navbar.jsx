import React, { useState } from 'react';
import logo from '../assets/logo3.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; 
import resumeUrl from '../assets/ShashanksResume.pdf'; // Import the resume PDF

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // This variable automatically gets the correct base path (e.g., "/PortFolio/")
  return (
    <nav
      id="home"
      className="navbar-glass text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 ">
        <img src={logo} alt="Logo" className="w-13 h-10 rounded-full logo-glow" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-8 text-sm font-serif uppercase items-center relative z-10">
        <li><a href="#home" onClick={closeMenu} className="nav-link">Home</a></li>
        <li><a href="#about" onClick={closeMenu} className="nav-link">About</a></li>
        <li><a href="#skills" onClick={closeMenu} className="nav-link">Skills</a></li>
        <li><a href="#project" onClick={closeMenu} className="nav-link">Projects</a></li>
        <li><a href="#contact" onClick={closeMenu} className="nav-link">Contact</a></li>
        
        {/* UPDATED RESUME LINK */}
        <li>
          <a 
            href={resumeUrl} /* Use the dynamic URL */
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMenu} 
            className="resume-button"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden z-20 cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${menuOpen ? 'menu-open' : 'menu-closed'}`}
      >
        <a href="#home" onClick={closeMenu} className="nav-link">Home</a>
        <a href="#about" onClick={closeMenu} className="nav-link">About</a>
        <a href="#skills" onClick={closeMenu} className="nav-link">Skills</a>
        <a href="#project" onClick={closeMenu} className="nav-link">Projects</a>
        <a href="#contact" onClick={closeMenu} className="nav-link">Contact</a>
        
        {/* UPDATED RESUME LINK */}
        <a 
          href={resumeUrl} /* Use the dynamic URL */
          target="_blank" 
          rel="noopener noreferrer"
          onClick={closeMenu} 
          className="resume-button mt-4"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;