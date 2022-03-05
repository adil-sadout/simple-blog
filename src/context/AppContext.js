import React, {createContext, useState} from 'react'
import {AuthKey, db} from "../Firebase/config"
import { collection } from 'firebase/firestore';

const siteContext = createContext();

function AppContext(props) {
  
  const articlesCollectionRef = collection(db, "articles")
  const commentsCollectionRef = collection(db, "comments")
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [userArticles, setUserArticles] = useState([]);



  const values ={
    user,
    setUser,
    comments,
    setComments,
    allArticles,
    setAllArticles,
    userArticles,
    setUserArticles,
    AuthKey,
    db,
    articlesCollectionRef,
    commentsCollectionRef
  }
  return (
    <siteContext.Provider value={values}>
        {props.children}
    </siteContext.Provider>
  )
}

export {AppContext, siteContext}