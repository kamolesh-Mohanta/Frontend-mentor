// import React from 'react'
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";

// const Communit = () => {
//   return (
//     <section>
//         <div className='flex place-content-between px-30 pt-15'>
//             <h2 className='text-4xl font-semibold'>
//                 A little ❤️ from our community
//             </h2>
//             <div className='flex '>
//                 <button className=' bg-gray-500 md:w-15 md:h-15 sm:h-15 sm:ml-12 sm:w-15 rounded-full flex items-center justify-center text-2xl text-white cursor-not-allowed'><FaArrowLeft /></button>
//                 <button className='mx-3  bg-blue-800 md:w-15 rounded-full flex items-center justify-center text-2xl text-white hover:bg-blue-900 sm:w-15 sm:h-15 cursor-pointer'><FaArrowRight /></button>
//             </div>
//         </div>



      
//       <div className='px-30 flex gap-10 py-15'>
//         <div className='bg-white px-5 py-4 md:w-100 md:h-100 sm:w-200 rounded-xl shadow-2xl '>
//             <h2 className='text-xl text-gray-500'>This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instill accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.</h2>

//             <div className='flex px-2 py-12'>
//                  <img src='public/images-1.avif' alt='image' className='w-12 h-12 rounded-full my-3'/>
//                  <div className='py-2 px-3'>
//                  <h2 className='text-blue-900 text-lg font-semibold'>Francesca</h2>
//                  <h3 className='text-gray-600 text-md'>@frrann</h3>
//                  </div>
//             </div>
//         </div>

//          <div className='bg-white px-5 py-4 md:w-100 md:h-100 rounded-xl shadow-2xl sm:hidden md:block'>
//             <h2 className='text-xl text-gray-500'>Frontend Mentor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.</h2>

//             <div className='flex px-2 py-8'>
//                  <img src='public/images.avif' alt='image' className='w-12 h-12 rounded-full my-3'/>
//                  <div className='py-2 px-3'>
//                  <h2 className='text-blue-900 text-lg font-semibold'>Alfie</h2>
//                  <h3 className='text-gray-600 text-md'>@alfiemitchell123</h3>
//                  </div>
//             </div>
//         </div>

//          <div className='bg-white px-5 py-4 w-100 h-100 rounded-xl shadow-2xl sm:hidden md:block'>
//             <h2 className='text-xl text-gray-500'>Frontend Mentor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It’s a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.</h2>

//             <div className='flex px-2 py-12'>
//                  <img src='images-2.jpg' alt='image' className='w-12 h-12 rounded-full my-3'/>
//                  <div className='py-2 px-3'>
//                  <h2 className='text-blue-900 text-lg font-semibold'>Hikmah</h2>
//                  <h3 className='text-gray-600 text-md'>@Hikmahx</h3>
//                  </div>
//             </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Communit


import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Communit = () => {
  const cards = [
    {
      text: "This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instill accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.",
      img: "/images-1.avif",
      name: "Francesca",
      handle: "@frrann",
    },
    {
      text: "Frontend Mentor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers.",
      img: "/images.avif",
      name: "Alfie",
      handle: "@alfiemitchell123",
    },
    {
      text: "Frontend Mentor transformed me from a newbie to a pro developer, helping me make responsive, accessible websites.Frontend Mentor transformed me from a newbie to a pro developer, helping me make responsive, accessible websitesFrontend Mentor transformed me from a newbie to a pro.",
      img: "/images-2.jpg",
      name: "Hikmah",
      handle: "@Hikmahx",
    },
    {
      text: "Frontend Mentor has helped tremendously. Working on the newbie challenges really helped me get better at building layouts. Also, it increased my JavaScript skills. Working with APIs, DOM manipulation, and so on greatly increased my knowledge. Would totally recommend it.",
      img: "/images.avif",
      name: "Liam",
      handle: "@liamdev",
    },
    {
      text: "After completing a software bootcamp, Frontend Mentor let me build real-world projects, strengthening my developer skills. I wouldn’t be where I am today without it.strengthening my developer skills. I wouldn’t be where I am today without it.",
      img: "/images-1.avif",
      name: "Sophia",
      handle: "@sophiacodes",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextSlide = () => {
    if (index < cards.length - 1) setIndex(index + 1);
  };

  // visible cards for md and sm
  const visibleCards =
    window.innerWidth >= 768
      ? cards.slice(index, index + 3)
      : cards.slice(index, index + 1);

  return (
    <section className="px-6 md:px-20 py-10">
      {/* ---------- Header ---------- */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          A little ❤️ from our community
        </h2>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            disabled={index === 0}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex hover:bg- items-center justify-center text-white text-xl ${
              index === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-800 hover:bg-blue-700"
            }`}
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            disabled={index >= cards.length - 1}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-xl ${
              index >= cards.length - 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* ---------- Cards Section ---------- */}
      <div className="flex flex-wrap gap-6 justify-center md:justify-between transition-all duration-500">
        {visibleCards.map((card, i) => (
          <div
            key={i}
            className="bg-white px-6 py-6 md:w-[30%] w-full rounded-2xl shadow-2xl"
          >
            <h2 className="text-gray-600 text-lg md:text-xl">{card.text}</h2>

            <div className="flex items-center mt-8">
              <img
                src={card.img}
                alt={card.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-3">
                <h3 className="text-blue-900 font-semibold">{card.name}</h3>
                <p className="text-gray-500 text-sm">{card.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Communit;
