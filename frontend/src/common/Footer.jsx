import logo from "../assets/logo.png";
import appStore from "../assets/appstore.png";
import playStore from "../assets/playstore.png";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-16">

      {/* Top Section */}
<div className="w-full pl-16 pr-8 grid md:grid-cols-3 gap-12">
     <div>
          <img src={logo} alt="Sroy Group" className="w-40 mb-6 " />

          <p className="text-gray-600 text-sm leading-relaxed text-left w-[320px]" >
            Sroy Group stands for quality education & learning.
            We achieve this with assistance from our valued partners.
          </p>

          <p className="text-[#E6282F] mt-4 cursor-pointer hover:underline text-left">
            Know more about us
          </p>

          <p className="text-gray-600 text-sm mt-6 text-left">
            Sroy Group student app is available on
          </p>

          <div className="flex gap-4 mt-4">
            <img src={appStore} alt="App Store" className="h-10 cursor-pointer h-[50px] w-[192px]" />
            <img src={playStore} alt="Play Store" className="h-10 cursor-pointer h-[50px] w-[192px]" />
          </div>
        </div>

        {/* Middle Column */}
<div className="flex flex-col">

  <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr" }}>
        <h3 className="text-lg font-semibold mb-6 ml-20 text-left">
  <span className="border-b-2 border-[#E6282F] pb-2">
    Resou
  </span>
  rces
</h3>
    <div />
    <div />
  </div>

  <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr" }} className="text-sm text-gray-700">

    {/* Left Column */}
    <ul className="space-y-4 pr-8">
      <li className="hover:text-[#393737] text-left ml-20 cursor-pointer">About Us</li>
      <li className="hover:text-[#393737]  text-left ml-20 cursor-pointer">Blog</li>
      <li className="hover:text-[#393737] text-left ml-20 cursor-pointer">News</li>
      <li className="hover:text-[#393737] text-left ml-20 cursor-pointer">Newspaper</li>
      <li className="hover:text-[#393737] text-left ml-20 cursor-pointer">Career</li>
      <li className="hover:text-[#393737]  text-left ml-20 cursor-pointer">Partners</li>
      <li className="hover:text-[#393737] text-left ml-20 cursor-pointer">Awards</li>
      <li className="hover:text-[#393737] text-left ml-20 cursor-pointer">Our Team</li>
    </ul>

    {/* Dotted Vertical Divider
    <div
      style={{
        borderLeft: "2px dashed #5bb8c4",
        height: "100%",
        width: "1px",
      }}
    /> */}

    {/* Right Column */}
    <ul className="space-y-4 pl-8">
      <li className="hover:text-[#393737] text-left whitespace-nowrap cursor-pointer">Activities</li>
      <li className="hover:text-[#393737] text-left whitespace-nowrap cursor-pointer">Our Story</li>
      <li className="hover:text-[#393737] text-left whitespace-nowrap cursor-pointer">Young Xperts</li>
      <li className="hover:text-[#393737] text-left whitespace-nowrap cursor-pointer">Partner Register</li>
      <li className="hover:text-[#393737] text-left whitespace-nowrap cursor-pointer">Contact Us</li>
      <li className="hover:text-[#393737] text-left whitespace-nowrap cursor-pointer">Panellist</li>
      <li className="hover:text-[#393737] text-left whitespace-nowrap cursor-pointer">Refer a Partner</li>
    </ul>

  </div>
</div>
        {/* Right Column */}
        <div>
          <h3 className="text-lg font-semibold mb-6 ml-20 text-left">
  <span className="border-b-2 border-[#E6282F] pb-2">
    Subsc
  </span>
  ribe to our newsletter
</h3>

          <p className="text-gray-600 text-sm mt-6 ml-20 text-left">
            Get daily updates and stay up to date
          </p>

          <div className="flex mt-6 w-[376px] h-[44px] ml-20">

  <input
    type="email"
    placeholder="Input your email"
    className="w-[263px] h-[44px] px-4 rounded-l-md border border-[#E6282F] focus:outline-none"
  />

  <button className="bg-[#E6282F] text-white w-[113px] h-[44px] rounded-r-md hover:bg-[#d61f26] transition">
    Subscribe
  </button>

</div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className=" mt-12 py-6 bg-[#0853900A]">
        <div className="w-full pl-10 pr-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#393737]  gap-4">

          <p>© Copyright 2025 SROY GROUP. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-black cursor-pointer text-left  ">Terms of Services</span>
            <span className="text-[#E6282F] cursor-pointer text-left">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer ">Copyright</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600">
            <Facebook className="cursor-pointer  hover:text-blue-600" size={18} />
            <Twitter className="cursor-pointer hover:text-sky-500" size={18} />
            <Instagram className="cursor-pointer hover:text-pink-500" size={18} />
            <Linkedin className="cursor-pointer hover:text-blue-700" size={18} />
            <Youtube className="cursor-pointer hover:text-[#E6282F]" size={18} />
          </div>

        </div>
      </div>

    </footer>
  );
}