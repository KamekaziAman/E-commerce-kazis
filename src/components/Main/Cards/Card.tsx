import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { initCardScrollReveal, destroyScrollReveal } from "../../../utils/scrollReveal";
import "./card.css";

interface CardProps {
  imgSrc: string;
  label: string;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  rating: number;
  discount: string;
}

export default function Card({
  imgSrc,
  label,
  title,
  description,
  price,
  oldPrice,
  rating,
  discount,
}: CardProps) {
  const path = "/" + encodeURIComponent(title.replace(/\s+/g, "-"));
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Initialize ScrollReveal and add the element
      const sr = initCardScrollReveal();
      if (cardRef.current && sr) {
        console.log("Adding card to ScrollReveal:", title);
        sr.reveal(cardRef.current);
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (cardRef.current) {
        const sr = initCardScrollReveal();
        destroyScrollReveal(cardRef.current, sr);
      }
    };
  }, [title]);

  return (
    <Link to={path} className="block">
      <div
        ref={cardRef}
        className="Reveal m-5 relative w-72 aspect-[3/4] rounded-3xl overflow-hidden shadow-lg text-white hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        {/* Background Image */}
        <img
          src={imgSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Blur gradient layer */}
        <div className="absolute bottom-0 left-0 w-full h-[45%] progressive-blur rounded-b-3xl z-10 pointer-events-none" />

        {/* Badge */}
        <span className="absolute top-3 left-3 z-20 bg-white text-black text-xs font-bold px-2 py-1 rounded-md shadow-md">
          {label}
        </span>

        {/* Product Info */}
        <div className="absolute bottom-0 left-0 w-full h-[45%] p-4 flex flex-col justify-end space-y-2 z-20">
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm text-white/80">{description}</p>
          </div>

          {/* Price and Rating */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">${price}</span>
              <span className="line-through text-sm text-white/50">
                ${oldPrice}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">⭐ {rating}</span>
              <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded">
                {discount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
