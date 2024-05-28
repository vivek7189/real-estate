import React from 'react';

const Services = () => {
  return (
    <section className="services py-20 text-center bg-gray-100">
      <h2 className="text-4xl mb-12">Our Services</h2>
      <div className="service-list flex flex-wrap justify-center gap-8">
        <div className="service-card w-72 border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-gray-50">
          <h3 className="text-xl font-bold my-4">Property Listings</h3>
          <p className="mb-4 px-4">Find a diverse range of properties for sale or rent.</p>
        </div>
        <div className="service-card w-72 border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-gray-50">
          <h3 className="text-xl font-bold my-4">Agent Assistance</h3>
          <p className="mb-4 px-4">Get expert assistance from experienced real estate agents.</p>
        </div>
        <div className="service-card w-72 border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-gray-50">
          <h3 className="text-xl font-bold my-4">Mortgage Calculators</h3>
          <p className="mb-4 px-4">Calculate mortgage payments and affordability with ease.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
