import React from "react";
import backgroundImage from "../../assets/images/miscellanious-modal-bg.png";
import Image from "../../assets/images/Time-to-Make-the-Donuts_1125x1124 1.png";

const AboutSection = () => {
  return (
    <>
    <div
      className="min-h-screen flex items-center justify-center text-center px-4 bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain", // تعمل على جميع الشاشات وتتكيف تلقائيًا
      }}
    >
      <div className="bg-white/80 rounded-xl p-6 md:p-12 lg:p-16 max-w-xl w-full shadow-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3e2807] mb-4">
          ABOUT US
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium text-[#3e2807]">
          America Runs on Dunkin'®
        </p>
      </div>



      
    </div>

       <div className="flex flex-col md:flex-row items-center justify-between gap-10 ps-4 py-10 md:ps-12 lg:ps-20 bg-white text-[#2d2d2d]">
      {/* Text Section */}
      <div className="w-full md:w-2/3 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black">FRANCHISING</h2>
        <h3 className="text-xl sm:text-2xl font-bold">JOIN US</h3>
        <p className="text-base sm:text-lg leading-relaxed">
          With America’s favorite coffee, innovative beverage strategies, and
          mouth-watering snacks, Dunkin’ has become the brand everyone knows
          nationally and loves locally.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Bring the top name in coffee and beverages –{" "}
          <strong>#1 in customer loyalty for over 15 consecutive years</strong>{" "}
          – to your community.
        </p>

        <div>
          <h4 className="text-base sm:text-lg font-bold">Dunkin’ franchise advantages:</h4>
          <ul className="list-decimal list-inside text-sm sm:text-base mt-2 space-y-1">
            <li>Established brand strength</li>
            <li>Flexible restaurant designs</li>
            <li>Exceptional support system</li>
            <li>Premier locations still available</li>
          </ul>
        </div>

        <a
          href="#"
          className="text-pink-600 font-bold underline hover:text-pink-800 text-base sm:text-lg"
        >
          Ready to run with Dunkin’?
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/4 flex justify-center">
        <img
          src={Image}
          alt="Time to make the donuts"
          className="max-w-[300px] w-full h-auto object-contain"
        />
      </div>
    </div>
    </>
  );
};

export default AboutSection;
