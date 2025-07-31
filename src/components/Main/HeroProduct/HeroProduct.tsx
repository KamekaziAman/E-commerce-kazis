import { useEffect, useState, useRef } from "react";
import {
  initHeroScrollReveal,
  destroyScrollReveal,
} from "../../../utils/scrollReveal";
import Button from "../Button/Button";

const images = ["/images/hero.png", "/images/hero2.jpg", "/images/hero3.png"];

export default function HeroProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomKey, setZoomKey] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setZoomKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const sr = initHeroScrollReveal();
      if (heroRef.current && sr) {
        sr.reveal(heroRef.current);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (heroRef.current) {
        const sr = initHeroScrollReveal();
        destroyScrollReveal(heroRef.current, sr);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-0 mt-4 mb-6">
      <div
        ref={heroRef}
        className="relative rounded-3xl overflow-hidden shadow-xl w-full max-w-screen-xl h-[30rem] sm:h-[40rem] md:h-[45rem]"
      >
        <div className="absolute inset-0">
          <img
            key={zoomKey}
            src={images[currentIndex]}
            alt="hero"
            className="w-full h-full object-cover animate-zoomIn"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end items-start px-4 sm:px-6 md:px-12 py-8 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-7xl font-neonderthaw mb-2 sm:mb-4 leading-tight">
            Art Meets Attitude
          </h1>
          <p
            className="text-white text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg mb-4 sm:mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            More than just a brand, we're a movement—connecting creatives,
            skaters, and trendsetters who define the streets.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}
