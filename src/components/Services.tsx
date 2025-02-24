const servicesData = [
  {
    title: 'Sales & Marketing',
    description:
      'We offer comprehensive sales and marketing strategies that effectively engage your audience and drive business growth, utilizing both traditional and digital marketing methods.',
  },
  {
    title: 'Business Development',
    description:
      'Our team provides strategic insights and innovative solutions that help expand your business, identify new opportunities, and build meaningful partnerships for long-term growth.',
  },
  {
    title: 'Product Marketing',
    description:
      'We specialize in crafting compelling product messaging and positioning that connects with your target market, driving product awareness and maximizing sales.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#d1d9e6] mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card p-6 bg-[#1f2a34] rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-[#d1d9e6] mb-4">{service.title}</h3>
              <p className="text-lg text-[#e1e1e1]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
