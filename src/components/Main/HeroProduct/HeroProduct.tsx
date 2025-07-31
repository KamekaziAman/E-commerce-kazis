import { useEffect, useState } from "react";
import Button from "../Button/Button";

const images = ["/images/hero.png", "/images/hero2.jpg", "/images/hero3.png"];

export default function HeroProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomKey, setZoomKey] = useState(0); // forces re-animation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setZoomKey((prevKey) => prevKey + 1); // reset animation
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative rounded-4xl h-[45rem] overflow-hidden shadow-xl my-6 w-full max-w-screen-xl">
        <div className="absolute inset-0">
          <img
            key={zoomKey} // this forces a re-render for animation reset
            src={images[currentIndex]}
            alt="hero"
            className="w-full h-full object-cover scale-100 animate-zoomIn"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end items-start p-12 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10">
          <h1 className="text-white text-4xl md:text-7xl font-neonderthaw mb-4">
            Art Meets Attitude
          </h1>
          <p
            className="text-white text-lg max-w-xl mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            More than just a brand, we’re a movement—connecting creatives,
            skaters, and trendsetters who define the streets.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}
