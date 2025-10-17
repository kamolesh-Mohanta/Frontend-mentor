import React, { useEffect, useState } from 'react'
// import User from './component/User';
 
const Users = () => {
   const [users,setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
            console.log(data)
           
        }
        fetchUsers();
    },[])

  return (
    <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {users.map((user,index) => (
        //    <User user={user} key={index}/>
        <div className='p-5 border-2 m- bg-gray-700 shadow-2xl'>
            <div className=''>
             <h2 className='text-xl my-1'>Name: {user.name}</h2>
             <p className='my-1 text-lg'>Email: {user.email}</p>
            <h2 className='my-1 text-lg'>Username: @{user.username}</h2>
            <p className='text-lg'>Website: {user.website}</p>
            <p className='text-md'>Phone: {user.phone}</p>
          <p>Adress: {user.address.city}</p>
          
            </div>
            </div>
        ))}


    </div>
  )
}

export default Users
