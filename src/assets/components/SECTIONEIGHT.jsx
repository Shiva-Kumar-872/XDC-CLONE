import React, { useEffect, useRef, useState } from 'react'
import SECTIONEIGHTBUTTON from './SECTIONEIGHTBUTTON'
import SECTIONEIGHTBUTTONTWO from './SECTIONEIGHTBUTTONTWO'

const SectionFour = () => {
  const imageRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)

  const [animateImage, setAnimateImage] = useState(false)
  const [animateHeading, setAnimateHeading] = useState(false)
  const [animateParagraph, setAnimateParagraph] = useState(false)

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animateImage) {
          setAnimateImage(true)
          imageObserver.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animateHeading) {
          setAnimateHeading(true)
          headingObserver.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const paragraphObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animateParagraph) {
          setAnimateParagraph(true)
          paragraphObserver.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (imageRef.current) imageObserver.observe(imageRef.current)
    if (headingRef.current) headingObserver.observe(headingRef.current)
    if (paragraphRef.current) paragraphObserver.observe(paragraphRef.current)

    return () => {
      imageObserver.disconnect()
      headingObserver.disconnect()
      paragraphObserver.disconnect()
    }
  }, [animateImage, animateHeading, animateParagraph])

  return (
    <div className="relative z-[100] mt-[-1px]">
      <style>
        {`
          @keyframes zoomOutImage {
            0% {
              transform: scale(1.2);
              opacity: 0;
            }
            60% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

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

          .animate-zoom-out {
            animation: zoomOutImage 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }

          .animate-slide-in {
            animation: slideInFromRight 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        `}
      </style>

      <div className="min-h-screen bg-white flex flex-row">
        
        {/* Left Side: Full image container */}
        <div className="w-[1670px] flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img
              ref={imageRef}
              src="https://images.prismic.io/xdcf/a673b5d6-a48e-43ee-993d-d8925d88d387_2.jpeg?auto=compress,format"
              alt="Full Left Visual"
              className={`w-full h-full object-cover ${
                animateImage ? 'animate-zoom-out' : 'opacity-0'
              }`}
            />
          </div>
        </div>

        {/* Right Side: Text and buttons */}
        <div className="w-full flex">
          <div className="max-w-[830px] mt-32 mb-20">
            <div className="mx-32">
              
              {/* Heading */}
              <div className="flex items-center justify-start" ref={headingRef}>
                <h1
                  className={`text-[45px] tracking-wide font-light font-sans mt-12 ${
                    animateHeading ? 'animate-slide-in' : 'opacity-0'
                  }`}
                >
                  <div className="font-light font-sans">Blockchain Learning</div>
                  <div><i className="font-thin font-sans">Open for Everyone</i></div>
                </h1>
              </div>

              {/* Paragraph */}
              <div ref={paragraphRef}>
                <p
                  className={`text-[20px] tracking-wide font-light font-sans mt-5 ${
                    animateParagraph ? 'animate-slide-in' : 'opacity-0'
                  }`}
                >
                  Our community encourages collaboration between a diverse range of developers, participants, and stakeholders in the expanding XDC ecosystem.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="h-[107px] flex-col text-2xl tracking-wide font-light font-sans flex items-center justify-center mx-32 mt-44">
              <SECTIONEIGHTBUTTON />
              <SECTIONEIGHTBUTTONTWO />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFour
