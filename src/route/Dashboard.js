import React, {useContext, useEffect} from 'react';
import {siteContext} from "../context/AppContext";
import {Navigate, useNavigate} from "react-router-dom"
import CreateArticle from "../components/form/CreateArticle";
import { doc, deleteDoc  } from 'firebase/firestore';

function Dashboard() {
  const {user, allArticles, setAllArticles, userArticles, setUserArticles, db, setAction, action} = useContext(siteContext);
  const history = useNavigate();


  const redirect = path => {
    history(path);
  };

  useEffect(()=>{
    const filteredList = allArticles.filter(article => article?.author?.email ==="dzadzad@hello.com" )
    setUserArticles(filteredList)
    console.log(filteredList)
  },[allArticles])

  

  const deleteArticle = async (id)=>{
    console.log(id)
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
        <div className='d-flex flex-column container align-items-center justify-content-center p-5'>
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
                  <li className='d-flex justify-content-between align-items-center my-2 list-group-item' key={post?.id}>
                    <p className='mx-1 fs-1 w-75 text-break'>{post?.title}</p>
                    <div className='w-25'>
                      <button className='btn p-0 btn-warning m-1 w-100 disabled'>Edit</button>
                      <button onClick={() => {
                        deleteArticle(post?.id)
                        setAction(!action)
                      }} className='btn p-0 btn-danger m-1 w-100'>X</button>
                    </div>
                    
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