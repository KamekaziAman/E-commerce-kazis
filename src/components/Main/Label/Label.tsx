import React, { useEffect, useRef } from "react";
import { initCardScrollReveal, destroyScrollReveal } from "../../../utils/scrollReveal";

interface LabelProps {
  Title: string;
  desc?: React.ReactNode; // Add this line
}

export default function Label({ Title, desc }: LabelProps) {
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Initialize ScrollReveal and add the element
      const sr = initCardScrollReveal();
      if (labelRef.current && sr) {
        console.log("Adding label to ScrollReveal:", Title);
        sr.reveal(labelRef.current);
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (labelRef.current) {
        const sr = initCardScrollReveal();
        destroyScrollReveal(labelRef.current, sr);
      }
    };
  }, [Title]);

  return (
    <>
      <div 
        ref={labelRef} 
        className="w-full flex flex-col items-center"
      >
        <div className="w-full max-w-screen-xl rounded-lg">
          <div className="text-4xl sm:text-5xl md:text-6xl font-abril py-3">
            {Title}
          </div>

          {desc && (
            <p
              className="text-[20px] pb-2 font-serif"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                whiteSpace: "pre-line",
              }}
              dangerouslySetInnerHTML={{ __html: desc }}
            ></p>
          )}
        </div>
      </div>
    </>
  );
}
