import React from 'react'
import"./CheckoutProduct.css"
import{useStateValue} from "./StateProvider";



function CheckoutProduct({id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromCart = () =>
  {
    dispatch
    (
      {
        type:"REMOVE_FROM_CART",
        id:id,
      }
    )
  }

  return (
    <div class="CheckoutProduct">
        <img class="CheckoutProduct_image" src={image}/>
        <div class="CheckoutProduct_info">
            <p class="CheckoutProduct_title">
                {title}
            </p>
            <p class="CheckoutProduct_price">
                <small>₹</small>
                <b>{price}</b>
            </p>
            <div class="CheckoutProduct_rating">
            {Array (rating)
            .fill()
            .map(() => 
            (<p>⭐</p>))        
            }
            </div>
            <button onClick={removeFromCart}>Romove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct

