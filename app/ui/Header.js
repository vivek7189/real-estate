"use client"
"use client";
import React from 'react';
import { FaHome, FaBuilding, FaInfoCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="relative bg-gray-900 text-white h-20">
            <div className="absolute inset-0 bg-cover bg-center" >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            <div className="relative z-10 flex justify-between items-center py-4 px-6">
                  <Link href="/" className="flex items-center space-x-2 hover:text-yellow-500">
                <h1 className="text-2xl font-bold">Real Estate App</h1>
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="flex items-center space-x-2 hover:text-yellow-500">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                    <Link href="/listing" className="flex items-center space-x-2 hover:text-yellow-500">
                        <FaBuilding />
                        <span>Properties</span>
                    </Link>
                    <Link href="/postad" className="flex items-center space-x-2 hover:text-yellow-500">
                        <FaInfoCircle />
                        <span>Post ad</span>
                    </Link>
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
            <nav className={`z-10 md:hidden bg-gray-800 absolute w-full ${isOpen ? 'block' : 'hidden'}`}>
                <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">Home</Link>
                <Link href="/listing" className="block px-4 py-2 text-white hover:bg-gray-700">Properties</Link>
                <Link href="/postad" className="block px-4 py-2 text-white hover:bg-gray-700">Post ad</Link>
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Login</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Sign Up</a>
            </nav>
        </header>
    );
};

export default Header;
