"use client";
import React, { useState } from 'react';
import { FaBuilding, FaHome, FaKey, FaMapMarkedAlt, FaStore, FaUserTie } from 'react-icons/fa';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Buy Properties');

  const tabs = [
    { name: 'New Projects', placeholder: 'Search new development projects...', icon: <FaBuilding /> },
    { name: 'Buy ', placeholder: 'Search properties to buy...', icon: <FaHome /> },
    { name: 'Rent ', placeholder: 'Search properties for rent...', icon: <FaKey /> },
    { name: 'Plot & Land', placeholder: 'Search for plots and land...', icon: <FaMapMarkedAlt /> },
    { name: 'Commercial ', placeholder: 'Search for commercial spaces...', icon: <FaStore /> },
    { name: 'Find Agents', placeholder: 'Find real estate agents...', icon: <FaUserTie /> }
  ];

  const [placeholderText, setPlaceholderText] = useState('Search properties to buy...');

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    setPlaceholderText(tab.placeholder);
  };

  return (
    <div className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599423300746-b62533397364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjg0NTE1MzIz&ixlib=rb-4.0.3&q=80&w=1080')" }}>
      <div className="bg-gray-900 bg-opacity-80 h-[60vh] flex flex-col justify-center items-center px-4 sm:px-8">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Real Estate Made Real Easy</h1>
          <div className="tabs mb-8 flex flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`tab-item flex items-center justify-center py-2 px-4 m-1 rounded-lg transition duration-300 ease-in-out font-medium text-sm sm:text-base ${activeTab === tab.name ? 'bg-green-700 hover:bg-green-800 text-white' : 'text-green-200 hover:bg-green-600'}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.icon}
                <span className="ml-2">{tab.name}</span>
              </button>
            ))}
          </div>
          <div className="w-full max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              placeholder={placeholderText}
              className="p-3 rounded-lg w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="p-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition duration-300 ease-in-out w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
