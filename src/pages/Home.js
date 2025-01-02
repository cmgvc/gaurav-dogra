import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects';
import NameTitle from '../components/NameTitle';
import Navbar from '../components/Navbar';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      return savedTheme; 
    }
    return 'true';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 40);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
    <div className={`home ${darkMode ? 'dark' : 'light'}`} id="home">
    <Navbar theme={darkTheme}/>
    {!scrolled && (
      <div className="text-right mt-[47px] fixed z-[1001]">
        <button
          className="text-[var(--text-color)] ml-[90vw] toggle-button"
          onClick={toggleDarkMode}
        >
          {darkMode ? <LightModeIcon /> : <BedtimeIcon />}
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
    </>
  );
}

export default Home;
