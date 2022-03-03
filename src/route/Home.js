import { useContext} from 'react'
import {siteContext} from "../context/AppContext"

function Home() {

  const {allArticles} = useContext(siteContext)
  


  return (
    <div className='text-break text-center container d-flex flex-column justify-content-center align-items-center p-5'>
      <div className='py-5 my-5'>
        <h1>Welcome to the Simple Blog</h1>
        <p>This is a test blog where you can create an account, post an article, edit that article, and finally delete it.</p>
      </div>
      
      <div className='container px-5 pb-4 border'>
        <h2 className='p-3'>Start Learning Today!</h2>
        <div className='grid row g-3 d-flex justify-content-between'>
          {
            (allArticles.length !==0) ?
            allArticles.map(post =>{
              return (
                <div className='col-md-5 bg-light border pt-3' key={post?.id}>
                  <p className='lead'>By: {post?.author.email}</p>
                  <p className='h3'>{post?.title}</p>
                  <p>{post?.article}</p>
                  
                  
                </div>
              )
            })
            :
            
            <p>There are currently no articles</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Home