import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

const RatingAndReview: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Alex Mathio",
      rating: 5,
      date: "13 Oct 2024",
      text: "NextGen's dedication to sustainability and ethical practices resonates strongly with today's consumers, positioning the brand as a responsible choice in the fashion world.",
      avatar: "/images/avatar.jpg"
    }
  ];

  const ratingBreakdown = [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 }
  ];

  const averageRating = 4.5;
  const totalReviews = 50;

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Rating Summary */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Rating & Reviews
          </h2>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl font-bold text-gray-900">
              {averageRating}
              <span className="text-lg font-normal text-gray-500">/5</span>
            </div>
            <div className="text-sm text-gray-600">
              ({totalReviews} New Reviews)
            </div>
          </div>

          {/* Star Rating Breakdown */}
          <div className="space-y-2">
            {ratingBreakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-12">
                  <FontAwesomeIcon 
                    icon={faStar} 
                    className="text-gray-400 text-sm"
                  />
                  <span className="text-sm text-gray-700">{item.stars}</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-900 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Review Card */}
        <div className="flex-1 mt-4">
          <div className="bg-gray-50 rounded-lg p-6 relative">
            {/* Review Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {reviews[currentReviewIndex].name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={`text-sm ${
                          index < reviews[currentReviewIndex].rating
                            ? 'text-gray-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {reviews[currentReviewIndex].date}
                  </span>
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {reviews[currentReviewIndex].text}
            </p>

            {/* Review Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Navigation Button */}
              <button
                onClick={nextReview}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <FontAwesomeIcon 
                  icon={faChevronRight} 
                  className="text-gray-600 text-xs"
                />
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="mt-4">
              <div className="flex gap-1">
                <div className="flex-1 bg-gray-200 rounded-full h-1">
                  <div className="bg-gray-900 h-1 rounded-full w-1/4"></div>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-1"></div>
                <div className="flex-1 bg-gray-200 rounded-full h-1"></div>
                <div className="flex-1 bg-gray-200 rounded-full h-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingAndReview;
