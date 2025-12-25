import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { logo } from "../../imports";

const menuItems = [
  { name: "HR CONSULTING", link: "/hr-consulting" },
  { name: "REAL ESTATE MARKETING", link: "/real-estate-marketing" },
  { name: "BUSINESS CONTRACTORS", link: "/business-contractors" },
  { name: "FINANCE CONSULTING", link: "/finance-consulting" },
  { name: "TRAVEL & DIGITAL MARKETING", link: "/travel-and-digital-marketing" },
  { name: "About Us", link: "/about" },
  { name: "Why Choose Us", link: "/whychooseus" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md border-b border-gray-800">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 lg:h-14 object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-3">
          {menuItems.map((menu) => {
            const isActive = location.pathname === menu.link;
            return menu.link.includes("#") ? (
              <a
                key={menu.name}
                href={menu.link}
                className={`relative text-sm font-semibold tracking-wide text-gray-300 hover:text-white transition-all duration-300 ${
                  isActive ? "text-white after:w-full" : ""
                }`}
              >
                {menu.name}
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={menu.name}
                to={menu.link}
                className={`relative text-[11px] font-semibold tracking-wide text-gray-300 hover:text-white transition-all duration-300 ${
                  isActive ? "text-white" : ""
                }`}
              >
                {menu.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white focus:outline-none"
        >
          {open ? <IoClose size={32} /> : <IoIosMenu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black/95 border-t border-gray-800 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          {menuItems.map((menu) =>
            menu.link.includes("#") ? (
              <a
                key={menu.name}
                href={menu.link}
                className="block text-base font-medium text-gray-300 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {menu.name}
              </a>
            ) : (
              <Link
                key={menu.name}
                to={menu.link}
                className="block text-base font-medium text-gray-300 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {menu.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
