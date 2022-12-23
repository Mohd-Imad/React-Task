import React from 'react'
import './About.css'
import AboutImg from '../../assets/AboutImg.jpg'

const About = () => {
  return (
    <>
      <div className="row">
        <section className="columns">
          <div className="col-left">
            <h1>WHO WE ARE</h1><br />
            <p>Rubixe™ is a technology company specializing in disruptive technologies - Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT)</p><br />
            <p>Rubixe™ mission is to enable businesses to leverage the full potential of disruptive technologies and stay competitive in the market, turning complex challenges into solutions, providing a strategic competitive advantage that one more efficient, effective and predictable.</p>
          </div>
          <div className="col-right">
            <div className="line"></div>
            <img className='about-img' src={AboutImg} alt="about-img" />
            <div className='green-rect'></div>
          </div>
        </section>
      </div>
    </>
  )
}


export default About
