import React, { useState } from 'react'
import "./SignIn.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import Footer from "./Footer";
        


function Signin() {
  const history = useNavigate();
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
 
  

  const signIn = e => {
    e.preventDefault();
    
    auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
              alert("Welcome to official page of CUO.")
              history('/LibraryHome')
                
            })
            .catch(error => alert(error.message))

    
  }
  
  return (
    <div class="Signin">
      <img class="signinTemplate" src="http://cuo.ac.in/images/logo-new-17.png"/ >
        <Link to="/SignIn">
        <img class="Signin_img" src="https://upload.wikimedia.org/wikipedia/en/7/72/Central_University_of_Odisha_logo.png"/>
        </Link>
        
        <div class="Signin_container">
            <h1>Sign In</h1>
            <form>
                <h3>UserName</h3>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h3>Password</h3>

                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <Link to="/ResetPassword">
                  <a href="#"><h5>Forgot Password?</h5></a>
                </Link>

                <button class="Signin_button" onClick={signIn} >Sign In</button>

                <p>By continuing, you agree to CUO's Conditions of Use and Privacy Notice.</p>
                <Link to="/SignUp">
                <button class="Registration_button" > Create Your CUO Account</button>
                </Link>
            </form>
            
        </div>
        <div class="footer"> 
            <Footer/>
        </div>
        <div class="copyRight" >
          <h4>© Copy Rights Central University of Odisha All Rights Reserved</h4>
        </div>
        </div>
    
  )
}

export default Signin