import React from 'react';
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        {/* Navbar Brand */}
        <div className="text-xl font-medium">Azan Ahmed</div>
        
        {/* Navigation Links */}
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <MdOutlineMenu size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
