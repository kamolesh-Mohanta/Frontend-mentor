import React from 'react'

const Footer = () => {
  return (
    <section>
       <div className='flex place-content-between px-15 bg-gray-400 py-3'>
         <h3>© Frontend Mentor 2019-2025</h3>

         <div className='flex '>
            <p className='mx-3 hover:border-b-1 transition-all duration-200'>Terms</p>
            <p className='hover:border-b-1 transition-all duration-200 mr-3'>Cookie Policy</p>
            <p className='hover:border-b-1 transition-all duration-200 mr-3'>Privacy Policy</p>
            <p className='hover:border-b-1 transition-all duration-200'>License</p>
         </div>
       </div>
      
    </section>
  )
}

export default Footer
