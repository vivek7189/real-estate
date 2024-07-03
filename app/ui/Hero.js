// components/HeroSection.js
"use client";

import { FaHome, FaBuilding, FaCampground, FaLandmark } from 'react-icons/fa';
import { useState } from 'react';

const Hero = () => {
  const [activeOption, setActiveOption] = useState('Buy');

  return (
    <div className="font-sans">
      <main>
        <section className="relative h-[300px] md:h-[700px] flex flex-col justify-center items-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 p-4 md:p-0">
            <h1 className="text-3xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Arial' }}>Find Your Dream Property</h1>
            <p className="text-lg md:text-2xl mb-8" style={{ fontFamily: 'Arial' }}>Discover the perfect place to call home</p>
          </div>
        </section>

        <section className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-4xl mx-auto mt-8 relative -top-16">
          <div className="flex justify-center mb-6 space-x-2 md:space-x-4">
            {['Buy', 'Rent', 'Sell'].map(option => (
              <button
                key={option}
                onClick={() => setActiveOption(option)}
                className={`py-2 px-7 font-bold rounded-full ${activeOption === option ? 'bg-orange-600 text-white' : 'bg-gray-300'}`}
                style={{ fontFamily: 'Arial' }}
              >
                {option}
              </button>
            ))}
          </div>
          <form className="flex flex-col space-y-4" style={{ fontFamily: 'Arial' }}>
            <input type="text" placeholder="Enter city, neighborhood, or address" className="py-3 px-6 border border-gray-300 rounded-full text-lg" />
            <div className="grid grid-cols-2 md:flex md:justify-between gap-4 md:gap-0">
              <div className="flex flex-col items-center cursor-pointer">
                <FaHome className="w-8 h-8 mb-2 text-orange-600" />
                <span className="text-sm text-gray-800">Apartment</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <FaBuilding className="w-8 h-8 mb-2 text-orange-600" />
                <span className="text-sm text-gray-800">House</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <FaCampground className="w-8 h-8 mb-2 text-orange-600" />
                <span className="text-sm text-gray-800">Villa</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <FaLandmark className="w-8 h-8 mb-2 text-orange-600" />
                <span className="text-sm text-gray-800">Commercial</span>
              </div>
            </div>
            <button type="submit" className="py-3 px-6 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700" style={{ fontFamily: 'Arial' }}>Search Properties</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Hero;
