import React from 'react'
import './LoginForm.css'
import {Link} from 'react-router-dom'

const LoginForm = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-heading">Login Details</h1>
          </div>
          <div className="login-body">
          <input type="text" name='email' className='login-input' placeholder='Email ID' />
          <input type="password" name='password' className='login-input' placeholder='Password' />
          <input type="submit" className="login-btn" value='Login' />
          <p className="account-msg">Don't have an account? <Link to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm

