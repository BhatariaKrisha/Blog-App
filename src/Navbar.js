import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav  className='navbar'>
        <h1>MY Blog</h1>
        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/create'>New Blog</Link>
        </div>
      </nav>
    </div>
  )
}
