import React, { useState } from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom';


function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();
  }
  const register = e => {
    e.preventDefault();
  }
  
  return (
    <div class="Signin">
        <Link to="/">
        <img class="Signin_img" src="https://upload.wikimedia.org/wikipedia/en/7/72/Central_University_of_Odisha_logo.png"/>
        </Link>
        
        <div class="Signin_container">
            <h1>Sign In</h1>
            <form>
                <h3>e-Mail</h3>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h3>Password</h3>
                <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                <button class="Signin_button" onClick={signIn} >Sign In</button>
                <p>By continuing, you agree to CUO's Conditions of Use and Privacy Notice.</p>
                <button class="Registration_button" onClick={register}> Create Your CUO Account</button>
            </form>
        </div>
        </div>
    
  )
}

export default Signin