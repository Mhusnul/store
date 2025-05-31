import React, { useEffect, useState } from "react";

const slides = [
  "https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/d/e/desktop_10_1__2.jpg",
  "https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/1/6/1600x500_con_naruto.jpg",
  "https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/d/e/desktop_9__9.jpg",
];

function CtaCorousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // Ganti slide tiap 3 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default CtaCorousel;
