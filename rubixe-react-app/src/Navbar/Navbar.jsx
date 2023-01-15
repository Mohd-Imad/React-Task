import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark text-white navbar-expand-lg">
        <Link to='/' className='navbar-brand'>Forms</Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-list"><Link to='/register' className="nav-link">Register</Link></li>
            <li className="nav-list"><Link to='/login' className="nav-link">Login</Link></li>
            <li className="nav-list"><Link to='/admin' className="nav-link">Admin</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
