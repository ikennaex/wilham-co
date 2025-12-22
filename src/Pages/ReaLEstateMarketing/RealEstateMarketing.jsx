import React from "react";
import {
  ikoyi,
  agungi,
  ajah,
  ikate,
  vi,
  orchid,
  vgc,
  chevron,
  osapa,
  mme,
  banana,
  ologolo,
} from "../../imports";

const images = [
  ikoyi,
  agungi,
  ajah,
  ikate,
  vi,
  orchid,
  vgc,
  chevron,
  osapa,
  mme,
  banana,
  ologolo,
];

const RealEstateMarketing = () => {
  return (
    <section className="mt-20 bg-black/95 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Real Estate Marketing
          </h2>
        </div>

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-base">
            <p>
              Navigating the Lagos real estate market can sometimes be a daunting
              task. We are one of the fast-growing real estate agencies in Lagos,
              Nigeria, providing comprehensive services including property
              sales, shortlets, rentals, and management.
            </p>

            <p>
              We deliver personalised solutions for clients seeking residential
              and commercial properties in prime locations, supported by market
              analysis, valuation, and investment advisory expertise.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[160px]">
            {images.map((img, index) => (
              <div
                key={index}
                className="
                  relative 
                  overflow-hidden 
                  rounded-2xl 
                  shadow-lg 
                  group
                "
              >
                <img
                  src={img}
                  alt="Property"
                  className="
                    w-full 
                    h-full 
                    object-cover 
                    transition-transform 
                    duration-500 
                    group-hover:scale-105
                  "
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateMarketing;
