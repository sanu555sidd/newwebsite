import laptop from "../assets/laptop.jpg";
import React from "react";

export const DreamJob = () => {
  return (
    <section className="bg-[#FFFFFF] py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Find your dream job in{" "}
            <span className="text-[#085390]">SROY GROUP</span>
          </h2>

          <p className="text-[#000000] mt-4 max-w-4xl mx-auto text-[20px]">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </div>

        {/* Job Card */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-8">

          <div className="flex-1">
            <p className="text-gray-500 text-sm mb-3">14 November 2025</p>

            <div className="flex gap-3 mb-4">
              <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full">
                UIUX Design
              </span>
              <span className="bg-[#085390] text-white text-sm px-4 py-1 rounded-full">
                0 - 2 Years
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-3">
              Visual Designing | UIUX Designing | Graphic Designing
            </h3>

            <p className="text-gray-500 mb-4">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>

            <ul className="text-gray-500 text-sm list-disc pl-5 space-y-1 mb-4">
              <li>Lorem Ipsum is simply dummy text.</li>
              <li>Lorem Ipsum is simply dummy text.</li>
            </ul>

            <button className="text-[#085390] font-medium flex items-center gap-2">
              Apply Now
              <span className="text-lg">›</span>
            </button>
          </div>

          <div className="w-full md:w-64">
            <img src={laptop} alt="Job" className="rounded-lg shadow-md" />
          </div>
        </div>

      </div>
    </section>
  );
};


const JobFilters = () => {
  return (
    <div className="bg-white py-2 px-6">
      <div className="max-w-6xl mx-auto flex gap-4 justify-end">

        {/* Location */}
        <div className="w-64 px-4 py-2 rounded-md shadow-md outline-none focus:ring-2 focus:ring-[#999999]">
          <input
            type="text"
            placeholder="Location"
            className="outline-none w-full text-sm"
          />
        </div>

        {/* Designation */}
        <select className="w-64 px-4 py-2 rounded-md shadow-md outline-none focus:ring-2 focus:ring-[#999999] ">
          
          
          <option>UI/UX Designer</option>
          <option>Graphic Designer</option>
          <option>Developer</option>
        </select>

      </div>
    </div>
  );
};

const JobLocations = () => {
  const categories = [
    { name: "Automotive", openings: 3 },
    { name: "Design", openings: 3 },
    { name: "Delivery Work", openings: 3 },
    { name: "Sales", openings: 3 },
    { name: "Marketing", openings: 3 },
    { name: "HR & Finance", openings: 3 },
  ];

  const locations = Array(9).fill({
    city: "Noida, UP",
    address: "Sector 62, Gautam Nagar, Uttar Pardesh, India - 842001",
  });

  return (
    <section className="bg-[#FFFFFF] py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT SIDEBAR */}
        <div className="bg-white shadow-md rounded-xl p-6">

          <h3 className="text-xl font-semibold mb-2">
            Recommended Jobs
          </h3>

          <p className="text-[#333846] mb-6">
            Browse our latest job opportunities
          </p>

          <div className="space-y-3">

            <button className="w-full border rounded-md py-2 text-sm font-medium">
              Recommended Jobs
            </button>

            {categories.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border rounded-md px-3 py-2 text-sm"
              >
                <span>{item.name}</span>
                <span className="text-blue-600">
                  {item.openings} Openings
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 bg-white shadow-md rounded-xl p-6">

          <input
            type="text"
            placeholder="Search Location"
            className="w-full shadow-md rounded-md px-4 py-2 mb-4"
          />

          <p className="text-sm text-gray-600 mb-6">
            9 Places within the map area
          </p>

          <div className="grid md:grid-cols-3 gap-4">

            {locations.map((loc, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 ${
                  index === 2
                    ? "bg-[#085390] text-white"
                    : "bg-white"
                }`}
              >
                <h4 className="font-semibold">{loc.city}</h4>

                <span className="text-xs bg-gray-200 text-black px-2 py-1 rounded mt-2 inline-block">
                  COMING SOON
                </span>

                <p className="text-sm mt-3">
                  {loc.address}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

const Career = () => {
  return (
    <>
      <DreamJob />
      <JobFilters />
      <JobLocations />
    </>
  );
};

export default Career;