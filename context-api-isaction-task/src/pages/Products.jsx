import React, { useContext } from 'react'
import { ProductContextData } from '../context/ProductContext'

const Products = () => {
  const productData = useContext(ProductContextData)
  return (
    <div className='allproduct'>
      {productData.map(function (elem, idx) {
        return <a className='product' target='_blank' href="/products">
          <div>
            <img src={elem.image} alt="" />
            <h2>{elem.title}</h2>
          </div>
        </a>
      })}
    </div>
  )
}

export default Products