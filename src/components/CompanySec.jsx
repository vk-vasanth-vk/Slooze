import React from 'react'

const CompanySec = () => {
  return (
    <>
      <div>
        <section className="py-20 bg-gray-50">
          <div className="w-100 h-[560px] mb-20 px-[150px] py-10">
            <h1 className="font-bold tangerine-regular text-7xl text-gray-900">Who are we?</h1>
            <h2 className="text-2xl text-blue-500">We’re a dynamic startup on a mission to revolutionize the Supply Chain Industry. </h2> <br />
            <div className="flex align-center">
              <div className="w-[700px] h-[350px]">
                  <p className="text-2xl text-gray-900"><span className="tangerine-bold text-gray-700 text-4xl">Slooze</span> is a cutting-edge technology company dedicated to revolutionizing supply chain management. We are a team of passionate innovators, engineers, and strategists working together to simplify and enhance supply chain operations for businesses of all sizes.</p>
                  <br/>
                  <p className="text-2xl text-gray-900">We believe in the power of technology to solve real-world problems and are committed to building intelligent, user-friendly, and efficient solutions. Our goal is to empower businesses to achieve greater transparency, reduce costs, and drive growth with our AI-driven platform.</p>
              </div>
              <div className="h-[400px] w-[310px] ml-[200px]">
              <div className="flex justify-center w-[300px] h-[300px]">
                <img
                  src="Slooze-founder-bg.png"
                  className="rounded-full shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]"
                />
              </div> <br />
                <h1 className="text-gray-900 px-[50px] text-2xl">Harikrishna Prabhu</h1>
                <h1 className="text-gray-900 px-[95px]">Founder & CEO</h1>
                <h1 className="text-gray-900 px-[125px]">Slooze</h1>
              </div>
            </div>
            </div>
            <div className="w-100 h-[500px] mb-20 px-[150px] py-10">
              <h1 className="font-bold tangerine-regular text-7xl text-gray-900">What we're doing?</h1>
              <div className="w-[730px] h-[350px]">
                <p className="text-2xl text-gray-900 py-5">
                 We are revolutionizing supply chain management by leveraging AI-powered solutions to optimize operations and improve efficiency. Our platform provides real-time insights, helping businesses make smarter, data-driven decisions. 
                 <br /><br />
                 We focus on seamless integration with existing systems and promote sustainable practices to reduce waste and support responsible sourcing. By addressing unique business challenges, we aim to empower organizations to achieve their goals with smarter, faster, and more sustainable solutions.
                </p>
              </div>
            </div>
            <div className="w-100 h-[100px] mb-20 flex flex-col items-center justify-center">
              <h2 className="text-black text-2xl mb-4">Empower Your Journey with Us Today!</h2>
              <div className="w-[500px] h-[100px] px-20 py-6 flex justify-around">
                <button className="px-6 py-3 border border-blue-500 text-black rounded-lg hover:bg-blue-500 hover:text-white transition duration-1000">Demo</button>
                <button className="px-6 py-3 border border-blue-500 text-black rounded-lg hover:bg-blue-500 hover:text-white transition duration-1000">Get Started</button>
              </div>
            </div>
        </section>
      </div>
    </>
  )
}

export default CompanySec