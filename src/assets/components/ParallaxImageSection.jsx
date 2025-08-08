import React, { useEffect, useRef, useState } from 'react'
import SectionAfterParallaxButton from './SectionAfterParallaxButton'

const ParallaxImageSection = () => {
  const sectionRef = useRef(null)
  const buttonRef = useRef(null)
  const [textAnimated, setTextAnimated] = useState(false)
  const [buttonAnimated, setButtonAnimated] = useState(false)

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !textAnimated) {
          setTextAnimated(true)
          sectionObserver.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }

    return () => sectionObserver.disconnect()
  }, [textAnimated])

  useEffect(() => {
    const buttonObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !buttonAnimated) {
          setButtonAnimated(true)
          buttonObserver.disconnect()
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px'
      }
    )

    if (buttonRef.current) {
      buttonObserver.observe(buttonRef.current)
    }

    return () => buttonObserver.disconnect()
  }, [buttonAnimated])

  return (
    <div
      ref={sectionRef}
      className="relative bg-white z-10 w-full h-auto py-24"
    >
      <style>
        {`
          @keyframes smoothSlideIn {
            0% {
              transform: translateX(40px);
              opacity: 0;
            }
            60% {
              transform: translateX(0px);
              opacity: 1;
            }
            100% {
              transform: translateX(0px);
              opacity: 1;
            }
          }

          .animate-smooth-slide-in {
            animation: smoothSlideIn 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        `}
      </style>

      <div className="flex items-center flex-col ml-0">
        <div className="flex justify-start text-black text-6xl ml-20 mr-56 font-sans -tracking-widest font-light mb-16">
          <div className="ml-0">
            <p
              className={`indent-32 text-[66px] font-sans tracking-wide transition-opacity duration-700 ${
                textAnimated
                  ? 'animate-smooth-slide-in'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              XDC Network is an enterprise-grade, open-source blockchain protocol. An EVM-compatible chain with smart contract capabilities, it is uniquely suited to revolutionize, decentralize, and liquify the trade finance industry through the tokenization of real-world assets and financial instruments.
            </p>

            <div className="mt-16 flex items-center justify-start gap-16">
              <div ref={buttonRef}>
                <SectionAfterParallaxButton triggerAnimation={buttonAnimated} />
              </div>

              <div className="flex items-center justify-start gap-3">
                <svg
                  className="w-6 h-8 text-black font-extralight"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M10.29 3.86l-8.1 14A1 1 0 003 19h18a1 1 0 00.87-1.5l-8.1-14a1 1 0 00-1.74 0z"
                  />
                </svg>
                <div className="font-extralight text-[22px] tracking-wide">
                  <a href="">
                    <u>What is a blockchain?</u>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParallaxImageSection
