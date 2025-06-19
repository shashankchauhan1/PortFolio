import './App.css'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
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

function App() {
  return (
    <>
      <Navbar />

      <div id='about' className="names mt-16 flex items-center justify-center text-white px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Hi, I’m <span className="text-yellow-400">Shashank Chauhan</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            I’m a Bachelor of Engineering student at <strong>Chitkara University</strong>, focused on building a solid foundation in <strong>Data Structures and Algorithms</strong> using Java. I apply my knowledge through practical web development using the <strong>MERN stack</strong>, crafting digital solutions that matter.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mt-4">
            Beyond code, I invest in sharpening my <strong>communication</strong> and <strong>leadership</strong> skills—believing that collaboration and clarity are just as vital as clean architecture. I’m a fast learner, always evolving, and driven to lead with purpose and build with passion.
          </p>
        </div>
      </div>

      <div id='skills' className="mt-16 py-12 bg-gray-900 text-white">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10" style={{ fontFamily: 'DM Serif Text, serif' }}>My Skills</h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 px-4 sm:px-8">
          <Skills name="HTML" icon={html} />
          <Skills name="CSS" icon={css} />
          <Skills name="JavaScript" icon={javascript} />
          <Skills name="React" icon={reactjs} />
          <Skills name="Node.js" icon={node} />
          <Skills name="MongoDB" icon={mongo} />
          <Skills name="MySQL" icon={mysql} />
          <Skills name="Java" icon={java} />
        </div>
      </div>

      <div id='project' className="py-12 bg-gray-900 text-white">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10" style={{ fontFamily: 'DM Serif Text, serif' }}>My Projects</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4 sm:px-6">
          <Project
            title="GoFarAsYouCan"
            description="GoFarAsYouCan was built to solve a real problem — career confusion. It offers structured guidance, relevant paths, and clarity for students to pursue careers aligned with their goals."
            link="https://gofarasyoucan.onrender.com/"
            image={gofarasyoucan}
          />
          <Project
            title="Weather App"
            description="A React-based weather app using OpenWeather API to display real-time weather data with a clean, responsive UI."
            link="https://shashankchauhan1.github.io/weather-app/"
            image={weatherapp}
          />
          <Project
            title="Hotel Booking App"
            description="A secure MERN-based app where users can book, delete, and check hotel reservations with real-time database updates and authentication."
            link="https://hotel-booking-app-sc11.onrender.com/login"
            image={hotelbooking}
          />
          <Project
            title="Portfolio"
            description="A responsive and elegant personal portfolio built with React and TailwindCSS, showcasing projects, skills, and contact details."
            link="https://shashankchauhan1.github.io/React-portfolio/#about"
            image={portfolio}
          />
          <Project
            title="Notepad App"
            description="An effective notepad application built with React and Nodejs, allowing users to create, edit, and delete notes with Authentication Features."
            link="https://nottepreziosa.netlify.app/"
            image={notepadImage}
          />
        </div>
      </div>

      <div className="bg-gray-950 text-white px-4 sm:px-6 py-16" id="contact">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12 tracking-tight animate-fade-in" style={{ color: '#fbbf24', fontFamily: 'DM Serif Text, serif' }}>
          Connect With Me
        </h2>

        <div className="text-center space-y-6 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 text-sm sm:text-lg">
          <p>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/mail.png" className="inline mr-2" width="20" alt="email icon" />
            <strong>Email:</strong> <a href="mailto:shashankchauhan134@gmail.com" className="text-yellow-400 underline hover:text-yellow-300">shashankchauhan134@gmail.com</a>
          </p>

          <p>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/link.png" className="inline mr-2" width="20" alt="linktree icon" />
            <strong>LinkTree:</strong> <a href="https://linktr.ee/shashankchauhan" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">linktr.ee/shashankchauhan</a>
          </p>

          <p>
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" className="inline mr-2" width="20" alt="github icon" />
            <strong>Github:</strong> <a href="https://github.com/shashankchauhan1" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">github.com/shashankchauhan1</a>
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <a href="https://twitter.com/shashankch75852" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" height="40" width="40" />
          </a>
          <a href="https://www.linkedin.com/in/shashank-chauhan-99b459292/" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="40" width="40" />
          </a>
          <a href="https://instagram.com/shashank_570" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="40" width="40" />
          </a>
          <a href="https://www.hackerrank.com/shashankchauhan" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="HackerRank" height="40" width="40" />
          </a>
          <a href="https://leetcode.com/shashank_chauhan" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="LeetCode" height="40" width="40" />
          </a>
        </div>
      </div>

      <ScrollToTop />
    </>
  )
}

export default App
