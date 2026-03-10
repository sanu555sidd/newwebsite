import React from "react";

import curve from "../assets/curv.png"; // curved background for cards
import icon from "../assets/resi.png"; // icon for registered address

const ContactSection = () => {
  return (
    <section className="py-32 px-16 bg-[#f7f7f7]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Card 1 */}
          <div className="relative bg-white p-8 rounded-lg shadow-sm overflow-hidden">

            {/* curved background */}
            <img
              src={curve}
              alt=""
              className="absolute top-0 right-0 opacity-30"
            />

            <div className="relative">

              <img src={icon} alt="" className="mb-4 w-10" />

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
          <div className="relative bg-white p-8 rounded-lg shadow-sm overflow-hidden">

            <img
              src={curve}
              alt=""
              className="absolute top-0 right-0 opacity-30"
            />

            <div className="relative">

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
        <div>

          <h2 className="text-xl font-2-bold mb-6 text-[#171A1F]">
            Leave a message here to give wings to
            your child’s dream
          </h2>

          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-lg mb-2 text-[#424856] text-extrabold">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg mb-2 text-[#424856] text-extrabold">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg mb-2 text-[#424856] text-extrabold">Phone Number</label>

              <div className="flex">

                <div className="bg-red-500 text-white px-4 flex items-center rounded-l-md">
                  +91
                </div>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-l-0 rounded-r-md p-3 outline-none"
                />

              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-lg mb-2 text-[#424856] text-extrabold ">Services</label>

              <select className="w-full border rounded-md p-3 outline-none">
                <option>Select Subject</option>
                <option>Admission</option>
                <option>Support</option>
                <option>General Inquiry</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg mb-2 text-[#424856] text-extrabold">Message</label>

              <textarea
                rows="4"
                className="w-full border rounded-md p-3 outline-none"
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

    </section>
  );
};

export default ContactSection;