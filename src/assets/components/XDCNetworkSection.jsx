import React, { useEffect, useRef, useState } from 'react'
import SECTIONSixButton from './SECTIONSixButton'
const XDCNetworkSection = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.4 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-screen min-h-[1275px] overflow-hidden z-40 bg-[#141619]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://marketplace.canva.com/EAFJ-6rl9Q8/1/0/1600w/canva-blue-chalk-inspirational-quotes-desktop-wallpaper-_W9QJokBsD0.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-[6px] scale-105"
        />
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes paragraphReveal {
            0% {
              transform: translateX(80px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .paragraph-animate {
            opacity: 0;
            transform: translateX(80px);
            animation: paragraphReveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
            animation-delay: 0.2s;
          }

          @keyframes underlineGrow {
            0% { width: 0%; }
            100% { width: 100%; }
          }

          .underline-animate {
            animation: underlineGrow 1.2s ease-out forwards;
          }

          @keyframes arrowGlide {
            0% { transform: translateX(-100%); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }

          .arrow-hover {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            pointer-events: none;
          }

          .read-link:hover .arrow-hover {
            animation: arrowGlide 1.4s cubic-bezier(0.65, 0, 0.35, 1);
          }
        `}
      </style>

      {/* Content */}
      <div className="w-full h-full flex items-start px-20 pt-32">
        <div className="text-white">
          {/* Animated Paragraph */}
          <div className={`text-[64px] leading-tight tracking-wide font-extralight mt-4 max-w-5xl ${visible ? 'paragraph-animate' : 'invisible'}`}>
            The RWA and trade finance blockchain is steadily building for lasting success
          </div>

          {/* Subheading + Underline + CTA */}
          <div className={`mt-24 ${visible ? '' : 'invisible'}`}>
            <h1
              className="font-light tracking-wider text-3xl max-w-96 paragraph-animate"
              style={{ animationDelay: '1.2s' }}
            >
              XDC Network Caps Six Years of Live Mainnet
            </h1>
            <div className="mt-2 h-[2px] bg-white w-full underline-animate"></div>

            {/* READ NOW with animated arrow */}
            {/* <SECTIONSixButton /> */}
            <SECTIONSixButton/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default XDCNetworkSection
