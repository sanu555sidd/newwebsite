import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Loader({ children }) {
  const location = useLocation(); // 🔥 detects route change
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);

  const radius = 56;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    setLoading(true);
    setAnimate(false);

    // small delay to restart animation cleanly
    const start = setTimeout(() => setAnimate(true), 50);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // match animation duration

    return () => {
      clearTimeout(timer);
      clearTimeout(start);
    };
  }, [location]); // 🔥 runs on every page change

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[99999]">
          <div className="relative w-36 h-36 flex items-center justify-center">
            
            <svg className="absolute w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#085390"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={animate ? 0 : circumference}
                style={{
                  transition: "stroke-dashoffset 1.2s ease-out",
                }}
              />
            </svg>

            <img
              src={logo}
              className="w-28 h-auto z-10 strokewidth=1"
              alt="logo"
            />
          </div>
        </div>
      )}

      {children}
    </>
  );
}