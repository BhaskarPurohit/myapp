import React from 'react'
import "../styles/Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to="./home">Home</Link>
        <Link to="./About">About</Link>
        <Link to="./Contact">Contact</Link>
    </nav>
  )
}

export default Header