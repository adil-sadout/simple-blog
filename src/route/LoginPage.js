import {useState}  from 'react';
import LoginForm from '../components/form/LoginForm';
import SignupForm from '../components/form/SignupForm';

function LoginPage() {
  const [isLoginPage, setIsLoginPage] = useState(true)

  return (
    <div className='height500 p-5'>
      <>{
        (isLoginPage === true)?
        <>
          <p className='text-center display-1 pb-2'>Login</p>
          <LoginForm setIsLoginPage={setIsLoginPage}/>
        </>
        :
        <>
          <p className='text-center display-1 pb-2'>Sign Up</p>
          <SignupForm setIsLoginPage={setIsLoginPage}/>
        </>
        
        }</>
      
      
    </div>
  )
}

export default LoginPage