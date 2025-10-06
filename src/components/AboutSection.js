import React from "react";
import houseImage from "../assets/poolhouse.png"; // image ka path sahi rakho

const AboutEstate = () => {
  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto mt-20 p-10">
      
      {/* Left Text */}
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold mb-4">🏠 About Estate</h2>
        <h4 className="text-lg font-semibold mb-2">Who We Are & What We Do</h4>
        <p className="mb-6 text-gray-800">
          We are the most trusted rental resource that connects apartment consumers to their ideal place to live. A fully searchable, agent-supplied, database is updated in real time.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-gray-500">
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
            Quiet Neighbourhood
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
            Fabulous Views
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
            Great Local Community
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
            Large Play Center In Yard
          </div>
        </div>

        <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition duration-300">
          LEARN MORE
        </button>
      </div>

      {/* Right Image */}
      <div>
        <img
          src={houseImage}
          alt="Modern House with Pool"
          className="w-[500px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutEstate;
