// import React from 'react'
// import { FaGithub } from "react-icons/fa";




// const Header = () => {
//   return (
//     <section className='bg-gray-300 min-h-screen'>
//         <div className='md:flex md:px-30 md:py-10 sm:px-20 '>
//            <div className='py-10 md:mr-50 '>
//              <h1 className='text-3xl font-semibold'>For Learers</h1>
//             <h2 className='py-3 text-blue-600 text-4xl'>Front-end and full-stack coding challenges that build real skills and help get you hired</h2>
//             <p className='py-3 text-xl'>Frontend Mentor provides professional design-to-code challenges that mirror real-world development work. Join <span className='text-blue-600'>1,097,313</span> developers building portfolio projects that impress employers.</p>
//             <div className='flex text-center py-5'>
//                 <a href='https://github.com/login/oauth/authorize?client_id=f71675ff0aff88252d33&scope=user:email' className='flex bg-pink-600 px-5 w-60 h-10 text-md text-center items-center font-semibold text-white rounded-3xl uppercase hover:bg-pink-700 transition-all duration-300'  >Start building free<span className='p-2'><FaGithub /></span></a>
//                 <a href='https://www.frontendmentor.io/challenges' className='px-5 mx-10 flex items-center rounded-3xl border-1 bg-white text-md font-semibold text-black uppercase w-55'>browse challenges</a>
//             </div>
//            </div>


//            <div className=' md:w-screen flex rounded-2xl sm:w-200'>
//             <img src='public/home-hero.webp' alt='Phone' className='w-130 h-120 mx-5 py-3 rounded-3xl'/>
//             {/* <img src="public/phone-2.avif" alt='Phone-1' className='w-58 rounded-3xl h-120 py-3 mr-5'/> */}

//            </div>
//         </div>
//     </section>


//   )
// }

// export default Header



import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-10 py-12 gap-10">
        {/* ===== Left Content ===== */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            For Learners
          </h1>

          <h2 className="py-4 text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-snug">
            Front-end and full-stack coding challenges that build real skills
            and help get you hired
          </h2>

          <p className="py-4 text-gray-700 text-lg leading-relaxed">
            Frontend Mentor provides professional design-to-code challenges that
            mirror real-world development work. Join{" "}
            <span className="text-blue-600 font-semibold">1,097,313</span>{" "}
            developers building portfolio projects that impress employers.
          </p>

          {/* ===== Buttons ===== */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <a
              href="https://github.com/login/oauth/authorize?client_id=f71675ff0aff88252d33&scope=user:email"
              className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold uppercase transition-all duration-300"
            >
              Start Building Free <FaGithub className="text-xl" />
            </a>

            <a
              href="https://www.frontendmentor.io/challenges"
              className="flex items-center justify-center border-2 border-gray-400 bg-white hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold uppercase transition-all duration-300"
            >
              Browse Challenges
            </a>
          </div>
        </div>

        {/* ===== Right Image ===== */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="public/home-hero.webp"
            alt="Frontend Mentor Preview"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
