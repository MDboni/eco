import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({product}) => {
    const {product_image,product_title,category,product_id}=product
  return (
    <Link to={`/details/${product_id}`}>
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                src={product_image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p className='text-xl font-bold'>{category}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Products