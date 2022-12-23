import React from 'react'
import './InitiativeCard.css'
import cardImg1 from '../../assets/card-img1.jpg'
import cardImg2 from '../../assets/card-img2.jpg'
import cardImg3 from '../../assets/card-img3.jpg'
import cardImg4 from '../../assets/card-img4.jpg'
import cardImg5 from '../../assets/card-img5.jpg'

const InitiativeCard = () => {
  return <>
    <div className="main-container">
      <div className="inner-container">
        <div><h1>TECH FOR TEENS - A RUBIXE @ INITIATIVE</h1></div>
        <div className='card'>

          <div className='card-up'>

            <div className="card-head radius-top" style={{ backgroundColor: '#1d2d60' }}>
            <div className="card-circle one"><h3>01</h3></div>
            </div>
            <div className="card-body">
              <img src={cardImg1} alt="card-1" />
              <div className='card-text'> Introducing Al to children in an age appropriate manner.</div>
            </div>
            <div className="card-hide"></div>
          </div>

          <div className='card-down'>
            <div className="card-hide"></div>
            <div className="card-body">
              <div className='card-text'> Gain awareness on Al and build an interactive story around it</div>
              <img src={cardImg2} alt="card-2" />
            </div>
            <div className="card-head radius-bottom card-foot" style={{ backgroundColor: '#9d2057' }}><div className="card-circle two"><h3>02</h3></div></div>
          </div>
          <div className='card-up'>
            <div className="card-head radius-top" style={{ backgroundColor: '#e35e13' }}><div className="card-circle three"><h3>03</h3></div></div>
            <div className="card-body">
              <img src={cardImg3} alt="card-3" />
              <div className='card-text'> Acquire programming skills in a user-friendly format</div>
            </div>
            <div className="card-hide"></div>
          </div>
          <div className='card-down'>
            <div className="card-hide"></div>
            <div className="card-body">
              <div className='card-text'> Exposure to mini projects on diverse topics</div>
              <img src={cardImg4} alt="card-4" />
            </div>
            <div className="card-head radius-bottom card-foot" style={{ backgroundColor: '#195b37' }}><div className="card-circle four"><h3>04</h3></div></div>
          </div>
          <div className='card-up'>
            <div className="card-head radius-top" style={{ backgroundColor: '#b77d33' }}><div className="card-circle five"><h3>05</h3></div></div>
            <div className="card-body">
              <img src={cardImg5} alt="card-5" />
              <div className='card-text'> Train the teachers programme</div>
            </div>
            <div className="card-hide"></div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default InitiativeCard