// import React, { useState } from 'react'
// import { FaQuoteRight } from "react-icons/fa";
// const Section = () => {

//   return (
//     <section className='md:px-25 md:py-10 '>
//       <div className='bg-blue-900 rounded-xl text-white md:h-27 sm:mx-10 sm:h-auto'>
//       <div>
//           <h2 className='md:px-10 pt-4 text-xl sm:px-10 sm:mb-2'>Get AI-powered feedback on every solution submission</h2>
//         <p className='text-md px-10'>Join thousands of developers getting personalized insights with every submission to level up faster.</p>
        
//          <div className='md:flex md:justify-end items-center px-10 md:mt-[-50px] sm:py-4 '><button type='submit' onClick= {() => window.location.href ="https://www.frontendmentor.io/pro"} className='uppercase sm:w-125 md:w-50 text-lg bg-white text-blue-800 px-5 h-10 rounded-2xl'>Learn about pro</button></div>
//       </div>
//       </div>


//       <div className='md:py-10 md:flex gap-10 sm:py-5'>
//         <div className='bg-zinc-200 md:w-150 px-5 py-3 rounded-2xl md:h-auto md:ml-10 sm:px-10 sm:mx-10'>
//             <h2 className='text-lg '>"I highly recommend Frontend Mentor. Skip the search for project ideas and dive into ready-made challenges that help you level up as a developer."</h2>
//             <div className='flex place-content-between'>
//                 <div className='flex pt-5'>
//                     <img src='public/man-3.jpg' alt='Man-picture' className='w-16 h-15 rounded-[300px] '/>
//                <div> <h2 className='text-blue-900 px-3 text-lg font-bold mt-[-5px]'>Kevin Powell</h2>
//             <h1 className='px-3 text-md font-semibold'>Web Developer & YouTuber</h1></div>
//             </div>
//                 <h3 className='text-gray-400 pt-7 px-3'><FaQuoteRight /></h3>
//                 </div>

//         </div>
//          <div className='bg-zinc-200 md:w-150 px-5 py-3 rounded-2xl md:h-auto sm:px-10 sm:mx-10 sm:my-5 md:my-0'>
//             <h2 className='text-lg '>"I highly recommend Frontend Mentor. Skip the search for project ideas and dive into ready-made challenges that help you level up as a developer."</h2>
//             <div className='flex place-content-between'>
//                 <div className='flex pt-5 '>
//                     <img src='public/man-1.jpg' alt='Man-picture' className='w-16 h-15 rounded-full '/>
//                <div> 
//                 <h2 className='text-blue-900 px-3 text-lg font-bold mt-[-5px]'>Jessica Chan</h2>
//             <h1 className='px-3 text-md font-semibold'>Web Developer & YouTuber</h1></div>
//             </div>
//                 <h3 className='text-gray-400 pt-7 px-3'><FaQuoteRight /></h3>
//                 </div>

//         </div>
//       </div>

//       <div className=''><h2 className='uppercase text-center py-10 text-2xl'>As featured on...</h2></div>

//       <div className='md:grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 sm:px-30 md:gap-10 '>
//         <div className='bg-zinc-200 md:w-90 h-35 items-center text-center justify-center flex rounded-2xl sm:my-5 md:my-0  md:-ml-20'>
//             <img src='public/logo-css-tricks.svg' alt='css'/>
//         </div>
//         <div className='bg-zinc-200 md:w-90 h-35 items-center text-center justify-center flex rounded-2xl sm:my-5 md:my-0 md:-ml-3'>
//             <img src='public/logo-stack-overflow.svg' alt='overflow'/>
//         </div>
//         <div className='bg-zinc-200 md:w-90 h-35 items-center text-center justify-center flex rounded-2xl  md:ml-15 '>
//             <img src='public/logo-product-hunt.svg' alt='product'/>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Section


import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Section = () => {
  return (
    <section className="px-5 md:px-20 py-10 bg-white">
      {/* ===== AI Feedback Section ===== */}
      <div className="bg-blue-900 rounded-xl text-white p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-3/4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Get AI-powered feedback on every solution submission
          </h2>
          <p className="text-md md:text-lg">
            Join thousands of developers getting personalized insights with every submission to level up faster.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <button
            type="button"
            onClick={() =>
              (window.location.href = "https://www.frontendmentor.io/pro")
            }
            className="uppercase text-md font-semibold bg-white text-blue-800 px-6 py-2 rounded-2xl hover:bg-gray-200 transition-all duration-300"
          >
            Learn about Pro
          </button>
        </div>
      </div>

      {/* ===== Testimonial Section ===== */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-zinc-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-lg italic mb-4">
            "I highly recommend Frontend Mentor. Skip the search for project
            ideas and dive into ready-made challenges that help you level up as
            a developer."
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="public/man-3.jpg"
                alt="Kevin Powell"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="ml-3">
                <h3 className="text-blue-900 font-bold text-lg">
                  Kevin Powell
                </h3>
                <p className="text-sm font-medium">
                  Web Developer & YouTuber
                </p>
              </div>
            </div>
            <FaQuoteRight className="text-gray-500 text-2xl" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-lg italic mb-4">
            "Frontend Mentor gives you real-world coding experience and projects
            that make your portfolio stand out to employers."
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="public/man-1.jpg"
                alt="Jessica Chan"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="ml-3">
                <h3 className="text-blue-900 font-bold text-lg">
                  Jessica Chan
                </h3>
                <p className="text-sm font-medium">
                  Web Developer & YouTuber
                </p>
              </div>
            </div>
            <FaQuoteRight className="text-gray-500 text-2xl" />
          </div>
        </div>
      </div>

      {/* ===== Featured Section ===== */}
      <h2 className="uppercase text-center py-10 text-2xl font-semibold text-gray-800">
        As featured on...
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        <div className="bg-zinc-200 flex justify-center items-center w-full h-28 rounded-2xl p-4 hover:scale-105 transition-all duration-300">
          <img
            src="public/logo-css-tricks.svg"
            alt="CSS Tricks"
            className="max-h-12"
          />
        </div>
        <div className="bg-zinc-200 flex justify-center items-center w-full h-28 rounded-2xl p-4 hover:scale-105 transition-all duration-300">
          <img
            src="public/logo-stack-overflow.svg"
            alt="Stack Overflow"
            className="max-h-12"
          />
        </div>
        <div className="bg-zinc-200 flex justify-center items-center w-full h-28 rounded-2xl p-4 hover:scale-105 transition-all duration-300 md:col-span-1 col-span-2">
          <img
            src="public/logo-product-hunt.svg"
            alt="Product Hunt"
            className="max-h-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
