import React, { useEffect, useRef, useState } from 'react'
import ONEButton from './THREEBUTTONS/THREEButtons'
import TWOButton from './THREEBUTTONS/THREEButtons'
import THREEButtons from './THREEBUTTONS/THREEButtons'

const SectionFour = () => {
  const headingRef = useRef(null)
  const imageRef = useRef(null)
  const contentRefs = useRef([])
  const [animateHeading, setAnimateHeading] = useState(false)
  const [animateImage, setAnimateImage] = useState(false)
  const [animateContent, setAnimateContent] = useState(false)

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateHeading(true)
          headingObserver.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateImage(true)
        } else {
          setAnimateImage(false)
        }
      },
      { threshold: 0.5 }
    )

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateContent(true)
          contentObserver.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (headingRef.current) headingObserver.observe(headingRef.current)
    if (imageRef.current) imageObserver.observe(imageRef.current)
    if (contentRefs.current[0]) contentObserver.observe(contentRefs.current[0])

    return () => {
      headingObserver.disconnect()
      imageObserver.disconnect()
      contentObserver.disconnect()
    }
  }, [])

  return (
    <div className="relative z-[100] mt-[-1px]">
      <style>
        {`
          @keyframes slideInFromRight {
            0% {
              transform: translateX(80px);
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

          @keyframes slideUpImage {
            0% {
              transform: translateY(60px);
              opacity: 0;
            }
            60% {
              transform: translateY(0px);
              opacity: 1;
            }
            100% {
              transform: translateY(0px);
              opacity: 1;
            }
          }

          .animate-slide-in {
            animation: slideInFromRight 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }

          .animate-slide-up {
            animation: slideUpImage 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        `}
      </style>

      <div className="h-[1300px] bg-[#dbe6ea] flex justify-start flex-row top-0">
        {/* Left Box */}
        <div className="w-[1250px] flex items-center justify-center">
          <div className="flex items-center flex-col justify-center border-[17px] border-[#f8fbfc] h-[587px] w-[354px] rounded-tl-full rounded-tr-full">
            <div
              className={`w-[316px] h-[279px] flex items-center justify-center relative overflow-hidden ${
                animateImage ? 'animate-slide-up' : 'opacity-0'
              }`}
              ref={imageRef}
            >
              <img src="https://xdc.org/_next/static/media/vr-headset@2x.aa0802bc.png" alt="" />
            </div>
            <div className="w-full h-auto mt-5" ref={headingRef}>
              <h1
                className={`h-[34px] w-[230px] text-[46px] ml-2 font-light ${
                  animateHeading ? 'animate-slide-in' : 'opacity-0'
                }`}
              >
                Get Started <br />
                <i className="font-serif">With XDC</i>
              </h1>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full flex">
          <div className="max-w-[830px] h-[355px] mt-32" ref={(el) => (contentRefs.current[0] = el)}>
            {/* Enterprise */}
            <div>
              <h1 className={`text-[45px] tracking-wide font-light font-sans mt-12 ${animateContent ? 'animate-slide-in' : 'opacity-0'}`}>
                Enterprise
              </h1>
              <p className={`text-2xl tracking-wide font-light font-sans mt-5 ${animateContent ? 'animate-slide-in' : 'opacity-0'}`}>
                The XDC Network is a groundbreaking blockchain with impressive speed, scalability, low fees, and military-grade security. Using XDC Network, businesses can improve their record keeping, exchange data and transfer assets more efficiently and more securely.
              </p>
              <a className="h-[107px] mt-6 text-2xl tracking-wide font-light font-sans flex items-center">
                <ONEButton />
              </a>
            </div>

            {/* Trade Finance */}
            <div>
              <h1 className={`text-[45px] tracking-wide font-light font-sans mt-12 ${animateContent ? 'animate-slide-in' : 'opacity-0'}`}>
                Trade Finance
              </h1>
              <p className={`text-2xl tracking-wide font-light font-sans mt-5 ${animateContent ? 'animate-slide-in' : 'opacity-0'}`}>
                The XDC Network sets a benchmark for digitizing trade finance by enabling the tokenization of diverse trade finance instruments and assets.
              </p>
              <a className="h-[107px] mt-6 text-2xl tracking-wide font-light font-sans flex items-center">
                <TWOButton />
              </a>
            </div>

            {/* Developers & Creators */}
            <div>
              <h1 className={`text-[45px] tracking-wide font-light font-sans mt-12 ${animateContent ? 'animate-slide-in' : 'opacity-0'}`}>
                Developers & Creators
              </h1>
              <p className={`text-2xl tracking-wide font-light font-sans mt-5 ${animateContent ? 'animate-slide-in' : 'opacity-0'}`}>
                The XDC Network is an enterprise-grade, open-source and EVM-compatible Layer 1 blockchain. Geared to accommodate any EVM tool set, developers can carry their skills from other chains onto the XDC Network.
              </p>
              <a className="ml-16">
                <div className="h-[107px] mt-6 text-2xl tracking-wide font-light font-sans flex items-center">
                  <THREEButtons />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFour
