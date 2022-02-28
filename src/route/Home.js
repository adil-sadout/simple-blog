import React from 'react'

function Home() {
  return (
    <div className='text-center container d-flex flex-column justify-content-center align-items-center p-5'>
      <div className='py-5 my-5'>
        <h1>Welcome to the Simple Blog</h1>
        <p>This is a test blog where you can create an account, post an article, edit that article, and finally delete it.</p>
      </div>
      
      <div className='p-5 border'>
        <h2 className='pb-5'>Start Learning Today!</h2>
        <div className='grid row g-5 justify-content-center'>
          <div className='col-md-5 bg-light mx-1'>
            <h3>Article 1</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam fugit amet, quam consequuntur veritatis quidem velit. Modi veniam error voluptates?</p>
          </div>
          <div className='col-md-5 bg-light mx-1'>
            <h3>Article 1</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam fugit amet, quam consequuntur veritatis quidem velit. Modi veniam error voluptates?</p>
          </div>
          <div className='col-md-5 bg-light mx-1'>
            <h3>Article 1</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam fugit amet, quam consequuntur veritatis quidem velit. Modi veniam error voluptates?</p>
          </div>
          <div className='col-md-5 bg-light mx-1'>
            <h3>Article 1</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam fugit amet, quam consequuntur veritatis quidem velit. Modi veniam error voluptates?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home