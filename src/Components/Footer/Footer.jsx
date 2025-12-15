import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../imports";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black/95 text-gray-300 pt-24 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* BRAND BLOCK */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src={logo}
                alt="Thaifchi-Kiezman Ltd Logo"
                className="h-14 mb-6"
              />
            </Link>

            <p className="text-sm leading-relaxed max-w-xl text-gray-400">
              WILHAM & CO. LIMITED is a team of experienced strategic management
              consultants focused on maximizing people and corporate performance
              across multiple industries.
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-customOrange transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/advantages"
                  className="hover:text-customOrange transition"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-customOrange transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Contact</h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              WATCH TOWER DRIVE, ELEMORO ESTATE, IBEJU- LEKKI, LAGOS STATE
            </p>

            <a
              href="mailto:thaifchikiezmanltd@gmail.com"
              className="block mt-4 text-sm hover:text-customOrange transition"
            >
              info@wilhamandco.com
            </a>

            <a
              href="tel:+2349091112210"
              className="block mt-4 text-sm hover:text-customOrange transition"
            >
              +234 816 668 7358
            </a>

            <a
              href="tel:+2348038792439"
              className="block mt-2 text-sm hover:text-customOrange transition"
            >
              +234 810 620 7080
            </a>

            <div className="mt-6 flex gap-6">
              {/* <a href="" className="hover:text-customOrange transition">
                <FaFacebook size={17} />
              </a>
              <a href="" className="hover:text-customOrange transition">
                <FaInstagram size={17} />
              </a> */}
              <a href="https://www.linkedin.com/company/wilham-co-limited/posts/?feedView=all" className="hover:text-customOrange transition">
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </div>

        <div>
          <Link to={"/privacypolicy"}>
          <p>Privacy Policy</p>
          </Link>
          <Link to={"/legal"}>
          <p>Legal</p>
          </Link>
          <Link to={"/terms"}>
          <p>Terms & Conditions</p>
          </Link>
        </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-20 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {year} WILHAM & CO LTD. All rights reserved.
          </p>

          <p className="text-xs mt-3 text-customOrange">
            Design by{" "}
            <a
              href="https://xmotivotechnologies.com/"
              target="_blank"
              className="underline"
            >
              xMotivo Technologies Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
