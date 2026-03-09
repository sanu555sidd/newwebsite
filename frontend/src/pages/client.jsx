import { useState,useEffect } from "react"

import ca from "../assets/ca.png";
import cbb from "../assets/cb.png";
import ccc from "../assets/cc.png";
import cdd from "../assets/cd.png";
import Boy from "../assets/Boy.png";
import Girl from "../assets/Girl.png";

const cards = [
  { id: 1, image: ca, title: "Bajaj General Insurance" },
  { id: 2, image: cbb, title: "HDFC ERGO Insurance" },
  { id: 3, image: ccc, title: "Royal Sundaram Insurance" },
  { id: 4, image: cdd, title: "Cholamandalam Insurance" },
  { id: 5, image: ca, title: "Bajaj General Insurance" },
  { id: 6, image: cbb, title: "HDFC ERGO Insurance" },
  { id: 7, image: ccc, title: "Royal Sundaram Insurance" },
  { id: 8, image: cdd, title: "Cholamandalam Insurance" },
  { id: 9, image: ca, title: "Bajaj General Insurance" },
];

const testimonials = [
  {
    id: 1,
    image: Boy,
    name: "Elizabeth Thomas",
    text: "Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota."
  },
  {
    id: 2,
    image: Girl,
    name: "Chris William",
    text: "Low-fat yogurt can be a useful source of protein on a weight-loss diet. Probiotics may boost the immune system."
  },
   {
    id: 3,
    image: Girl,
    name: "Chris William",
    text: "Low-fat yogurt can be a useful source of protein on a weight-loss diet. Probiotics may boost the immune system."
  },
   {
    id: 4,
    image: Girl,
    name: "Chris William",
    text: "Low-fat yogurt can be a useful source of protein on a weight-loss diet. Probiotics may boost the immune system."
  },
   {
    id: 5,
    image: Girl,
    name: "Chris William",
    text: "Low-fat yogurt can be a useful source of protein on a weight-loss diet. Probiotics may boost the immune system."
  },
   {
    id: 6,
    image: Girl,
    name: "Chris William",
    text: "Low-fat yogurt can be a useful source of protein on a weight-loss diet. Probiotics may boost the immune system."
  }
];


function Client() {

  const [visibleCards, setVisibleCards] = useState(3);

  const loadMore = () => {
    setVisibleCards((prev) => prev + 3);
  };


const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev + 2 >= testimonials.length ? 0 : prev + 2
    );
  }, 6000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="w-full pt-28 pb-14 relative">

      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold">
          <span className="text-[#333846]">Our </span>
          <span className="text-[#085390]">Client</span>
        </h2>

        <p className="text-[#000000] mt-8 text-xl max-w-[917px] mx-auto">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
      </div>




      {/* Cards */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

        {cards.slice(0, visibleCards).map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition 
                       w-[393px] h-[324px] p-6 flex flex-col items-center text-center"
          >
            {/* Gray Area */}
            <div className="bg-gray-100 w-[262px] h-[126px] flex items-center justify-center rounded-md">

              <div className="bg-white shadow-sm rounded-md w-[144px] h-[101px] flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-12 object-contain"
                />
              </div>

            </div>

            <h3 className="mt-6 text-lg font-semibold text-gray-800">
              {card.title}
            </h3>

            <p className="mt-3 text-sm text-gray-500 px-2">
              It is a long established fact that a reader will be distracted by the readable content.
            </p>
          </div>
        ))}

      </div>

      {/* Load More Button */}
      {visibleCards < cards.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-[#E6282F] text-white rounded-md hover:bg-[#063d6b] transition w-[160px] h-[36px]
                       flex items-center justify-center cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}


       { /* Newsletter Section */ }


        {/* Testimonials Section */}

<div className="text-center mb-8 mt-24">
  <h2 className="text-4xl font-semibold">
    <span className="text-[#085390]">Testimonials</span>
  </h2>
</div>

<div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 mt-16">

  {testimonials
    .slice(currentIndex, currentIndex + 2)
    .map((item) => (
      <div key={item.id} className="text-center relative">

   <div className="relative flex justify-center h-[520px]">

  {/* circle */}
  <div className="absolute bottom-[120px] w-[400px] h-[400px] border-[4px] border-[#085390] rounded-full"></div>

  {/* person image */}
  <img
    src={item.image}
    alt={item.name}
    className="absolute bottom-[120px] w-[380px] h-[480px] object-cover object-top z-10"
  />




          {/* rating card */}
          <div className="absolute top-[90px] left-[60px] bg-white shadow-md px-5 py-3 rounded-lg text-center">
            <div className="text-[#085390] text-xl">★</div>
            <p className="text-sm text-gray-500">4.7/5</p>
            <p className="text-sm font-medium">Good Work!</p>
          </div>

        </div>

        <h3 className="mt-10 text-3xl font-semibold">
          {item.name}
        </h3>

        <p className="mt-3 text-[#414141] text-[18px] max-w-[360px] mx-auto">
          {item.text}
        </p>

      </div>
  ))}

</div>

{/* dots */}
<div className="flex justify-center mt-12 space-x-3">
  {Array.from({ length: testimonials.length / 2 }).map((_, i) => {
    const dotIndex = i * 2;

    return (
      <span
        key={i}
        onClick={() => setCurrentIndex(dotIndex)}
        className={`w-3 h-3 rounded-full cursor-pointer ${
          currentIndex === dotIndex ? "bg-[#085390]" : "bg-gray-300"
        }`}
      ></span>
    );
  })}
</div>



    </section>
  )
}

export default Client