import {useContext, useEffect, useState} from 'react';
import {siteContext} from "../context/AppContext";
import {Navigate, useNavigate} from "react-router-dom"
import CreateArticle from "../components/form/CreateArticle";
import { doc, deleteDoc  } from 'firebase/firestore';
import UserArticle from "./UserArticle"

function Dashboard() {
  const {user, allArticles, setAllArticles, userArticles, setUserArticles, db} = useContext(siteContext);
  const history = useNavigate();


  const redirect = path => {
    history(path);
  };

  

  useEffect(()=>{
    const filteredList = allArticles.filter(article => article?.author?.email ===user.email )
    setUserArticles(filteredList)
  },[allArticles])

  

  const deleteArticle = async (id)=>{
    const articleDoc = doc(db, "articles", `${id}`);
    await deleteDoc(articleDoc);
    const filteredList = allArticles.filter(article => article?.id !==id )
    setAllArticles(filteredList)
  }

    
  return (
    <>
      {
      (user !== null) ?
      <>
        <div className='text-break d-flex flex-column container align-items-center justify-content-center p-5'>
          <h1>Hello {user?.email}</h1>
          <div className='w-100'>
            <CreateArticle redirect={redirect} />
          </div>
        </div>
        <div className='d-flex flex-column container align-items-around justify-content-around pb-5'>
          <p className='display-1 text-center'>Your Posts</p>
          {
            (userArticles.length !==0)?
            <ul className='list-group'>
              {userArticles.map(post =>{
                return (
                  <li className='list-group-item' key={post?.id}>
                    <UserArticle post={post} deleteArticle={deleteArticle} />
                  </li>
                )
              })}
            </ul>
            :
            <p>No articles were found</p>
          }
        </div>
        
      </>
      :
      <Navigate to="/auth" />
      }
    </>
  )
}

export default Dashboard