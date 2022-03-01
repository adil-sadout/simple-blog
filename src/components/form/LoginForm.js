import {siteContext} from "../../context/AppContext";
import {useContext, useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";

function LoginForm({setIsLoginPage, redirect}) {
  const {
    AuthKey,
    setUser
  } = useContext(siteContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const Login = async (e)=>{
    e.preventDefault();

    try{
      const userCredential = await signInWithEmailAndPassword(AuthKey, email, password);
      setUser(userCredential.currentUser)
      alert("Your Account Has logged in");
      redirect("/dashboard")
    }catch(err){
      console.log(err.message)
    }
    
  }

  return (
    <div className='d-flex h-100 flex-column justify-content-center align-items-center mx-auto w-75'>
      <form className='w-100'>
        <div className="mb-3">
          <label htmlFor="InputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="InputPassword1"  value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button onClick={Login} type="submit" className="btn btn-primary">Login</button>
      </form>
      <button onClick={()=>{
        
        setIsLoginPage(false)
        setEmail("")
        setPassword("")
        
      }} className="btn bg-transparent ms-auto">Sign up Instead</button>
      
    </div>
  )
}

export default LoginForm