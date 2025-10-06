import React from "react";
import houseImage from '../assets/house.jpg'; // Correct relative path to image

const PropertyDetail = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Property Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">87 Mishaum Point Rd</h2>
            <p className="text-xl text-gray-600 mb-4">Dartmouth, MA 02748</p>

            <p className="text-lg text-gray-600 mb-6">
              On the best lot at Phuket is situated the Kailua Residence. It features Ipe hardwood flooring on the interior and granite stone flooring on the lanai, high vaulted cedar ceilings.
            </p>

            {/* Property Features */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Features</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">🛏️ Quiet Neighborhood</li>
              <li className="text-gray-600">🏡 Fabulous Views</li>
              <li className="text-gray-600">🏠 Large Play Center In Yard</li>
              <li className="text-gray-600">🛋️ Great Local Community</li>
            </ul>

            {/* Price and Area */}
<div className="flex items-center mt-6 space-x-6">
  <span className="text-4xl font-semibold text-white bg-red-500 px-6 py-3 rounded-lg ">
    $1,249,000
  </span>
</div>


            {/* Property Info Icons */}
            <div className="flex items-center space-x-6 mt-6">
              <div className="flex items-center space-x-1 text-gray-600">
               
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative">
          <img
            src={houseImage} // Use the imported image path
            alt="Modern house with pool in a quiet neighborhood"
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
