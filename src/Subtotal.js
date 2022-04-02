import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import{useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';

function Subtotal() {
    const[{basket}, dispatch] = useStateValue();
    return (
    <div class="subtotal">
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> Place order as a zip file.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
        <button>Download Your Book</button>
    </div>
  )
}

export default Subtotal