import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 const navigate = useNavigate()
  return (
    <div>
        <h1>This is Home Page</h1>
        <button className='home-btn' onClick={() => {
          navigate('/products')
        }}>Explore Our Products</button>
    </div>
  )
}

export default Home