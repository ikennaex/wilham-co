import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    enquiry: "",
    message: "",
    policyChecked: false,
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kf80s0g",
        "template_waassmf",
        formRef.current,
        "nK6b5sNutEBmb4Jfn"
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message.")
      );
  };

  return (
    <section className="py-20 mt-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Contact WILHAM & CO.
            </h2>
            <p className="text-gray-700">
              Please feel free to contact us with any enquiries you may have.
            </p>

            {/* Email */}
            <div className="flex items-center gap-3 text-gray-900">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:info@wilhamco.ng"
                className="font-medium hover:underline"
              >
                info@wilhamco.ng
              </a>
            </div>

            {/* Addresses */}
            <div className="space-y-1 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <p>
                  WATCH TOWER DRIVE, ELEMORO ESTATE, IBEJU- LEKKI, LAGOS STATE
                </p>
              </div>
              <div className="flex items-start gap-3"></div>
            </div>

            {/* Phones */}
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+2349060000804" className="hover:underline">
                  234 (0) 816 668 7358
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+234092904738" className="hover:underline">
                  +234 (0) 810 620 7080
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid lg:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="border-b border-gray-400 p-2 focus:outline-none focus:border-black"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="border-b border-gray-400 p-2 focus:outline-none focus:border-black"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-b border-gray-400 p-2 focus:outline-none focus:border-black"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="border-b border-gray-400 p-2 focus:outline-none focus:border-black"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={formData.company}
                onChange={handleChange}
                className="border-b border-gray-400 p-2 focus:outline-none focus:border-black"
              />
              <select
                name="enquiry"
                required
                value={formData.enquiry}
                onChange={handleChange}
                className="border-b border-gray-400 p-2 focus:outline-none focus:border-black"
              >
                <option value="">Select Enquiry*</option>
                <option value="general">General</option>
                <option value="project">Project</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Message*"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black resize-none"
            />

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="policyChecked"
                required
                checked={formData.policyChecked}
                onChange={handleChange}
              />
              <span>
                Acknowledgement for the online privacy policy{" "}

                <Link className="text-customOrange font-bold" to={"/privacypolicy"}>
                  Read the WILHAM & CO. Privacy Policy here*
                </Link>
                
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
