import {useContext} from 'react'
import {useParams, Navigate} from "react-router-dom"
import {siteContext} from "../context/AppContext"
function SingleArticle() {

  const {id} = useParams();
  const {allArticles} = useContext(siteContext);
  const currentArticle = allArticles.find(article => article.id ===id)
  

  return (
    <>
    {
      (currentArticle==="undefined")?
      <Navigate to="/auth" />:
      <div className='text-break text-center container d-flex flex-column justify-content-center  p-5 border'>
        <p className='display-2'>{currentArticle?.title}</p>
        <li className="dropdown-divider"></li>
        <p className='text-start fs-5'>{currentArticle?.article}</p>
      </div>
    }
    </>
    
  )
}

export default SingleArticle