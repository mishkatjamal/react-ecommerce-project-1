import React, { useContext } from 'react'
import { Productcontextdata } from '../context/Productcontext'
import { useParams } from 'react-router-dom'

const ProductsDetails = () => {
    const productdata = useContext(Productcontextdata)
    
    const { id } = useParams()

    const product = productdata.alldata.find((item) => item.id === parseInt(id))
  
    
  return (
    <div className='flex gap-10 px-20 py-10'>
        <div className='border w-1/2 p-5 flex justify-center items-center'>
            <img src={product.image} alt="" height={"300px"}  width={"300px"} objectFit="cover"/>
        </div>

        <div className='w-1/2'>
            <h2 className='text-3xl font-bold mb-5'>{product.title}</h2>
            <h3 className='text-2xl font-semibold mb-5'>Price: ${product.price}</h3>
            <p className='text-lg'>{product.description}</p>
        </div>
    </div>
  )
}

export default ProductsDetails