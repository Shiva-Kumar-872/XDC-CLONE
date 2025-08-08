import React, { useEffect, useState, useRef } from 'react'
import ParallaxImageSection from '../components/ParallaxImageSection'
import HeroSectionButton from '../components/HeroSectionButton'
import SectionFour from '../components/SectionFour'
import POWEREDBy from '../components/POWEREDBy'
import XDCNetworkSection from '../components/XDCNetworkSection'
import WHATSHappening from '../components/WHATSHappening'
import SECTIONEIGHT from '../components/SECTIONEIGHT'
import SECTIONNINE from '../components/SECTIONNINE'
import FOOTER from '../components/FOOTER'

// 🔠 Utility to split text into animated spans
const splitText = (text) =>
  text.split('').map((char, i) => (
    <span key={i} className="letter-wrapper">
      <span className="letter-inner">{char}</span>
    </span>
  ))

export default function HomePage() {
  const [radius, setRadius] = useState(231)
  const frame = useRef(0)
  const parallaxRef = useRef(null)

  useEffect(() => {
    const centerX = 1678 / 2
    const centerY = 231
    const dx = Math.max(centerX, 1678 - centerX)
    const dy = Math.max(centerY, 800 - centerY)
    const maxRadius = Math.hypot(dx, dy)

    const onScroll = () => {
      const t = Math.min(window.scrollY / 500, 1)
      const newR = 231 + (maxRadius - 231) * t

      if (frame.current) window.cancelAnimationFrame(frame.current)
      frame.current = window.requestAnimationFrame(() => {
        setRadius(newR)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame.current) window.cancelAnimationFrame(frame.current)
    }
  }, [])

  const clipPath = `circle(${radius}px at 50% 231px)`

  return (
    <>
      {/* Hero Section – Sticky */}
      <div className="sticky top-0 -z-50 min-h-[85vh] bg-[#141619] pt-32">
        <style>{`
          .letter-wrapper {
            display: inline-block;
            overflow: hidden;
            vertical-align: bottom;
          }

          .letter-inner {
            display: block;
            transform: translateY(100%);
            animation: letterRise 1.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          }

          @keyframes letterRise {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0%);
              opacity: 1;
            }
          }
        `}</style>

        <div className="flex items-center justify-center text-center text-[#9ff3ff] font-extralight">
          <div>
            <h1 className="font-sans font-thin text-[144px] leading-[0.9] tracking-tighter mt-12">
              {splitText('Success Depends on')}
            </h1>
            <h1 className="font-playfair text-[144px] leading-[0.9] tracking-tighter mt-[-12px] font-extralight">
              {splitText('Your Network')}
            </h1>
            <p className="mt-36 font-sans font-extralight tracking-normal text-[#8ed9e4] text-[21px] max-w-xl mx-auto">
              {splitText('A fast and secure blockchain that supports trade finance, real-world asset tokenization, and enterprise applications.')}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-16">
          <HeroSectionButton />
        </div>
      </div>

      {/* Scroll-Driven Globe Fill with Parallax */}
      <div className="relative w-screen h-[855px] bg-[#141619] overflow-hidden z-40 rounded-[1px]">
        <div
          ref={parallaxRef}
          className="absolute inset-0 will-change-transform will-change-clip-path transition-transform duration-[800ms] ease-out flex items-center justify-center overflow-hidden"
          style={{
            clipPath,
            WebkitClipPath: clipPath
          }}
        >
          <div
            className="parallax-layer absolute inset-0 transition-transform duration-[900ms] ease-out flex items-center justify-center"
            data-depth="0.04"
          >
            <img
              src="https://xdc.org/_next/static/media/leader.f26e3496.jpeg"
              alt="Leader"
              className="w-[120%] h-[120%] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="relative overflow-visible bg-[#141619] z-30">
        <ParallaxImageSection />
      </div>

      <div className="relative z-20 mt-0">
        <SectionFour />
      </div>

      <div className="z-50 mt-0">
        <POWEREDBy />
      </div>

      <div className="z-50">
        <XDCNetworkSection />
      </div>

      <div>
        <WHATSHappening />
      </div>

      <SECTIONEIGHT />
      <SECTIONNINE />
      <FOOTER />
    </>
  )
}
