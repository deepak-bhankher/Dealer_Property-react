

const FilterForm = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-4 rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4 text-center">Search Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Property Status */}
        <div className="flex flex-col">
          <label className="mb-2">Property Status</label>
          <select className="bg-gray-700 text-white py-2 px-4 rounded-md">
            <option>For Sale</option>
            <option>For Rent</option>
            <option>Sold</option>
          </select>
        </div>

        {/* Property Style */}
        <div className="flex flex-col">
          <label className="mb-2">Property Style</label>
          <select className="bg-gray-700 text-white py-2 px-4 rounded-md">
            <option>Modern</option>
            <option>Traditional</option>
            <option>Luxury</option>
          </select>
        </div>

        {/* Property Location */}
        <div className="flex flex-col">
          <label className="mb-2">Property Location</label>
          <select className="bg-gray-700 text-white py-2 px-4 rounded-md">
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Miami</option>
          </select>
        </div>

        {/* Property Type */}
        <div className="flex flex-col">
          <label className="mb-2">Property Type</label>
          <select className="bg-gray-700 text-white py-2 px-4 rounded-md">
            <option>Apartment</option>
            <option>House</option>
            <option>Condo</option>
          </select>
        </div>

        {/* Area Slider */}
        <div className="flex flex-col">
          <label className="mb-2">Area (sqft)</label>
          <input type="range" min="0" max="5000" step="100" className="w-full" />
          <span>Any</span>
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col">
          <label className="mb-2">Bedrooms</label>
          <select className="bg-gray-700 text-white py-2 px-4 rounded-md">
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div className="flex flex-col">
          <label className="mb-2">Bathrooms</label>
          <select className="bg-gray-700 text-white py-2 px-4 rounded-md">
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
        </div>

        {/* Price Slider */}
        <div className="flex flex-col">
          <label className="mb-2">Price</label>
          <input type="range" min="100000" max="1000000" step="10000" className="w-full" />
          <span>Any</span>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 text-center">
        <button className="bg-blue-500 py-2 px-6 rounded-lg text-white hover:bg-blue-600 transition duration-200">
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
