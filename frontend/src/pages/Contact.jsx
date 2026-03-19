import React from "react";

import curve from "../assets/curv.png"; // curved background for cards
import icon from "../assets/resi.png"; // icon for registered address
import map from "../assets/map.png"; // map image for the right side of the contact section

const ContactSection = () => {
  return (
    <section className="py-32 px-16 ">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Card 1 */}
          <div className="relative bg-white p-8 rounded-lg shadow-sm overflow-hidden w-[411px] h-[246px]">

            {/* curved background */}
            <img
              src={curve}
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -right-1 w-[180px] h-[180px] object-cover opacity-85 z-0"
            />

            <div className="relative z-10">

              <img src={icon} alt="" className="mb-4 w-10 w-[82px] h-[72px]" />

              <h3 className="text-lg font-semibold mb-3">
                Registered Address
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Block A-1, Workhubz, Kamal Cinema Complex,
                Safdarjung Enclave, New Delhi - 110029
              </p>

            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-8 rounded-lg shadow-sm overflow-hidden w-[411px] h-[246px]">

            <img
              src={curve}
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -right-1 w-[180px] h-[180px] object-cover opacity-85 z-0"
            />

            <div className="relative z-10">

              <h3 className="text-lg font-semibold mb-2">
                Support Email Address
              </h3>

              <p className="text-gray-600 mb-6">
                supportHello@gmail.com
              </p>

              <h3 className="text-lg font-semibold mb-2">
                Sales Email Address
              </h3>

              <p className="text-gray-600">
                Sales@gmail.com
              </p>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:-ml-20">

          <h2 className="text-xl font-semibold mb-6 text-[#171A1F] font-weight-700px  w-[385px]">
            Leave a message here to give wings to
            your child’s dream
          </h2>

          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-lg mb-2 text-[#171A1F] text-extrabold ">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-md p-3 outline-none focus:ring-2 focus:ring-red-400 w-[825px] h-[51px]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg mb-2 text-[#171A1F] text-extrabold ">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border rounded-md p-3 outline-none focus:ring-2 focus:ring-red-400 w-[825px] h-[51px]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg mb-2 text-[#171A1F] text-extrabold ">Phone Number</label>

              <div className="flex w-[825px] h-[51px]">

                <div className="bg-red-500 text-white px-4 flex items-center rounded-l-md">
                  +91
                </div>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="flex-1 border border-l-0 rounded-r-md p-3 outline-none h-full"
                />

              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-lg mb-2 text-[#171A1F] text-extrabold  ">Services</label>

              <select className="border rounded-md p-3 outline-none w-[825px] h-[51px]">
                <option>Select Subject</option>
                <option>Admission</option>
                <option>Support</option>
                <option>General Inquiry</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg mb-2 text-[#171A1F] text-extrabold ">Message</label>

              <textarea
                rows="4"
                className="w-full border rounded-md p-3 outline-none w-[825px] h-[75px]"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
            >
              Submit
            </button>

          </form>

          
        </div>

      </div>
      <img src={map} alt="Map" className="mt-10 ml-32 w-[1280px] h-[300px] rounded-md" />


    </section>
  );
};

export default ContactSection;