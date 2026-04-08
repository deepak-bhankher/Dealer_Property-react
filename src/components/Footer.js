// src/components/Footer.js
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Contacts Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CONTACTS</h3>
            <p className="text-gray-300">
              We are the leading real estate and rental marketplace dedicated to
              empowering consumers with data.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                <i className="fa-solid fa-location-dot mr-2"></i>
                121 King Street, NY, USA
              </li>
              <li>
                <i className="fa-solid fa-phone mr-2"></i>
                +800 1234 56 78
              </li>
              <li>
                <i className="fa-solid fa-envelope mr-2"></i>
                contact@yoursite.com
              </li>
            </ul>
          </div>

          {/* From the Blog Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FROM THE BLOG</h3>
            <ul className="space-y-3">
              <li>
                <a href="" className="hover:text-gray-400">
                  Making the Most of Your Small Space with Furniture
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-400">
                  4 Ways to Decorate Your First Apartment on a Budget
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-400">
                  How to Infuse Your Space with Natural Light
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <a href="/support" className="hover:text-yellow-400">
                  Support
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li> 
              <li>
                <a href="/listing" className="hover:text-yellow-400">
                  Listing
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-yellow-400">
                  Gallery
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Latest Tweets Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LATEST TWEETS</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://twitter.com/axiomthemes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  @axiomthemes For the little ones: bright and colorful, modern
                  and professional #ecommerce #WP #site template White Rabbit!
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/axiomthemes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  @axiomthemes We continue #summer #sports and #tournaments
                  topic! Check out Soccer Club #WordPress theme by Axiom:
                </a>
              </li>
            </ul> 
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ESTATE. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-5 text-xl">
            <a href="" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

