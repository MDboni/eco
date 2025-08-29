import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const DetailsPage = () => {
  const { id } = useParams()
  const data = useLoaderData()

  const [showimg,setShowimg] = useState([])
 
  // JSON-এ product_id string বা number হতে পারে
  const product = data.find(item => item.product_id == id)

 const AddHandel = (product)=>{
     setShowimg(prev=>[...prev,product])
  }
  
  return (
    <div className='flex justify-between'>
        <div className="w-4/6 mx-auto p-6 mt-15">
      {product ? (
        <div onClick={()=>AddHandel(product)} className="shadow-lg p-6 rounded-lg border">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4">{product.product_title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="mt-2 font-semibold">Price: ${product.price}</p>
          <p className="mt-1">
            Availability:{" "}
            <span className={product.availability ? "text-green-600" : "text-red-600"}>
              {product.availability ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p className="mt-1">Rating: ⭐ {product.rating}</p>

          <h3 className="text-lg font-semibold mt-4">Specifications:</h3>
          <ul className="list-disc ml-6">
            {product.Specification.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Product not found!</p>
      )}
    </div>

    <div className='border w-2/6 mt-20 grid grid-cols-2 gap-2 p-2'>
         {
            showimg.map((item,i)=>(
                <div key={i}>
                   <img src={item.product_image} alt="" />
                </div>
            ))
         }
    </div>
    </div>
    
  )
}

export default DetailsPage
