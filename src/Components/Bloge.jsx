import { useEffect, useState } from "react"
import Products from "./Products"

const Bloge = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('allProduct.json')
        .then(res => res.json())
        .then( data => setData(data) )
    },[])

  return (
    <div className='w-[90%] mx-auto'>
        <h2 className='text-center text-3xl font-bold'>Explore Cutting-Edge Gadgets</h2>
        <div className='flex  justify-between'>
            
                <div className="border w-2/6 mr-5 text-center p-3">
                         <h2>Product</h2>
                        {
                            data.map((item,i)=>(
                                <button key={i} className="btn btn-soft btn-accent">{item.category}</button>
                            ))
                        }
                </div>

                <div className="w-4/6">
                    <div className="grid grid-cols-3 gap-4">
                        {
                            data.map((product,i)=> <Products key={i} product={product}/>)
                        }
                    </div>
                </div>
    
        </div>
        
    </div>
  )
}

export default Bloge