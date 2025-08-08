import React, { useEffect, useState, useRef } from 'react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const updateNavbarVisibility = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current

      if (Math.abs(delta) < 10) {
        ticking.current = false
        return
      }

      if (delta > 0 && currentY > 100) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      lastScrollY.current = currentY
      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavbarVisibility)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="list-none w-full bg-[#141619] text-[#9ff3ff] h-[139px]">
        <ul>
          <li>
            <div className="flex items-center justify-center">
              <div className="flex justify-between items-center w-full h-[139px]">
                {/* Logo */}
                <div className="h-[34px] w-[95px] font-black ml-24">
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 34" fill="none" aria-label="XDC" focusable="false">
                      <path
                        fill="currentColor"
                        stroke="none"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.9,0.1L22.9,16.5L13.7,17.4L7.6,0C6.1,0 4.7,-0.7 3.5,-2.2C-0.7,7 -0.7,25.3 -1.8,26.8C-3,28.3 -4.4,29 -5.9,29H1.3C0.5,29 0.1,28.7 0,28C0,27.6 0.2,27.2 0.5,26.8L11.9,9.6L1.1,2.4C0.8,1.9 0.7,1.6 0.7,1.2C0.7,0.5 1.1,0.1 1.9,0.1H7C8.6,0.1 10,0.8 11.2,2.3L16.5,10.6L22.9,2.3C25.2,0.9 26.6,0.1 28.2,0.1H29.9L37.7,0.1ZM94.2,31.5C94.2,32.8 93.1,33.9 91.8,33.9H81.1C74.2,33.9 69.3,32.5 66.1,29.8C64.7,28.6 63.6,27 62.9,25.1C63.7,22.8 64.2,20.1 64.1,17C64.1,13.9 63.7,11.2 62.8,8.8C62.1,7 64.7,5.4 66.1,4.1C69.2,1.4 74.2,0 81,0H92.6C93.9,0 95,1.1 95,2.4V6.7H81.4C77.2,6.7 74.3,7.5 72.8,9C71.3,10.6 70.5,13.2 70.5,17C70.5,20.7 71.3,23.3 72.8,24.9C74.3,26.4 77.2,27.2 81.5,27.2H94.3V31.5H94.2ZM61.3,8.9C61.6,9.6 61.9,10.4 62.1,11.2C62.5,13.1 62.7,15 62.7,17C62.7,18.9 62.3,20.9 62.1,21.8C61.9,22.6 61.6,23.4 61.3,24.1C60.6,26 59.5,27.6 58.1,28.9C54.9,31.6 50,32.9 43.2,32.9H38.5C36.9,32.9 35.3,32.9 33.7,32.9H28.4C26.2,32.9 24,32.9 21.8,32.9H31.5C35.7,32.9 38.6,32.2 40.1,30.6C41.7,29.1 42.4,26.4 42.4,22.7C42.4,19 41.7,16.3 40.1,14.8C38.6,13.2 35.7,12.5 31.5,12.5H22.7L37.7,0.1C49.9,0.1 54.9,1.4 58,4.1C59.5,5.4 60.5,7 61.3,8.9ZM31.5,25.1L24.8,16.6L31.5,8L31.5,25.1Z"
                      />
                    </svg>
                  </a>
                </div>

                {/* Menu Items */}
                <div className="flex justify-between items-center gap-14 text-[16px] font-sans leading-tight font-extralight ml-28">
                  {['Network', 'Solutions', 'Build on XDC', 'Resources', 'Community'].map((item, i) => (
                    <div key={i} className="text-[22px]">
                      <a href="">
                        <div className="flex items-center justify-between gap-2.5">
                          <div>{item}</div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 4" fill="none" className="w-[8px] h-[4px] transform transition-transform duration-400 hover:rotate-180">
                              <path d="M1 1L4 3L7 1" stroke="#9ff3ff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}

                  {/* Search */}
                  <div className="flex justify-between gap-0.5">
                    <div className="flex items-center mr-32 border border-[#9ff3ff] p-7 m-5 w-[276px] h-[56px]">
                      <div className="flex justify-between items-center gap-7">
                        <input className="focus:outline-none focus:ring-0 bg-transparent text-[#9ff3ff]" type="text" placeholder="Search XDC" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <g transform="scale(-1,1) translate(-24,0)">
                            <circle cx="11" cy="11" r="7" stroke="#9ff3ff" strokeWidth="1.5" />
                            <line x1="16" y1="16" x2="21" y2="21" stroke="#9ff3ff" strokeWidth="1.5" strokeLinecap="round" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
