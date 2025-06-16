import React, { useState } from 'react';
import logo from '../assets/logo3.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      id="home"
      className="bg-[#171717] text-white px-6 py-4 flex justify-between items-center relative shadow-md"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-13 h-10 rounded-full shadow-red-500 shadow-md" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6 text-sm font-serif uppercase">
        <li><a href="#home" onClick={closeMenu} style={{ color:'white' }} className="hover:text-yellow-400 transition">Home</a></li>
        <li><a href="#about" onClick={closeMenu} style={{ color:'white' }} className="hover:text-yellow-400 transition">About</a></li>
        <li><a href="#skills" onClick={closeMenu} style={{ color:'white' }} className="hover:text-yellow-400 transition">Skills</a></li>
        <li><a href="#project" onClick={closeMenu} style={{ color:'white' }} className="hover:text-yellow-400 transition">Projects</a></li>
        <li><a href="#contact" onClick={closeMenu} style={{ color:'white' }} className="hover:text-yellow-400 transition">Contact</a></li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden z-20 cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } sm:hidden flex-col absolute top-16 left-0 w-full bg-[#171717] text-center gap-6 py-6 font-serif uppercase text-base z-10 transition-all duration-300`}
      >
        <a href="#home" onClick={closeMenu} style={{ color:'white' }} className="hover:text-yellow-400 transition">Home</a>
        <a href="#about" onClick={closeMenu} style={{ color:'white' }} className="hover:text-yellow-400 transition">About</a>
        <a href="#skills" onClick={closeMenu} style={{ color:'white' }} className="hover:text-yellow-400 transition">Skills</a>
        <a href="#project" onClick={closeMenu} style={{ color:'white' }} className="hover:text-yellow-400 transition">Projects</a>
        <a href="#contact" onClick={closeMenu} style={{ color:'white' }} className="hover:text-yellow-400 transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
