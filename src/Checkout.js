import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import unimg from "./University.png";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div class="checkout">
      <Header />

      <div class="checkout_left">
        <Link to="/MoreBooks">
          <img
            class="checkout_ad"
            src="http://cuo.ac.in/images/logo-new-17.png"
          />
        </Link>

        <div>
          
          <h2 class="checkout_title">Your Liked Books List:</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              size={item.size}
              rating={item.rating}
              pdf={item.pdf}
            />
          ))}
          ;{/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
        </div>
      </div>
      <div>
      <Footer />
      <div class="copyRight">
        <h3>© Copy Rights Central University of Odisha All Rights Reserved</h3>
      </div>
      </div>
    </div>
    
  );
}

export default Checkout;
