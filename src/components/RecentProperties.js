
import React from 'react';
import house1 from '../assets/house.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';

const RecentProperties = () => {
  const properties = [
    {
      image: house1,
      price: "$1,249,000",
      address: "87 Mishaum Point Rd",
      location: "Dartmouth, MA 02748",
      type: "HOUSE FOR SALE",
      sqft: "1,286",
      beds: 2,
      baths: 3,
    },
    {
      image: house2,
      price: "$2,189,000",
      address: "9615 Shore Rd APT BA",
      location: "Brooklyn, NY 11209",
      type: "TOWNHOUSE FOR SALE",
      sqft: "1,286",
      beds: 2,
      baths: 3,
    },
    {
      image: house3,
      price: "$3,449/year",
      address: "80646 Via Pessaro",
      location: "La Quinta, CA 32453",
      type: "HOUSE FOR RENT",
      sqft: "886",
      beds: 2,
      baths: 2,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Recent Properties</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={property.image}
              alt={`Property ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-2xl font-semibold text-red-500 mb-4 block">{property.price}</span>
              <div className="flex items-center space-x-2 text-gray-500 mb-4">
                <span>{property.type}</span>
                <span>&bull;</span>
                <span>{property.address}</span>
                <span>&bull;</span>
                <span>{property.location}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>{property.sqft} sqft</span>
                <span>{property.beds} beds</span>
                <span>{property.baths} baths</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProperties;
