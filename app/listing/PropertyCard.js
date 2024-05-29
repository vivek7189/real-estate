import React from 'react';
import { FaBuilding, FaHome, FaCity, FaMapMarkerAlt, FaBed, FaRulerCombined, FaMoneyBillWave, FaWrench, FaShieldAlt, FaImage } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
                <img src={property.images.length > 0 ? property.images[0] : "https://via.placeholder.com/500x300"} alt={property.title} className="w-full h-64 object-cover object-center" />
                <span className="absolute top-0 left-0 bg-yellow-500 text-white px-2 py-1 rounded-md">{property.listingType}</span>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{property.title}</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                        <FaBuilding className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.buildingType}</p>
                    </div>
                    <div className="flex items-center">
                        <FaHome className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.propertyType}</p>
                    </div>
                    <div className="flex items-center">
                        <FaCity className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.city}</p>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.projectName}, {property.locality}</p>
                    </div>
                    <div className="flex items-center">
                        <FaBed className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.numberOfRooms}</p>
                    </div>
                    <div className="flex items-center">
                        <FaRulerCombined className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.area} {property.areaType}</p>
                    </div>
                    <div className="flex items-center">
                        <FaMoneyBillWave className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.rentPerMonth ? `$${property.rentPerMonth} Per Month` : ''}</p>
                    </div>
                    <div className="flex items-center">
                        <FaMoneyBillWave className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.propertyPrice ? `$${property.propertyPrice}` : ''}</p>
                    </div>
                    <div className="flex items-center">
                        <FaWrench className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.maintenancePerSqFt ? `Maintenance: $${property.maintenancePerSqFt} Per SqFt` : ''}</p>
                    </div>
                    <div className="flex items-center">
                        <FaShieldAlt className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.securityDeposit ? `Security Deposit: ${property.securityDeposit}` : ''}</p>
                    </div>
                    <div className="flex items-center">
                        <FaImage className="text-gray-600 mr-2" />
                        <p className="text-gray-600">{property.images.length} Images</p>
                    </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none">View Details</button>
            </div>
        </div>
    );
};

export default PropertyCard;
