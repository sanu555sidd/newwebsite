import tab from '../assets/tab.png'

function Services() {

  const services = [
    { bg: "bg-yellow-200" },
    { bg: "bg-red-200" },
    { bg: "bg-green-200" },
    { bg: "bg-blue-200" },
    { bg: "bg-purple-200" },
    { bg: "bg-indigo-200" },
  ];

  return (
    <section className="w-full bg-gray-50 py-24">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Providing <span className="text-blue-600">Best Services</span>
        </h2>

        <p className="text-gray-500 mt-6 text-lg leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem Ipsum
          is that it has a more-or-less normal distribution of letters.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon Box */}
            <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center ${service.bg}`}>
              <span className="text-red-600 font-bold border border-red-600 px-2 py-1 text-sm">
                4K
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Modern Design
            </h3>

            {/* Description */}
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>
          </div>
        ))}

      </div>
      <div className="mt-20 flex justify-center">
      <img src={tab} alt="Tab" className="w-[300px] md:w-[300px]" />
        </div>
    </section>
  );
}

export default Services;
