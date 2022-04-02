import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal"
import{useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

 
function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div class="checkout">
        <div class="checkout_left">
          <Link to="/MoreBooks">
        <img class="checkout_ad" src='https://images-na.ssl-images-amazon.com/images/G/31/img21/Books/022022/BookBazaar/1500x300_Gifting-ideas-for-book-lovers_._CB625197854_.jpg' />

          </Link>
        
        <div>
            <h2 class="checkout_title">Your Shopping Cart</h2>
            
            {basket.map(item => (
            <CheckoutProduct
            id= {item.id} 
            title= {item.title}
            image= {item.image}
            price= {item.price}
            rating= {item.rating}

            />
            ))};
            {/*BasketItem*/}
            {/*BasketItem*/}
            {/*BasketItem*/}
            {/*BasketItem*/}
        </div>
        </div>

        <div class="checkout_right">
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout 