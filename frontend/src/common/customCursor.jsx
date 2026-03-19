import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        className="fixed w-16 h-16 border-2 border-white rounded-full pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          borderColor: "#085390",
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed w-1.5 h-1.5 bg-[#E6282F] rounded-full pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          
        }}
      />
    </>
  );
}