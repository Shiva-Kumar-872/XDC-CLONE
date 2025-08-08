import React, { useEffect, useRef } from 'react'

const POWEREDBy = () => {
  const sectionRef = useRef(null)
  const logoRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          logoRefs.current.forEach((el, i) => {
            if (el) {
              el.style.animation = `fadeUp 0.8s ease-out forwards`
              el.style.animationDelay = `${i * 0.2 + 0.1}s`
            }
          })
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f8fbfc] py-24 z-10 overflow-hidden"
    >
      {/* 🔥 Embedded animation styles */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-hidden {
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>

      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-[45px] tracking-wider font-sans text-[#1e2a38] mb-16">
          Powered By XDC
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {[
            {
              src: 'https://images.prismic.io/xdcf/Z1IOaZbqstJ98Fwg_Archax_logo.png?auto=format,compress',
              alt: 'Archax',
              height: '171px',
            },
            {
              src: 'https://images.prismic.io/xdcf/71a40606-3540-4f71-99c2-6fa9cebc2c44_Comtech_Gold.png?auto=compress,format',
              alt: 'Comtech Gold',
              height: '100px',
            },
            {
              src: 'https://images.prismic.io/xdcf/ea16bec9-226f-48a3-be69-0133192fb25b_Plugin_Decentralized_Oracle.png?auto=compress,format',
              alt: 'Plugin Oracle',
              height: '100px',
            },
            {
              src: 'https://images.prismic.io/xdcf/daeefe78-f77a-4fa0-8c78-ae945ee8a403_Stasis.png?auto=compress,format',
              alt: 'Stasis',
              height: '100px',
            },
          ].map((logo, i) => (
            <img
              key={i}
              ref={(el) => (logoRefs.current[i] = el)}
              src={logo.src}
              alt={logo.alt}
              style={{ height: logo.height }}
              className="logo-hidden"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default POWEREDBy
