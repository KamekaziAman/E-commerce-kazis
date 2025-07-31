import React, { useEffect, useRef } from "react";
import {
  initCardScrollReveal,
  destroyScrollReveal,
} from "../../../utils/scrollReveal";

interface LabelProps {
  Title: string;
  desc?: React.ReactNode;
}

export default function Label({ Title, desc }: LabelProps) {
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const sr = initCardScrollReveal();
      if (labelRef.current && sr) {
        sr.reveal(labelRef.current);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (labelRef.current) {
        const sr = initCardScrollReveal();
        destroyScrollReveal(labelRef.current, sr);
      }
    };
  }, [Title]);

  return (
    <div
      ref={labelRef}
      className="w-full px-4 sm:px-6 md:px-0 flex flex-col items-center mt-6 mb-4"
    >
      <div className="w-full max-w-screen-xl rounded-lg text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-abril py-2 md:py-3 leading-tight">
          {Title}
        </h2>

        {desc && (
          <p
            className="text-base sm:text-lg md:text-xl text-gray-800 pb-2 font-serif leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              whiteSpace: "pre-line",
            }}
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        )}
      </div>
    </div>
  );
}
