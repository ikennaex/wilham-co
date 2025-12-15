import React from "react";

const teamMembers = [
  {
    role: "Founder/CEO",
    img: "/images/founder.png",
    name: "Name",
  },
  {
    role: "Co-Founder/MD",
    img: "/images/partner.jpg",
    name: "Name",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="min-h-screen py-16 mt-24 px-6 lg:px-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">
          Our Team
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Meet the professionals driving innovation and excellence in our organization.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-customOrange text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
