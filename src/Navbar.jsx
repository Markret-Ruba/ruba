import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container"></div>
  <a className="navbar-brand" href="#">Navbar</a>
  
    <div>
    <Link to ="/"> Home </Link>
    <Link to ="/register"> Register </Link>
    <Link to ="/properties"> Properties </Link>
    <Link to ="/agent"> Agent </Link>
    <Link to ="/email"> Email </Link>
  </div>
  
  </nav>
  )
}

export default Navbar
