import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599423300746-b62533397364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjg0NTE1MzIz&ixlib=rb-4.0.3&q=80&w=1080')" }}>
      <div className="bg-black bg-opacity-50 h-[60vh] flex flex-col justify-center items-center px-4 sm:px-8">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Real Estate Made Real Easy</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
            <input
              type="text"
              placeholder='Search by Locality "Andheri East Overview"'
              className="p-3 rounded-lg w-full text-gray-800 sm:flex-1"
            />
            <button className="p-3 bg-yellow-500 rounded-lg text-gray-900 font-bold hover:bg-yellow-600 w-full sm:w-auto sm:flex-none sm:mx-2">
              Near me
            </button>
            <select className="p-3 rounded-lg text-gray-800 bg-white w-full sm:w-auto sm:flex-1 sm:mx-2">
              <option value="">Budget</option>
            </select>
            <select className="p-3 rounded-lg text-gray-800 bg-white w-full sm:w-auto sm:flex-1 sm:mx-2">
              <option value="">Property Type</option>
            </select>
            <button className="p-3 bg-yellow-500 rounded-lg text-gray-900 font-bold hover:bg-yellow-600 w-full sm:w-auto sm:flex-none sm:mx-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
