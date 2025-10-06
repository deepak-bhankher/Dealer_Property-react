// src/components/GallerySlider.js
import React, { useState } from "react";

// Import images from assets
import house1 from "../assets/house.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import house6 from "../assets/house6.jpg";

// Define categories
const categories = [
  "All",
  "Basement",
  "Bedroom",
  "Commute",
  "Driveway",
  "Garage",
  "Kitchen",
];

// ✅ Assign multiple images to each category
const images = [
  // Basement
  { category: "Basement", url: house1 },
  { category: "Basement", url: house4 },
  { category: "Basement", url: house5 },

  // Bedroom
  { category: "Bedroom", url: house2 },
  { category: "Bedroom", url: house6 },
  { category: "Bedroom", url: house6 },

  // Commute
  { category: "Commute", url: house3 },
  { category: "Commute", url: house5 },
  { category: "Commute", url: house1 },

  // Driveway
  { category: "Driveway", url: house4 },
  { category: "Driveway", url: house6 },
  { category: "Driveway", url: house2 },

  // Garage
  { category: "Garage", url: house5 },
  { category: "Garage", url: house3 },
  { category: "Garage", url: house1 },

  // Kitchen
  { category: "Kitchen", url: house6 },
  { category: "Kitchen", url: house6 },
  { category: "Kitchen", url: house2 },
];

const GallerySlider = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter images based on selected category
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="w-full bg-gray-900 text-white">
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 py-6 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded transition-all duration-300 ${
              activeCategory === category
                ? "bg-white text-red-600 font-bold shadow"
                : "text-gray-300 hover:bg-white hover:text-red-600 hover:font-bold hover:shadow"
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 px-4 pb-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[360px] md:min-w-[480px] flex-shrink-0 rounded overflow-hidden shadow-lg"
            >
              <img
                src={img.url}
                alt={img.category}
                className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
