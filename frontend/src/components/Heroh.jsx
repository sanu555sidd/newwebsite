import mapImg from "../assets/map.jpg"; // your india map image
import { MapPin } from "lucide-react";

export default function ServicesArea() {
  return (
    <section className=" py-2 px-4 bg-white ">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold">
          Our <span className="text-[#085390]">Services Area</span>
        </h2>

        {/* Map Container */}
        <div className="relative mt-8 flex justify-center">

          {/* Map Image */}
          <img
            src={mapImg}
            alt="India Map"
            className="w-full max-w-2xl"
          />

          {/* Example Pins (Adjust positions if needed) */}
          <div className="absolute top-[30%] left-[55%] flex items-center gap-1">
            <MapPin className="text-red-500" size={24} />
            <span className="text-sm font-medium">Noida</span>
          </div>

          <div className="absolute top-[45%] left-[35%] flex items-center gap-1">
            <MapPin className="text-red-500" size={24} />
            <span className="text-sm font-medium">Noida</span>
          </div>

          <div className="absolute top-[65%] left-[50%] flex items-center gap-1">
            <MapPin className="text-red-500" size={24} />
            <span className="text-sm font-medium">Noida</span>
          </div>

        </div>
      </div>
    </section>
  );
}