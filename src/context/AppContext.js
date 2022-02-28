import React, {createContext, useState} from 'react'
const siteContext = createContext();

function AppContext(props) {

  const [auth, setAuth] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [allArticles, setAllArticles] = useState([]);
  const [userArticles, setUserArticles] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const values ={
    auth,
    setAuth,
    loggedIn,
    setLoggedIn,
    allArticles,
    setAllArticles,
    userArticles,
    setUserArticles,
    email,
    setEmail,
    password,
    setPassword
  }
  return (
    <siteContext.Provider value={values}>
        {props.children}
    </siteContext.Provider>
  )
}

export {AppContext, siteContext}