import React from 'react'

import logo from "./images/logo.png"
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <div className=' flex justify-between items-center p-5 bg-black/90 text-white text-[20px] font-bold'>
        <div className=''>
            <img className='w-[80px] rounded-full' src={logo} alt="" />
        </div>
        <div className='w-1/2'>
          <ul className='flex justify-end items-center'>
            <li className='mr-10'><Link to="/">Home</Link></li>
            <li className='mr-10'> <Link to="/registration">Registration</Link> </li>
            <li className='mr-10'><Link to="/login">Login</Link></li>
            
          </ul>
        </div>
        <div className=' flex'>
          <button 
            className='bg-green-700 py-2 px-6 rounded-4xl cursor-pointer mr-4' >
            <Link to="/registration">Registration</Link>
          </button>
          <button className='bg-gray-700 py-2 px-6 rounded-4xl cursor-pointer'>
            <Link to="/login">Login</Link>
          </button>
        </div>
        </div>

    </div>
  )
}

export default Navbar