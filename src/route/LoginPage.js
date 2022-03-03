import {useState, useContext}  from 'react';
import {Navigate, useNavigate} from "react-router-dom"
import LoginForm from '../components/form/LoginForm';
import SignupForm from '../components/form/SignupForm';
import {siteContext} from "../context/AppContext"

function LoginPage() {
  const [isLoginPage, setIsLoginPage] = useState(true)
  const {user} = useContext(siteContext)


  const history = useNavigate();

  const redirect = path => {
    history(path);
  };
  

  
  return (
    <div className='height500 p-5'>
      {
        (user === null)?

        <>{
          (isLoginPage === true)?
          <>
            <p className='text-center display-1 pb-2'>Login</p>
            <LoginForm redirect={redirect} setIsLoginPage={setIsLoginPage} />
          </>
          :
          <>
            <p className='text-center display-1 pb-2'>Sign Up</p>
            <SignupForm redirect={redirect} setIsLoginPage={setIsLoginPage} />
          </>
          
        }</>:
        <Navigate to="/dashboard" />
      }
      
      
      
    </div>
  )
}

export default LoginPage