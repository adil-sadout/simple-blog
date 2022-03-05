import NavbarWrapper from "./components/header/HeaderWrapper";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingleArticle from "./route/SingleArticle";
import Dashboard from "./route/Dashboard";
import LoginPage from "./route/LoginPage";
import Home from "./route/Home";
import { useContext } from "react";
import { siteContext } from "./context/AppContext";
import ErrorPage from "./route/ErrorPage";

function App() {

  const {allArticles} = useContext(siteContext)

  return (
    
    <BrowserRouter>
      
      <header>
        <NavbarWrapper/>
      </header>
      <main>
        

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post/:id" element={<SingleArticle />} />
          <Route path="*" element={<ErrorPage />} />
         
        </Routes>

        
      </main>
    </BrowserRouter>
  );
}

export default App;
