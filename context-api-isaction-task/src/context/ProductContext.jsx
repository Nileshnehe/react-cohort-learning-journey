import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const ProductContextData = createContext()
const ProductContext = (props) => {
    const [productData, setProductData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setProductData(response.data)
  }

 
  useEffect(function () {
    getData()
  },[])
    return (
        <div>
            <ProductContextData.Provider value={productData}>
                {props.children}
            </ProductContextData.Provider>
        </div>
    )
}

export default ProductContext