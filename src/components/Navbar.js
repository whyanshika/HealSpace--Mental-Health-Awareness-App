import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import { Link as RouterLink } from 'react-router-dom'; 
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-4 text-blue-900 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
          <RouterLink to="/" className="text-2xl font-bold">
            Heal Space
          </RouterLink>
        </div>

       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

       
        <div className="hidden lg:flex space-x-6">
          <RouterLink to="/" className="hover:text-blue-500">
            Home
          </RouterLink>
          <ScrollLink to="why-mental-health" smooth={true} duration={100} className="hover:text-blue-500 cursor-pointer">
            Why Mental Health is Important
          </ScrollLink>
          <ScrollLink to="common-disorders" smooth={true} duration={100} className="hover:text-blue-500 cursor-pointer">
            Common Mental Health Disorders
          </ScrollLink>
          <ScrollLink to="symptoms" smooth={true} duration={100} className="hover:text-blue-500 cursor-pointer">
            Symptoms of Bad Mental Health
          </ScrollLink>
          <ScrollLink to="wellness-activities" smooth={true} duration={100} className="hover:text-blue-500 cursor-pointer">
            Wellness Activities
          </ScrollLink>
          <RouterLink to="/quiz" className="hover:text-blue-500">
            Mental Health Quiz
          </RouterLink>
        </div>
      </div>

     
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 mt-4">
          <RouterLink to="/" className="hover:text-blue-500">
            Home
          </RouterLink>
          <ScrollLink to="why-mental-health" smooth={true} duration={100} className="hover:text-blue-500 cursor-pointer">
            Why Mental Health is Important
          </ScrollLink>
          <ScrollLink to="common-disorders" smooth={true} duration={100} className="hover:text-blue-500 cursor-pointer">
            Common Mental Health Disorders
          </ScrollLink>
          <ScrollLink to="symptoms" smooth={true} duration={100} className="hover:text-blue-500 cursor-pointer">
            Symptoms of Bad Mental Health
          </ScrollLink>
          <ScrollLink to="wellness-activities" smooth={true} duration={100} className="hover:text-blue-500 cursor-pointer">
            Wellness Activities
          </ScrollLink>
          <RouterLink to="/quiz" className="hover:text-blue-500">
            Mental Health Quiz
          </RouterLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
