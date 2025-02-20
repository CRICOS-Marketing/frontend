// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-[#222b3a] to-[#1f2a34] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Contact Us</h2>
        <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
          Ready to take your business to the next level? Get in touch with our team at CRICOS Marketing and discover how we can help your business grow and succeed.
        </p>
        <button className="bg-slate-900 hover:bg-[#293c4d] px-6 py-3 rounded-lg text-white font-semibold text-lg transition duration-300 ease-in-out">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Contact;
