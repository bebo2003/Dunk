import React from "react";
import { motion } from "framer-motion";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import img9 from "../../assets/images/9.png";
import img10 from "../../assets/images/10.png";
import img11 from "../../assets/images/11.png";
import img13 from "../../assets/images/13.png";
import img14 from "../../assets/images/14.png";

const OurMenu = () => {
  const items = [
    { img: img2, label: "ICED COFFEE" },
    { img: img3, label: "COLD BREW" },
    { img: img4, label: "Iced Caramel Latte" },
    { img: img5, label: "Cold Brew Classic" },
    { img: img6, label: "Mocha Swirl Iced Coffee" },
    { img: img7, label: "French Vanilla Cappuccino" },
    { img: img9, label: "Hazelnut Iced Coffee" },
    { img: img10, label: "Pumpkin Spice Cold Brew" },
    { img: img11, label: "Coconut Refresher" },
    { img: img13, label: "Matcha Latte (Hot)" },
    { img: img14, label: "Espresso Shot" },
  ];

  return (
    <div className="bg-orange-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3e2807] mb-10">
          OUR MENU
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border hover:scale-105 transition hover:bg-pink-100"
            >
              <img src={item.img} alt={item.label} className="w-40 h-auto mb-6" />
              <button className="bg-[#c4376f] text-white font-bold py-2 px-6 rounded-full text-lg tracking-wider">
                {item.label}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
