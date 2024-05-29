import Header from '../ui/Header';
import Footer from '../ui/Footer';
import Link from 'next/link';
import PropertyCard from './PropertyCard';
const data={
    "id": 1,
    "listingType": "For Sale",
    "buildingType": "Apartment",
    "propertyType": "Villa",
    "city": "Gurgaon",
    "projectName": "Vatika Gurgaon 21",
    "locality": "Sector 83",
    "numberOfRooms": "3",
    "area": "2000",
    "areaType": "Sq. Ft.",
    "rentPerMonth": "",
    "propertyPrice": "350,000",
    "maintenancePerSqFt": "10",
    "securityDeposit": "One Month",
    "images": [
      "https://via.placeholder.com/500x300",
      "https://via.placeholder.com/500x300",
      "https://via.placeholder.com/500x300"
    ]
  }
  
  
const PostAds = () => {
    return (
        <div>
            <Header />
            <main>
            <div className="text-center p-5 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-t-lg">
                <h1 className="text-4xl font-bold">Post Your Property</h1>
                <p className="text-xm mt-2">Enter the details below to list your property on our platform and reach potential tenants or buyers quickly.</p>
            </div>
                <PropertyCard property={data}/>
            </main>
            <Footer />
        </div>
    );
};

export default PostAds;
