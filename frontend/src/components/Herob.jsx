import mobile from "../assets/mobile.png";
import appStore from "../assets/appstore.png";
import playStore from "../assets/playstore.png";

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
      <img
        src={mobile}
        alt="Phone"
        className="w-72 md:w-[420px] drop-shadow-2xl"
      />
    </div>

  </div>
</section>
  );
}

export default Herob;