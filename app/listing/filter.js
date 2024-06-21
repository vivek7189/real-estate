// components/Filters.js
const Filters = () => {
    return (
      <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md w-full">
        {/* Budget Section */}
        <div className="mb-6">
          <div className="text-xl font-bold mb-4">Budget</div>
          <div className="space-y-2">
            <label className="block">0-100+ Crores</label>
            <label className="block">Min Budget</label>
            <input
              type="number"
              placeholder="Min Budget"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block">Max Budget</label>
            <input
              type="number"
              placeholder="Max Budget"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
  
        {/* Type of Property Section */}
        <div className="mb-6">
          <div className="text-xl font-bold mb-4">Type of Property</div>
          <div className="flex flex-col space-y-2">
            <label><input type="checkbox" className="mr-2"/> Residential Apartment</label>
            <label><input type="checkbox" className="mr-2"/> Independent House/Villa</label>
            <label><input type="checkbox" className="mr-2"/> Residential Land</label>
            <label><input type="checkbox" className="mr-2"/> Independent/Builder Floor</label>
            <label><input type="checkbox" className="mr-2"/> Farm House</label>
            <div className="text-blue-500 cursor-pointer">+ 1 more</div>
          </div>
        </div>
  
        {/* Number of Bedrooms Section */}
        <div className="mb-6">
          <div className="text-xl font-bold mb-4">No. of Bedrooms</div>
          <div className="space-y-2 flex flex-col">
            <label><input type="checkbox" className="mr-2"/> 1 RK/1 BHK</label>
            <label><input type="checkbox" className="mr-2"/> 2 BHK</label>
            <label><input type="checkbox" className="mr-2"/> 3 BHK</label>
            <label><input type="checkbox" className="mr-2"/> 4 BHK</label>
            <label><input type="checkbox" className="mr-2"/> 5 BHK</label>
            <div className="text-blue-500 cursor-pointer">+ 5 more</div>
          </div>
        </div>
  
        {/* Construction Status Section */}
        <div className="mb-6">
          <div className="text-xl font-bold mb-4">Construction Status</div>
          <div className="flex flex-col space-y-2">
            <label><input type="checkbox" className="mr-2"/> New Launch</label>
            <label><input type="checkbox" className="mr-2"/> Under Construction</label>
            <label><input type="checkbox" className="mr-2"/> Ready to move</label>
          </div>
        </div>
  
        {/* Posted By Section */}
        <div className="mb-6">
          <div className="text-xl font-bold mb-4">Posted by</div>
          <div className="flex flex-col space-y-2">
            <label><input type="checkbox" className="mr-2"/> Owner</label>
            <label><input type="checkbox" className="mr-2"/> Builder</label>
            <label><input type="checkbox" className="mr-2"/> Dealer</label>
            <label><input type="checkbox" className="mr-2"/> Feature Dealer</label>
          </div>
        </div>
  
        {/* Area Section */}
        <div>
          <div className="text-xl font-bold mb-4">Area</div>
          <div className="space-y-2 flex flex-col">
            <label className="block">0 sq.ft. - 4000+ sq.ft.</label>
            <label className="block">Min Area</label>
            <input
              type="number"
              placeholder="Min Area (sq.ft.)"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block">Max Area</label>
            <input
              type="number"
              placeholder="Max Area (sq.ft.)"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Filters;
  