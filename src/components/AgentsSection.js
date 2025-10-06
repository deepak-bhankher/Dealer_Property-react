import React from "react";
import agent1 from "../assets/agent1.jpg"; // Add your images here
import agent2 from "../assets/agent2.jpg";
import agent3 from "../assets/agent3.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const agents = [
  {
    name: "Sebastian Jones",
    role: "Sales Manager",
    image: agent1,
  },
  {
    name: "Natalia Sitam",
    role: "Client Relations",
    image: agent2,
  },
  {
    name: "Martin Jackson",
    role: "Senior Agent",
    image: agent3,
  },
];

const AgentsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          MEET OUR AGENTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md text-center p-6"
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-72 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{agent.name}</h3>
              <p className="text-red-600 uppercase text-sm font-medium mt-1">
                {agent.role}
              </p>
             <div className="flex justify-center gap-4 mt-4 text-gray-600 text-xl">
  <a href="/" aria-label="Facebook"><FaFacebookF /></a>
  <a href="/" aria-label="Twitter"><FaTwitter /></a>
  <a href="/" aria-label="Instagram"><FaInstagram /></a>
  <a href="/" aria-label="LinkedIn"><FaLinkedinIn /></a>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
