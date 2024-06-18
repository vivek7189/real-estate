"use client";
import React, { useState } from 'react';
import { FaBuilding, FaHome, FaKey, FaMapMarkedAlt, FaStore, FaUserTie } from 'react-icons/fa';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Buy Properties');

  const tabs = [
    { name: 'New Projects', placeholder: 'Search new development projects...', icon: <FaBuilding /> },
    { name: 'Buy Properties', placeholder: 'Search properties to buy...', icon: <FaHome /> },
    { name: 'Rent Properties', placeholder: 'Search properties for rent...', icon: <FaKey /> },
    { name: 'Plot & Land', placeholder: 'Search for plots and land...', icon: <FaMapMarkedAlt /> },
    { name: 'Commercial Spaces', placeholder: 'Search for commercial spaces...', icon: <FaStore /> },
    { name: 'Find Agents', placeholder: 'Find real estate agents...', icon: <FaUserTie /> }
  ];

  const [placeholderText, setPlaceholderText] = useState('Search properties to buy...');

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    setPlaceholderText(tab.placeholder);
  };

  return (
    <div className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhvdXNlfGVufDB8fHx8MTY4NDUxNTMyM3w&ixlib=rb-4.0.3&q=80&w=1080')" }}>
      <div className="bg-gray-800 bg-opacity-75 min-h-screen flex flex-col justify-center items-center px-4 sm:px-8">
        <div className="text-center w-full max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Real Estate Made Real Easy</h1>
          <div className="tabs mb-8 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`tab-item flex items-center justify-center py-2 px-4 m-1 rounded-lg transition duration-300 ease-in-out font-medium text-base sm:text-lg ${activeTab === tab.name ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white'}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.icon}
                <span className="ml-2">{tab.name}</span>
              </button>
            ))}
          </div>
          <div className="relative w-full max-w-lg mx-auto flex items-center gap-2">
            <input
              type="text"
              placeholder={placeholderText}
              className="p-3 rounded-lg w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="p-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-300 ease-in-out w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
