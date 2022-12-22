import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="col-1">
          <h5>ABOUT US</h5>
          <p>Rubixe™ is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI). Machine Learning. Robotic Process
            Automation (RPA), BlockChain and Internet of Things (IOT). Rubixe mission <br />
            to enable businesses to leverage the full potential of disruptive <br />
            technologies to stay competitive in the market.</p>
        </div>
        <div className="col-2">
          <h5>MENUS</h5>
          <Link className="links" to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/products'>Products</Link>
          <Link to='/career'>Career</Link>
        </div>
        <div className="col-3">
          <h5>LEARN MORE</h5>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>
        <div className="col-4">
          <div className="address">
            <h5>ADDRESS</h5>
            Novel Tech Park, 1st Floor, Hosur Rd,<br />
            Kudlu gate, Bengaluru, Karnataka <br />
            560068 <br />
            Phone: 0804-717_8999 <br />
            Email: hi@rubixe.com
          </div>
          <div className="socialmedia">
            <h5>SOCIAL MEDIA</h5>
            <i className='fa-brands fa-facebook-f'></i>
            <i className='fa-brands fa-linkedin-in'></i>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
