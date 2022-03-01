import React, {createContext, useState} from 'react'
import {AuthKey} from "../Firebase/config"
const siteContext = createContext();

function AppContext(props) {

  const [user, setUser] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
  const [userArticles, setUserArticles] = useState([]);
  

  const values ={
    user,
    setUser,
    allArticles,
    setAllArticles,
    userArticles,
    setUserArticles,
    AuthKey
  }
  return (
    <siteContext.Provider value={values}>
        {props.children}
    </siteContext.Provider>
  )
}

export {AppContext, siteContext}