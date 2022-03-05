import {useContext, useEffect, useState} from 'react'
import {useParams, Navigate} from "react-router-dom"
import {siteContext} from "../context/AppContext"
import CommentForm from '../components/form/CommentForm'
import { getDocs} from 'firebase/firestore';
import Comment from '../helper/Comment';

function SingleArticle() {

  const {id} = useParams();
  const {allArticles, commentsCollectionRef, comments, setComments, db} = useContext(siteContext);
  const [articleComments, setArticleComments] = useState([])
  
  const currentArticle = allArticles.find(article => article.id ===id)

  useEffect(()=>{
    
    const getComments = async ()=>{
      const data = await getDocs(commentsCollectionRef);
      setComments(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
    }
    getComments();
    
    
    
  },[currentArticle])

  useEffect(()=>{
    const correctComments = comments.filter(comment => comment.articleId === currentArticle?.id)
    setArticleComments(correctComments)
    
  },[comments])

  


  
  

  return (
    <>
    {
      (currentArticle===undefined)?
      <Navigate to="/" />:
      <>
        <div className='text-break text-center container d-flex flex-column justify-content-center p-5 border'>
          <p className='display-6'>{currentArticle?.title}</p>
          <li className="dropdown-divider"></li>
          <p className='text-start fs-5'>{currentArticle?.article}</p>
          <CommentForm currentArticle={currentArticle} />
          <div className='py-5'>
          {
            (articleComments.length!==0)?
            <>
            {
              articleComments.map(comm =><Comment comm={comm} comments={comments} setComments={setComments} key={comm.id} db={db} />)
            }
            </>
            :
            <p>No comments</p>
          }
          </div>
        </div>
      </>
      
    }
    </>
    
  )
}

export default SingleArticle