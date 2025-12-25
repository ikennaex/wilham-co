import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const About = () => {
  return (
    <section className="relative bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-24 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* LEFT: IMAGE */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute -top-8 -left-8 w-full h-full border border-gray-700 hidden lg:block" />
            <img
              src="/images/about.jpg"
              alt="Thaifchi-Kiezman Operations"
              className="relative w-full h-[420px] lg:h-[520px] object-cover"
            />
          </motion.div>

          {/* RIGHT: TEXT */}
          <motion.div variants={fadeInUp} className="max-w-xl">
            <p className="inline-block mb-10 text-sm font-semibold tracking-wide text-customOrange">
              ABOUT US
            </p>

            <div className="space-y-6 text-gray-300 text-base lg:text-lg leading-relaxed">
              <p>
                <span className="text-customOrange font-bold">
                  WILHAM & CO. LIMITED
                </span>{" "}
                is a team of experienced strategic management consultants. We
                focus on maximizing people and corporate performance. Our
                practice areas include Human Resource Consulting, Business
                Consulting, Real Estate Marketing, Business Contractors,
                Financial Management, Travel Consulting, Digital Marketing.
              </p>

              <p>
                Today's competitive environment is driven by change at an
                accelerating rate and businesses face the challenge of managing
                change daily. People are the most valuable asset in an
                organization. The way people are led, managed, developed and
                motivated can make the winning difference.
              </p>

              <p>
                Our partnership with our clients enables them to maximize the
                competence and commitment of their people: their skills, their
                experience, their potential and their capacity. Our Corporate
                Governance practice enables our clients to achieve strategic,
                tactical, operational and financial efficiency.
              </p>

              <p>
                We provide specialized executive level advisory services to
                foster good decision making, organizational cohesion, adherence
                to regulatory requirements and best practices, risk mitigation
                and a positive corporate culture.
              </p>

              <p>
                We have a unique approach to search and selection. We develop
                long term relationships with our clients, candidates and
                services are of the highest quality.
              </p>

              <p>
                At{" "}
                <span className="text-customOrange font-bold">
                  WILHAM & CO. LIMITED
                </span>
                , we transform possibilities by collaborating with our clients
                to innovate towards optimal performance. We understand that
                organizations have different needs, so we do not adopt a
                one-size-fits-all approach.
              </p>

              <p>
                In addition to resourcing, we provide a variety of consulting
                tools, products and services to enhance the effectiveness of
                organizations and their senior management teams.
              </p>

              <p>
                Over the years, our integrity and proficiency in designing
                systems to manage people have enabled us to gain a reputation
                for quality in the services we provide.
              </p>
            </div>
          </motion.div>
          <div className="mt-12">
            <Link to="/theteam">
              <button className="inline-flex items-center gap-3 bg-customOrange px-9 py-4 text-black font-semibold hover:opacity-90 transition">
                View Our Team Members
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
