import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="py-10 bg-gray-950 text-white text-center">
        <div>
          <div className="w-[1400px] h-[300px] mb-[50px] ml-16 flex align-center justify-around">
            <ul>
              <li className="text-gray-500 mb-10">Company</li>
              <li className="mb-2">About us</li>
              <li className="mb-2">Events</li>
              <li className="mb-2">Newsroom</li>
              <li className="mb-2">Careers</li>
            </ul>
            <ul>
              <li className="text-gray-500 mb-10">Community</li>
              <li className="mb-2">User Community</li>
              <li className="mb-2">Customer Stories</li>
              <li className="mb-2">Partnership</li>
              <li className="mb-2">Affiliate Program</li>
              <li className="mb-2">Documentation</li>
            </ul>
            <ul>
              <li className="text-gray-500 mb-10">Learn</li>
              <li className="mb-2">Training & Certification</li>
              <li className="mb-2">Academy</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Newsletter</li>
            </ul>
          </div>

          <div className="w-[1400px] h-[1px] bg-white mb-10 ml-[63px]"></div>
            <div className="w-[1400px] h-[200px] ml-[63px] flex justify-around items-start ">
              <ul>
                <li className="text-gray-500 mb-10">CONTACT US</li>
                <li className="newsreader-font">support@slooze.com</li>
                <li>+91-98765 43210</li>
              </ul>
              <ul>
                <li className="text-gray-500 mb-10">FIND US</li>
                <li className="newsreader-font">Slooze, Coimbatore<br />Tamil Nadu, India.</li>
              </ul>
              <ul>
                <li className="text-gray-500 mb-10">FOLLOW US ON</li>
                <li className="flex align-center"> 
                  <img src="/linkedin.png" alt="LinkedIn" className="h-8 w-8 mr-[10px]"/> <img src="/facebook.png" alt="Facebook" className="h-8 w-8 mr-[10px]"/>
                  <img src="/youtube.png" alt="YouTube" className="h-8 w-8 mr-[10px]"/> <img src="/instagram.png" alt="Instagram" className="h-8 w-8 mr-[10px]"/>
                  <img src="/twitter.png" alt="X" className="h-8 w-8 mr-[10px] bg-white"/> 
                </li>
              </ul>
            </div>
            <div className="logo flex flex-col items-center justify-center w-full h-[100px]">
              <div className="flex items-center justify-center">
                <img src="/slooze-logo.png" alt="logo" className="h-[50px]" />
                <h1 className="tangerine-bold text-white text-5xl">Slooze</h1>
              </div>
              <p className="text-center">© 2024, Slooze Corporation Pvt. Ltd. All Rights Reserved.</p>
            </div>
            <div className="flex justify-end mr-10">
              <ul className="flex space-x-4">
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer