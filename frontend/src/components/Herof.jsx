import personImg from "../assets/man.png"; // <-- your image path
import { FileText } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <p className="mt-4 text-gray-600">
          Our streamlined process ensures seamless collaboration and efficient
          delivery of services. From initial consultation to final results, we
          maintain transparency and quality at every step.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-10 grid md:grid-cols-2 gap-12 relative">

        {/* LEFT SIDE */}
        <div className="relative flex justify-center">
          
          {/* Image */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden w-[350px] h-[450px] flex items-center justify-center">
            <img
              src={personImg}
              alt="Person"
              className="object-cover h-full"
            />
          </div>

          {/* About Us Button */}
          <button className="absolute top-32 right-4 bg-blue-900 text-white px-6 py-2 rounded-full shadow-md">
            About Us
          </button>

          {/* Work With Us Card */}
          <div className="absolute bottom-[-30px] right-12 bg-white p-6 rounded-2xl shadow-xl w-[280px]">
            <h3 className="text-lg font-semibold mb-4">Work With us</h3>
            <p className="text-gray-600 text-sm mb-2">
              Work With us Work With us
            </p>
            <p className="text-gray-600 text-sm mb-2">
              Work With us Work With us
            </p>
            <p className="text-gray-600 text-sm">
              Work With us Work With us
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative pl-10">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200"></div>

          {/* Step 1 */}
          <div className="relative mb-12 flex items-start gap-6">
            <div className="bg-blue-700 text-white p-4 rounded-xl">
              <FileText size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Test</h4>
              <p className="text-gray-600 text-sm mt-2">
                Test Test Test Test Test Test Test
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-12 flex items-start gap-6">
            <div className="border p-4 rounded-xl">
              <FileText size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Test</h4>
              <p className="text-gray-600 text-sm mt-2">
                Test Test Test Test Test Test Test
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex items-start gap-6">
            <div className="border p-4 rounded-xl">
              <FileText size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Test</h4>
              <p className="text-gray-600 text-sm mt-2">
                Test Test Test Test Test Test Test
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
