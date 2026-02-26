import deliveryImg from "../assets/aadmi.png";

function Hero() {
  return (
<section className="relative w-full min-h-screen flex flex-col items-center pt-44 pb-20">

  {/* Content Wrapper */}
  <div className="relative z-10 text-center max-w-4xl px-6">

    {/* Heading */}
    <h1 className="text-3xl md:text-7xl font-semibold leading-tight text-gray-900">
      India's Largest{" "}
      <span className="text-[#085390] font-semibold">Gig & BC Services</span>{" "}
      Network
    </h1>

    {/* Paragraph */}
    <p className="mt-6 text-[#085390] text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
      We provide innovative and scalable web and mobile application
      solutions, developed with latest technologies and framework to improve
      performance, guarantee system reliability, and business efficiency
      across various digital platforms.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex justify-center gap-5 flex-wrap">
      <button className="bg-[#085390] hover:bg-[#063b6d] text-white px-14 py-3 rounded-md font-medium transition">
        Find Job →
      </button>

      <button className="border border-[#085390] text-[#085390] hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition">
        Become BC Agent ⊕
      </button>
    </div>

  </div>

  {/* Bottom Left Image */}
 <div className="absolute bottom-6 left-20 w-[280px] md:w-[359px]">
  <img
    src={deliveryImg}
    alt="Delivery Person"
    className="w-full h-auto -scale-x-100"
  />
</div>

</section>
  );
}

export default Hero;