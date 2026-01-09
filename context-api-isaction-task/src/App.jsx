import axios from 'axios'
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';


const App = () => {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App