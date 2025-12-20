import React from 'react';
import { Mail, Globe, ThumbsUp, Zap, BarChart3, Users, Brain, PenTool, Target } from 'lucide-react';
import { hat, boy } from '../../imports';

const TravelAndDigitalMarketing = () => {
  const digitalMarketingServices = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email marketing",
      description: "Send personalized emails that convert"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Marketing automation",
      description: "Deliver the right message at the right time"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI marketing tools",
      description: "Say hello to your AI growth assistant"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Websites",
      description: "Create your branded web presence"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Reporting and analytics",
      description: "Track sales & campaign performance"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Content creation tools",
      description: "Build content that captivates and converts"
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Social media marketing",
      description: "Amplify the conversation across multiple channels"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience management",
      description: "Target and segment customers"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead generation platform",
      description: "Grow your audience with high-quality leads"
    }
  ];

  return (
    <section className="bg-black/95 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* International Education Section */}
        <div className=" rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold  mb-6">
                We're International Education and Study Abroad Consultants in Lagos Nigeria.
              </h1>
              
              <div className="space-y-4 leading-relaxed">
                <p>
                  Foreign admission process could be a long and complicated task for many. At <span className="font-semibold">WILHAM & CO.</span>, we make your travel and educational dreams as seamless and simple as possible for all our customers.
                </p>
                
                <p>
                  Our professionals will work closely with you to streamline your educational goals. Our aim is to ensure a smooth transition to your new life in the UK, US, CANADA and other international study locations.
                </p>
                
                <p>
                  Whether you want to study in Europe, United States of America, Italy, Spain, Australia, Japan, France, Dubai, India or China, we offer expert guideline throughout your overseas study application process; from selecting the best schools to submitting applications and other required documents; including student visa application and finding abroad internships or study-and-work jobs opportunities as well as full and partial scholarships.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4 underline">
                  Our scope of cover
                </h2>
                <ol className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span>Admission Processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span>Visa Counselling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span>Full scholarship in USA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span>Partial Scholarship in USA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span>Travel Loans (Proof of Funds)</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <img 
                  src={hat} 
                  alt="Graduation cap" 
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Digital Marketing Section */}
        <div className="rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/4 flex justify-center lg:justify-start">
              <img 
                src={boy} 
                alt="Digital marketing illustration" 
                className="w-48 h-48 object-contain"
              />
            </div>

            <div className="lg:w-3/4">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 underline">
                Section 1: Digital Marketing
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalMarketingServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelAndDigitalMarketing;