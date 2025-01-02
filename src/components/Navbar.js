import React, { useState, useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const logos = {
  dark: require('../assets/gd-dark.svg').ReactComponent,
  light: require('../assets/gd-light.svg').ReactComponent,
};

const Navbar = ({ theme }) => {
  const Logo = theme ? logos.light : logos.dark;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme ? 'dark' : 'light');
  }, [theme]);

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
      <nav
        className={`
          transition-all duration-300 ease-in-out
          ${scrolled 
            ? 'w-[70%] mt-6 rounded-full bg-[var(--nav-background-color)] backdrop-blur-sm'
            : 'w-full bg-transparent'
          }
        `}
      >
        <div className="flex items-start justify-between">
          <a
            onClick={() => handleScrollTo('home')}
            className={`transition-all duration-300 cursor-pointer ${
              scrolled 
                ? 'scale-[0.3] -mb-[11vh] -mt-[9vh] -ml-[4rem]' 
                : 'scale-[0.7] -mt-10 -ml-6'
            }`}
          >
            <Logo />
          </a>

          {!scrolled ? (
            <button
              onClick={toggleMenu}
              className="relative mr-[3rem] mt-[3rem] focus:outline-none cursor-pointer z-[1100]"
            >
              <div className="relative flex flex-col justify-center items-center w-6 h-6 cursor-pointer">
                <span
                  className={`w-full h-0.5 bg-[var(--text-color)] transition-all duration-300 ${
                    isOpen ? 'absolute rotate-45' : 'mb-1.5'
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-[var(--text-color)] transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'mb-1.5'
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-[var(--text-color)] transition-all duration-300 ${
                    isOpen ? 'absolute -rotate-45' : ''
                  }`}
                ></span>
              </div>
            </button>
          ) : (
            <>
              {['about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item)}
                  className="text-[var(--text-color)] text-xl mr-[3rem] mt-[3vh] mb-[3vh] hover:text-gray-300 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <div className="flex ml-[4vw]">
                <a
                  href="https://www.linkedin.com/in/gdogra1/"
                  className="text-[var(--text-color)] text-xl mr-[3rem] mt-[3vh] mb-[3vh] hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:gaurav@dogra.ca"
                  className="text-[var(--text-color)] text-xl mr-[3rem] mt-[3vh] hover:text-gray-300 transition-colors"
                >
                  <EmailIcon />
                </a>
              </div>
            </>
          )}
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-[var(--background-color)] transition-all duration-500 ease-in-out z-50 ${
          isOpen ? 'opacity-[97%] translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className={`flex flex-col justify-center items-center h-full transition-all duration-500 delay-100 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item)}
              className="text-[var(--nav-text-color)] text-4xl mb-8 hover:text-gray-300 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <div className="flex mt-[6vh]">
            <a
              href="https://www.linkedin.com/in/gdogra1/"
              className="text-[var(--nav-text-color)] hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <span className="mx-6"></span>
            <a href="mailto:gaurav@dogra.ca" className="text-[var(--nav-text-color)] hover:text-gray-300">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
