import React from 'react'
import "./SignIn.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import Footer from "./Footer";


function Upload() {
  

  return (
    <div class="Signin">
    <img class="signinTemplate" src="http://cuo.ac.in/images/logo-new-17.png"/ >
    <Link to="/">
    <img class="Signin_img" src="https://upload.wikimedia.org/wikipedia/en/7/72/Central_University_of_Odisha_logo.png"/>
    </Link>
    
    <div class="Signin_container">
        <h1>Upload</h1>
        <form>
            <h3>File</h3>
            <input type="file"/>

            <button class="Signin_button"  >Submit</button>

            <p>By continuing, you agree to CUO's Conditions of Use and Privacy Notice.</p>
            
        </form>
        
    </div>
    </div>
  )
}

export default Upload