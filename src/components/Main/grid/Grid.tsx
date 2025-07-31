import { useEffect, useRef } from "react";
import {
  initGridScrollReveal,
  destroyScrollReveal,
} from "../../../utils/scrollReveal";
import Button from "../Button/Button";

export default function Grid() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const sr = initGridScrollReveal();
      if (gridRef.current && sr) {
        sr.reveal(gridRef.current);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (gridRef.current) {
        const sr = initGridScrollReveal();
        destroyScrollReveal(gridRef.current, sr);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto my-8 px-4 sm:px-6 md:px-0">
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-8 gap-4"
      >
        {/* Image Block 1 */}
        <div className="md:col-span-4 md:row-span-4">
          <img
            className="rounded-2xl w-full h-[280px] md:h-[430px] object-cover"
            src="/images/grid1.jpg"
            alt="grid"
          />
        </div>

        {/* Text Block 1 */}
        <div className="md:col-start-5 md:h-[430px] md:col-span-2 md:row-span-4 bg-[#303030] rounded-2xl flex flex-col justify-center items-start p-6 gap-4">
          <h2 className="font-abril text-2xl md:text-4xl text-white">
            Built by the Streets, Made for You
          </h2>
          <p className="text-gray-300 font-mono text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga
            omnis quos, reprehenderit nostrum molestias rerum provident a alias
            dolore culpa quidem iure.
          </p>
          <Button />
        </div>

        {/* Text Block 2 */}
        <div className="md:col-span-2 md:h-[430px] md:row-span-4 md:row-start-5 bg-[#d1d1d1] rounded-2xl flex flex-col justify-center items-start p-6 gap-4">
          <h2 className="font-abril text-2xl md:text-4xl text-black">
            Built by the Streets, Made for You
          </h2>
          <p className="text-gray-900 font-mono text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga
            omnis quos, reprehenderit nostrum molestias rerum provident a alias
            dolore culpa quidem iure.
          </p>
          <Button />
        </div>

        {/* Image Block 2 */}
        <div className="md:col-span-4 md:h-[430px] md:row-span-4 md:col-start-3 md:row-start-5">
          <img
            className="rounded-2xl w-full h-[300px] md:h-full object-cover"
            src="/images/grid2.jpg"
            alt="grid"
          />
        </div>
      </div>
    </div>
  );
}
