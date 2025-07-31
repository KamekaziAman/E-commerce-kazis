import ImageViewer from "./ImageViewer/ImageViewer";
import ProductDetails from "./ProductDetails/ProductDetails";
import RatingAndReview from "./RatingAndReview/RatingAndReview";
import ProductRecommendation from "./ProductRecommendation/ProductRecommendation";

export default function Product() {
  return (
    <>
      <div className="flex w-full max-w-screen-xl mx-auto gap-10">
        <ImageViewer />
        <ProductDetails />
      </div>
      <div className="flex w-full max-w-screen-xl mx-auto gap-10">
      <RatingAndReview />
      </div>
      <div className="flex w-full max-w-screen-xl mx-auto gap-10">
        <ProductRecommendation />
      </div>
    </>
  );
}
