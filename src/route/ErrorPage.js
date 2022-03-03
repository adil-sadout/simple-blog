import React from 'react'
import {Link} from "react-router-dom"
function ErrorPage() {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center p-5'>
        <Link className='display-6 text-decoration-none' to="/">Home Page</Link>
        <p className='display-2'>PAGE DOES NOT EXIST</p>
    </div>
  )
}

export default ErrorPage