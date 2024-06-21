"use client";
// components/PropertyDetails.js
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave, FaRupeeSign, FaExpand, FaBed, FaUser, FaCalendarCheck, FaCar, FaClock, FaCouch, FaCompass, FaChartLine, FaEye, FaStar, FaPhone, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PropertyDetails = () => {
  const images = [
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    'https://images.unsplash.com/photo-1593696140826-c58b021acf8b',
    'https://images.unsplash.com/photo-1618221941443-9ca819da798c'
  ];

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: nav2
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: nav1,
    centerPadding: '0px'
  };

  return (
    <div className="container mx-auto mt-5 p-5 bg-white shadow-lg rounded-lg">
      <div className="header flex flex-col lg:flex-row justify-between items-start lg:items-center mb-5">
        <div className="title text-3xl font-bold text-black flex items-center mb-4 lg:mb-0">
          <FaBuilding className="mr-2" /> 3 BHK Flat In Sobha Dahlia, Bellandur For Rent
        </div>
        <span className="flex items-center text-gray-500">
          <FaCalendarAlt className="mr-2" /> Posted on May 17, 2024
        </span>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="carousel relative mb-5 lg:mb-0 lg:w-1/2 lg:pr-5">
          <Slider {...settingsMain} ref={slider => setSlider1(slider)} className="slider-for">
            {images.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Property Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
          <div className="mt-2">
            <Slider {...settingsThumbs} ref={slider => setSlider2(slider)} className="slider-nav">
              {images.map((src, index) => (
                <div key={index} className="p-1">
                  <img
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-full h-full object-cover cursor-pointer rounded-lg ${slider1 && slider1.innerSlider.state.currentSlide === index ? 'border-2 border-blue-500' : ''}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="content-block mb-5">
            <h3 className="text-black font-bold mb-2 flex items-center text-xl">
              <FaMapMarkerAlt className="mr-2" /> Location
            </h3>
            <p>Green Glen Layout, Bellandur, Bengaluru, Karnataka 560103, India</p>
          </div>
          <div className="content-block mb-5">
            <h3 className="text-black font-bold mb-2 flex items-center text-xl">
              <FaMoneyBillWave className="mr-2" /> Rent & Deposit
            </h3>
            <div className="details-grid grid grid-cols-2 gap-4">
              <div className="flex items-center"><FaRupeeSign className="mr-2" /> Rent: ₹65,000/M+</div>
              <div className="flex items-center"><FaRupeeSign className="mr-2" /> Deposit: ₹4,00,000</div>
            </div>
          </div>
          <div className="content-block mb-5">
            <h3 className="text-black font-bold mb-2 flex items-center text-xl">
              <FaInfoCircle className="mr-2" /> Property Details
            </h3>
            <div className="details-grid grid grid-cols-2 gap-4">
              <div className="flex items-center"><FaExpand className="mr-2" /> Area: 1,785 Sq.Ft</div>
              <div className="flex items-center"><FaBed className="mr-2" /> Bedrooms: 3 Bedroom</div>
              <div className="flex items-center"><FaBuilding className="mr-2" /> Property Type: Apartment</div>
              <div className="flex items-center"><FaUser className="mr-2" /> Preferred Tenant: Family</div>
              <div className="flex items-center"><FaCalendarCheck className="mr-2" /> Availability Date: Jun 10, 2024</div>
              <div className="flex items-center"><FaCar className="mr-2" /> Parking: Bike and Car</div>
              <div className="flex items-center"><FaClock className="mr-2" /> Age of Building: 5-10 Years</div>
              <div className="flex items-center"><FaBuilding className="mr-2" /> Balcony: 2</div>
              <div className="flex items-center"><FaCouch className="mr-2" /> Furnishing Status: Semi</div>
              <div className="flex items-center"><FaCompass className="mr-2" /> Facing: South</div>
            </div>
          </div>
          <div className="content-block mb-5">
            <h3 className="text-black font-bold mb-2 flex items-center text-xl">
              <FaChartLine className="mr-2" /> Activity on Listing
            </h3>
            <div className="details-grid grid grid-cols-3 gap-4">
              <div className="stat bg-blue-100 p-3 rounded flex items-center"><FaEye className="mr-2" /> Unique Views: 606</div>
              <div className="stat bg-green-100 p-3 rounded flex items-center"><FaStar className="mr-2" /> Shortlists: 21</div>
              <div className="stat bg-yellow-100 p-3 rounded flex items-center"><FaPhone className="mr-2" /> Contacted: 46</div>
            </div>
          </div>
          <div className="footer mt-5 flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
            <button className="bg-black text-white p-3 rounded lg:w-1/3 w-full hover:bg-gray-800">
              <FaPhone className="mr-2" /> Contact
            </button>
            <button className="bg-black text-white p-3 rounded lg:w-1/3 w-full hover:bg-gray-800">
              <FaCalendarCheck className="mr-2" /> Schedule Visit
            </button>
            <button className="bg-black text-white p-3 rounded lg:w-1/3 w-full hover:bg-gray-800">
              <FaCheckCircle className="mr-2" /> Verified Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
