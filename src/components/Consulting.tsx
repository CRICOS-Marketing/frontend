// src/components/Consulting.js
import React from 'react';

const Consulting = () => {
  return (
    <section id="consulting" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12">Business Consulting</h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Our business consulting services provide expert guidance in developing strategies for operational efficiency, market analysis, and business scaling, ensuring long-term success and profitability.
        </p>
        <button className="bg-gray-900 hover:bg-[#593039] px-6 py-3 rounded-lg text-white font-semibold text-lg transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Consulting;
