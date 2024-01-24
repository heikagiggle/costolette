/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Navbar } from '../../components';
import './Registration.css'
import user from '../../assets/person.png'
import email from '../../assets/email.png'
import password from '../../assets/password.png'


const Registration = () => {
  const [action, setAction] = useState('Login')

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='input-container'>
          {/* to create the log in page: if action is not equals to login return image div*/}
          {action==='Login'?<div></div>:<div className='input'>
            <img src={user} alt="user" />
            <input type="text" placeholder='Name' />
          </div>}
          
          <div className='input'>
            <img src={email} alt="email" />
            <input type="email" placeholder='Email address' />
          </div>
          <div className='input'>
            <img src={password} alt="person" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
        {/* to create the log in page: if action is not equals to sign up return forgot password div div*/}
        {action==='Sign Up'?<div></div>: <div className='forgot-password'>Forgot Password? <span><a href="#"> Click Here!</a></span></div>}
       
        <div className='submit-container'>
          {/* to make button functional  */}
          <div className={action==='Login'?'custom__button gray': 'custom__button'} onClick={()=>{setAction('Sign Up')}} >Sign Up</div>
          <div className={action==='Sign Up'?'custom__button gray': 'custom__button'} onClick={()=>{setAction('Login')}}>Login</div>
        </div>
        
       
      </div>
    </>
  )
}

export default Registration
