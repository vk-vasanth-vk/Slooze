import React from 'react'

const ProductSec = () => {
  return (
    <>
      <div className="productSection">
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
            <button className="px-6 py-3 border border-white glow-on-hover">
              Learn more
            </button>
          </div>

        </section>
      </div>
    </>
  )
}

export default ProductSec