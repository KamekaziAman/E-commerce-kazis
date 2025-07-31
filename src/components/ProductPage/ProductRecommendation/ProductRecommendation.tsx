import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
}

const ProductRecommendation: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Polo with Contrast Trims",
      image: "/images/product-images/1.jpg",
      rating: 4.0,
      currentPrice: 212,
      originalPrice: 242,
      discount: 20
    },
    {
      id: 2,
      name: "Gradient Graphic T-shirt",
      image: "/images/hero2.jpg",
      rating: 3.5,
      currentPrice: 145
    },
    {
      id: 3,
      name: "Polo with Tipping Details",
      image: "/images/product-images/3.jpg",
      rating: 4.5,
      currentPrice: 180
    },
    {
      id: 4,
      name: "Striped Jacket",
      image: "/images/product-images/4.jpg",
      rating: 5.0,
      currentPrice: 120,
      originalPrice: 150,
      discount: 30
    },
    {
      id: 5,
      name: "Gradient Graphic T-shirt",
      image: "/images/card1.png",
      rating: 3.5,
      currentPrice: 145
    },
    {
      id: 6,
      name: "Classic Denim Jacket",
      image: "/images/hero3.png",
      rating: 4.2,
      currentPrice: 165,
      originalPrice: 200,
      discount: 15
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          className="text-gray-400 text-sm" 
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative inline-block">
          <FontAwesomeIcon 
            icon={faStar} 
            className="text-gray-300 text-sm" 
          />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <FontAwesomeIcon 
              icon={faStar} 
              className="text-gray-200 text-sm" 
            />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={`empty-${i}`} 
          icon={faStar} 
          className="text-gray-300 text-sm" 
        />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-abril font-medium text-black text-center mb-10 font-sans">
          You might also like
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {products.map((product) => (
            <div 
              key={product.id}
              className="cursor-pointer bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-52 object-cover rounded-t-lg"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-black font-sans text-sm font-medium mb-2 truncate">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-gray-400 text-xs ml-1">
                    {product.rating}/5
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-black font-bold text-base">
                    ${product.currentPrice}
                  </span>
                  
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-xs">
                      ${product.originalPrice}
                    </span>
                  )}
                  
                  {product.discount && (
                    <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendation;
