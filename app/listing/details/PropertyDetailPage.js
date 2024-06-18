import Image from 'next/image';
import { FaMapMarkerAlt,FaCalendar,FaPhone, FaPhoneAlt, FaCalendarAlt, FaRupeeSign, FaMoneyBillWave, FaExpandArrowsAlt, FaBed, FaBuilding, FaUsers, FaParking, FaArchway, FaClock, FaCouch, FaCompass, FaCheckCircle, FaEye, FaHeart } from 'react-icons/fa';

const PropertyDetailPage = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow-2xl rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">3 BHK Flat In Sobha Dahlia, Bellandur For Rent In Bellandur</h1>
          <p className="text-gray-600 mt-2 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-blue-500" /> Green Glen Layout, Bellandur, Bengaluru, Karnataka 560103, India
          </p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center">
            <FaPhoneAlt className="mr-2" /> Contact
          </a>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center">
            <FaCalendarAlt className="mr-2" /> Schedule Visit
          </a>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto mb-6">
        <div className="h-64 w-full relative rounded-lg shadow-lg">
          <Image src="https://via.placeholder.com/400x250?text=House+1" alt="Property Image 1" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="h-64 w-full relative rounded-lg shadow-lg">
          <Image src="https://via.placeholder.com/400x250?text=House+2" alt="Property Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="h-64 w-full relative rounded-lg shadow-lg">
          <Image src="https://via.placeholder.com/400x250?text=House+3" alt="Property Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-green-500">
          <h2 className="text-xl font-semibold text-green-700 border-b-2 border-green-500 pb-2 mb-4">Basic Information</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaRupeeSign className="text-green-700 mr-2" />
              <span><strong>Rent:</strong> ₹65,000/M+</span>
            </li>
            <li className="flex items-center">
              <FaMoneyBillWave className="text-green-700 mr-2" />
              <span><strong>Deposit:</strong> ₹4,00,000</span>
            </li>
            <li className="flex items-center">
              <FaExpandArrowsAlt className="text-green-700 mr-2" />
              <span><strong>Area:</strong> 1,785 Sq.Ft</span>
            </li>
            <li className="flex items-center">
              <FaBed className="text-green-700 mr-2" />
              <span><strong>Bedrooms:</strong> 3 Bedroom</span>
            </li>
            <li className="flex items-center">
              <FaBuilding className="text-green-700 mr-2" />
              <span><strong>Property Type:</strong> Apartment</span>
            </li>
            <li className="flex items-center">
              <FaUsers className="text-green-700 mr-2" />
              <span><strong>Preferred Tenant:</strong> Family</span>
            </li>
            <li className="flex items-center">
              <FaCalendarAlt className="text-green-700 mr-2" />
              <span><strong>Availability Date:</strong> Jun 10, 2024</span>
            </li>
            <li className="flex items-center">
              <FaParking className="text-green-700 mr-2" />
              <span><strong>Parking:</strong> Bike and Car</span>
            </li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500">
          <h2 className="text-xl font-semibold text-blue-700 border-b-2 border-blue-500 pb-2 mb-4">Additional Information</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaCalendar className="text-blue-700 mr-2" />
              <span><strong>Age of Building:</strong> 5-10 Years</span>
            </li>
            <li className="flex items-center">
              <FaArchway className="text-blue-700 mr-2" />
              <span><strong>Balcony:</strong> 2</span>
            </li>
            <li className="flex items-center">
              <FaClock className="text-blue-700 mr-2" />
              <span><strong>Posted On:</strong> May 17, 2024</span>
            </li>
            <li className="flex items-center">
              <FaCouch className="text-blue-700 mr-2" />
              <span><strong>Furnishing Status:</strong> Semi</span>
            </li>
            <li className="flex items-center">
              <FaCompass className="text-blue-700 mr-2" />
              <span><strong>Facing:</strong> South</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-blue-700 mr-2" />
              <span><strong>Verified Availability:</strong> Verified</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-yellow-500 mb-6">
        <h2 className="text-xl font-semibold text-yellow-700 border-b-2 border-yellow-500 pb-2 mb-4">Activity</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <FaEye className="text-yellow-700 mr-2" /> Unique Views: 606
          </li>
          <li className="flex items-center">
            <FaHeart className="text-yellow-700 mr-2" /> Shortlists: 21
          </li>
          <li className="flex items-center">
            <FaPhone className="text-yellow-700 mr-2" /> Contacted: 46
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
