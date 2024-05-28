import React from 'react';

const FeaturedProperties = () => {
  return (
    <section className="featured-properties py-20 bg-white text-center">
      <h2 className="text-4xl mb-12">Featured Properties</h2>
      <div className="property-list flex flex-wrap justify-center gap-8">
        <div className="property-card w-72 border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-gray-50">
          <img
            src="https://via.placeholder.com/300/FF5733/FFFFFF"
            alt="Luxury Villa"
            className="w-full"
          />
          <h3 className="text-xl font-bold my-4">Luxury Villa</h3>
          <p className="mb-4">Beautiful villa with stunning views</p>
          <button className="w-full p-4 bg-yellow-500 text-gray-900 font-bold rounded-b-lg hover:bg-yellow-600">
            View Details
          </button>
        </div>
        <div className="property-card w-72 border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-gray-50">
          <img
            src="https://via.placeholder.com/300/3498DB/FFFFFF"
            alt="Beachfront Condo"
            className="w-full"
          />
          <h3 className="text-xl font-bold my-4">Beachfront Condo</h3>
          <p className="mb-4">Cozy condo with beach access</p>
          <button className="w-full p-4 bg-yellow-500 text-gray-900 font-bold rounded-b-lg hover:bg-yellow-600">
            View Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
