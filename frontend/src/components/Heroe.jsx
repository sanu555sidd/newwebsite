import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";

// Animated Drawing Arrow Component
const AnimatedArrow = () => (
  <svg
    className="hidden md:block absolute top-10 -right-10 w-20 h-8 z-10"
    viewBox="0 0 80 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
    </defs>

    {/* Glow/shadow line behind */}
    <line
      x1="4" y1="10" x2="68" y2="10"
      stroke="#bfdbfe"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.4"
    />

    {/* Main animated line — draws itself */}
    <line
      x1="4" y1="10" x2="68" y2="10"
      stroke="url(#lineGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="70"
      strokeDashoffset="70"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="70"
        to="0"
        dur="1.2s"
        repeatCount="indefinite"
        calcMode="spline"
        keyTimes="0;1"
        keySplines="0.4 0 0.2 1"
      />
    </line>

    {/* Arrowhead — fades in after line reaches end */}
    <path
      d="M63 5 L73 10 L63 15"
      stroke="#2563eb"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0"
    >
      <animate
        attributeName="opacity"
        values="0;0;0;1;0"
        keyTimes="0;0.6;0.75;0.88;1"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </path>

    {/* Glowing dot at the tip of the growing line */}
    <circle cx="4" cy="10" r="3" fill="#3b82f6" opacity="0">
      <animate
        attributeName="cx"
        from="4"
        to="68"
        dur="1.2s"
        repeatCount="indefinite"
        calcMode="spline"
        keyTimes="0;1"
        keySplines="0.4 0 0.2 1"
      />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.05;0.85;1"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

function WhyChooseUs() {
  return (
    <section className="w-full pt-4 pb-20 relative">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-4xl font-semibold text-[#333846]">
          Why Choose Us ?
        </h2>
      </div>

      {/* Steps Container */}
      <div className="max-w-6xl mx-auto px-6 relative">

        <div className="grid md:grid-cols-3 gap-12 text-center relative">

          {/* Step 1 */}
          <div className="space-y-6 relative">
            <div className="w-24 h-24 mx-auto flex items-center justify-center relative z-10">
              <img src={step1} alt="Step 1" className="w-[98px] h-[88px] object-contain" />
            </div>
            <AnimatedArrow />
            <h3 className="text-[20px] font-semibold text-[#2C2E30]">
              Fill in Your Details
            </h3>
            <p className="text-[#333846] text-base leading-relaxed">
              Fill in your details and get insurance policy premium quotes
              from top-rated insurers instantly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-6 relative">
            <div className="w-24 h-24 mx-auto flex items-center justify-center relative z-10">
              <img src={step2} alt="Step 2" className="w-[98px] h-[88px] object-contain" />
            </div>
            <AnimatedArrow />
            <h3 className="text-[20px] font-semibold text-[#2C2E30]">
              Select a Plan
            </h3>
            <p className="text-[#333846] text-base leading-relaxed">
              From numerous available quotes, choose the one that best suits
              your requirements and budget.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-6 relative">
            <div className="w-24 h-24 mx-auto flex items-center justify-center relative z-10">
              <img src={step3} alt="Step 3" className="w-[98px] h-[88px] object-contain" />
            </div>
            <h3 className="text-[20px] font-semibold text-[#2C2E30]">
              Make Payment and Sit Back
            </h3>
            <p className=" text-[#333846] text-base leading-relaxed">
              Pay online and get your policy right away in your inbox.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default WhyChooseUs;