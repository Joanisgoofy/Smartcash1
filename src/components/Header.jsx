import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiMenu, HiX } from "react-icons/hi"; // Icons for mobile menu
import Logo from "../assets/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
       {/* Logo */}
       <div className="flex items-center space-x-3">
          <img src={Logo} alt="Smart-OT Logo" width="50" />
          <h1 className="text-lg font-bold text-gray-800">Smart-OT</h1>
        </div>


      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
      

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/home" className="hover:text-blue-600"> Home</Link>
          <Link to="/services" className="hover:text-blue-600"> Services</Link>
          <Link to="/help" className="hover:text-blue-600">Help & Support</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/agent" className="hover:text-blue-600">Become an Agent</Link>
        </nav>

       

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

       {/* Login Button */}
       <div className="hidden md:block">
          <Link to="/login">
            <Button gradientDuoTone="cyanToBlue">Login / Signup</Button>
          </Link>
        </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link to="/home" className="hover:text-blue-600  text-black" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="hover:text-blue-600 text-black" onClick={() => setIsOpen(false)}>Products & Services</Link>
            <Link to="#" className="hover:text-blue-600  text-black" onClick={() => setIsOpen(false)}>Help & Support</Link>
            <Link to="/about" className="hover:text-blue-600  text-black" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/agent" className="hover:text-blue-600  text-black" onClick={() => setIsOpen(false)}>Become an Agent</Link>
            <Link to="/login">
              <Button gradientDuoTone="cyanToBlue" onClick={() => setIsOpen(false)}>Login / Signup</Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;