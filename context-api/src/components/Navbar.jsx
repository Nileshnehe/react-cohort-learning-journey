import React from 'react'

const Navbar = ({ theme, setTheme }) => {
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <button onClick={() =>{
       setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
      }}>
        Change Theme
        </button>

        
    </div>
  )
}

export default Navbar
