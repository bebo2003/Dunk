import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/dd_nav_logo.svg";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/menu", label: "Menu" },
    { path: "/location", label: "Locations" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Menu - Desktop */}
        <nav className="hidden md:flex gap-6 text-[#3e2807] font-semibold">
          {navLinks.slice(0, 3).map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="hover:text-orange-500 transition duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className="flex justify-center">
          <Link to="/home">
            <img
              src={logo}
              alt="Logo"
              className="w-24 md:w-36 object-contain"
            />
          </Link>
        </div>

        {/* Right Menu - Desktop */}
        <nav className="hidden md:flex gap-6 text-[#3e2807] font-semibold">
          <Link
            to="/contact"
            className="hover:text-orange-500 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#3e2807] text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md text-[#3e2807] font-semibold flex flex-col px-6 py-4 gap-4">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500 transition duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
