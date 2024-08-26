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
    <nav className="shadow ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          <Link to="/">
          <img src={logo} alt="infemmatix logo" className='hidden md:flex'/>
          <img src={mobileLogo} alt='infemmatix logo mobile version' className='md:hidden'/>
          </Link>
        </div>
        <div className="md:hidden relative">
           {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-900 focus:outline-none bg-yellow-200 relative"
            aria-label="Toggle menu"
          >
              {isOpen ? (
                <FiX size={24} className='text-white absolute inset-0 m-auto'/>
              ) : (
                <img src={menuIcon} alt="Menu Icon" className="w-6 h-6"/>
              )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="md:flex md:space-x-6">
            <li className="mt-3 md:mt-0">
              <a
                href="#"
                className="block text-gray-900 px-3 py-2 rounded-md hover:bg-gray-200"
              >
                Home
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a
                href="#"
                className="block text-gray-900 px-3 py-2 rounded-md hover:bg-gray-200"
              >
                About
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a
                href="#"
                className="block text-gray-900 px-3 py-2 rounded-md hover:bg-gray-200"
              >
                Services
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a
                href="#"
                className="block text-gray-900 px-3 py-2 rounded-md hover:bg-gray-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
