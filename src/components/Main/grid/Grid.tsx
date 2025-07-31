import { useEffect, useRef } from "react";
import {
  initGridScrollReveal,
  destroyScrollReveal,
} from "../../../utils/scrollReveal";
import Button from "../Button/Button";
import "./Grid.css";

export default function Grid() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Initialize ScrollReveal and add the element
      const sr = initGridScrollReveal();
      if (gridRef.current && sr) {
        sr.reveal(gridRef.current);
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (gridRef.current) {
        const sr = initGridScrollReveal();
        destroyScrollReveal(gridRef.current, sr);
      }
    };
  }, []);

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto my-6">
        <div ref={gridRef} className="parent">
          <div className="div1 ">
            <img className="rounded-2xl" src="/images/grid1.jpg" alt="grid" />
          </div>
          <div className="div2 bg-[#303030] rounded-2xl flex flex-col justify-center items-start p-6 gap-4">
            <div className="font-abril text-4xl text-white">
              Built by the Streets, Made for You
            </div>
            <div className="text-gray-300 font-mono">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              fuga omnis quos, reprehenderit nostrum molestias rerum provident a
              alias dolore culpa quidem iure. Ipsa obcaecati, odio error nemo
              eaque temporibus.
            </div>
            <div>
              <Button />
            </div>
          </div>
          <div className="div3 bg-[#d1d1d1] rounded-2xl flex flex-col justify-center items-start p-6 gap-4">
            <div className="font-abril text-4xl text-black">
              Built by the Streets, Made for You
            </div>
            <div className="text-gray-900 font-mono">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              fuga omnis quos, reprehenderit nostrum molestias rerum provident a
              alias dolore culpa quidem iure. Ipsa obcaecati, odio error nemo
              eaque temporibus.
            </div>
            <div>
              <Button />
            </div>
          </div>
          <div className="div4 ">
            <img className="rounded-2xl" src="/images/grid2.jpg" alt="grid" />
          </div>
        </div>
      </div>
    </>
  );
}
