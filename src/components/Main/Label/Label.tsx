import React from "react";

interface LabelProps {
  Title: string;
  desc?: React.ReactNode; // Add this line
}

export default function Label({ Title, desc }: LabelProps) {
  return (
    <>
      <div className="w-full flex flex-col items-center ">
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
