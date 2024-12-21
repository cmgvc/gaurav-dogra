import React from 'react';
import '../styles/Home.css';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects';
import NameTitle from '../components/NameTitle';

function Home() {
  return (
    <div className='home' id='home'>
      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>
      <div className="relative">
          <div className="wave -one z-1001"></div>
          <div className="about-title top-5 text-center z-50">
              <NameTitle />
              <p className="text-white text-center leading-normal mt-[2rem] about-text">
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
