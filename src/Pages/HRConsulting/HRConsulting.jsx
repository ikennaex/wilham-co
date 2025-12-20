import React from "react";
import { industryhr, hrcosulting } from "../../imports";

const HRConsulting = () => {
  return (
    <section className="mt-20 bg-black/95 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            HR Consulting
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Sustainable HR Solutions That Drive Business Growth —
            <span className="italic">
              {" "}
              Thinking Beyond Ordinary Strategies
            </span>
          </p>
        </div>

        
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300 leading-relaxed text-base">
            <p>
              We are a leading HR consulting firm delivering exceptional service
              by providing high-quality alternatives to in-house HR resources
              across the entire HR value chain.
            </p>

            <p>
              In any economy, people remain the only sustainable competitive
              advantage. Organizations that fail to attract, develop, and retain
              top talent risk losing long-term relevance and operational
              stability.
            </p>

            <p>
              Our approach helps organizations align people strategy with
              business goals. By leveraging proven methodologies, tools, and the
              expertise of highly experienced HR consultants, we ensure
              best-fit, future-ready HR solutions that unlock the true value of
              human capital.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            

            <img
              src={hrcosulting}
              alt="HR Consulting Team"
              className="
                w-full 
                max-w-md 
                object-cover 
              "
            />

            <img
              src={industryhr}
              alt="HR Consulting"
              className="
                w-full 
                max-w-xl 
                object-cover 
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRConsulting;
