import React, { useState } from 'react'
import "./SignIn.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import Footer from "./Footer";

function SignUp() {
    const history = useNavigate();
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ RePassword, setRePassword] = useState('');
    const [ name, setName] = useState('');
    const [ roll, setRoll] = useState('');
    const details = [["Ashutosh","19/04/DCS/01"],["Padma","19/04/DCS/02"],["Manoranjan","19/04/DCS/03"],["Sameer","19/04/DCS/04"],["Asutosh","19/04/DCS/05"],["Usha","19/04/DCS/06"],["Jamuna","19/04/DCS/07"],["Rohan","19/04/DCS/08"],["Sanjeet","19/04/DCS/09"],["Kajal","19/04/DCS/10"],["Imman","19/04/DCS/11"],["Angeline","19/04/DCS/12"],["Ayush","19/04/DCS/13"],["Priyanka","19/04/DCS/14"],["Ganga","19/04/DCS/15"],["Rudhish","19/04/DCS/16"],["Manas","19/04/DCS/18"],["Andrew","19/04/DCS/19"],["Sudipt","19/04/DCS/20"],["Sudhakar","19/04/DCS/21"],["Arpita","19/04/DCS/22"],["Chanchala","19/04/DCS/23"],["Irfana","19/04/DCS/24"]];
    console.log(details[0][1]);


    const arg = (roll == details[0][1] && name == details[0][0]) || (roll == details[1][1] && name == details[1][0]) || (roll == details[2][1] && name == details[2][0]) || (roll == details[3][1] && name == details[3][0]) || (roll == details[4][1] && name == details[4][0]) || (roll == details[5][1] && name == details[5][0]) || (roll == details[6][1] && name == details[6][0]) || (roll == details[7][1] && name == details[7][0]) || (roll == details[8][1] && name == details[8][0]) || (roll == details[9][1] && name == details[9][0]) || (roll == details[10][1] && name == details[10][0]) || (roll == details[11][1] && name == details[11][0]) || (roll == details[12][1] && name == details[12][0]) || (roll == details[13][1] && name == details[13][0]) || (roll == details[14][1] && name == details[14][0]) || (roll == details[15][1] && name == details[15][0]) || (roll == details[16][1] && name == details[16][0]) || (roll == details[17][1] && name == details[17][0]) || (roll == details[18][1] && name == details[18][0]) || (roll == details[19][1] && name == details[19][0]) || (roll == details[20][1] && name == details[20][0]) || (roll == details[21][1] && name == details[21][0]) || (roll == details[22][1] && name == details[2][0]);
    
    const register = e => {
        if(password == RePassword)
        {
        if(arg)
        {
        e.preventDefault();
    
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
              
                if (auth) {
                  alert("Your account has been created")
                  alert("Welcome to official page of CUO.")
                  history('/LibraryHome')
                }
              
            })
            .catch(error => alert(error.message))
          }
          else
          alert("You're not eligible.\nInvalid Enrollment Number!")
        }
        else
        alert("Password isn't matching!.")
    }

  return (
    <div class="Signin">
      <img class="signinTemplate" src="http://cuo.ac.in/images/logo-new-17.png"/ >
        <Link to="/SignIn">
        <img class="Signin_img" src="https://upload.wikimedia.org/wikipedia/en/7/72/Central_University_of_Odisha_logo.png"/>
        </Link>
        
        <div class="Signin_container">
            <h1>Sign Up</h1>
            <form>
                <h3>First Name</h3>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
    
                <h3>Last Name</h3>
                <input type="text" required />

                <h3>e-Mail ID</h3>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />

                <h3>Phone no.</h3>
                <input type="tel" minlength="10" maxlength="10"/>

                <h3>Enrollment No.</h3>
                <input type="text" value={roll} onChange={e => setRoll(e.target.value)} required />
    

                <h3>Password</h3>

                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />

                <h3>Password again</h3>

                <input type="password" value={RePassword} onChange={e => setRePassword(e.target.value)} required />
                

                <button class="Signin_button" onClick={register} >Sign Up</button>

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

export default SignUp