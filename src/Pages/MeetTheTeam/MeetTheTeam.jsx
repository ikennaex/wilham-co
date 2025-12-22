import React, { useState } from "react";

const teamMembers = [
  {
    role: "Founder / CEO",
    img: "/images/founder.png",
    name: "Anyanwu Chukwuemeka W.",
    bio: `
Chukwuemeka is a distinguished finance executive, business strategist, and transformation leader with over a decade of professional experience and excellence across various industries with expertise in financial management, investment consulting, business 
advisory, and corporate restructuring. As the Founder and Chief Promoter of WILHAM & CO., he drives the firm’s mission of bridging investor trust gaps, restoring financial 
transparency, and fostering sustainable business growth through expert consulting and strategic partnerships.  

Chukwuemeka holds a Bachelor’s degree in Actuarial Science from Imo State University, an MSC Statistics from University of Lagos. His academic depth complements his practical expertise in corporate finance business process formulation, performance optimization, and strategic investment management. 

At WILHAM & Co., he leads a team of professionals dedicated to investment consulting, technology integration, accounting excellence, business structuring, and process formulation — helping organizations scale with integrity, clarity, and measurable impact. His leadership philosophy centers on integrity, innovation, and insight, ensuring every client engagement fosters trust, drives growth, and delivers enduring value. Beyond his technical expertise, Chukwuemeka is also a transformational leader, mentor, and critical thinking facilitator, empowering individuals and organizations to think strategically, act ethically, and grow sustainably. Under his stewardship, Taniquest continues to redefine professional consulting through transparency-driven advisory, strategic financial management, and technology-enabled business transformation. 

    `,
  },
  {
    role: "Co-Founder / Managing Director",
    img: "/images/partner.jpg",
    name: "Tyopev Hemen",
    bio: `
Tyopev Hemen is the Managing Director and a Co-Founder Consultant in charge of the Business Development department of WILHAM & Co. His passion is to always cause disruption for major competitors, thereby gaining full entry, and maintaining market lead and dominance for the company. He engages in corporate research and findings through data mining and analysis into the business world thereby ensuring the speedy but accurate attainment of corporate goals and meeting major stakeholders’ short and long-term interests. 

He has to his credit the corporate experience of developing new brands and promotion of products that have driven the sales volumes of the former employers that have sought and enjoyed his professional service and business development expertise which cut across various sectors including Oil & Gas, Finance, Public & Private Sector.

He is a graduate of the University of Mkar, Benue State where he obtained an BSC. in Economics. He is also a chartered Associate Member of the Institute of Marketing of Nigeria. He also holds a Chartered Post-Graduate Diploma in Marketing from the International Institute of Marketing. 

    `,
  },
];

const MeetTheTeam = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

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
          {teamMembers.map((member, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div
                key={index}
                className="relative h-[500px]"
                style={{ perspective: "1000px" }}
              >
                <div
                  onClick={() => handleCardClick(index)}
                  onMouseEnter={() => window.innerWidth >= 768 && setFlippedIndex(index)}
                  onMouseLeave={() => window.innerWidth >= 768 && setFlippedIndex(null)}
                  className="relative w-full h-full cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute w-full h-full bg-gray-50 rounded-2xl border border-gray-100 p-8 shadow-sm"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-40 h-40 rounded-full object-cover mb-6 shadow-md"
                      />
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-orange-500 text-base mt-3 font-medium">
                        {member.role}
                      </p>
                      <p className="mt-8 text-sm text-gray-400">
                        <span className="hidden md:inline">Hover</span>
                        <span className="md:hidden">Tap</span>
                        {" "}to read bio
                      </p>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 shadow-md overflow-y-auto"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-gray-900">
                          Biography
                        </h4>
                        <span className="text-orange-500 text-sm">
                          {member.name.split(" ")[0]}
                        </span>
                      </div>
                      <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {member.bio}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <p className="text-center text-sm text-gray-500 mt-8">
          <span className="hidden md:inline">Hover over cards to flip and read full biographies</span>
          <span className="md:hidden">Tap cards to flip and read full biographies</span>
        </p>
      </div>
    </section>
  );
};

export default MeetTheTeam;