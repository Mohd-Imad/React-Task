import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="col-1">
          <h4>ABOUT US</h4>
          <p>Rubixe™ is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI). Machine Learning. Robotic Process
            Automation (RPA), BlockChain and Internet of Things (IOT). Rubixe mission <br />
            to enable businesses to leverage the full potential of disruptive <br />
            technologies to stay competitive in the market.</p>
        </div>
        <div className="col-2">
          <h4>MENUS</h4>
          <Link className="footer-link" to='/'>Home</Link>
          <Link className="footer-link" to='/services'>Services</Link>
          <Link className="footer-link" to='/products'>Products</Link>
          <Link className="footer-link" to='/career'>Career</Link>
        </div>
        <div className="col-3">
          <h4>LEARN MORE</h4>
          <Link className="footer-link" to='/about'>About</Link>
          <Link className="footer-link" to='/contact'>Contact Us</Link>
        </div>
        <div className="col-4">
          <div className="address">
            <h4>ADDRESS</h4>
            Novel Tech Park, 1st Floor, Hosur Rd,<br />
            Kudlu gate, Bengaluru, Karnataka <br />
            560068 <br />
            Phone: 0804-717_8999 <br />
            Email: hi@rubixe.com
          </div>
          <div className="socialmedia">
            <h4>SOCIAL MEDIA</h4>
            <Link to='/facebook'><FontAwesomeIcon icon={faFacebookF} className='fb-icon' /></Link>
            <Link to='/linkedin'><FontAwesomeIcon icon={faLinkedinIn} className='li-icon' /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
