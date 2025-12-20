import React from "react";

const teamMembers = [
  {
    role: "Founder / CEO",
    img: "/images/founder.png",
    name: "Anyanwu Chukwuemeka W.",
    bio: `
Chukwuemeka is a distinguished finance executive, business strategist, and
transformation leader with over a decade of professional experience across
multiple industries. His expertise spans financial management, investment
consulting, business advisory, and corporate restructuring.

As the Founder and Chief Promoter of WILHAM & Co., he drives the firm’s mission
of bridging investor trust gaps, restoring financial transparency, and fostering
sustainable business growth through expert consulting and strategic
partnerships.

He holds a Bachelor’s degree in Actuarial Science from Imo State University and
an MSc in Statistics from the University of Lagos. His academic depth
complements his practical expertise in corporate finance, business process
formulation, performance optimization, and strategic investment management.

At WILHAM & Co., he leads a multidisciplinary team dedicated to investment
consulting, technology integration, accounting excellence, and business
structuring. His leadership philosophy is rooted in integrity, innovation, and
insight, ensuring measurable impact and long-term value for clients.

Beyond his technical expertise, Chukwuemeka is a transformational leader,
mentor, and critical-thinking facilitator, empowering organizations to grow
ethically and sustainably.
    `,
  },
  {
    role: "Co-Founder / Managing Director",
    img: "/images/partner.jpg",
    name: "Tyopev Hemen",
    bio: `
Tyopev Hemen is the Managing Director and Co-Founder of WILHAM & Co.,
overseeing the Business Development function. His passion lies in driving
market disruption, enabling competitive dominance, and securing sustainable
market leadership for the organization.

He specializes in corporate research, data mining, and market analysis,
ensuring accurate and timely execution of strategic objectives while meeting
both short- and long-term stakeholder interests.

Tyopev has successfully developed new brands and led product promotions that
significantly increased sales volumes for previous employers. His professional
experience spans Oil & Gas, Finance, and both Public and Private sectors.

He is a graduate of the University of Mkar, Benue State, where he earned a BSc
in Economics. He is also a Chartered Associate Member of the Institute of
Marketing of Nigeria and holds a Chartered Postgraduate Diploma in Marketing
from the International Institute of Marketing.
    `,
  },
];

const MeetTheTeam = () => {
  return (
    <section className="min-h-screen py-20 mt-24 px-6 lg:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet the professionals driving strategic growth, innovation, and
            excellence across our organization.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
                bg-gray-50 
                rounded-2xl 
                border 
                border-gray-100 
                p-8 
                shadow-sm 
                hover:shadow-md 
                transition
              "
            >
              {/* Profile */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-customOrange text-sm mt-1">
                  {member.role}
                </p>
              </div>

              {/* Biography */}
              <div className="mt-6 text-sm text-gray-700 leading-relaxed space-y-4 whitespace-pre-line">
                {member.bio}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
