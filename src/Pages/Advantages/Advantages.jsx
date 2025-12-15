import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const WhyChooseUs = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      title: "Our Mission",
      text: "We develop capabilities and design great systems. ",
      Icon: Target,
      video: "/videos/mission.mp4",
    },
    {
      title: "Our Vision",
      text: "To be the leading for transformation, Technology and Outsourcing in Africa. ",
      Icon: Eye,
      video: "/videos/vision.mp4",
    },
  ];

  return (
    <section className="py-16 mt-24 px-6 lg:px-20 bg-black">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Column */}
        <motion.div className="lg:w-1/2" variants={item}>
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Our integrity and proficiency in designing systems to manage people
            has earned us an unparalleled reputation for quality in the services
            we offer. We specialise in key areas including business advisory,
            people transformation, technology services, training, and learning
            programme management.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div className="lg:w-1/2 flex flex-col gap-12" variants={item}>
          {/* Mission & Vision Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {cards.map(({ title, text, Icon, video }, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
                whileHover={{ scale: 1.02 }}
              >
                <video
                  src={video}
                  className="w-full h-72 object-cover grayscale"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-customOrange" />
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Culture & Values */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-inner">
            <h3 className="text-xl font-semibold text-white mb-4">
              Culture & Values
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Integrity</li>
              <li>Respect</li>
              <li>Communication</li>
              <li>Excellence</li>
              <li>Globally Focused</li>
              <li>People Oriented</li>
              <li>Result Oriented</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
