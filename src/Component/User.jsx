import React from 'react'

const User = (user) => {
    const {name,email,username,website,phone} = user
  return (
    <div>
        <div className='p-5 border-2 m- bg-gray-700 shadow-2xl'>
            <div className=''>
             <h2 className='text-xl my-1'>Name: {name}</h2>
             <p className='my-1 text-lg'>Email: {email}</p>
            <h2 className='my-1 text-lg'>Username: @{username}</h2>
            <p className='text-lg'>Website: {website}</p>
            <p className='text-md'>Phone: {phone}</p>
          {/* <p>Adress: {address.city}</p> */}
          
            </div>
            

           </div>
      
    </div>
  )
}

export default User
