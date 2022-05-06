import React,{useState} from 'react'
import "./SignIn.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import Footer from "./Footer";

function ResetPassword() {
    const history = useNavigate();
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');


    const forgotPassword = e => {
        e.preventDefault();
        
        auth
                .sendPasswordResetEmail(email, password)
                .then(auth => {
                  alert("An E-mail has been send to you.")
                    
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
            <h1>Reset Password</h1>
            <form>
                <h3>UserName</h3>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <button class="Signin_button" onClick={forgotPassword} >Send An e-Mail</button>

                <p>By continuing, you agree to CUO's Conditions of Use and Privacy Notice.</p>
                
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

export default ResetPassword