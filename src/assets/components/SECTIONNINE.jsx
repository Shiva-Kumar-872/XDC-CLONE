import React, { useEffect, useRef, useState } from 'react'

const SECTIONNINE = () => {
  const headingRef = useRef(null)
  const [animateText, setAnimateText] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animateText) {
          setAnimateText(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (headingRef.current) observer.observe(headingRef.current)

    return () => observer.disconnect()
  }, [animateText])

  return (
    <>
      <style>
        {`
          /* === Right-to-Left Text Reveal === */
          @keyframes revealRightToLeft {
            0% {
              transform: translateX(40px);
              opacity: 0;
              clip-path: inset(0 0 0 100%);
            }
            100% {
              transform: translateX(0px);
              opacity: 1;
              clip-path: inset(0 0 0 0%);
            }
          }

          /* === Bottom-to-Top Fill with Smooth Blend === */
          @keyframes fillFromBottom {
            0% {
              transform: scaleY(0);
              opacity: 0;
              animation-timing-function: ease-in;
            }
            30% {
              transform: scaleY(0.3);
              opacity: 0.4;
              animation-timing-function: ease-in-out;
            }
            100% {
              transform: scaleY(1);
              opacity: 1;
            }
          }

          /* === Arrow Slide === */
          @keyframes arrowSlide {
            0% {
              transform: translateY(-50%) translateX(0);
            }
            100% {
              transform: translateY(-50%) translateX(10px);
            }
          }

          .animate-reveal {
            animation: revealRightToLeft 1.2s ease-out forwards;
            overflow: visible;
          }

          .hover-overlay {
            position: absolute;
            inset: 0;
            background-color: black;
            z-index: 1;
            transform: scaleY(0);
            transform-origin: bottom;
            animation: none;
            pointer-events: none;
          }

          .group:hover .hover-overlay {
            animation: fillFromBottom 0.9s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }

          .arrow-slide {
            position: absolute;
            top: 50%;
            right: 60px;
            transform: translateY(-50%);
            transition: transform 0.4s ease, stroke 0.4s ease;
            z-index: 10;
          }

          .group:hover .arrow-slide {
            animation: arrowSlide 0.4s ease forwards;
          }

          .group:hover .arrow-slide path {
            stroke: white;
          }

          .transition-colors {
            transition: color 0.6s ease;
          }

          .group:hover .transition-colors {
            color: white;
          }
        `}
      </style>

      <div className="relative z-10 isolate py-48 bg-[#e7f0f3] group overflow-hidden">
        
        {/* Black Fill Overlay */}
        <div className="hover-overlay"></div>

        <div className="flex items-center justify-between px-20 relative z-10">
          
          {/* Left Text */}
          <h1
            ref={headingRef}
            className={`text-6xl font-extralight flex flex-col justify-start transition-colors leading-tight pb-2 ${
              animateText ? 'animate-reveal' : 'opacity-0'
            } group-hover:text-white text-black transition-colors`}
          >
            <div>Heard enough?</div>
            <div>Start building with XDC today</div>
          </h1>

          {/* Arrow */}
          <span className="arrow-slide">
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  )
}

export default SECTIONNINE
