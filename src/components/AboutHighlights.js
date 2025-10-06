import React from "react";
import bgImage from "../assets/img_map.jpg"; // apni image ka sahi path yahan do

const AboutHighlights = () => {
  return (
    <div
      className="h-[450px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-40 p-10 rounded-lg max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 text-white max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold">
              01
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-wide">Best Property Lists</h3>
              <p className="text-sm">
                We provide consumers with a content-rich listings in a handy format.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold">
              02
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-wide">Best Price In Market</h3>
              <p className="text-sm">
                Price estimates and sales histories for property, updating information.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold">
              03
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-wide">Guaranteed Services</h3>
              <p className="text-sm">
                Our managers will keep you informed and you can act with certainty
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold">
              04
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-wide">Marketing Research</h3>
              <p className="text-sm">
                All our marketing researchers today have a tough job multitasking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHighlights;
