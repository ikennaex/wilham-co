import React from "react";
import { Link } from "react-router";
import FadeIn from "../fadein";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-stone-950 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="mb-16">
          <p className="inline-block text-customOrange text-sm font-semibold tracking-wide">
            ABOUT WILHAM & CO.
          </p>
        </div>

        <FadeIn duration={120}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            {/* TEXT BLOCK */}
            <div className="max-w-xl">
              <p className="text-gray-300 leading-relaxed text-lg">
                <span className="text-customOrange font-bold">WILHAM & CO. LIMITED</span> is a team of experienced strategic management
                consultants focused on maximizing people and corporate
                performance across multiple industries.
              </p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                Our practice areas span Human Resource Consulting, Business
                Consulting, Real Estate Marketing, Business Contracting,
                Financial Management, Travel Consulting, and Digital Marketing.
              </p>

              {/* CTA */}
              <div className="mt-12">
                <Link to="/about">
                  <button className="inline-flex items-center gap-3 bg-customOrange px-9 py-4 text-black font-semibold hover:opacity-90 transition">
                    Learn more about us <FaArrowRight size={15} />
                  </button>
                </Link>
              </div>
            </div>

            {/* IMAGE BLOCK */}
            <div className="relative mt-16 lg:mt-0">
              <div className="absolute -top-8 -left-8 w-full h-full border border-gray-700 hidden lg:block" />
              <img
                src="/images/about.jpg"
                alt="Wilham operations"
                className="relative w-full h-[440px] object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
