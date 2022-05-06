import React, {useState} from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom';
import{useStateValue} from "./StateProvider";
import Search from "./Search.json";
import { valueToPercent } from "@mui/base";

import data from "./Data"
import "./Product.css";
import "./Search.css";
import { jsPDF } from "jspdf";
import PDF from "./University.png"
import { saveAs } from "file-saver";




function Header({ id, title, image, size, rating, pdf  }) 
{
const[searchTerm, setSearchTerm] = useState('');
const[{basket}, dispatch] = useStateValue();

  const [display, setDisplay] = useState(false);
  const search = { display: display ? "block" : "none" };
  const set = () => setDisplay((s) => !s);

const [filter, setFilter] = useState("");

   const searchText = (event) => {
       setFilter(event.target.value);
   }
   let datSearch = data.cardData.filter(item => {
       return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
   })
   
   const pdfGenerate = () => {
    //const doc = PDF;
    const doc = new jsPDF();
    doc.text(title, 40, 20);
    doc.addImage(PDF,"PNG",15,30, 180, 100)
    doc.save(title);
    };

    const saveFile = () => {
      saveAs(("https://drive.google.com/file/d/1tU1zJfP1bmtQJ5Na4pVCepNEj7KUcCvb/view?usp=sharing"),title);
      };
  return (
    <div class="header">
      <Link to="/LibraryHome">
      <img
        class="header_logo"
        src="https://upload.wikimedia.org/wikipedia/en/7/72/Central_University_of_Odisha_logo.png"
      />
      </Link>
      
      <Link to="/CUO_Home">
        <div class="header_option">
          <span class="header_optionLineTwo">Home</span>
        </div>
        </Link>
      
      <div class="header_search">
        <input class="header_search" type="text" value={filter} onChange={searchText.bind(this)} onEnterPress={set} />

        <SearchIcon class='header_searchIcon' onClick={set}/>
        
        {/*
        <div class="data"> 
        {data.map((value, key)=>{
          return(
            <a class="dataItem" href={value.link}>

              {value.title}{""}
            </a>
          );
        })}
        </div>
        */
        }
        <div class="search" style={search}>
            {datSearch.map((item, index)=>{
                return(

                    <div class="card p-0 overflow-hidden h-100 shadow">
                    <div class="content">
                    <img src={item.image} class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">Size: {item.size}</p>
                    </div>
                        <div class="butn">
                        <button class="button1" onClick={saveFile}>Download</button>
                        </div>
                </div>
            </div>
            )
        })}      

        
        </div>
      </div>
      <div class="header_nav">
        <Link to="/Category">
        <div class="header_option">
        <span class="header_optionLineOne">Choose By</span>
          <span class="header_optionLineTwo">Category</span>
        </div>
        </Link>
      
        
        <Link to="/Signin">
        <div class="header_option">
          <span class="header_optionLineOne">Account</span>
          <span class="header_optionLineTwo">Log Out</span>
        </div>
        </Link>
        
        <Link to="/Checkout">
        <div class="header__optionBasket">
        <div class="header_option">
          <span class="header_optionLineOne">Your</span>
          <span class="header_optionLineTwo">Liked Books</span>
        </div>
            
            <span class="header__optionLineTwo fheader_basketCount">
                <b>{basket?.length}</b>
            </span>
          </div>
        </Link>
        
        

      </div>
      
    </div>
    
  );
}

export default Header;
