import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import HomeSVG from "../components/HomeSVG";
import "./style.css";

export default function Home() {
  return (
    <>
      <header className="bg-gray-100">
        <nav className="flex p-6 justify-between items-center">
          <div className="flex items-center space-x-20">
            <div className="logo flex items-center">
              <img src="/slooze-logo.png" alt="logo" className="h-20" />
              <h1 className="tangerine-bold text-gray-700 text-5xl">Slooze</h1>
            </div>
            <ul className="flex space-x-10 text-gray-700 newsreader-font">
              <li>Product</li>
              <li>Company</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* Right side: Login and Sign Up */}
          <div>
            <ul className="flex space-x-14 text-gray-700 newsreader-font">
              <li>
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
              </li>
              <li>
                Login
              </li>
              <li>
                Sign up
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="py-20 bg-gray-100 flex flex-col relative">
        {/* First Line: Text and SVG */}
        <div className="flex items-center">
          <div className="ml-10 text-black">
            <h1 className="font-bold helvetica-bold text-8xl" id="home-text">Your Supply Chain <br /> Choreographer!!</h1> <br />
            <h2 className="font-bold helvetica-bold text-4xl" id="home-text">To make supply chain as redundant as possible <br /> to build a resilient tomorrow.</h2>
          </div>

          <span className="ml-10">
            <HomeSVG />
          </span>
        </div>

        {/* Second Line: Button */}
        <div className="mt-10 ml-80">
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-black">
            Get Started
          </button>
        </div>
      </div>


      <div id="productSection">
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center">Streamline Your Supply Chain with Slooze's AI-Powered Solutions</h2>
          <div className="flex w-50 h-[300px]  border-white ml-10 mr-10 mt-20 mb-10">
            <div className="basis-2/5  border-white flex items-center justify-center">
              <img src="/ai-driven-insights.jpg" id="img" className="h-[250px] object-contain bg-white shadow-lg shadow-white rounded-md" alt="AI-driven insights" />
            </div>
            <div className="basis-3/5 border-white px-10 py-10">
              <h2 className="text-2xl font-bold text-center">AI-Driven Insights</h2>
              <p className="text-2xl mt-5">Artificial intelligence to analyze historical data and predict future trends, such as demand fluctuations. Helps businesses plan better, reduce waste, and maintain optimal inventory levels by understanding patterns before they occur.</p>
             </div>
          </div>
          <div className="flex w-50 h-[300px] ml-10 mr-10 mt-20 mb-10">
            <div className="basis-3/5 px-10 py-12">
              <h2 className="text-2xl font-bold text-center">Real-Time Tracking</h2>
              <p className="text-2xl mt-5">Up-to-the-minute data on supply chain operations, allowing businesses to monitor shipments, production status, and delivery timelines in real time. Improves decision-making and responsiveness.</p>
            </div>
            <div className="basis-2/5 flex items-center justify-center">
              <img src="/real-time-tracking.jpg" id="img" className="h-[250px] object-contain bg-white shadow-lg shadow-white rounded-md" alt="Real-time tracking" />
            </div>
          </div>
          <div className="flex w-50 h-[300px] ml-10 mr-10 mt-20 mb-10">
            <div className="basis-2/5 flex items-center justify-center">
              <img src="/supply-chain.jpg" id="img" className="h-[250px] object-contain bg-white shadow-lg shadow-white rounded-md" alt="supply chain" />
            </div>
            <div className="basis-3/5 px-10 py-10">
              <h2 className="text-2xl font-bold text-center">End-to-End Visibility</h2>
              <p className="text-2xl mt-5">Comprehensive view of the entire supply chain, from the raw material sourcing stage to the final delivery to customers. Enhances transparency, allowing businesses to track the flow of goods, identify inefficiencies, and ensure timely deliveries.</p>
            </div>
          </div>
          <div className="flex w-50 h-[300px] ml-10 mr-10 mt-20 mb-10">
            <div className="basis-3/5 px-10 py-10">
              <h2 className="text-2xl font-bold text-center">Risk Mitigation</h2>
              <p className="text-2xl mt-5">Analyzing historical data and current trends, identifies potential risks or disruptions in the supply chain, such as delays, bottlenecks, or supplier issues. Allows businesses to take proactive steps to avoid or mitigate these challenges.</p>
            </div>
            <div className="basis-2/5 flex items-center justify-center">
              <img src="/risk-mitigation(2).avif" id="img" className="h-[250px] object-contain bg-white shadow-lg shadow-white rounded-md" alt="Risk mitigation" />
            </div>
          </div>
          <div className="mt-10 ml-[700px]">
            <button className="px-6 py-3 border border-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
              Learn more
            </button>
          </div>

        </section>
      </div>

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
                <button className="px-6 py-3 border border-blue-500 text-black rounded-lg hover:bg-blue-500 hover:text-white">Demo</button>
                <button className="px-6 py-3 border border-blue-500 text-black rounded-lg hover:bg-blue-500 hover:text-white">Get Started</button>
              </div>
            </div>
        </section>
      </div>

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
                {/* <li>India.</li> */}
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
  );
}
