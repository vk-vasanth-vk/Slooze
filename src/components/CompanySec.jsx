import React from 'react'

const CompanySec = () => {
  return (
    <>
      <div>
        <div className="py-20 bg-gray-50">
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
            <div className="w-100 h-[500px] mb-20 px-[150px] py-10 flex justify-center">
              <div className=''>
                <h1 className="font-bold tangerine-regular text-7xl text-gray-900">What we're doing?</h1>
                <div className="w-[730px] h-[350px]">
                  <p className="text-2xl text-gray-900 py-5">
                  We are revolutionizing supply chain management by leveraging AI-powered solutions to optimize operations and improve efficiency. Our platform provides real-time insights, helping businesses make smarter, data-driven decisions. 
                  <br /><br />
                  We focus on seamless integration with existing systems and promote sustainable practices to reduce waste and support responsible sourcing. By addressing unique business challenges, we aim to empower organizations to achieve their goals with smarter, faster, and more sustainable solutions.
                  </p>
                </div>
              </div>
              <div className="w-[500px] h-[250px] mt-[100px] rounded-lg shadow-lg shadow-black overflow-hidden">
                <img src="company.jpg" alt="Company" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-100 h-[100px] mb-20 flex flex-col items-center justify-center">
              <h2 className="text-black text-2xl mb-4">Empower Your Journey with Us Today!</h2>
              <div className="w-[500px] h-[100px] px-20 py-6 flex justify-around">
                
                {/* <button className="px-6 py-3 border border-blue-500 text-black rounded-lg hover:bg-blue-500 hover:text-white transition duration-1000">Demo</button> */}
                <div className="mt-[50px] mr-[100px] wrapper">
                  <div className="link_wrapper">
                    <a href="#">Demo</a>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <button className="px-6 py-3 border border-blue-500 text-black rounded-lg hover:bg-blue-500 hover:text-white transition duration-1000">Get Started</button> */}
                <div className="mt-[50px] mr-[100px] wrapper">
                  <div className="link_wrapper">
                    <a href="#">Get started</a>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CompanySec