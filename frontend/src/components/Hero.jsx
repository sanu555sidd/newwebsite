import deliveryImg from "../assets/aadmi.png";

function Hero() {
  return (
<section className="w-full min-h-screen bg-white relative flex flex-col items-center justify-start pt-16 ">
      {/* Centered Text Content */}
      <div className="text-center px-6 md:px-20 max-w-5xl z-10 space-y-6 mb-0">

        <h1 className="text-4xl md:text-6xl  leading-tight text-gray-900">
          India's Largest {" "}<span className="text-blue-700 font-extrabold nowrap">Gig & BC </span>{" "}
      
      <span className="text-blue-700 font-extrabold">Services</span> Network
        </h1>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We provide innovative and scalable web and mobile application
          solutions, developed with latest technologies and framework to improve
          performance, guarantee system reliability, and business efficiency
          across various digital platforms.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            Find Job <span>➔</span>
          </button>
          <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-7 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            Become BC Agent <span>⊕</span>
          </button>
        </div>

      </div>

      {/* Bottom-Left Image — absolutely positioned */}
<div className="absolute bottom-0 left-0 w-56 md:w-72 lg:w-80 z-0 -translate-y-15">
            <img
          src={deliveryImg}
          alt="Delivery Person"
          className="w-full object-contain -scale-x-100"
        />
      </div>

    </section>
  );
}

export default Hero;