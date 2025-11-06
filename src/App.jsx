// New imports for particles and animations
import { useEffect, useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import AOS from 'aos';

// Your existing imports
import './App.css'
import Navbar from './components/Navbar.jsx'
import SkillsCard from './components/SkillsCard.jsx'
import Project from './components/Project.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import java from './assets/java.png'
import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/js.png'
import reactjs from './assets/reactjs.png'
import node from './assets/nodejs.png'
import mongo from './assets/mongodb.png'
import mysql from './assets/mysql.png'
import gofarasyoucan from './assets/gfayc.png'
import weatherapp from './assets/wa.gif'
import portfolio from './assets/bw.png'
import hotelbooking from './assets/hb.gif'
import notepadImage from './assets/notepadImage.gif'
import cloudBox from './assets/cloudBox.gif'
import next from './assets/next.png'

function App() {

  // initialize the engine to run the floating particles animation -> written in callback so dont need to recreate on every render
  const particlesInit = useCallback(async (engine) => {
    // loadSlim(engine) → loads the slim version of the particle engine (lightweight)
    await loadSlim(engine);
  }, []);

  // Initialize AOS (Animate On Scroll) library for scroll animations when we scroll to different sections of the page 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: '#030712' } }, // Dark blue-slate background
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: '#22D3EE' }, // NEW: Cyan particles to match the theme
            links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.1, width: 1 },
            move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: true, speed: 0.5, straight: false },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
        style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%' }}
      />

      <Navbar />

      {/* FIX: Added pt-24 to prevent navbar from hiding this content */}
      <div id='about' className="names pt-24 min-h-screen flex items-center justify-center text-white px-4 sm:px-6 md:px-10" data-aos="fade-in">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Hi, I’m 

            <span className="hero-name-glow block">
              Shashank Chauhan
            </span>
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            I’m a Bachelor of Engineering student at <strong>Chitkara University</strong>, focused on building a solid foundation in <strong>Data Structures and Algorithms</strong> using Java. I apply my knowledge through practical web development using the <strong>MERN stack</strong>, crafting digital solutions that matter.
          </p>
          <p className="text-md sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="400">
            Beyond code, I invest in sharpening my <strong>communication</strong> and <strong>leadership</strong> skills—believing that collaboration and clarity are just as vital as clean architecture. I’m a fast learner, always evolving, and driven to lead with purpose and build with passion.
          </p>
        </div>
      </div>

      <div id='skills' className="py-20 transparent-section">
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-16 section-header" data-aos="fade-up">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 px-4 sm:px-8" data-aos="fade-up" data-aos-delay="200">
          <SkillsCard name="HTML" icon={html} />
          <SkillsCard name="CSS" icon={css} />
          <SkillsCard name="JavaScript" icon={javascript} />
          <SkillsCard name="React" icon={reactjs} />
          <SkillsCard name="Node.js" icon={node} />
          <SkillsCard name="MongoDB" icon={mongo} />
          <SkillsCard name="MySQL" icon={mysql} />
          <SkillsCard name="Java" icon={java} />
          <SkillsCard name="Next.js" icon={next}/>
        </div>
      </div>

      <div id='project' className="py-20 transparent-section">
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-16 section-header" data-aos="fade-up">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-6" data-aos="fade-up" data-aos-delay="200">
          <Project title="GoFarAsYouCan" description="GoFarAsYouCan was built to solve a real problem — career confusion. It offers structured guidance, relevant paths, and clarity for students to pursue careers aligned with their goals." link="https://gofarasyoucan.onrender.com/" image={gofarasyoucan} />

          <Project title="Weather App" description="A React-based weather app using OpenWeather API to display real-time weather data with a clean, responsive UI." link="https://shashankchauhan1.github.io/weather-app/" image={weatherapp} />

          <Project title="Hotel Booking App" description="A secure MERN-based app where users can book, delete, and check hotel reservations with real-time database updates and authentication." link="https://hotel-booking-app-sc11.onrender.com/login" image={hotelbooking} />

          <Project title="Portfolio" description="A responsive and elegant personal portfolio built with React and TailwindCSS, showcasing projects, skills, and contact details." link="https://shashankchauhan1.github.io/React-portfolio/#about" image={portfolio} />

          <Project title="Notepad App" description="An effective notepad application built with React and Nodejs, allowing users to create, edit, and delete notes with Authentication Features." link="https://nottepreziosa1.netlify.app/login" image={notepadImage} />

          <Project title="Cloud Box" description="Cloud Box is a full-stack application built using MERN, designed for efficient file and folder management. It allows users to create, edit, delete, and share files or folders with customizable permissions, ensuring secure and collaborative access across users." link="https://nottepreziosa1.netlify.app/login" image={cloudBox} />
        </div>
      </div>

      <div className="py-20 transparent-section" id="contact" data-aos="fade-in">
  <h2 className="text-center text-4xl sm:text-5xl font-bold mb-12 section-header">Connect With Me</h2>
  
  
  <div className="text-center flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg">
    <p>
      <strong>Email:</strong> <a href="mailto:shashankchauhan134@gmail.com" className="contact-link">shashankchauhan134@gmail.com</a>
    </p>
    <p>
      <strong>LinkTree:</strong> <a href="https://linktr.ee/shashankchauhan" target="_blank" rel="noopener noreferrer" className="contact-link">linktr.ee/shashankchauhan</a>
    </p>
    <p>
      <strong>Github:</strong> <a href="https://github.com/shashankchauhan1" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/shashankchauhan1</a>
    </p>
  </div>

  <div className="flex justify-center gap-6 mt-12 flex-wrap">
    <a href="https://twitter.com/shashankch75852" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="100"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" height="40" width="40" /></a>

    <a href="https://www.linkedin.com/in/shashank-chauhan-99b459292/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="200"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="40" width="40" /></a>
    
    <a href="https://instagram.com/shashank_570" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="300"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="40" width="40" /></a>
    
    <a href="https://www.hackerrank.com/shashankchauhan" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="400"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="HackerRank" height="40" width="40" /></a>
    
    <a href="https://leetcode.com/shashank_chauhan" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="500"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="LeetCode" height="40" width="40" /></a>
  </div>
</div>
      <ScrollToTop />
    </>
  );
}

export default App;