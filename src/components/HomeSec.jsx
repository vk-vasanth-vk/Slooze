import React from 'react'
import HomeSVG from "./HomeSVG";

const HomeSec = () => {
  return (
    <>
      <div className="py-15 bg-gray-100 flex flex-col relative homeSec">
        {/* First Line: Text and SVG */}
        <div className="flex items-center">
          <div className="ml-10 mr-[100px] text-black">
            <h1 className="font-bold helvetica-bold text-8xl text-animation" id="home-text">Your Supply Chain <br /> Choreographer!!</h1> <br />
            <h2 className="font-bold helvetica-bold text-4xl" id="home-text">To make supply chain as redundant as possible <br /> to build a resilient tomorrow.</h2>
          </div>

          <div className="w-[450px] h-[450px]">
            <HomeSVG />
          </div>
        </div>

        {/* Second Line: Button */}
        <div className="mt-2 ml-80">
          {/* <button className="px-6 py-3 mr-[70px] bg-blue-500 text-white font-bold rounded-lg hover:bg-black transition duration-1000">
            Demo
          </button> */}
          <button className="px-6 py-3 mb-[50px] bg-blue-500 text-white font-bold rounded-lg hover:bg-black transition duration-1000">
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}

export default HomeSec