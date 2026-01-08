import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className='footer'>
      <h1>Footer</h1>
      {[theme, setTheme]}
    </div>
  )
}

export default Footer
