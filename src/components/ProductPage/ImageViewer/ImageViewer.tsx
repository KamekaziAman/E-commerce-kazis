import { useEffect, useRef, useState } from "react";

const images = [
  "/images/product-images/1.jpg",
  "/images/product-images/2.jpg",
  "/images/product-images/3.jpg",
  "/images/product-images/4.jpg",
];

export default function ImageViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const progressRefs = useRef<HTMLDivElement[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    resetProgressBars(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  // Simple preload for current image
  useEffect(() => {
    const img = new Image();
    img.onload = () => handleImageLoad(currentIndex);
    img.src = images[currentIndex];
  }, [currentIndex]);

  const startAutoSlide = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const handleImageLoad = (index: number) => {
    if (index === currentIndex) {
      setIsLoaded(true);
      animateProgress(currentIndex);
      startAutoSlide();
    }
  };

  const handleManualChange = (index: number) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setCurrentIndex(index);
  };

  const resetProgressBars = (active: number) => {
    progressRefs.current.forEach((bar, i) => {
      if (!bar) return;
      bar.style.transition = "none";
      bar.style.width = i < active ? "100%" : "0%";

      void bar.offsetWidth; // force reflow

      bar.style.transition = "width 4s linear";
    });
  };

  const animateProgress = (index: number) => {
    const bar = progressRefs.current[index];
    if (bar) bar.style.width = "100%";
  };

  return (
    <div className="flex justify-center my-10">
      <div className="max-w-lg w-full h-[650px] bg-white rounded-2xl shadow-md relative overflow-hidden">
        {/* Progress Bars */}
        <div className="absolute top-4 left-4 right-4 flex justify-between space-x-2 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              className="h-1.5 bg-white/30 backdrop-blur-sm w-full rounded-full overflow-hidden"
            >
              <div
                ref={(el) => {
                  if (el) progressRefs.current[i] = el;
                }}
                className="h-full bg-white w-0 rounded-full transition-all duration-300 ease-out"
              />
            </div>
          ))}
        </div>

        {/* Main Image Container */}
        <div className="relative h-[500px] overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 z-10">
              <div className="w-8 h-8 border-3 border-gray-300 border-t-gray-500 animate-spin rounded-full" />
            </div>
          )}
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            onLoad={() => handleImageLoad(currentIndex)}
            className={`w-full h-full object-cover transition-all duration-500 ease-out ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Thumbnails Container */}
        <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
          <div className="grid grid-cols-4 gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  currentIndex === i ? "ring-2 ring-black ring-offset-2 rounded-lg" : ""
                }`}
                onClick={() => handleManualChange(i)}
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                                     <img
                     src={img}
                     alt={`Thumbnail ${i + 1}`}
                     className={`w-full h-full object-cover transition-all duration-300 ${
                       currentIndex === i 
                         ? "scale-100 brightness-100" 
                         : "scale-95 brightness-75 group-hover:scale-100 group-hover:brightness-100"
                     }`}
                   />
                </div>
                
                {/* Active Indicator */}
                {currentIndex === i && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-500 rounded-full border-2 border-white shadow-sm" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
