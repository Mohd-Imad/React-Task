import React from 'react'
import './Header.css'
import techLogo from '../../assets/tech-teens.png'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-items">
          <img src={techLogo} alt="tech logo" />
          <div>
            <p>CARVING FUTURE</p>
            <p>TECHNOLOGY PROFESSIONALS</p>
            <p>OUT OF YOUNG MINDS</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
