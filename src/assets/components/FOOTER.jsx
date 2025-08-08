import React from 'react'

const FOOTER = () => {
  return (
    <div className='relative z-10 isolate h-[642px] bg-[#dbe6ea] flex flex-col'>
      {/* Hover Animation Styles */}
      <style>{`
        .hover-animate {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }

        .hover-animate .top-text {
          display: block;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .hover-animate .bottom-text {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          transition: transform 0.5s ease, opacity 0.5s ease;
          opacity: 0;
        }

        .hover-animate:hover .top-text {
          transform: translateY(-100%);
          opacity: 0;
        }

        .hover-animate:hover .bottom-text {
          transform: translateY(-100%);
          opacity: 1;
        }
      `}</style>

      <div className='flex flex-row'>
        {/* Left Section */}
        <div className='w-[662px] ml-20 pt-24'>
          <h1 className='text-3xl font-light'>
            Sign up for important XDC Network announcements & developments at XDC Foundation.
          </h1>

          <div className='mt-20 flex'>
            <input
              className='outline-0 text-[20px] font-extralight tracking-wider'
              type="text"
              placeholder='Enter email address'
            />
            <button>
              <svg className="w-96 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="black"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className='mt-3 mr-40'><hr /></div>

          <div className='text-[28px] font-extralight mt-16'>Stay tuned on</div>
          <div className='mt-5 flex flex-row items-center justify-start gap-5 font-light text-[21px]'>
            {['LinkedIn', 'Youtube', 'X', 'Github', 'Spotify', 'iHeart'].map((item, i) => (
              <div key={i} className="hover-animate text-[21px] font-light relative">
                <span className="top-text">{item}</span>
                <span className="bottom-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full font-light'>
          <div className='flex flex-row items-center justify-center gap-12 mt-20'>
            {/* ABOUT XDC */}
            <div className='w-[230px] h-[152px] text-[20px]'>
              <h1 className='font-light text-[17px]'>ABOUT XDC</h1>
              {['History', 'Disclaimer & Terms of Use', 'Privacy Policy'].map((item, i) => (
                <div key={i} className={`mt-${i === 0 ? '7' : '3'} hover-animate relative`}>
                  <span className="top-text">{item}</span>
                  <span className="bottom-text">{item}</span>
                </div>
              ))}
            </div>

            {/* RESOURCES */}
            <div className='w-[230px] h-[152px] text-[20px]'>
              <h1 className='font-light text-[17px]'>RESOURCES</h1>
              {['Brand Assets', 'Get in touch', 'Project PR Support'].map((item, i) => (
                <div key={i} className={`mt-${i === 0 ? '7' : '3'} hover-animate relative`}>
                  <span className="top-text">{item}</span>
                  <span className="bottom-text">{item}</span>
                </div>
              ))}
            </div>

            {/* USE XDC */}
            <div className='w-[230px] h-[152px] text-[20px]'>
              <h1 className='font-light text-[17px]'>USE XDC</h1>
              {['Ecocsystem', 'XDC.dev', 'XDC Network Forum'].map((item, i) => (
                <div key={i} className={`mt-${i === 0 ? '7' : '3'} hover-animate relative`}>
                  <span className="top-text">{item}</span>
                  <span className="bottom-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-row items-center justify-center gap-5 font-light text-[14px] mt-24'>
        <span>©2025 XDC Foundation, All Rights Reserved</span>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  )
}

export default FOOTER
