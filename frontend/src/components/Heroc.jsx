import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

import ca from "../assets/ca.png";
import cbb from "../assets/cb.png";
import ccc from "../assets/cc.png";
import cdd from "../assets/cd.png";

const cards = [
  { id: 1, image: ca, title: "Bajaj General Insurance" },
  { id: 2, image: cbb, title: "HDFC ERGO Insurance" },
  { id: 3, image: ccc, title: "Royal Sundaram Insurance" },
  { id: 4, image: cdd, title: "Cholamandalam Insurance" },
  { id: 5, image: ca, title: "Bajaj General Insurance" },
  { id: 6, image: cbb, title: "HDFC ERGO Insurance" },
];

export default function Heroc() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerView = 4;

  const visibleCards = cards.slice(startIndex, startIndex + cardsPerView);

  const handleNext = () => {
    if (startIndex + cardsPerView < cards.length) {
      setStartIndex((prev) => prev + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  // AUTO SCROLL EVERY 3 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => {
        if (prev + cardsPerView < cards.length) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full pt-26 pb-14 relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-4xl font-semibold">
          <span className="text-[#333846]">Our </span>
          <span className="text-[#085390]">Client</span>
        </h2>
        <p className="text-[#6F727C] mt-8 text-xl">
          We're associated with India's popular insurance companies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Left Arrow */}
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:shadow-lg transition z-10"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Right Arrow */}
        {startIndex + cardsPerView < cards.length && (
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:shadow-lg transition z-10"
          >
            <ChevronRight size={22} />
          </button>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-2"
            >
              {/* Gray Layer */}
              <div className="bg-gray-100 py-6 flex items-center justify-center">
                {/* Logo Box */}
                <div className="bg-white rounded-md shadow-sm px-6 py-4 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-12 object-contain"
                  />
                </div>
              </div>

              <h3 className="text-center py-5 text-base font-medium text-gray-700">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}