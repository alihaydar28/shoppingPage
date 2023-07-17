import React from 'react'
import ReactDOM from 'react-dom/client'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
    <Link className="site-logo" to="/">#SHOPPING</Link>
    <nav>
      <Link to="/about">About</Link>
    </nav>
  </header>
  )
}

export default Header