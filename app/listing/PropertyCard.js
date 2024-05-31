import React from 'react';
import { FaBuilding, FaHome, FaCity, FaMapMarkerAlt, FaBed, FaRulerCombined, FaMoneyBillWave, FaWrench, FaShieldAlt, FaImage } from 'react-icons/fa';
import Image from 'next/image';

const RealEstateCard = ({ property }) => {
    console.log('property11',property)
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white">
      <div className="w-full sm:w-1/3">
        <Image 
          src={property.image} 
          alt="Property Image" 
          width={200} 
          height={100} 
          className="object-cover w-full h-full" 
        />
      </div>
      <div className="p-4 w-full sm:w-2/3">
        <div className="flex justify-between items-center mb-2">
          <div className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
            VERIFIED
          </div>
          <div className="text-2xl text-red-400 cursor-pointer">♥</div>
        </div>
        <h2 className="text-xl font-bold mb-1">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <div className="flex flex-wrap items-center text-sm mb-3">
          <span className="font-bold text-lg mr-4">₹{property.price}</span>
          <span className="mr-4">{property.area} sqft</span>
          <span className="mr-4">{property.bhk} BHK ({property.baths} Baths)</span>
          <span>{property.status}</span>
        </div>
        <div className="flex flex-wrap mb-3">
          {property?.highlights?.map((highlight, index) => (
            <span key={index} className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 mr-2 mb-2">
              {highlight}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 pt-2">
          <div className="text-gray-500 text-sm">
            <span className="mr-2">{property.posted}</span>
            <span>{property.ownerType}</span>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded border border-blue-700">View Number</button>
            <button className="bg-blue-700 text-white px-3 py-1 rounded">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateCard;
