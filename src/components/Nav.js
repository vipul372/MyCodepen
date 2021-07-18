import React from 'react'
import '../styles/Nav.css'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a className="active" href="#about">About</a></li>
      </ul>
    </nav>
  )
}

export default Nav