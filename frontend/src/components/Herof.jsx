import personImg from "../assets/man.png";
import { FileText } from "lucide-react";
import { useState } from "react";

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  const steps = [
    { title: "Test", desc: "Test Test Test Test Test Test Test" },
    { title: "Test", desc: "Test Test Test Test Test Test Test" },
    { title: "Test", desc: "Test Test Test Test Test Test Test" },
    { title: "Test", desc: "Test Test Test Test Test Test Test" },
    { title: "Test", desc: "Test Test Test Test Test Test Test" },
    { title: "Test", desc: "Test Test Test Test Test Test Test" },
  ];

  return (
    <section className="w-full pt-2 pb-8 px-6">
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: repeating-linear-gradient(
            to bottom,
            #9ca3af 0px,
            #9ca3af 10px,
            transparent 10px,
            transparent 20px
          );
          border-radius: 0px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 999px;
        }
        .custom-scroll::-webkit-scrollbar-button {
          display: block;
          height: 8px;
          background-color: #9ca3af;
          border-radius: 999px;
        }
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #9ca3af transparent;
        }
      `}</style>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl text-[#333846] font-semibold">How It Works</h2>
        <p className="mt-4 text-[#444444">
          Our streamlined process ensures seamless collaboration and efficient
          delivery of services.From initial consultation to final implementation, we work closely with
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-[0_10px_30px_#00000040] p-10 grid md:grid-cols-2 gap-12 relative">

        {/* LEFT SIDE */}
<div className="relative flex justify-center -ml-[110px]">
            <div className="bg-[#D9D9D9] rounded-2xl overflow-hidden w-[390px] h-[382px] flex items-center justify-center">
            <img
              src={personImg}
              alt="Person"
              className="object-cover h-full"
            />
          </div>

          <button className="absolute top-38 right-2 bg-[#085390] text-white px-6 py-2 rounded-full shadow-md">
            About Us
          </button>

          <div className="absolute bottom-[-6px] right-12 bg-white p-6 rounded-2xl shadow-xl w-[325px] h-[230px] text-left">
            <h3 className="text-lg font-semibold mb-8">Work With us</h3>
            <p className="text-gray-600 text-sm mb-4">Work With us Work With us</p>
            <p className="text-gray-600 text-sm mb-4">Work With usWork With us</p>
            <p className="text-gray-600 text-sm mb-4">Work With usWork With us</p>
          </div>
        </div>

        {/* RIGHT SIDE — scrollbar on the left acts as the vertical divider */}
        <div className="pl-20 pr-6">
        <div
          className="relative max-h-[450px] overflow-y-scroll custom-scroll pl-12 pr-6"
          style={{ direction: "rtl" }}
        >
          <div style={{ direction: "ltr" }}>
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative mb-10 flex items-start gap-4 cursor-pointer group"
                onClick={() => setActive(index)}
              >
                {/* Icon */}
                <div
                  className={`relative z-10 p-4 rounded-xl transition-all duration-300 flex-shrink-0
                    ${
                      active === index
                        ? "bg-[#085390] text-white shadow-lg"
                        : "border-2 border-gray-300 bg-white text-gray-600 group-hover:border-[#085390] group-hover:text-[#085390] shadow-sm"
                    }`}
                >
                  <FileText size={24} />
                </div>
                

                {/* Content */}
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}