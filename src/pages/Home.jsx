import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
       <div className='w-full h-[80vh] bg-[url("https://htmlbeans.com/html/schon/images/sliders/img06.jpg")] bg-center bg-cover flex items-center justify-start px-5'>
       
       <div className='flex flex-col justify-center items-center'>
         <h3 className='text-[#818182] text-xl font-semibold  bg-opacity-50 p-5'>E-Commerce Store</h3>
         <h2 className='text-[#3B3B3B] text-5xl font-bold uppercase -mt-4'>All types of products</h2>
         <h2 className='text-[#7A7A7A] text-5xl font-semibold uppercase '>Sale is live</h2>

       </div>
       </div>
      <div className='flex justify-center items-center'>
          <button className="bg-[#000000] text-white px-8 py-3 rounded-lg mt-10" onClick={()=>{
          navigate('/products')
        }}>Shop Now</button>
      </div>
    </div>
  )
}

export default Home