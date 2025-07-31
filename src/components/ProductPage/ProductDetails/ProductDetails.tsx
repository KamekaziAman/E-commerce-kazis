import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faPercent,
  faBox,
  faCalendar,
  faTruck,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

interface ProductDetailsProps {
  productName?: string;
  price?: number;
  category?: string;
  description?: string;
  sizes?: string[];
  selectedSize?: string;
  onSizeSelect?: (size: string) => void;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
}

export default function ProductDetails({
  productName = "Loose Fit Hoodie",
  price = 199.99,
  category = "Man Fashion",
  description = "Loose-fit sweatshirt hoodie in medium weight cotton-blend fabric with a generous, but not oversized silhouette. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, and a kangaroo pocket. Wide ribbing at cuffs and hem. Soft, brushed inside.",
  sizes = ["S", "M", "L", "XL", "XXL"],
  selectedSize = "S",
  onSizeSelect,
  onAddToCart,
  onAddToWishlist,
}: ProductDetailsProps) {
  const [selectedSizeState, setSelectedSizeState] = useState(selectedSize);

  const handleSizeSelect = (size: string) => {
    setSelectedSizeState(size);
    onSizeSelect?.(size);
  };

  const handleAddToCart = () => {
    onAddToCart?.();
  };

  const handleAddToWishlist = () => {
    onAddToWishlist?.();
  };

  return (
    <div className="w-full lg:max-w-xl mx-auto bg-white p-4 lg:p-4 lg:mt-6">
      {/* Category Tag */}
      <div className="inline-block bg-gray-100 text-gray-700 px-2 lg:px-3 py-1 lg:py-1.5 rounded-full text-xs font-medium mb-2 lg:mb-3">
        {category}
      </div>

      {/* Product Name */}
      <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-2 leading-tight">
        {productName}
      </h1>

      {/* Price */}
      <div className="text-lg lg:text-xl xl:text-2xl font-medium text-gray-900 mb-3 lg:mb-4 font-abril">
        ${price}
      </div>

      {/* Delivery Info */}
      <div className="mb-3 lg:mb-4">
        <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-gray-500 text-sm lg:text-base"
          />
          <span>Order in 02:30:25 to get next day delivery</span>
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-3 lg:mb-4">
        <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-2 lg:mb-3">
          Select Size
        </h3>
        <div className="flex gap-2 lg:gap-3 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              className={`min-w-[50px] lg:min-w-[60px] h-10 lg:h-12 px-2 lg:px-3 border-2 rounded-xl font-medium text-sm lg:text-base transition-all duration-200 flex items-center justify-center ${
                selectedSizeState === size
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-800"
              }`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 lg:gap-3 mb-3 lg:mb-4">
        <button
          className="flex-1 h-10 lg:h-12 bg-gray-900 text-white border-none rounded-xl text-sm lg:text-base font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-700"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="w-10 lg:w-12 h-10 lg:h-12 bg-white text-gray-700 border-2 border-gray-200 rounded-xl text-lg lg:text-xl cursor-pointer flex items-center justify-center transition-all duration-200 hover:border-gray-400 hover:text-gray-800"
          onClick={handleAddToWishlist}
        >
          <FontAwesomeIcon icon={faHeart} className="text-base lg:text-lg" />
        </button>
      </div>

      {/* Description Section */}
      <div className="border-b border-gray-100 pb-2 mb-3 lg:mb-4">
        <div className="py-2">
          <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-2 lg:mb-3">
            Description & Fit
          </h3>
          <div className="text-gray-600 leading-relaxed text-xs lg:text-sm">
            {description}
          </div>
        </div>
      </div>

      {/* Shipping Section */}
      <div className="border-b border-gray-100 pb-3 lg:pb-4">
        <div className="py-2">
          <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-2 lg:mb-3">
            Shipping
          </h3>
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <div className="flex flex-col items-center text-center gap-1 lg:gap-2">
              <FontAwesomeIcon
                icon={faPercent}
                className="text-lg lg:text-2xl text-gray-500"
              />
              <div className="text-xs text-gray-600 font-medium">Disc 50%</div>
            </div>
            <div className="flex flex-col items-center text-center gap-1 lg:gap-2">
              <FontAwesomeIcon
                icon={faBox}
                className="text-lg lg:text-2xl text-gray-500"
              />
              <div className="text-xs text-gray-600 font-medium">
                Regular Package
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-1 lg:gap-2">
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-lg lg:text-2xl text-gray-500"
              />
              <div className="text-xs text-gray-600 font-medium">
                3-4 Working Days
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-1 lg:gap-2">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-lg lg:text-2xl text-gray-500"
              />
              <div className="text-xs text-gray-600 font-medium">
                10 - 12 October 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
