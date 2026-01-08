import React, { useContext } from 'react'
import ThemeContext, { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className='nav-bar'>
      <h1>Navbar </h1>
      {[theme, setTheme]}
      <button className='nav-btn'onClick={()=> {
           setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
      }}>Mode</button>
    </div>
  )
}

export default Navbar
