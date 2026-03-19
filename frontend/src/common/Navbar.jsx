import logo from "../assets/logo.png";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="fixed top-4 z-50 w-full px-4 flex justify-center">
  <nav className="
    w-full max-w-7xl
    bg-[#08539014]
    border border-[#08539099]
    rounded-full
    shadow-[0_4px_15px_rgba(8,83,144,0.15)]
    px-8 py-4
    flex items-center justify-between
  ">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-6 w-auto object-contain" />
        </div>

        {/* Middle - Nav Links */}
        <ul className="hidden md:flex gap-8 text-[#085390] font-medium text-lg">
  <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#085390] after:transition-all after:duration-300 hover:after:w-full">
   <Link to="/"> Home</Link>
  </li>
  <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#085390] after:transition-all after:duration-300 hover:after:w-full">
    <Link to="/contact">About Us</Link>
  </li>
  <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#085390] after:transition-all after:duration-300 hover:after:w-full">
    Offering
  </li>
   <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#085390] after:transition-all after:duration-300 hover:after:w-full">
    
      <Link to="/client">Clients</Link>

  </li>
   <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#085390] after:transition-all after:duration-300 hover:after:w-full">
    <Link to="/blog">Blog</Link>
  </li>
   <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#085390] after:transition-all after:duration-300 hover:after:w-full">
    <Link to="/career">Career</Link>
  </li>
</ul>
        {/* Right - Contact Button */}
        <button className="bg-[#E6282F] hover:bg-red-600 text-white text-sm px-6 py-2 rounded-full flex items-center gap-2 transition-colors">
          <FiPhone className="text-white" />
          Contact Us
        </button>

      </nav>
    </div>
  );
}

export default Navbar;