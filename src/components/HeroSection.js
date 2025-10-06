
import houseImage from "../assets/house.jpg"; 

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${houseImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-lg mb-2 tracking-wide">HOUSE FOR SALE</p>
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-2 hover:text-red-500 cursor-pointer">
          87 Mishaum Point Rd
        </h1>
        <h2 className="text-white text-xl md:text-2xl mb-4">
          Dartmouth, MA 02748
        </h2>
        <div className="text-yellow-400 text-3xl font-semibold">
          $1,249,000
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
