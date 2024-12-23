import React from 'react'
import Products from '../MyData.json'
const GettingFromJson = () => {
    console.log(Products)
  return (
    <div className='product-parent'>
        {
            Products.map((product)=>{
                return(
                    <div className="product-card">
                        <img src={product.image} width="100px" alt="" />
                        <h1>{product.name}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default GettingFromJson
