import React, {useContext} from 'react'
import {siteContext} from "../context/AppContext"

function Dashboard() {
  const {user} = useContext(siteContext)

  return (
    <div className='d-flex flex-column container align-items-center justify-content-center p-5'>
      <h1>Hello {user?.email}</h1>
      <p>Welcome to your profile</p>
      <p>Your current role is "Reader"</p>
      <h2>Here are the articles you wrote</h2>
      <ul className='list-unstyled'>
        <li>
          <div className='d-flex py-2'>
            <p className='px-1'>article1</p>
            <a href="#article1" className='text-decoration-none text-success px-1'>Read</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Dashboard