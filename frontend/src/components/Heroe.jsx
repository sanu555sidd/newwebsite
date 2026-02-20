import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";

function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-50 py-24 relative">

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Why Choose Us ?
        </h2>
      </div>

      {/* Steps Container */}
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Dotted Line (Desktop only) */}
        {/* <div className="hidden md:block absolute top-20 left-0 right-0 border-t-2 border-dashed border-blue-300"></div> */}

        <div className="grid md:grid-cols-3 gap-12 text-center relative">

          {/* Step 1 */}
          <div className="space-y-6 relative">
            <div className="w-24 h-24 mx-auto flex items-center justify-center relative z-10">
              <img src={step1} alt="Step 1" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Fill in Your Details
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fill in your details and get insurance policy premium quotes
              from top-rated insurers instantly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-6 relative">
            <div className="w-24 h-24 mx-auto  flex items-center justify-center relative z-10">
              <img src={step2} alt="Step 2" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Select a Plan
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              From numerous available quotes, choose the one that best suits
              your requirements and budget.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-6 relative">
            <div className="w-24 h-24 mx-auto  flex items-center justify-center relative z-10">
              <img src={step3} alt="Step 3" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Make Payment and Sit Back
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pay online and get your policy right away in your inbox.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default WhyChooseUs;
