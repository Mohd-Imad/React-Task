import React from 'react'
import './Form.css'

const Form = () => {
  return <>
     <div className="container">
      <div className="column-left">
      <h1>GET IN TOUCH</h1>
      <h3 className='h3-text'>Please complete the form and we will get back to you.</h3>
      </div>
      <div className="column-right">
        <label className='label'>Name*</label><br />
        <input className='input' type="text" placeholder='Enter Your Name' /><br />
        <label className='label'>Email*</label><br />
        <input className='input' type="text" placeholder='Enter Your Email' /><br />
        <label className='label'>Mobile Number*</label><br />
        <input className='input' type="text" placeholder='Enter Your Mobile Number' /><br /><br />
        <button className='input btn'>Register Now</button>
      </div>
     </div>
  
  </>
}

export default Form
