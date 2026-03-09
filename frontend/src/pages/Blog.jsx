import React from "react";
import h from "../assets/h.jpg";

// article images
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
import f from "../assets/f.jpg";


const articlesLeft = [
  {
    title: "Lorem Ipsum lorem ipsum lorem lorem ipsum lorem",
    date: "January 28, 2026",
    img: a,
  },
  {
    title: "Lorem Ipsum lorem ipsum lorem lorem ipsum lorem",
    date: "January 28, 2026",
    img: b,
  },
  {
    title: "Lorem Ipsum lorem ipsum lorem lorem ipsum lorem",
    date: "January 28, 2026",
    img: c,
  },
];

const articlesRight = [
  {
    title: "Lorem Ipsum lorem ipsum lorem lorem ipsum lorem",
    date: "January 28, 2026",
    img: d,
  },
  {
    title: "Lorem Ipsum lorem ipsum lorem lorem ipsum lorem",
    date: "January 28, 2026",
    img: e,
  },
  {
    title: "Lorem Ipsum lorem ipsum lorem lorem ipsum lorem",
    date: "January 28, 2026",
    img: f,
  },
];

const ArticleCard = ({ item }) => {
  return (
    <div className="flex bg-[#FAFAFA] rounded-lg p-4 gap-4 items-center hover:shadow-md transition">
      <img
        src={item.img}
        alt=""
        className="w-[150px] h-[100px] object-cover rounded-md"
      />

      <div>
        <h3 className="text-lg font-medium leading-snug mb-1">
          {item.title}
        </h3>

        <p className="text-[] text-sm mb-2">{item.date}</p>

        <button className="text-red-500 text-sm flex items-center gap-1 cursor-pointer">
          Read Full article
          <span>›</span>
        </button>
      </div>
    </div>
  );
};

const InfoSection = () => {
  return (
    <>
      {/* Top Section */}
      <section className="py-32 flex justify-center">
        <div className="flex items-center">

          {/* Image */}
          <div>
            <img
              src={h}
              alt="building"
              className="w-[702px] h-[463px] object-cover"
            />
          </div>

          {/* Grey Text Card */}
          <div className="w-[555px] h-[463px] bg-[#FAFAFA] p-10 flex flex-col justify-center">

            <h2 className="text-3xl font-semibold mb-5">
              Lorem Ipsum Is Simply Do Text Of The Printing.
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
               Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <button className="bg-red-500 text-white px-6 py-3 w-fit rounded-md hover:bg-red-600 transition cursor-pointer">
              Load More
            </button>

          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className=" py-20 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">

          {/* Left Column */}
          <div className="md:-ml-10">
            <h2 className="text-red-500 text-3xl font-semibold mb-8 inline-block">
              Dummy Texts
              <span className="block h-[3px] w-16 bg-red-500 mt-4 ml-10"></span>
            </h2>

            <div className="space-y-6 ">
              {articlesLeft.map((item, index) => (
                <ArticleCard key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:-mr-16">
            <h2 className="text-red-500 text-3xl font-semibold mb-8 inline-block">
              Known Print
              <span className="block h-[3px] w-16 bg-red-500 mt-4 ml-10"></span>
            </h2>

            <div className="space-y-6">
              {articlesRight.map((item, index) => (
                <ArticleCard key={index} item={item} />
              ))}
            </div>
          </div>

        </div>
      </section>
                {/* Right Column */}


              
    </>

    
  );
};

export default InfoSection;