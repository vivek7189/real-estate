import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import Link from 'next/link';
import PropertyDetailPage from './PropertyDetailPage';

  
const PropertyDeatils = () => {
    return (
      <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <div className="bg-gradient-to-r from-blue-600 to-teal-400 text-white rounded-lg py-12 px-6 mb-10 text-center shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Discover Your Dream Property</h1>
          <p className="text-lg md:text-xl">Browse through the best properties available in your area.</p>
        </div>
            <PropertyDetailPage/>
      </main>
      <Footer />
    </div>
    );
};

export default PropertyDeatils;