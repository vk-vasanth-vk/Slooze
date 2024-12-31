import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import HomeSVG from "../components/HomeSVG";
import "./style.css";

export default function Home() {
  return (
    <>
      <header className="bg-gray-100">
        <nav className="flex p-6 justify-between items-center">
          {/* Left side: Logo and navigation */}
          <div className="flex items-center space-x-20">
            <div className="logo flex items-center">
              <img src="/slooze-logo.png" alt="logo" className="h-20" />
              <h1 className="tangerine-bold text-gray-700 text-5xl">Slooze</h1>
            </div>
            <ul className="flex space-x-10 text-gray-700 newsreader-font">
              <li>Product</li>
              <li>Company</li>
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
          <div className="flex w-50 h-[300px] border border-white ml-10 mr-10 mt-20 mb-10">
            <div className="basis-2/5 border border-white flex items-center justify-center">
              <img src="/ai-driven-insights.jpg" className="h-[250px] object-contain" alt="AI-driven insights" />
            </div>
            <div className="basis-3/5 border border-white px-10 py-5">
              <h2 className="text-2xl font-bold text-center">AI-Driven Insights</h2>
              <p className="text-2xl mt-5">Artificial intelligence to analyze historical data and predict future trends, such as demand fluctuations. Helps businesses plan better, reduce waste, and maintain optimal inventory levels by understanding patterns before they occur.</p>
             </div>
          </div>
          <div className="flex w-50 h-[300px] border border-white ml-10 mr-10 mt-20 mb-10">
            <div className="basis-3/5 border border-white px-10 py-5">
              <h2 className="text-2xl font-bold text-center">Real-Time Tracking</h2>
              <p className="text-2xl mt-5">Up-to-the-minute data on supply chain operations, allowing businesses to monitor shipments, production status, and delivery timelines in real time. Improves decision-making and responsiveness.</p>
            </div>
            <div className="basis-2/5 border border-white flex items-center justify-center">
              <img src="/real-time-tracking.jpg" className="h-[250px] object-contain" alt="Real-time tracking" />
            </div>
          </div>
          <div className="flex w-50 h-[300px] border border-white ml-10 mr-10 mt-20 mb-10">
            <div className="basis-2/5 border border-white flex items-center justify-center">
              <img src="/supply-chain.jpg" className="h-[250px] object-contain" alt="supply chain" />
            </div>
            <div className="basis-3/5 border border-white px-10 py-5">
              <h2 className="text-2xl font-bold text-center">End-to-End Visibility</h2>
              <p className="text-2xl mt-5">Comprehensive view of the entire supply chain, from the raw material sourcing stage to the final delivery to customers. Enhances transparency, allowing businesses to track the flow of goods, identify inefficiencies, and ensure timely deliveries.</p>
            </div>
          </div>
          <div className="flex w-50 h-[300px] border border-white ml-10 mr-10 mt-20 mb-10">
            <div className="basis-3/5 border border-white px-10 py-5">
              <h2 className="text-2xl font-bold text-center">Risk Mitigation</h2>
              <p className="text-2xl mt-5">Analyzing historical data and current trends, identifies potential risks or disruptions in the supply chain, such as delays, bottlenecks, or supplier issues. Allows businesses to take proactive steps to avoid or mitigate these challenges.</p>
            </div>
            <div className="basis-2/5 border border-white flex items-center justify-center">
              <img src="/risk-mitigation(2).avif" className="h-[250px] object-contain" alt="Risk mitigation" />
            </div>
          </div>
          <div className="mt-10 ml-[700px]">
            <button className="px-6 py-3 border border-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
              Learn more
            </button>
          </div>

        </section>
      </div>

      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">About the Company</h2>
        <p className="text-center mt-4">Achievements and history</p>
      </section>

      <footer className="py-10 bg-gray-800 text-white text-center">
        <p>Contact Details: Email, Phone, Address</p>
      </footer>

    </>
  );
}
