import tab from '../assets/tab.png'

function Services() {

  const services = [
    { bg: "#FAF5CD" },
    { bg: "#FFE3DE" },
    { bg: "#DAEFE0" },
    { bg: "#FAF5CD" },
    { bg: "#F0DDFE" },
    { bg: "#DBE1FB" },
  ];

  return (
    <section className="w-full py-24">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-4xl font-semibold">
          Providing <span className="text-[#085390]">Best Services</span>
        </h2>

        <p className="text-[#000000] mt-7 text-lg leading-relaxed">
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
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon Box */}
<div 
  className="w-[90px] h-[93px] rounded-xl flex flex-col mx-auto items-center justify-center"
  style={{ backgroundColor: service.bg }}
>

  {/* Red bordered 4K */}
  <span
  className="w-[30px] h-[22px] 
             border-[3px] border-red-600 
             text-red-600 font-bold 
             text-[14px] 
             flex items-center justify-center 
             rounded-[4px]"
>
  4K
</span>

  {/* Small red line below */}
  <div className="w-[18px] h-[3px] bg-red-600 rounded-full mt-[4px]"></div>
</div>

            {/* Title */}
            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Modern Design
            </h3>

            {/* Description */}
            <p className="mt-4 text-[#000000] text-sm leading-relaxed">
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
