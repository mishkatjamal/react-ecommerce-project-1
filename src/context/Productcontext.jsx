
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const Productcontextdata = createContext()

const Productcontext = (props) => {
     const [alldata, setalldata] = useState([])

    const getdata = async() =>{
        
            const res = await axios.get("https://fakestoreapi.com/products") 
            setalldata(res.data)
            console.log(res.data)
    }  

  useEffect(() =>{
    getdata()
  }, [])
  return (
    <div>
        <Productcontextdata.Provider value={{alldata}}>

            {props.children}
        </Productcontextdata.Provider>
        
    </div>
  )
}

export default Productcontext