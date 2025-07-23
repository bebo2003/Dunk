import React from 'react';
import jetblue from "../../assets/images/new_511 Washington Nationals Logo.png";
import br from "../../assets/images/BR_Logo_New.png";

import orioles from "../../assets/images/new_511 Orioles Logo.png";
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import nationals from "../../assets/images/new_511 Ravens Logo.png";

export default function Footer() {
  return (
   <footer className="bg-white text-[#2d1e0f] pt-12 pb-6 px-6 md:px-16 text-sm font-sans">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-300 pb-10">
        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 text-base">QUICK LINKS</h4>
          <div className="flex flex-wrap gap-x-8 gap-y-2 max-w-sm">
            {[
              "Press Room",
              "Mobile App",
              "Corporate",
              "Sustainability",
              "About Us",
              "Franchising",
              "Contact Us",
              "Site Map",
            ].map((link, idx) => (
              <a key={idx} href="#" className="underline hover:text-orange-600">{link}</a>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-bold mb-4 text-base">FOLLOW US</h4>
          <div className="flex gap-4 text-xl">
           <FaTwitter />

            <FaFacebookF />
            <FaPinterestP />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="text-center py-8 border-b border-gray-300">
        <h4 className="font-bold mb-6 text-base">OUR PARTNERS</h4>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {[jetblue, br, orioles, nationals].map((img, idx) => (
            <img key={idx} src={img} alt="partner" className="h-12 md:h-16 object-contain" />
          ))}
        </div>
      </div>

      {/* Legal Links */}
      <div className="flex flex-wrap justify-center text-xs gap-x-4 gap-y-2 mt-6 text-center text-gray-800">
        {[
          "Terms of Use",
          "Privacy Policy",
          "Cookie Settings",
          "Your Privacy Choices",
          "Consumer Health Data",
          "Do Not Sell My Info",
          "Your Ad Choices",
          "CA Transparency in Supply Chains Act",
          "Web Accessibility",
        ].map((item, i) => (
          <a key={i} href="#" className="underline hover:text-orange-600">
            {item}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-4 text-gray-600">
        ©2025 Bebo.o
      </div>
    </footer>
  );
}
