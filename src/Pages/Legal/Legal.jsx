import React from "react";

const Legal = () => {
  return (
    <section className="py-16 mt-24 px-6 lg:px-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Legal Notice</h1>
        <p className="text-gray-600">Effective Date: December 15, 2025</p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. General Information</h2>
            <p>
              The information provided on this website is for general guidance and is not intended
              to substitute professional advice required to meet specific needs. It is not an exhaustive
              treatment of any subject(s) it touches upon, nor does it create a business or professional
              services relationship.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Professional Advice</h2>
            <p>
              We expect that before you take any decisions that may affect your personal business or
              finances, you consult a professional for appropriate advice. As such, we will not be held
              liable for any loss suffered or incurred in the course of use of the materials or content
              posted on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
            <p>
              The information and content provided on this website are the intellectual property of
              WILHAM & CO. LTD. and are protected accordingly. The logos and marks related to WILHAM &
              CO. LTD used on this website, whether registered or unregistered, are trademarks of
              WILHAM & CO. LTD. and are protected as such.
            </p>
            <p>
              WILHAM & CO. LTD. owns the copyright to all materials and content posted on this website
              except where stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Use and Reproduction</h2>
            <p>
              The copying, reproduction, publication, adaptation, or transmission of any of the materials
              on this website is the exclusive right of WILHAM & CO. LTD., except where such copying,
              reproduction, publication, adaptation, or transmission is done for purposes of research,
              private study, criticism or review, or for reporting current events in a newspaper, magazine,
              broadcast, etc.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Contact Information</h2>
            <p>If you have questions regarding this Legal Notice, contact us at:</p>
            <p>WILHAM & CO. LTD.</p>
            <p>Watch Tower Drive, Elemoro Estate, Ibeju-Lekki, Lagos State</p>
            <p>Phone: +234 816 668 7358, +234 810 620 7080</p>
            <p>Email: info@wilhamandco.com; wilham.co@gmail.com</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Legal;
