import React from 'react'

function Navbar() {
  return (
    <div className='flex text-center justify-evenly align-middle h-12 text-white mt-3'>
      <div className='w-full text-start px-8 text-3xl' >
        <h1>EV-olution</h1>
      </div>
      <div className='flex justify-center align-middle w-full pt-2'>
        <li className='list-none text-center px-12' >Home</li>
        <li className='list-none text-center px-12' >Explore</li>
        <li className='list-none text-center px-12' >About</li>
        <button className='bg-white text-black rounded-2xl w-20 h-7' >Contact</button>
      </div>
    </div>
  )
}

export default Navbar