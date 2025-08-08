import React, { useEffect } from 'react'

const WHATSHappening = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.3 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative z-10 bg-white isolate">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between mx-28 pt-12 font-light tracking-wider text-black font-sans">
        <h1 className="text-[55px]">What's Happening</h1>
        <h1 className="text-[55px]">1/8</h1>
      </div>

      {/* Divider */}
      <div className="mx-28 pt-7">
        <hr />
      </div>

      {/* Cards Section */}
      <div className="CARDS relative z-10 mx-28 mt-14 overflow-hidden">
        <div className="flex flex-row gap-6 items-start overflow-hidden h-56">
          {[
            {
              img: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5ld3N8ZW58MHx8MHx8fDA%3D',
              text: 'XDC Network Caps Six years of Live Mainnet',
            },
            {
              img: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
              text: "Brazil's VERT Capital to Tokenize $1B in Real-World Assets on XDC Network",
            },
            {
              img: 'https://newhorizonindia.edu/wp-content/uploads/2024/10/download-20.png',
              text: "Why Tokenization Could Outgrow Bitcoin: Crypto's Biggest Success Story",
            },
          ].map((card, i) => (
            <React.Fragment key={i}>
              <div
                className="fade-in transition-all duration-700 ease-out opacity-0 translate-y-10"
                style={{ transitionDelay: `${i * 300}ms` }}
              >
                <img
                  src={card.img}
                  alt={`News ${i + 1}`}
                  className="w-[250px] h-auto object-cover shadow-md"
                />
              </div>

              <div
                className="fade-in transition-all duration-700 ease-out opacity-0 translate-y-10 text-3xl w-96 ml-4 font-extralight"
                style={{ transitionDelay: `${i * 300 + 150}ms` }}
              >
                {card.text}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Overlapping Buttons on Right Side */}
        <div className="relative mt-16 flex justify-end pr-28">
          <div className="relative w-[260px] h-[70px]">
           {/* Button 1 */}
<div
  className="z-10 fade-in absolute top-0 left-0 transition-all duration-700 ease-out opacity-0 translate-y-10"
  style={{ transitionDelay: `1000ms` }}
>
  <button className="group flex items-center justify-center gap-2 w-[130px] h-[59px] px-7 py-2 border border-black rounded-full bg-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="black"
      className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-x-1"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7 7l-7-7 7-7" />
    </svg>
  </button>
</div>

            {/* Button 2 (overlapping slightly) */}
            <div
              className="  fade-in absolute top-0 left-[100px] transition-all duration-700 ease-out opacity-0 translate-y-10"
              style={{ transitionDelay: `1150ms` }}
            >
              <button className="group flex items-center justify-center gap-2 w-[130px] h-[59px] px-7 py-2 border border-black/40 rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="black"
                  className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WHATSHappening
