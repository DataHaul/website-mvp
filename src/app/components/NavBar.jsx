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
  <Image src="/images/Logo.png" alt="DataHaul Logo" width={70} height={65} className="mr-2" />
  <Link href="/">
    DataHaul
  </Link>
</div>


        <div className="hidden md:flex space-x-8">
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
          <IconButton onClick={toggleMenu} className="text-white">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-lg md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link href="/">
                <a className="text-white hover:text-yellow-500" onClick={toggleMenu}>
                  Home
                </a>
              </Link>
              <Link href="#about">
                <a className="text-white hover:text-yellow-500" onClick={toggleMenu}>
                  About
                </a>
              </Link>
              <Link href="#products">
                <a className="text-white hover:text-yellow-500" onClick={toggleMenu}>
                  Products
                </a>
              </Link>
              <Link href="#community">
                <a className="text-white hover:text-yellow-500" onClick={toggleMenu}>
                  Community
                </a>
              </Link>
              <Link href="#contact">
                <a className="text-white hover:text-yellow-500" onClick={toggleMenu}>
                  Contact
                </a>
              </Link>
              <Link href="#get-started">
                <a
                  className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600"
                  onClick={toggleMenu}
                >
                  Get Started
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
