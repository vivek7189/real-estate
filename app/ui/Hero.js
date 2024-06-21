// components/HeroSection.js
"use client";

import React, { useState } from 'react';

const tabs = [
    { name: 'Buy', placeholder: 'Search "Flats for sale in sector 77 Noida"' },
    { name: 'Rent', placeholder: 'Search "Flats for rent in sector 77 Noida"' },
    { name: 'New Launch', placeholder: 'Search "New launches in sector 77 Noida"' },
    { name: 'PG / Co-living', placeholder: 'Search "PG and Co-living in sector 77 Noida"' },
];

const Hero = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="relative bg-cover bg-center" style={{ height: "80vh", backgroundImage: "url('https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVzdGF0ZXxlbnwwfHx8fDE2ODQ2NjA4MTM&ixlib=rb-1.2.1&q=80&w=1080')" }}>
            <div className="flex flex-col justify-center items-center h-full p-4">
                <div className="bg-white bg-opacity-90 p-6 text-center rounded-lg shadow-xl max-w-4xl w-full border-2 border-gray-300" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)' }}>
                    <nav className="flex justify-center gap-2 mb-4 flex-wrap">
                        {tabs.map((tab, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`text-sm font-bold py-2 px-4 border-b-2 ${activeTab.name === tab.name ? 'border-black' : 'border-transparent'}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(tab);
                                }}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-white p-6 rounded-lg shadow-md w-full">
                        <select className="p-2 rounded border border-gray-300 w-full md:w-48">
                            <option>All Residential</option>
                        </select>
                        <input
                            type="text"
                            placeholder={activeTab.placeholder}
                            className="p-2 rounded border border-gray-300 flex-grow"
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        {/* <div className="flex items-center gap-2">
                            <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" alt="Search" className="w-6 h-6" />
                            <img src="https://img.icons8.com/ios-filled/50/000000/microphone.png" alt="Microphone" className="w-6 h-6" />
                        </div> */}
                        <button className="p-2 ml-4 rounded bg-black text-white font-bold hover:bg-gray-800">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
