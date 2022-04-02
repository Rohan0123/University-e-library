import React from 'react';
import "./Product.css";
import{useStateValue} from "./StateProvider";

function Product( {id, title, image, price, rating }) 
{
  const[state, dispatch] = useStateValue();
  const addToCart = () =>
  {
    dispatch
    ({
      type: "ADD_TO_CART",
      item:{
      id: id,
      title:title,
      image:image,
      price:price,
      rating:rating,
    },

    })
  }
  return (
    <div class="product ">
        <div class="product_info">
        <p>
        {title}
        </p>
        <p class="product_price">
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div class="product_rating">
          {Array (rating)
            .fill()
            .map(() => (<p>⭐</p>))
          
          }
        </div>
        </div>
        <img src={image} alt="" />
        
        
        <button onClick={addToCart}>
            Add to Cart
        </button>
    </div>
  )
}

export default Product