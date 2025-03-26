import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    
    <>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/test">Test</Link></li>
        <li><Link to="/products">Products</Link></li>
        
   
    </ul>
    </>
  )
}

export default Navbar