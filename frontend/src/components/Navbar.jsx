import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="w-full px-4 pt-4">
      <nav className="w-full bg-white shadow-md rounded-full px-8 py-3 flex items-center justify-between border border-gray-100">

        {/* Left - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Middle - Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-sm">
          <li className=" hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About Us</li>
          <li className="hover:text-blue-600 cursor-pointer">Offering</li>
          <li className="hover:text-blue-600 cursor-pointer">Clients</li>
          <li className="hover:text-blue-600 cursor-pointer">Blog</li>
          <li className="hover:text-blue-600 cursor-pointer">Career</li>
        </ul>

        {/* Right - Contact Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-5 py-2 rounded-full flex items-center gap-2 transition-colors">
          <span>📞</span>
          Contact Us
        </button>

      </nav>
    </div>
  );
}

export default Navbar;