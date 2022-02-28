import { useEffect } from "react";
import NavbarWrapper from "./components/header/HeaderWrapper";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingleArticle from "./route/SingleArticle";
import UserPage from "./route/UserPage";
import LoginPage from "./route/LoginPage";
import Home from "./route/Home";
import {AppContext} from "./context/AppContext";



function App() {


  useEffect(()=>{

  },[])



  return (
    
    <BrowserRouter>
      <AppContext>
      <header>
        <NavbarWrapper/>
      </header>
      <main>
      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/:username" element={<UserPage />} />
          <Route path="/:articlename" element={<SingleArticle />} />
        </Routes>

        
      </main>
      </AppContext> 
    </BrowserRouter>
  );
}

export default App;
