"use client";
"use client";
import React, { useState } from 'react';
import { FaBuilding, FaHome, FaCity, FaMapMarkerAlt, FaMapSigns, FaBed, FaExpandArrowsAlt, FaDollarSign, FaTag, FaTools, FaShieldAlt, FaTrash } from 'react-icons/fa';

const PropertyForm = () => {
    const [formData, setFormData] = useState({
        listingType: '',
        buildingType: '',
        propertyType: '',
        city: 'Gurgaon',
        projectName: 'Vatika Gurgaon 21 Sector 83 Gurgaon',
        locality: 'Sector 83',
        numberOfRooms: '',
        area: '',
        areaType: 'Built-up Area',
        rentPerMonth: '',
        propertyPrice: '',
        maintenancePerSqFt: '',
        securityDeposit: '',
        additionalAreaDetails: [],
        images: []
    });
    const [previewMode, setPreviewMode] = useState(false);

    // Handle change in text input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle file selection and generate preview URLs
    const handleImageChange = (event) => {
        const files = Array.from(event.target.files).map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));

        setFormData(prevFormData => ({
            ...prevFormData,
            images: [...prevFormData.images, ...files]
        }));

        // Cleanup memory after image previews are loaded
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    };

    // Remove an image from the previews and state
    const removeImage = (indexToRemove) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            images: prevFormData.images.filter((_, index) => index !== indexToRemove)
        }));
    };

    // Add additional area details dynamically
    const addAreaDetail = () => {
        setFormData(prev => ({
            ...prev,
            additionalAreaDetails: [...prev.additionalAreaDetails, { area: '', areaType: '' }]
        }));
    };

    // Handle dynamic field changes for additional area details
    const handleAreaDetailChange = (index, field, value) => {
        const updatedAreaDetails = [...formData.additionalAreaDetails];
        updatedAreaDetails[index][field] = value;
        setFormData(prev => ({ ...prev, additionalAreaDetails: updatedAreaDetails }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!previewMode) {
            setPreviewMode(true);  // Move to preview mode
        } else {
            console.log("Submitting to API:", formData);  // API submission logic
            alert("Form submitted! Check the console for output.");
        }
    };

    const handleEdit = () => {
        setPreviewMode(false);  // Go back to edit mode
    };

    // Submit form data including images to a dummy API endpoint
    const submitData = async (e) => {
        e.preventDefault();

        const data = new FormData();
        formData.images.forEach(image => data.append('images', image.file));
        Object.keys(formData).forEach(key => {
            if (key !== 'images') {
                data.append(key, formData[key]);
            }
        });

        try {
            const response = await fetch('https://your-api-endpoint.com/properties', {
                method: 'POST',
                body: data,
            });
            const result = await response.json();
            console.log(result);  // Process result here
            alert('Property submitted successfully!');
        } catch (error) {
            console.error('Error submitting property:', error);
            alert('Failed to submit property.');
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-600 to-teal-400 p-6 rounded-lg shadow-lg max-w-5xl mx-auto my-10 text-white">
            {previewMode ? (
                <PropertyPreview formData={formData} onEdit={handleEdit} onSubmit={submitData} />
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-3xl font-bold mb-6 text-center">Post Your Property</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Listing Type */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                            <h3 className="font-semibold mb-2">Listing Type:</h3>
                            <div className="flex gap-2">
                                <label className="flex items-center">
                                    <input type="radio" name="listingType" value="Sale" checked={formData.listingType === 'Sale'} onChange={handleInputChange} className="form-radio text-teal-500" />
                                    <span className="ml-2">Sale</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="listingType" value="Rent" checked={formData.listingType === 'Rent'} onChange={handleInputChange} className="form-radio text-teal-500" />
                                    <span className="ml-2">Rent</span>
                                </label>
                            </div>
                        </div>
                        {/* Building Type */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                            <h3 className="font-semibold mb-2">Building Type:</h3>
                            <div className="flex gap-2">
                                <label className="flex items-center">
                                    <input type="radio" name="buildingType" value="Residential" checked={formData.buildingType === 'Residential'} onChange={handleInputChange} className="form-radio text-teal-500" />
                                    <span className="ml-2">Residential</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="buildingType" value="Commercial" checked={formData.buildingType === 'Commercial'} onChange={handleInputChange} className="form-radio text-teal-500" />
                                    <span className="ml-2">Commercial</span>
                                </label>
                            </div>
                        </div>
                        {/* Property Type */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-black md:col-span-2">
                            <h3 className="font-semibold mb-2">Property Type:</h3>
                            <select name="propertyType" value={formData.propertyType} onChange={handleInputChange} className="w-full p-2 rounded-lg border border-gray-300">
                                <option value="">Select Property Type</option>
                                {['Apartment', 'Villa', 'Plot', 'Builder Floor', 'Penthouse', 'Independent House', 'Pg'].map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        {/* Number of Rooms */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-black md:col-span-2">
                            <h3 className="font-semibold mb-2">Number of Rooms:</h3>
                            <select name="numberOfRooms" value={formData.numberOfRooms} onChange={handleInputChange} className="w-full p-2 rounded-lg border border-gray-300">
                                <option value="">Select Number of Rooms</option>
                                {['Studio', '1 Rk', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '6+'].map(room => (
                                    <option key={room} value={room}>{room}</option>
                                ))}
                            </select>
                        </div>
                        {/* Area Details */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-black md:col-span-2">
                            <h3 className="font-semibold mb-2">Area Details:</h3>
                            <input type="text" name="area" placeholder="Area (e.g., 1300 Sq. Ft.)" value={formData.area} onChange={handleInputChange} className="mb-2 p-2 w-full rounded-lg border border-gray-300" />
                            <button type="button" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={addAreaDetail}>
                                + Add More Area Details
                            </button>
                            {formData.additionalAreaDetails.map((detail, index) => (
                                <div key={index} className="mt-2 grid grid-cols-2 gap-2">
                                    <input type="text" placeholder="Additional Area" value={detail.area} onChange={(e) => handleAreaDetailChange(index, 'area', e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    <input type="text" placeholder="Area Type" value={detail.areaType} onChange={(e) => handleAreaDetailChange(index, 'areaType', e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                            ))}
                        </div>
                        {/* Rent Per Month */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                            <h3 className="font-semibold mb-2">Rent Per Month:</h3>
                            <input type="text" name="rentPerMonth" placeholder="Please enter the property rent" value={formData.rentPerMonth} onChange={handleInputChange} className="mb-2 p-2 w-full rounded-lg border border-gray-300" />
                        </div>
                        {/* Property Price */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                            <h3 className="font-semibold mb-2">Property Price:</h3>
                            <input type="text" name="propertyPrice" placeholder="Please provide the property price" value={formData.propertyPrice} onChange={handleInputChange} className="mb-2 p-2 w-full rounded-lg border border-gray-300" />
                        </div>
                        {/* Maintenance */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                            <h3 className="font-semibold mb-2">Maintenance (Per SqFt):</h3>
                            <input type="text" name="maintenancePerSqFt" placeholder="0" value={formData.maintenancePerSqFt} onChange={handleInputChange} className="mb-2 p-2 w-full rounded-lg border border-gray-300" />
                        </div>
                        {/* Security Deposit */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                            <h3 className="font-semibold mb-2">Security Deposit:</h3>
                            <select name="securityDeposit" value={formData.securityDeposit} onChange={handleInputChange} className="mb-2 p-2 w-full rounded-lg border border-gray-300">
                                <option value="">Select Deposit Type</option>
                                <option value="Zero Deposit">Zero Deposit</option>
                                <option value="One Month">One Month</option>
                                <option value="Two Month">Two Month</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {/* Upload Images */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-black md:col-span-2">
                            <h3 className="font-semibold mb-2">Upload Images:</h3>
                            <input type="file" multiple onChange={handleImageChange} className="mb-2" />
                            <div className="flex overflow-x-scroll gap-2">
                                {formData.images.map((img, index) => (
                                    <div key={index} className="relative">
                                        <img src={img.preview} alt={`Preview ${index}`} className="h-24 w-auto rounded" />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                            style={{ transform: 'translate(50%, -50%)' }}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Submit Property</button>
                </form>
            )}
        </div>
    );
};

export default PropertyForm;

const PropertyPreview = ({ formData, onEdit, onSubmit }) => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-4xl mx-auto my-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Review Your Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                <DetailRow Icon={FaTag} label="Listing Type" value={formData.listingType} />
                <DetailRow Icon={FaBuilding} label="Building Type" value={formData.buildingType} />
                <DetailRow Icon={FaHome} label="Property Type" value={formData.propertyType} />
                <DetailRow Icon={FaCity} label="City" value={formData.city} />
                <DetailRow Icon={FaMapMarkerAlt} label="Project Name" value={formData.projectName} />
                <DetailRow Icon={FaMapSigns} label="Locality" value={formData.locality} />
                <DetailRow Icon={FaBed} label="Number of Rooms" value={formData.numberOfRooms} />
                <DetailRow Icon={FaExpandArrowsAlt} label="Area" value={`${formData.area} ${formData.areaType}`} />
                <DetailRow Icon={FaDollarSign} label="Rent Per Month" value={formData.rentPerMonth} />
                <DetailRow Icon={FaTag} label="Property Price" value={formData.propertyPrice} />
                <DetailRow Icon={FaTools} label="Maintenance Per SqFt" value={formData.maintenancePerSqFt} />
                <DetailRow Icon={FaShieldAlt} label="Security Deposit" value={formData.securityDeposit} />
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Images:</h3>
                <div className="flex overflow-x-scroll gap-2">
                    {formData.images.map((img, index) => (
                        <img key={index} src={img.preview} alt={`Preview ${index}`} className="h-24 w-auto rounded" />
                    ))}
                </div>
            </div>
            <div className="mt-6 flex justify-between">
                <button onClick={onEdit} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none">Edit Details</button>
                <button onClick={onSubmit} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none">Make it live</button>
            </div>
        </div>
    );
};

// Component to render each detail row with a React Icon
const DetailRow = ({ Icon, label, value }) => (
    <div className="flex items-center">
        <Icon className="text-teal-500 text-2xl" />
        <p className="ml-2"><strong>{label}:</strong> {value}</p>
    </div>
);
