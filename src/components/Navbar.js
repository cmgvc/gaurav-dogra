import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/gd-high-resolution-logo.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  return (
    <div className="fixed w-full flex justify-center z-[1000]">
      <nav className={`
        transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'w-[70%] mt-6 rounded-full bg-black/[96%] backdrop-blur-sm'
          : 'w-full bg-transparent'
        }
      `}>
        <div className="flex items-start justify-between">
          <a
            onClick={() => handleScrollTo('home')}
            className={`transition-all duration-300 -mt-10 -ml-6 cursor-pointer ${
              scrolled ? 'scale-[0.3] -mb-[11vh] -mt-[10vh] -ml-[4rem]' : 'scale-[0.7]'
            }`}
          >
            <Logo />
          </a>

          {!scrolled ? (
            <button 
              onClick={toggleMenu}
              className={`relative mr-[3rem] mt-[3rem] focus:outline-none ${scrolled ? 'mt-[3vh] z-[1002] ' : ''}`}
            >
              <div className="relative flex flex-col justify-center items-center w-6 h-6 z-[1001]">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'absolute rotate-45' : 'mb-1.5'
                }`}></span>
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'mb-1.5'
                }`}></span>
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'absolute -rotate-45' : ''
                }`}></span>
              </div>
            </button>
          ) : (
            <>
              <button onClick={() => handleScrollTo('about')} className="text-white text-xl mr-[3rem] mt-[3vh] mb-[3vh] hover:text-gray-300 transition-colors">About</button>
              <button onClick={() => handleScrollTo('experience')} className="text-white text-xl mr-[3rem] mt-[3vh] mb-[3vh] hover:text-gray-300 transition-colors">Experience</button>
              <button onClick={() => handleScrollTo('projects')} className="text-white text-xl mr-[3rem] mt-[3vh] mb-[3vh] hover:text-gray-300 transition-colors">Projects</button>
              <button onClick={() => handleScrollTo('contact')} className="text-white text-xl mr-[3rem] mt-[3vh] mb-[3vh] hover:text-gray-300 transition-colors">Contact</button>
              <div className="flex ml-[4vw]">
                <a href="https://www.linkedin.com/in/gdogra1/" className="text-white text-xl mr-[3rem] mt-[3vh] mb-[3vh] hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="mailto:gaurav@dogra.ca" className="text-white text-xl mr-[3rem] mt-[3vh] hover:text-gray-300 transition-colors">
                  <EmailIcon />
                </a>
            </div>
            </>
          )}
        </div>
      </nav>
      <div 
        className={`fixed inset-0 bg-black transition-all duration-500 ease-in-out z-50 ${
          isOpen 
            ? 'opacity-[97%] translate-y-0' 
            : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className={`flex flex-col justify-center items-center h-full transition-all duration-500 delay-100 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex-col flex">
            <button onClick={() => handleScrollTo('home')} className="text-white text-4xl mb-8 hover:text-gray-300 transition-colors">Home</button>
            <button onClick={() => handleScrollTo('about')} className="text-white text-4xl mb-8 hover:text-gray-300 transition-colors">About</button>
            <button onClick={() => handleScrollTo('experience')} className="text-white text-4xl mb-8 hover:text-gray-300 transition-colors">Experience</button>
            <button onClick={() => handleScrollTo('projects')} className="text-white text-4xl mb-8 hover:text-gray-300 transition-colors">Projects</button>
            <button onClick={() => handleScrollTo('contact')} className="text-white text-4xl hover:text-gray-300 transition-colors">Contact</button>
          </div>
          <div className="flex mt-[6vh]">
            <a href="https://www.linkedin.com/in/gdogra1/" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="mailto:gaurav@dogra.ca" className="text-white hover:text-gray-300">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
