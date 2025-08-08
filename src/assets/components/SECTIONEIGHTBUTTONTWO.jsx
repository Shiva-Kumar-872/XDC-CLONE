import React, { useEffect, useState } from "react";

export default function AnimatedButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-full text-black flex items-center  justify-start group overflow-hidden pl-9   bg-transparent">
      {/* Border Animation */}
      {showButton && (
        <div className="absolute inset-0 border  animate-borderSweep border-l-0 border-r-0 border-b-0 z-0"></div>
      )}

      {/* Button */}
      {showButton && (
        <div>
        <button className="relative  flex items-center justify-center w-full font-sans font-light text-2xl px-6 z-10 overflow-hidden bg-transparent ">
          {/* Arrow Icon */}
          <span className="absolute   left-[0px] opacity-100 transition-all duration-300 ease-in-out group-hover:left-[calc(100%-30px)] group-hover:opacity-100 z-0">
            <svg
              className="w-6 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* Button Text */}
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-4 tracking-wider">
          
          Explore the Network


          </span>
        </button>
        </div>
        
      )}

      {/* Embedded Animations */}
      <style jsx>{`
        @keyframes borderSweep {
          0% {
            border-width: 0;
            clip-path: inset(0 100% 100% 0);
          }
          25% {
            clip-path: inset(0 0 100% 0);
          }
          50% {
            clip-path: inset(0 0 0 100%);
          }
          75% {
            clip-path: inset(100% 0 0 0);
          }
          100% {
            border-width: 1px;
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes borderFadeIn {
          0% {
            opacity: 0;
            transform: scaleX(0);
            transform-origin: right;
          }
          100% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes borderSlideAround {
          0% {
            border-color: transparent;
            box-shadow: inset 0 0 0 0 #9ff3ff;
          }
          25% {
            box-shadow: inset 0 -1px 0 0 #9ff3ff;
          }
          50% {
            box-shadow: inset -1px 0 0 0 #9ff3ff;
          }
          75% {
            box-shadow: inset 0 1px 0 0 #9ff3ff;
          }
          100% {
            box-shadow: inset 1px 0 0 0 #9ff3ff;
          }
        }

        .animate-borderSweep {
          animation: borderSweep 1.8s ease-out 1;
        }

        .animate-borderFadeIn {
          animation: borderFadeIn 1.2s ease-out 1;
        }

        .animate-borderSlideAround {
          animation: borderSlideAround 2s ease-out 1;
        }
      `}</style>
    </div>
  );
}
