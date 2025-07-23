
import React from "react";


import img from "../../assets/images/Refreshers_desktop_v3@2x.png";
import img2 from "../../assets/images/Earn_Points_tab.png";
import img3 from "../../assets/images/Get_rewards_mob.png";
import img4 from "../../assets/images/Boosted_status_mob.png";
import img5 from "../../assets/images/img_Home_Desktop_v5@2x.png";

// Partner images



const DunkinOffer = () => {
  const features = [
    {
      img: img2,
      title: "EARN POINTS ANY WAY YOU PAY",
      desc: "Order ahead in the app or scan your Dunkin' Rewards ID in-store to earn 10 points per $1 spent.",
    },
    {
      img: img3,
      title: "GET REWARDS AND OFFERS",
      desc: "Enjoy exclusive offers and redeem rewards starting at just 150 points — only $15 spent!",
    },
    {
      img: img4,
      title: "UNLOCK MORE WITH BOOSTED STATUS",
      desc: "Earn faster when you visit 12 times in a calendar month and start receiving 12 points per $1 spent!",
    },
  ];

  return (
    <>
      {/* Offer Section */}
      <div className="bg-[#fff7f2] min-h-screen px-4 md:px-12 py-10 font-sans">
        {/* Navbar */}
    

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-orange-500">DUNKIN'</span>{" "}
              <span className="text-pink-600">REWARDS</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              $3 REFRESHERS <br /> ALL SUMMER LONG
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Ready for a refresh? Now through 8/19,{" "}
              <strong>all medium Dunkin'</strong> Refreshers are{" "}
              <strong>$3</strong> for Dunkin’ Rewards members!* Try a different
              combination of flavors every visit to make each sip a special one.
            </p>

            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-bold text-lg mt-4">
              JOIN NOW
            </button>

            <p className="text-sm text-gray-600 mt-3">
              *Click to read our full{" "}
              <a
                href="#"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Dunkin' Rewards terms and conditions.
              </a>
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:w-1/2 flex justify-center">
            <img
              src={img}
              alt="Dunkin Refreshers"
              className="w-full max-w-md md:max-w-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-6 md:px-16 text-center">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-40 h-40 mb-4 rounded-full bg-[#f9f5f3] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-28 h-28 object-contain transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-extrabold text-[#402514] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base max-w-xs">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-[#c2296b] hover:bg-[#a71d5b] text-white font-bold py-3 px-8 rounded-full text-lg">
            LEARN MORE
          </button>
        </div>
      </div>

        {/* $5 MEAL DEAL Section */}
<div className="bg-[#fffaf6] px-4 md:px-16 py-10 font-sans">
  <div className="flex flex-col md:flex-row items-stretch justify-between gap-12">

    {/* Left Section: $5 + MEAL DEAL */}
    <div className="md:w-1/2 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
      
      {/* $5 */}
      <h2 className="text-pink-600 text-[120px] md:text-[300px] leading-none font-extrabold m-0">
        $5
      </h2>

      {/* MEAL DEAL stacked next to $5 */}
      <div className="flex flex-col justify-center md:justify-start gap-4">
        <div className="text-orange-500 text-[48px] md:text-[72px] font-extrabold leading-tight">
          MEAL
        </div>
        <div className="text-orange-500 text-[48px] md:text-[72px] font-extrabold leading-tight">
          DEAL
        </div>

        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-8 rounded-full text-lg transition">
          VIEW MENU
        </button>
      </div>
    </div>

    {/* Right Section: Image taking full height and stuck to top */}
    <div className="md:w-1/2 h-full">
      <img
        src={img5}
        alt="Meal Deal"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    
  </div>
</div>




 
    </>
  );
};

export default DunkinOffer;
