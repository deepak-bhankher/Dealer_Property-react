// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-5xl font-bold text-white  hover:text-yellow-400 cursor-pointer select-none"
        >
          ESTATE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-white  hover:text-yellow-400 text-2xl transition">
            Home
          </Link>

          <Link to="/about" className="text-white  hover:text-yellow-400 text-2xl transition">
            About Us
          </Link>

          <Link to="/blog" className="text-white  hover:text-yellow-400 text-2xl transition">
            Blog
          </Link>

          <Link to="/contact" className="text-white  hover:text-yellow-400 text-2xl transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-gray-900 text-white">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-black text-xl py-2 text-left transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-black text-xl py-2 text-left transition"
          >
            About Us
          </Link>

          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="hover:text-black text-xl py-2 text-left transition"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-black text-xl py-2 text-left transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
