import React from "react";
import { business } from "../../imports";

const BusinessContractors = () => {
  return (
    <section className="mt-20 bg-black/95 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Business Contractors
          </h2>
        </div>

        {/* Centered Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-5xl">
            {/* Subtle glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gray-700 to-gray-900 opacity-40 blur"></div>

            <img
              src={business}
              alt="Business Contractors"
              className="
                relative
                w-full
                object-cover
                shadow-2xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessContractors;
