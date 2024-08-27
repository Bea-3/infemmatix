import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/icons/infemmatix-logo.svg";
import mobileLogo from "../../assets/icons/infemmatix-logo_mobile.svg";
import menuIcon from "../../assets/icons/Menu.svg";
import { FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow relative w-full ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className=" w-1/5 lg:w-1/3">
          <Link to="/">
          <img src={logo} alt="infemmatix logo" className='hidden md:block'/>
          <img src={mobileLogo} alt='infemmatix logo mobile version' className='block md:hidden'/>
          </Link>
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden relative"> 
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none p-2 rounded-md"
            aria-label="Toggle menu"
          >
              {isOpen ? (
                <FiX size={24} className='text-white'/>
              ) : (
                <img src={menuIcon} alt="Menu Icon" className="w-6 h-6"/>
              )}
          </button>
        </div>
        {/* Menu Items for Desktop */}
        <div className="hidden md:flex space-x-6 lg:w-2/3 justify-end">
          <Link to="/" className=" px-3 py-2 rounded-md hover:bg-gray-200 text-primaryPurple">
            Home
          </Link>
          <Link to="/" className="  px-3 py-2 rounded-md hover:bg-gray-200">
            Info Hub
          </Link>
          <Link to="/" className="  px-3 py-2 rounded-md hover:bg-gray-200">
            Data Tracker
          </Link>
          <Link to="/" className="  px-3 py-2 rounded-md hover:bg-gray-200">
            Community
          </Link>
          <Link to="/" className=" bg-primaryPurple px-3 py-2 rounded-md hover:bg-gray-200">
            Get Started
          </Link>

        </div>

         {/* Slide Down Menu for Mobile */}
        <div
          className={`${
            isOpen ? 'max-h-screen' : 'max-h-0'
          } transition-max-height duration-500 ease-in-out overflow-hidden md:hidden w-full mb-10 py-4`}
        >
          <ul className="flex flex-col items-center justify-center space-y-6">
            <li className="mt-3 md:mt-0">
            <Link to="/" className=" px-3 py-2 rounded-md hover:bg-gray-200 text-primaryPurple">
            About Us
            </Link>
            </li>
            <li className="mt-3 md:mt-0">
            <Link to="/" className="  px-3 py-2 rounded-md hover:bg-gray-200">
            Info Hub
          </Link>
            </li>
            <li className="mt-3 md:mt-0">
            <Link to="/" className="  px-3 py-2 rounded-md hover:bg-gray-200">
            Data Tracker
          </Link>
            </li>
            <li className="mt-3 md:mt-0">
            <Link to="/" className="  px-3 py-2 rounded-md hover:bg-gray-200">
            Community
            </Link>
            </li>
            <li className="mt-3 md:mt-0">
            <Link to="/" className=" bg-primaryPurple px-3 py-2 rounded-md hover:bg-gray-200">
            Get Started
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
