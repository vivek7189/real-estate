"use client"
import React from 'react';
import { FaHome, FaBuilding, FaInfoCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="relative bg-cover bg-center text-white h-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVzdGF0ZXxlbnwwfHx8fDE2ODQ2NjA4MTM&ixlib=rb-1.2.1&q=80&w=1080')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Real Estate App</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="flex items-center space-x-2 hover:text-yellow-500">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-yellow-500">
            <FaBuilding />
            <span>Properties</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-yellow-500">
            <FaInfoCircle />
            <span>About Us</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-yellow-500">
            <FaSignInAlt />
            <span>Login</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-yellow-500">
            <FaUserPlus />
            <span>Sign Up</span>
          </a>
        </nav>
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <nav className={`md:hidden bg-gray-800 absolute w-full ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Home</a>
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Properties</a>
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">About Us</a>
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Login</a>
        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;
