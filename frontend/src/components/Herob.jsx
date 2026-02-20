import mobile from "../assets/mobile.png";
import appStore from "../assets/appstore.png";
import playStore from "../assets/playstore.png";

function Herob() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden flex items-center">

      <div className="w-full max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            India's Largest{" "}
            <span className="text-red-500">Job Portal</span>{" "}
            Network
          </h1>

          <div className="flex gap-6 flex-wrap">
            <img src={appStore} alt="App Store" className="h-14 cursor-pointer" />
            <img src={playStore} alt="Play Store" className="h-14 cursor-pointer" />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center">

          {/* Phone */}
          <img
            src={mobile}
            alt="Phone"
            className="w-72 md:w-96 relative z-10"
          />

          {/* Floating Card Top */}
          

          {/* Floating Card Middle */}
          

        </div>

      </div>

    </section>
  );
}

export default Herob;
