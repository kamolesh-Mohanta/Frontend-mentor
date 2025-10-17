// import React, { useState } from 'react'

// import { FaGithub } from "react-icons/fa";
// import { IoMenu } from "react-icons/io5";



// const About = () => {

//   const [visible,setVisible] = useState(true);
//   return (
//     <>
//     <section >
//         <div className='flex py-4 px-20 sm:px-15 place-content-between'>
//            <button className='text-5xl sm:pt-  sm:mr-2  md:hidden' onClick={() => setVisible(!visible)}><IoMenu /></button>
//            <div className='flex'>
           
//              <img  alt='image' src='public/logo-mobile.svg' className='md:w-15 md:h-15 sm:w-12 sm:h-12 sm:mt-2 rounded-xl'/>
//             <h2 className='md:text-2xl mx-2 py-2 sm:text-xl sm:py-1 sm:mt-2'>Frontend Mentor</h2>
//            </div>

 
    
//       <div className='flex py-4 '>
//       <div className='relative'>

    

//       {visible && (
//       <div className={` ${visible ? "block":"hidden"}
//           absolute md:static
//            md:p-0 rounded-lg  
        
// `}>  
// <div className='md:flex md:pt-1  absolute'>
  
//      <details className='outline-none '>
//       <summary className='text-lg uppercase font-semibold sm:-mx-25 sm:pt-20 sm:-mt-25 py-2 md:-mt-21  md:-ml-110'>Explore</summary>
//       <li className='text-lg uppercase sm:-mx-15 md:-mx-115 md:py-2'>Learning Paths</li>
//       <li className='text-lg uppercase sm:-mx-15 md:-mx-115'>Challenges</li>
//       <li className='text-lg uppercase sm:-mx-15 md:-mx-115'>Solutions</li>
//       <li className='text-lg uppercase sm:-mx-15 md:-mx-115'>Articles</li>
//     </details>


//       <div className='flex '>
//         <details className=' outline-none'>
//           <summary className='text-lg font-semibold uppercase sm:-mx-20 sm:-ml-24  md:-ml-80  md:-mt-1'>For Companies</summary>
//           <li className='text-lg uppercase sm:-mx-18 md:-mx-70 md:py-1 '>Hire devlopers</li>
//           <li className='text-lg uppercase sm:-mx-18 md:-mx-70 '>Train developers</li>
//         </details>
      

//         <div className='flex'>
//           <h1 className='text-lg uppercase font-semibold sm:-mx-24 sm:mt-8 md:-mt-1 md:-ml-35 '>unlock<span className='px-2 bg-blue-700 text-white rounded-sm uppercase mx-1 '>pro</span></h1>
//           </div>
//         </div>
//         </div>
//       </div>
//       )}
//        </div>
//       <div className='mx-2 mt-[-7px]'>
//            <a href='https://github.com/login/oauth/authorize?client_id=f71675ff0aff88252d33&scope=user:email' className='text-lg uppercase bg-black text-white w-70 flex h-10 items-center font-italic px-7 text-center rounded-3xl font-semibold hover:bg-gray-700 transition-all duration-300' >log in with github<span className='px-2  text-2xl'><FaGithub /> </span></a>
//          </div>
        
//       </div>
//         </div>
//     </section>
      
//     </>
//   )
// }

// export default About



import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const About = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* ===== Left Side: Logo + Name ===== */}
        <div className="flex items-center gap-3">
          <img
            src="logo-mobile.svg"
            alt="Frontend Mentor"
            className="w-10 h-10 md:w-12 md:h-12 rounded-md"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Frontend Mentor
          </h2>
        </div>

        {/* ===== Menu Button (Small Screen) ===== */}
        <button
          className="text-4xl md:hidden text-gray-700"
          onClick={() => setVisible(!visible)}
        >
          <IoMenu />
        </button>

        {/* ===== Desktop Menu ===== */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-gray-700 uppercase">
          {/* Explore Dropdown */}
          <details className="relative group">
            <summary className="cursor-pointer hover:text-blue-700">
              Explore
            </summary>
            <ul className="absolute bg-white shadow-lg rounded-lg p-3 hidden group-open:block top-6 left-0 w-48 text-gray-600 normal-case font-normal">
              <li className="hover:text-blue-700 cursor-pointer py-1">
                Learning Paths
              </li>
              <li className="hover:text-blue-700 cursor-pointer py-1">
                Challenges
              </li>
              <li className="hover:text-blue-700 cursor-pointer py-1">
                Solutions
              </li>
              <li className="hover:text-blue-700 cursor-pointer py-1">
                Articles
              </li>
            </ul>
          </details>

          {/* For Companies Dropdown */}
          <details className="relative group">
            <summary className="cursor-pointer hover:text-blue-700">
              For Companies
            </summary>
            <ul className="absolute bg-white shadow-lg rounded-lg p-3 hidden group-open:block top-6 left-0 w-48 text-gray-600 normal-case font-normal">
              <li className="hover:text-blue-700 cursor-pointer py-1">
                Hire Developers
              </li>
              <li className="hover:text-blue-700 cursor-pointer py-1">
                Train Developers
              </li>
            </ul>
          </details>

          {/* Pro Button */}
          <div className="uppercase font-semibold cursor-pointer hover:text-blue-700">
            Unlock{" "}
            <span className="bg-blue-700 text-white px-2 py-1 rounded-sm ml-1">
              PRO
            </span>
          </div>
        </nav>

        {/* ===== GitHub Login ===== */}
        <a
          href="https://github.com/login/oauth/authorize?client_id=f71675ff0aff88252d33&scope=user:email"
          className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full uppercase font-semibold hover:bg-gray-800 transition-all duration-300"
        >
          Log in with GitHub
          <FaGithub className="text-2xl" />
        </a>
      </div>

      {/* ===== Mobile Dropdown Menu ===== */}
      {visible && (
        <div className="md:hidden bg-gray-100 shadow-inner border-t border-gray-200">
          <ul className="flex flex-col gap-3 p-5 text-gray-800 font-semibold uppercase">
            <details className="outline-none">
              <summary className="cursor-pointer">Explore</summary>
              <ul className="ml-4 mt-2 text-gray-600 normal-case font-normal">
                <li className="hover:text-blue-700 py-1">Learning Paths</li>
                <li className="hover:text-blue-700 py-1">Challenges</li>
                <li className="hover:text-blue-700 py-1">Solutions</li>
                <li className="hover:text-blue-700 py-1">Articles</li>
              </ul>
            </details>

            <details className="outline-none">
              <summary className="cursor-pointer">For Companies</summary>
              <ul className="ml-4 mt-2 text-gray-600 normal-case font-normal">
                <li className="hover:text-blue-700 py-1">Hire Developers</li>
                <li className="hover:text-blue-700 py-1">Train Developers</li>
              </ul>
            </details>

            <li className="uppercase font-semibold">
              Unlock{" "}
              <span className="bg-blue-700 text-white px-2 py-1 rounded-sm ml-1">
                PRO
              </span>
            </li>

            <a
              href="https://github.com/login/oauth/authorize?client_id=f71675ff0aff88252d33&scope=user:email"
              className="bg-black text-white text-center px-4 py-2 rounded-full uppercase font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Log in with GitHub
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default About;
