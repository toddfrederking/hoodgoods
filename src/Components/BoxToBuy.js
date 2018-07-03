import React from "react";
import BuyBar from "./BuyBar";

function BoxToBuy (){
  return(
    <div className="buy-it-box">
    <div className="price-box">
      $25
    </div>
    <div className="box-for-drop-downs">
    <BuyBar/>

    </div>
    <div className="box-for-button">
      <button className="cart-button">add to cart</button>
    </div>

  </div>

  )

}

export default BoxToBuy;