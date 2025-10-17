// import React from 'react'

// const Work = () => {
  
//   return (
//     <section className='bg-gray-300 mx-5 my-15'>
//       <h2 className='text-4xl pt-20 px-30 md:ml-8'>How it works</h2>
//      <div className='md:flex pb-10'>
//          <div className='md:px-25 py-5 sm:mx-10'>

//         <div className='bg-blue-800 py-4 px-5 rounded-2xl md:w-170 shadow-2xl'>
//            <div className='flex'>
//             <h2 className='bg-white w-10  rounded-full text-center items-center flex justify-center text-xl h-10'>1</h2>
//              <p className='px-3 py-2 text-xl text-zinc-200 font-semibold'>Choose your challenge</p>
//            </div>
//             <h2 className='text-lg text-zinc-200'>Pick from 100+ professionally designed projects across five skill levels—from HTML/CSS basics to full-stack</h2>
//             <p className='text-zinc-200'>applications.</p>
//         </div>
//         <div className='py-5 bg-white my-5 px-5 rounded-2xl'>
//             <div className='flex'>
//                 <p className='bg-sky-400 w-10  rounded-full text-center items-center flex justify-center text-xl h-10'>2</p>
//                 <h2 className='px-4 py-2 text-xl font-semibold'>Code the design</h2>
//             </div>
//         </div>

//         <div className='py-5 bg-white my-5 px-5 rounded-2xl'>
//             <div className='flex'>
//                 <p className='bg-sky-400 w-10  rounded-full text-center items-center flex justify-center text-xl h-10'>3</p>
//                 <h2 className='px-4 py-2 text-xl font-semibold'>Submit and improve</h2>
//             </div>
//         </div>

//         <div className='py-5 bg-white my-5 px-5 rounded-2xl'>
//             <div className='flex'>
//                 <p className='bg-sky-400 w-10  rounded-full text-center items-center flex justify-center text-xl h-10'>4</p>
//                 <h2 className='px-4 py-2 text-xl font-semibold'>Help others grow</h2>
//             </div>
//         </div>
//       </div>



//       <div className=' md:mr-18 py-5 sm:mx-10 '>
//         <img src='public/home.webp' alt='Home ' className='md:w-500 md:h-110'/>
//     </div>
//      </div>
//     </section>
//   )
// }

// export default Work



import React from "react";

const Work = () => {
  return (
    <section className="bg-gray-200 py-16 px-6 md:px-20 lg:px-32">
      {/* ===== Heading ===== */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center md:text-left">
        How it works
      </h2>

      {/* ===== Content Wrapper ===== */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* ===== Left Steps Section ===== */}
        <div className="flex-1 w-full space-y-5">
          {/* Step 1 */}
          <div className="bg-blue-800 text-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-3">
              <div className="bg-white text-blue-800 font-semibold w-10 h-10 flex justify-center items-center rounded-full text-lg">
                1
              </div>
              <p className="text-xl font-semibold ml-3">
                Choose your challenge
              </p>
            </div>
            <p className="text-zinc-100 text-base leading-relaxed">
              Pick from 100+ professionally designed projects across five skill
              levels — from HTML/CSS basics to full-stack applications.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-sky-400 text-white font-semibold w-10 h-10 flex justify-center items-center rounded-full text-lg">
                2
              </div>
              <p className="text-xl font-semibold ml-3">Code the design</p>
            </div>
            <p className="text-gray-700 mt-2">
              Turn the provided design into a fully responsive web page or
              application.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-sky-400 text-white font-semibold w-10 h-10 flex justify-center items-center rounded-full text-lg">
                3
              </div>
              <p className="text-xl font-semibold ml-3">Submit and improve</p>
            </div>
            <p className="text-gray-700 mt-2">
              Upload your solution, get feedback, and see how others approached
              the same challenge.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center">
              <div className="bg-sky-400 text-white font-semibold w-10 h-10 flex justify-center items-center rounded-full text-lg">
                4
              </div>
              <p className="text-xl font-semibold ml-3">Help others grow</p>
            </div>
            <p className="text-gray-700 mt-2">
              Review others’ submissions, share feedback, and learn from each
              other’s work.
            </p>
          </div>
        </div>

        {/* ===== Right Image Section ===== */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <img
            src="public/home.webp"
            alt="How it works illustration"
            className="w-full md:w-[450px] lg:w-[600px] rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;

