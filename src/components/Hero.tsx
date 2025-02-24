const Hero = () => {
  return (
    <section
      id="home"
      className="hero-background py-32 px-6 relative text-white"
      style={{
        backgroundImage: 'url("/hero.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto text-center relative z-10">
        {/* Glass Effect Container */}
        <div className="glass-container border border-gray-400 p-8 rounded-xl backdrop-blur-sm bg-[#222b3a]">
          {/* Main Heading */}
          <h1 className="maintitle text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            CRICOS Marketing: Transforming Business Potential
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-8">
            Unlock New Opportunities and Achieve Growth with Tailored Marketing Strategies
          </h2>
          
          {/* Main Description */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-[#e1e1e1] max-w-3xl mx-auto">
            At CRICOS Marketing, we specialize in delivering innovative marketing solutions and business development strategies that empower businesses to grow, increase their market share, and elevate their brand. Whether you're looking to drive sales, enhance your digital presence, or scale your operations, our expert team is here to help you succeed.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-[#e1e1e1] max-w-3xl mx-auto">
            Our mission is simple: To drive meaningful and sustainable business growth for our clients by implementing the right marketing tactics, backed by data-driven insights and a deep understanding of industry trends.
          </p>
          
          {/* Button */}
          <button className="bg-[#1f2a34] hover:bg-[#293c4d] px-8 py-4 rounded-lg text-white font-semibold text-lg transition duration-300 ease-in-out">
            Start Your Journey with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
