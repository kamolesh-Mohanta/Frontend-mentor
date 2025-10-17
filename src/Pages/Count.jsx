import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);

        return() => {
            console.log("Click button");
        }
    },[count])

  return (
    <div className='py-8'>
      <h1 className='text-6xl py-3'>Count: <span className='text-orange-400'>{count}</span></h1>
      <div>
        <button onClick={() => setCount(count + 1)}className='  mx-3 my-5 px-3 text-2xl bg-red-500 py-2 rounded-xl hover:bg-orange-400 transition-all duration-300'>Increment</button>
      <button onClick={() => setCount(0)} className=' px-3 text-2xl bg-purple-600 rounded-xl py-2 hover:bg-orange-400 transition-all duration-300'>Reset</button>
      <button onClick={() => setCount(count - 1)}className=' mx-3  px-3 text-2xl bg-green-500 py-2 rounded-xl hover:bg-orange-400 transition-all duration-300' disabled={count == 0 ? true: false}>Decrement</button>
      </div>
    </div>
  )
}

export default Count
