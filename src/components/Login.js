import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>

      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg' alt='logo'/>
      </div>

      <form className='absolute left-0 right-0 my-36 mx-auto bg-black p-12 w-3/12 text-white rounded-lg bg-opacity-70'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />)}
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In":"Sign Up"}</button>
        <p className='' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Allready registerd? Sign In Now."}</p>
      </form>
    </div>
  )
}

export default Login