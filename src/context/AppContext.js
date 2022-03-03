import React, {createContext, useState} from 'react'
import {AuthKey, db} from "../Firebase/config"
import { collection } from 'firebase/firestore';

const siteContext = createContext();

function AppContext(props) {
  
  const articlesCollectionRef = collection(db, "articles")
  const [user, setUser] = useState(null);
  const [action, setAction] = useState(false);
  const [allArticles, setAllArticles] = useState([]);
  const [userArticles, setUserArticles] = useState([]);



  const values ={
    user,
    setUser,
    allArticles,
    setAllArticles,
    userArticles,
    setUserArticles,
    AuthKey,
    db,
    action,
    setAction,
    articlesCollectionRef
  }
  return (
    <siteContext.Provider value={values}>
        {props.children}
    </siteContext.Provider>
  )
}

export {AppContext, siteContext}