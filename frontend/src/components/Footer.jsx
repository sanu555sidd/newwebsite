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
    <footer className="bg-gray-100 pt-16">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Left Column */}
        <div>
          <img src={logo} alt="Sroy Group" className="w-40 mb-6 ml-12" />

          <p className="text-gray-600 text-sm leading-relaxed">
            Sroy Group stands for quality education & learning.
            We achieve this with assistance from our valued partners.
          </p>

          <p className="text-red-500 mt-4 cursor-pointer hover:underline">
            Know more about us
          </p>

          <p className="text-gray-600 text-sm mt-6">
            Sroy Group student app is available on
          </p>

          <div className="flex gap-4 mt-4">
            <img src={appStore} alt="App Store" className="h-10 cursor-pointer" />
            <img src={playStore} alt="Play Store" className="h-10 cursor-pointer" />
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-b-2 border-red-500 inline-block pb-1">
            Resources
          </h3>

          <div className="grid grid-cols-2 gap-6 text-sm text-gray-600 mt-6">
            <ul className="space-y-3">
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Blog</li>
              <li className="hover:text-black cursor-pointer">News</li>
              <li className="hover:text-black cursor-pointer">Newspaper</li>
              <li className="hover:text-black cursor-pointer">Career</li>
              <li className="hover:text-black cursor-pointer">Partners</li>
              <li className="hover:text-black cursor-pointer">Awards</li>
              <li className="hover:text-black cursor-pointer">Our Team</li>
            </ul>

            <ul className="space-y-3">
              <li className="hover:text-black cursor-pointer">Activities</li>
              <li className="hover:text-black cursor-pointer">Our Story</li>
              <li className="hover:text-black cursor-pointer">Young Xperts</li>
              <li className="hover:text-black cursor-pointer">Partner Register</li>
              <li className="hover:text-black cursor-pointer">Contact Us</li>
              <li className="hover:text-black cursor-pointer">Panellist</li>
              <li className="hover:text-black cursor-pointer">Refer a Partner</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-b-2 border-red-500 inline-block pb-1">
            Subscribe to our newsletter
          </h3>

          <p className="text-gray-600 text-sm mt-6">
            Get daily updates and stay up to date
          </p>

          <div className="flex mt-6">
            <input
              type="email"
              placeholder="Input your email"
              className="w-full px-4 py-3 rounded-l-md border border-red-300 focus:outline-none"
            />
            <button className="bg-red-500 text-white px-6 rounded-r-md hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t mt-12 py-6 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600  gap-4">

          <p>© Copyright 2025 SROY GROUP. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-black cursor-pointer">Terms of Services</span>
            <span className="text-red-500 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer">Copyright</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600">
            <Facebook className="cursor-pointer hover:text-blue-600" size={18} />
            <Twitter className="cursor-pointer hover:text-sky-500" size={18} />
            <Instagram className="cursor-pointer hover:text-pink-500" size={18} />
            <Linkedin className="cursor-pointer hover:text-blue-700" size={18} />
            <Youtube className="cursor-pointer hover:text-red-600" size={18} />
          </div>

        </div>
      </div>

    </footer>
  );
}