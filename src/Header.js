import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom';
import{useStateValue} from "./StateProvider";


function Header() 
{
  
  const[{basket}, dispatch] = useStateValue();
  return (
    
    <div class="header">
      <Link to="/">
      <img
        class="header_logo"
        src="https://upload.wikimedia.org/wikipedia/en/7/72/Central_University_of_Odisha_logo.png"
      />
      </Link>
      
      <Link to="/">
        <div class="header_option">
          <span class="header_optionLineTwo">Home</span>
        </div>
        </Link>
      
      <div class="header_search">
        <input class="header_search" type="text" />
        <SearchIcon class='header_searchIcon'/>
      </div>
      <div class="header_nav">
        <Link to="/Signin">
        <div class="header_option">
          <span class="header_optionLineOne">Hello Student</span>
          <span class="header_optionLineTwo">Sign In</span>
        </div>
        </Link>

        <div class="header_option">
          <span class="header_optionLineOne">Returns</span>
          <span class="header_optionLineTwo">& Orders</span>
        </div>

        <div class="header_option">
          <span class="header_optionLineOne">Your</span>
          <span class="header_optionLineTwo">Wish List</span>
        </div>
        <Link to="/Checkout">
        <div class="header__optionBasket">
            <ShoppingBasket  />
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
