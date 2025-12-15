import React from "react";
import { motion } from "framer-motion";
import "./herosection.css";

const textOverlay = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Herosection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden mt-20 pt-20">
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/abstract.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK GRADIENT FOR DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/100" />

      {/* CONTENT */}
      <motion.div
        variants={textOverlay}
        initial="hidden"
        animate="visible"
        className="
          absolute top-1/2 -translate-y-1/2 z-20
          w-full px-6
          lg:px-16
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            grid lg:grid-cols-2
            gap-10 lg:gap-16
            items-center
          "
        >
          <h2
            className="
              text-white font-bold leading-tight drop-shadow-xl
              text-3xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            CHALLENGING TODAY. REINVENTING TOMORROW
          </h2>

          <p
            className="
              text-gray-200 leading-relaxed
              text-sm
              lg:text-lg
              xl:text-xl
            "
          >
            From optimizing risk to full-scale end-to-end transformation, WILHAM
            & CO. firms’ suite of consulting services can help organizations
            engineer a different future - of new opportunities that are designed
            to help create and protect value.
          </p>
        </div>
      </motion.div>

      {/* CURVED BOTTOM SHADOW FOR PREMIUM LOOK */}
      <div className="absolute bottom-0 w-full h-28 bg-customBlue/10 blur-2xl" />
    </section>
  );
};

export default Herosection;
