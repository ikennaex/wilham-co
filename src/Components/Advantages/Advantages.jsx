import React from "react";
import { Link } from "react-router";

const WhyChooseUs = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:gap-20">
        {/* Left Image */}
        <div className="lg:w-1/2">
          <img
            src="/images/collegue.jpg"
            alt="Why choose us"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        {/* Right Content */}
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6">
            Why WILHAM & CO
          </h2>

          <p className="text-gray-400 leading-relaxed mb-10">
            Our integrity and proficiency in designing systems to manage people
            has earned us an unparalleled reputation for quality in the services
            we offer. We specialise in key areas including business advisory;
            people transformation; technology services; training and learning
            programme management.
          </p>

          <Link to={"/whychooseus"}>
          <button className="mt-10 inline-block border border-customGreen px-6 py-3 text-white text-sm font-medium hover:bg-customOrange hover:text-black transition">
            Learn More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
