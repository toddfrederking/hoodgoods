import React from "react";
import BuyBar from "./BuyBar";

function BoxToBuy (props){
  return(
    <div className="buy-it-box">
    <div className="price-box">
      ${props.shirt.price}
    </div>
    <div className="box-for-drop-downs">
    <BuyBar shirt={props.shirt}/>

    </div>
    <div className="box-for-button">
      <button className="cart-button">add to cart</button>
    </div>

  </div>

  )

}

export default BoxToBuy;