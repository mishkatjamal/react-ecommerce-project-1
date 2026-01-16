import { useContext } from "react"
import { Productcontextdata } from "../context/Productcontext"
import { Link } from "react-router-dom"


const Products = () => {
       const {alldata} = useContext(Productcontextdata)

  return (
    <div>
        <div className='grid grid-cols-5 gap-4 p-2'>
            {alldata.map((item,key)=>{
        return <Link key={key} to={`/products/${item.id}`} className='flex flex-col p-2 border-2 justify-between'>
            
            <img src={item.image} alt={item.title} height="150" width="150" objectFit="cover"/>
            <div>
                <h3>{item.title}</h3>
            <h4>Price: ${item.price}</h4>
            </div>
           
            
        </Link>
    })}
        </div>
    </div>
  )
}

export default Products