import Header from '../ui/Header';
import Footer from '../ui/Footer';
import Link from 'next/link';
import PropertyCard from './PropertyCard';
import Filters from './filter';
import {properties} from './data';

  
const PostAds = () => {
    return (
      <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
      <div className="bg-gradient-to-r from-blue-600 to-teal-400 text-white rounded-lg py-8 px-6 mb-10 text-center shadow-md">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Dream Property</h1>
      <p className="text-base md:text-lg">Browse through the best properties available in your area.</p>
    </div>
        <div className="flex flex-col lg:flex-row">
          <aside className="lg:w-1/4 w-full mb-6 lg:mb-0 lg:pr-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Filter Properties</h2>
              <Filters />
            </div>
          </aside>
          <section className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6">
            {properties.map((item) => (
               <Link href="/listing/details" className="flex items-center space-x-2 hover:text-yellow-500">
                    <PropertyCard key={item.id} property={item} />
              </Link>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
    );
};

export default PostAds;
