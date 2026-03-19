import { motion } from "framer-motion";
import mobile from "../assets/mobile.png";
import appStore from "../assets/appstore.png";
import playStore from "../assets/playstore.png";
import newbanner from "../assets/newbanner.png";
import ban1 from "../assets/ban1.png";
import ban2 from "../assets/ban2.png";
import ban3 from "../assets/ban3.png";

function Herob() {
  return (
<section className="relative w-full py-8 overflow-hidden">
  
  {/* Soft Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50 -z-20"></div>

  {/* Dots */}
  <div
    className="
      absolute inset-0
      bg-[radial-gradient(circle,#1e3a8a20_3px,transparent_2px)]
      bg-[size:80px_80px]
      -z-12
    "
  ></div>

  {/* MAIN CONTENT */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-start">

    {/* LEFT CONTENT */}
    <div className="space-y-6 pt-40">

      <h1 className="text-[40px] md:text-[70px] font-semibold leading-tight text-gray-900">
        India's Largest{" "}
        <span className="text-[#E6282F]">Job</span><br />
        <span className="text-[#E6282F] left-aligned">Portal</span>{" "}
        Network
      </h1>

      <div className="flex gap-6 pt-4">
        <img
          src={appStore}
          alt="App Store"
          className="h-14 hover:scale-105 transition"
        />
        <img
          src={playStore}
          alt="Play Store"
          className="h-14 hover:scale-105 transition"
        />
      </div>

    </div>

  {/* RIGHT CONTENT */}
<div className="relative flex justify-end">

  {/* PHONE */}
  <img
    src={newbanner}
    alt="Phone"
    className="w-72 md:w-[420px] drop-shadow-2xl relative z-10"
  />

  {/* Banner 1 - below Mr Aditya */}
  <motion.img
    src={ban1}
    className="absolute top-[125px] left-[280px] w-[250px] z-20"
    initial={{ x: 0 }}
    animate={{ x: -150 }}
    transition={{
      delay: 1,
      duration: 2,
      ease: "easeInOut"
    }}
  />

  {/* Banner 2 - below Companies To Follow */}
  <motion.img
    src={ban2}
    className="absolute top-[260px] left-[280px] w-[250px] z-20"
    initial={{ x: 0 }}
    animate={{ x: -150 }}
    transition={{
      delay: 3,
      duration: 2,
      ease: "easeInOut"
    }}
  />

  {/* Banner 3 - below Jobs */}
  <motion.img
    src={ban3}
    className="absolute top-[430px] left-[280px] w-[250px] z-20"
    initial={{ x: 0 }}
    animate={{ x: 150 }}
    transition={{
      delay: 5,
      duration: 2,
      ease: "easeInOut"
    }}
  />

</div>

  </div>
</section>
  );
}

export default Herob;