import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Checkout from "./Checkout"
import Upload from "./Upload";
import Search from "./Search";
import MoreBooks from "./MoreBooks"
import SignIn from "./SignIn"
import Category from "./Category"
import CUOHome from "./CUOHome"
import SignUp from "./SignUp"
import ResetPassword from "./ResetPassword"

function App() {
  return (
    

    <Router>
      <div className="App">
        {/* Home + Header */}
        
        <Routes>

            <Route path='/CUO_Home' element={<CUOHome/>} />

            <Route path='/LibraryHome' element={<Home/>} />
              
            <Route path='/MoreBooks' element={ <MoreBooks/>} />
              
            <Route path='/Checkout' element={ <Checkout/>} />

            <Route path='/Category' element={ <Category/>} />

            <Route path='/SignIn' element={<SignIn/>} />

            <Route path='/SignUp' element={ <SignUp/>} />

            <Route path='/ResetPassword' element={ <ResetPassword/>} />
              
            <Route path='/Search' element={ <Search/>} />

            <Route path='/Upload' element={ <Upload/>} />
              
             {/* Checkout */}
            <Route path='/' element={<CUOHome/>} />
              
            
            
        
      {/*<h1>Hello CUOians</h1>*/}
     
        </Routes>
        
    </div>
    </Router>
    
  );
}

export default App;
