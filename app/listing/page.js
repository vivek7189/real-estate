import Header from '../ui/Header';
import Footer from '../ui/Footer';
import Link from 'next/link';
import PropertyCard from './PropertyCard';
const properties = [
    {
      id: 1,
      listingType: "For Sale",
      buildingType: "Apartment",
      propertyType: "Villa",
      city: "Gurgaon",
      projectName: "Vatika Gurgaon 21",
      locality: "Sector 83",
      numberOfRooms: "3",
      area: "2000",
      areaType: "Sq. Ft.",
      rentPerMonth: "",
      propertyPrice: "350,000",
      maintenancePerSqFt: "10",
      securityDeposit: "One Month",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300"
      ],
      title: 'Vatika Gurgaon 21',
      location: '3 BHK Flat in Sector 83 Gurgaon',
      price: '₹1.7 Cr',
      area: '1,735 sqft',
      bhk: '3',
      baths: '3',
      status: 'Ready To Move',
      highlights: ['Close to School', 'Gated Society', '+2'],
      posted: '2w ago',
      ownerType: 'Owner',
      image: 'https://source.unsplash.com/1600x900/?Clubhouse',
    },
    {
      id: 2,
      listingType: "For Sale",
      buildingType: "Apartment",
      propertyType: "Villa",
      city: "Mumbai",
      projectName: "Hiranandani Gardens",
      locality: "Powai",
      numberOfRooms: "4",
      area: "2500",
      areaType: "Sq. Ft.",
      rentPerMonth: "",
      propertyPrice: "450,000",
      maintenancePerSqFt: "15",
      securityDeposit: "Two Months",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300"
      ],
      title: 'Hiranandani Gardens',
      location: '4 BHK Flat in Powai, Mumbai',
      price: '₹2.5 Cr',
      area: '2,500 sqft',
      bhk: '4',
      baths: '4',
      status: 'Ready To Move',
      highlights: ['Near Lake', 'Gated Society', 'Clubhouse'],
      posted: '1w ago',
      ownerType: 'Agent',
      image: 'https://source.unsplash.com/1600x900/?house',
    },
    // Add 8 more objects with similar structure but random values
    {
      id: 3,
      listingType: "For Sale",
      buildingType: "Apartment",
      propertyType: "Villa",
      city: "Bangalore",
      projectName: "Prestige Lakeside",
      locality: "Whitefield",
      numberOfRooms: "3",
      area: "1800",
      areaType: "Sq. Ft.",
      rentPerMonth: "",
      propertyPrice: "320,000",
      maintenancePerSqFt: "12",
      securityDeposit: "One Month",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300"
      ],
      title: 'Prestige Lakeside',
      location: '3 BHK Flat in Whitefield, Bangalore',
      price: '₹1.5 Cr',
      area: '1,800 sqft',
      bhk: '3',
      baths: '3',
      status: 'Ready To Move',
      highlights: ['Near IT Park', 'Gated Society', 'Gym'],
      posted: '3w ago',
      ownerType: 'Owner',
      image: 'https://source.unsplash.com/1600x900/?villa',
    },
    {
      id: 4,
      listingType: "For Sale",
      buildingType: "Apartment",
      propertyType: "Villa",
      city: "Chennai",
      projectName: "DLF Commanders Court",
      locality: "Egmore",
      numberOfRooms: "2",
      area: "1500",
      areaType: "Sq. Ft.",
      rentPerMonth: "",
      propertyPrice: "280,000",
      maintenancePerSqFt: "8",
      securityDeposit: "Three Months",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300"
      ],
      title: 'DLF Commanders Court',
      location: '2 BHK Flat in Egmore, Chennai',
      price: '₹1.2 Cr',
      area: '1,500 sqft',
      bhk: '2',
      baths: '2',
      status: 'Ready To Move',
      highlights: ['Near Metro', 'Gated Society', 'Swimming Pool'],
      posted: '1m ago',
      ownerType: 'Agent',
      image: 'https://source.unsplash.com/1600x900/?panthouse',
    },
    {
      id: 5,
      listingType: "For Sale",
      buildingType: "Apartment",
      propertyType: "Villa",
      city: "Hyderabad",
      projectName: "Ramky Towers",
      locality: "Gachibowli",
      numberOfRooms: "3",
      area: "2000",
      areaType: "Sq. Ft.",
      rentPerMonth: "",
      propertyPrice: "350,000",
      maintenancePerSqFt: "10",
      securityDeposit: "One Month",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300"
      ],
      title: 'Ramky Towers',
      location: '3 BHK Flat in Gachibowli, Hyderabad',
      price: '₹1.7 Cr',
      area: '2,000 sqft',
      bhk: '3',
      baths: '3',
      status: 'Ready To Move',
      highlights: ['Near IT Park', 'Gated Society', 'Gym'],
      posted: '1m ago',
      ownerType: 'Owner',
      image: 'https://source.unsplash.com/1600x900/?castle',
    },
    {
      id: 6,
      listingType: "For Sale",
      buildingType: "Apartment",
      propertyType: "Villa",
      city: "Pune",
      projectName: "Kumar Properties",
      locality: "Koregaon Park",
      numberOfRooms: "4",
      area: "2500",
      areaType: "Sq. Ft.",
      rentPerMonth: "",
      propertyPrice: "400,000",
      maintenancePerSqFt: "12",
      securityDeposit: "Two Months",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300"
      ],
      title: 'Kumar Properties',
      location: '4 BHK Flat in Koregaon Park, Pune',
      price: '₹2.0 Cr',
      area: '2,500 sqft',
      bhk: '4',
      baths: '4',
      status: 'Ready To Move',
      highlights: ['Near Mall', 'Gated Society', 'Clubhouse'],
      posted: '2w ago',
      ownerType: 'Agent',
      image: 'https://source.unsplash.com/1600x900/?cottege',
    },
    {
      id: 7,
      listingType: "For Sale",
      buildingType: "Apartment",
      propertyType: "Villa",
      city: "Kolkata",
      projectName: "South City",
      locality: "Prince Anwar Shah Road",
      numberOfRooms: "3",
      area: "2200",
      areaType: "Sq. Ft.",
      rentPerMonth: "",
      propertyPrice: "330,000",
      maintenancePerSqFt: "10",
      securityDeposit: "One Month",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300"
      ],
      title: 'South City',
      location: '3 BHK Flat in Prince Anwar Shah Road, Kolkata',
      price: '₹1.5 Cr',
      area: '2,200 sqft',
      bhk: '3',
      baths: '3',
      status: 'Ready To Move',
      highlights: ['Near School', 'Gated Society', 'Swimming Pool'],
      posted: '2m ago',
      ownerType: 'Owner',
      image: 'https://source.unsplash.com/1600x900/?flat',
    },
    {
      id: 8,
      listingType: "For Sale",
      buildingType: "Apartment",
      propertyType: "Villa",
      city: "Ahmedabad",
      projectName: "Godrej Garden City",
      locality: "Jagatpur",
      numberOfRooms: "2",
      area: "1500",
      areaType: "Sq. Ft.",
      rentPerMonth: "",
      propertyPrice: "280,000",
      maintenancePerSqFt: "8",
      securityDeposit: "Two Months",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300"
      ],
      title: 'Godrej Garden City',
      location: '2 BHK Flat in Jagatpur, Ahmedabad',
      price: '₹1.2 Cr',
      area: '1,500 sqft',
      bhk: '2',
      baths: '2',
      status: 'Ready To Move',
      highlights: ['Near Market', 'Gated Society', 'Gym'],
      posted: '3w ago',
      ownerType: 'Agent',
      image: 'https://source.unsplash.com/1600x900/?village',
    },
    {
      id: 9,
      listingType: "For Sale",
      buildingType: "Apartment",
      propertyType: "Villa",
      city: "Noida",
      projectName: "Jaypee Greens",
      locality: "Sector 128",
      numberOfRooms: "3",
      area: "2000",
      areaType: "Sq. Ft.",
      rentPerMonth: "",
      propertyPrice: "350,000",
      maintenancePerSqFt: "10",
      securityDeposit: "One Month",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300"
      ],
      title: 'Jaypee Greens',
      location: '3 BHK Flat in Sector 128, Noida',
      price: '₹1.7 Cr',
      area: '2,000 sqft',
      bhk: '3',
      baths: '3',
      status: 'Ready To Move',
      highlights: ['Near Metro', 'Gated Society', 'Clubhouse'],
      posted: '1m ago',
      ownerType: 'Owner',
      image: 'https://source.unsplash.com/1600x900/?office',
    },
    {
      id: 10,
      listingType: "For Sale",
      buildingType: "Apartment",
      propertyType: "Villa",
      city: "Delhi",
      projectName: "DLF Capital Greens",
      locality: "Moti Nagar",
      numberOfRooms: "4",
      area: "3000",
      areaType: "Sq. Ft.",
      rentPerMonth: "",
      propertyPrice: "500,000",
      maintenancePerSqFt: "15",
      securityDeposit: "Two Months",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x300"
      ],
      title: 'DLF Capital Greens',
      location: '4 BHK Flat in Moti Nagar, Delhi',
      price: '₹3.0 Cr',
      area: '3,000 sqft',
      bhk: '4',
      baths: '4',
      status: 'Ready To Move',
      highlights: ['Near Metro', 'Gated Society', 'Gym'],
      posted: '2w ago',
      ownerType: 'Agent',
      image: 'https://source.unsplash.com/1600x900/?shop',
    }
  ];
  
  
const PostAds = () => {
    return (
        <div>
      <Header />
      <main>
        <div className="text-center p-5 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-t-lg">
          <h1 className="text-4xl font-bold">List the Property</h1>
          <p className="text-xl mt-2">All properties in this area.</p>
        </div>
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            {/* Add filter UI elements here */}
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded"
             
            >
              Filter by Gurgaon
            </button>
          </aside>
          <section className="md:col-span-3 grid grid-cols-1 gap-6">
            {properties?.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
    );
};

export default PostAds;
