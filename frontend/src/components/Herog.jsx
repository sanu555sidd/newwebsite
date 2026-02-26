import caseImg1 from "../assets/case1.jpg";
import caseImg2 from "../assets/case2.jpg";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const data = [
    {
      id: 1,
      img: caseImg1,
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 2,
      img: caseImg2,
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];

  return (
    <section className=" pt-20 pb-22 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-22">
          <h2 className="text-4xl font-bold">
            Case <span className="text-[#085390]">Studies</span>
          </h2>
          <p className="mt-12 text-[#656464] text-[20px] max-w-5xl mx-auto">
            We design bespoke digital solutions that combine creativity,
            technology, and strategy—every project reflecting our commitment
            to innovation, creating tangible impact and useful user
            experiences on a variety of industries and platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {data.map((item) => (
            <div
              key={item.id}
                className="bg-white rounded-xl shadow-[0_10px_30px_#00000040] hover:shadow-[0_10px_30px_#00000050] transition duration-300 w-[550px] h-[527px] p-2"            >
              <img
                src={item.img}
                alt="case"
                className="w-full h-[300px] object-cover rounded-lg ]"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#085390] text-left">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed text-left">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[#085390] font-medium cursor-pointer hover:gap-3 transition-all">
                  View Our Case Study
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}