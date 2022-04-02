import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Checkout from "./Checkout"
import MoreBooks from "./MoreBooks"
import Signin from "./Signin"

function App() {
  return (

    <Router>
      <div className="App">
        {/* Home + Header */}
        <Header/>
        <Routes>
            <Route path='/Signin' element={<Signin/>} >
              </Route>
            <Route path='/MoreBooks' element={ <MoreBooks/>} >
              </Route>
            <Route path='/Checkout' element={ <Checkout/>} >
              </Route>
             {/* Checkout */}
            <Route path='/' element={<Home/>} >
              
              </Route>
            
        
      {/*<h1>Hello CUOians</h1>*/}
     
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
