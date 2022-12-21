import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/rubixe-logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className='nav-left'>
                    <Link to='/'><img className='brand' src={Logo} alt="no pic" /></Link>
                </div>
                <ul className='nav-right-links'>
                    <li><Link className='nav-link' to='/'>HOME</Link></li>
                    <li><Link className='nav-link'>SERVICES</Link></li>
                    <li><Link className='nav-link'>PRODUCTS</Link></li>
                    <li><Link className='nav-link'>AI INTERBNSHIP</Link></li>
                    <li><Link className='nav-link'>CAREER</Link></li>
                    <li><Link className='nav-link'>BLOG</Link></li>
                    <li><Link className='nav-link'>ABOUT</Link></li>
                    <li><Link className='nav-link'>CONTACT US</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
