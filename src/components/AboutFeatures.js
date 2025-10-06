import React from "react";
import mapImage from "../assets/img_map.jpg"; // old map image

const AboutFeatures = () => {
  return (
    <div
      className="mt-20 bg-cover bg-center p-10 rounded-lg text-white"
      style={{ backgroundImage: `url(${mapImage})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center gap-4">
          <div className="p-6 border border-white rounded-lg inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 4l9 5.75M4.5 10.5v9a2.25 2.25 0 002.25 2.25h11.25A2.25 2.25 0 0020.25 19.5v-9" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">BEST PROPERTY LISTS</h3>
          <p className="text-sm">
            We provide consumers with a content-rich listings in a handy format.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center gap-4">
          <div className="p-6 border border-white rounded-lg inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 9l3 3m0 0l-3 3m3-3H8m6 3v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2h2" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">BEST PRICE IN MARKET</h3>
          <p className="text-sm">
            Price estimates and sales histories for property, updating information.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center gap-4">
          <div className="p-6 border border-white rounded-lg inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H3a2 2 0 01-2-2v-7a2 2 0 012-2h14a2 2 0 012 2v7a2 2 0 01-2 2h-4l-4 4z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">GUARANTEED SERVICES</h3>
          <p className="text-sm">
            Our managers will keep you informed and you can act with certainty.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center gap-4">
          <div className="p-6 border border-white rounded-lg inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 11V6a1 1 0 112 0v5m-1 7a4 4 0 110-8 4 4 0 010 8zm7-4a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">MARKETING RESEARCH</h3>
          <p className="text-sm">
            All our marketing researchers today have a tough job multitasking.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutFeatures;
