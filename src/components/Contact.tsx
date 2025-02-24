const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-[#222b3a] to-[#1f2a34] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Contact Us</h2>

        {/* Contact Info */}
        <div className="contact-info border border-gray-400 bg-[#1f2a34] p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#d1d9e6] mb-4">CRICOS Marketing Pty LTD</h3>
          
          <p className="text-lg sm:text-xl mb-4 text-[#e1e1e1]">
            Suite 2, 38 Railway Pde, Lakemba, NSW 2195
          </p>
          
          <p className="text-lg sm:text-xl mb-4 text-[#e1e1e1]">
            <span className="font-semibold">Email: </span> 
            <a href="mailto:cricosmarketing.sydney@gmail.com" className="text-[#58a6f8] hover:underline">
              cricosmarketing.sydney@gmail.com
            </a>
          </p>
          
          <p className="text-lg sm:text-xl mb-4 text-[#e1e1e1]">
            <span className="font-semibold">ABN:</span> 93 615 746 426
          </p>
        </div>

        {/* Contact Button */}
        <button className="bg-slate-900 hover:bg-[#293c4d] px-6 py-3 rounded-lg text-white font-semibold text-lg transition duration-300 ease-in-out mt-8">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
