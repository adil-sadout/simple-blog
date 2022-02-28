import {useState} from 'react'

function LoginForm({setIsLoginPage}) {

  

  return (
    <div className='d-flex h-100 flex-column justify-content-center align-items-center mx-auto w-75'>
      <form className='w-100'>
        <div className="mb-3">
          <label htmlFor="InputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="InputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <button onClick={()=>setIsLoginPage(false)} className="btn bg-transparent ms-auto">Sign up Instead</button>
      
    </div>
  )
}

export default LoginForm