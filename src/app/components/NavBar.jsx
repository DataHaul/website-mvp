import { useState, useEffect } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { IconButton } from '@mui/material';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[white]/40 bg-opacity-50 backdrop-blur-lg shadow-lg' : 'bg-[white]/40'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <div className="text-2xl font-bold text-black flex items-center">
  <img src="/images/Logo.webp" alt="DataHaul Logo" width={70} height={65} className="mr-2" />
  <Link href="/">
    DataHaul
  </Link>
</div>


        <div className="hidden md:flex space-x-8 text-color">
          <Link href="/">
            Home
          </Link>
          <Link href="#about">
            About
          </Link>
          <Link href="#products">
            Products
          </Link>
          <Link href="#community">
            Community
          </Link>
          <Link href="#contact">
            Contact
          </Link>
        </div>

        
        <div className="md:hidden">
          <IconButton onClick={toggleMenu} className="text-gray-950">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[white]/40 bg-opacity-80 backdrop-blur-lg md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link href="/" legacyBehavior>
                <a className="text-gray-950 hover:text-yellow-500 text-color" onClick={toggleMenu}>
                  Home
                </a>
              </Link>
              <Link href="#about" legacyBehavior>
                <a className="text-gray-950 hover:text-yellow-500 text-color" onClick={toggleMenu}>
                  About
                </a>
              </Link>
              <Link href="#products" legacyBehavior>
                <a className="text-gray-950 hover:text-yellow-500 text-color" onClick={toggleMenu}>
                  Products
                </a>
              </Link>
              <Link href="#community" legacyBehavior>
                <a className="text-gray-950 hover:text-yellow-500 text-color" onClick={toggleMenu}>
                  Community
                </a>
              </Link>
              <Link href="#contact" legacyBehavior>
                <a className="text-gray-950 hover:text-yellow-500 text-color" onClick={toggleMenu}>
                  Contact
                </a>
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
