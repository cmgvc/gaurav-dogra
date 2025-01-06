import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects';
import NameTitle from '../components/NameTitle';
import Navbar from '../components/Navbar';
import { Moon, Sun } from 'lucide-react';
import useTheme from '../hooks/useTheme';

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`home ${isDarkMode ? 'dark' : 'light'}`} id="home">
      <Navbar isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
      
      {!scrolled && (
        <div className="text-right mt-[47px] fixed z-[1001]">
          <button
            className="text-[var(--text-color)] ml-[90vw] toggle-button"
            onClick={toggleTheme}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      )}
      
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      
      <div className="relative">
        <div className="wave -one z-1001"></div>
        <div className="about-title top-5 text-center z-50">
          <NameTitle />
          <p className="text-[var(--text-color)] text-center leading-normal mt-[2rem] about-text">
            A business development professional with a passion for technology and innovation.
          </p>
        </div>
      </div>
      
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;