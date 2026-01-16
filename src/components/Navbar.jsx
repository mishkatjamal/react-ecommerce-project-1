import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between px-15 py-5 '>
        <div>
            <img src="https://htmlbeans.com/html/schon/images/mt-logo.png"  className='w-30' />
        </div>
        <div className='flex gap-5'>
            <Link to="/" className='text-xxl font-semibold'>Home</Link>
            <Link to="/products" className='text-xxl font-semibold'>Products</Link>
        </div>
    </div>
  )
}

export default Navbar