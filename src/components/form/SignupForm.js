import React, {useContext, useState} from 'react'
import {createUserWithEmailAndPassword} from "firebase/auth";
import {siteContext} from  "../../context/AppContext"
function SignupForm({setIsLoginPage, redirect}) {

  const {
    AuthKey,
    setUser
  } = useContext(siteContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    try{
      const userCredential = await createUserWithEmailAndPassword(AuthKey, email, password);
      setUser(userCredential.currentUser)
      alert("Your Account Has Been Created");
      redirect("/dashboard")
    }catch(err){
      console.log(err.message)
    }

  }

  return (
    <div className='d-flex h-100 flex-column justify-content-center align-items-center mx-auto w-75'>
      <form className='w-100'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <div id="passwordHelp" className="form-text">Make sure your password is unique</div>
        </div>
        <button onClick={Register} type="submit" className="btn btn-primary">Create Account</button>
      </form>
      <button onClick={()=>{
        setIsLoginPage(true)
        setEmail("")
        setPassword("")
        
      }} className="btn bg-transparent ms-auto">Already have an account?</button>
    </div>
  )
}

export default SignupForm