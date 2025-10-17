// import React from 'react'

// const Choose = () => {
//   return (
//     <>
//     <section>
//         <h2 className='text-center text-3xl mb-10'>Why developers choose <br />Frontend Mentor
// </h2>
//         <div className='md:flex sm:grid'>
//     <div className='px-30 '>
//         <div className='md:py-50 sm:py-5'>
//         <h2 className='text-2xl font-bold mb-5'>Move beyond passive learning</h2>
//         <h1 className='text-xl'>Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice.</h1>
//         </div>
//     </div>

//     <div className='md:mr-24 py-10 sm:px-20'>
//         <img src='public/home-why-1.webp' alt='home' className='w-400'/>
//     </div>

//         </div>
//     </section>





// <section>
//           <div className='md:flex sm:grid'>
//     <div className='md:ps-25 py-8 sm:px-20'>
//         <img src='public/home-why-2.webp' alt='home' className='w-400'/>
//     </div>
      
//     <div className='px-30 '>
//         <div className='md:py-50'>
//         <h2 className='text-2xl font-bold mb-5'>Create a portfolio that gets you hired</h2>
//         <h1 className='text-xl'>Build impressive projects with professional designs. Recruiters tell us these portfolio pieces consistently "wow" them in interviews by demonstrating real-world capabilities.</h1>
//         </div>
//     </div>


//         </div>
//     </section>




//     <section>
      
//         <div className='md:flex sm:grid'>
//     <div className='px-30 '>
//         <div className='md:py-50 sm:pt-30'>
//         <h2 className='text-2xl font-bold mb-5'>Master AI-powered development workflows</h2>
//         <h1 className='text-xl'>Practice with AI tools that 76% of developers use daily. Learn to work effectively with Cursor, GitHub Copilot, ChatGPT, and other assistants while maintaining code quality and problem-solving skills.</h1>
//         </div>
//     </div>

//     <div className='md:mr-24 md:py-10 sm:py-15 sm:px-20'>
//         <img src='public/home-why-3.webp' alt='home' className='w-500'/>
//     </div>

//         </div>
//     </section>


//     </>
//   )

// }

// export default Choose


import React from "react";

const Choose = () => {
  return (
    <>
      {/* ===== Section 1 ===== */}
      <section className="px-6 md:px-20 lg:px-32 py-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 leading-snug">
          Why developers choose <br className="hidden md:block" /> Frontend Mentor
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Move beyond passive learning
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stop watching and start creating. Build professional-quality
              projects that develop genuine coding skills through hands-on
              practice.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="public/home-why-1.webp"
              alt="why choose"
              className="w-full md:w-[420px] lg:w-[550px] rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Section 2 ===== */}
   <section className="bg-gray-100 px-6 md:px-20 lg:px-32 py-16">
  <div className="flex flex-col md:flex-row-reverse items-center gap-10">
    {/* Right Text */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Create a portfolio that gets you hired
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Build impressive projects with professional designs. Recruiters
        tell us these portfolio pieces consistently “wow” them in
        interviews by demonstrating real-world capabilities.
      </p>
    </div>

    {/* Left Image */}
    <div className="flex-1 flex justify-center md:justify-start">
      <img
        src="public/home-why-2.webp"
        alt="portfolio"
        className="w-full md:w-[420px] lg:w-[550px] rounded-2xl shadow-lg object-cover"
      />
    </div>
  </div>
</section>


      {/* ===== Section 3 ===== */}
      <section className="px-6 md:px-20 lg:px-32 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Master AI-powered development workflows
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Practice with AI tools that 76% of developers use daily. Learn to
              work effectively with Cursor, GitHub Copilot, ChatGPT, and other
              assistants while maintaining code quality and problem-solving
              skills.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="public/home-why-3.webp"
              alt="ai tools"
              className="w-full md:w-[420px] lg:w-[550px] rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
