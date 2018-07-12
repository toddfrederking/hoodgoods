import React from "react";
import BuyBar from "./BuyBar";
import state from "../state";

function BoxToBuy (props){

function pushToCart () {
  state.cart.push(state.active);
  state.numberOfItemsInCart = state.cart.length;
  state.active = {

  }
};

  return(
    <div className="buy-it-box">
    <div className="price-box">
      ${props.shirt.price}
    </div>
    <div className="box-for-drop-downs">
    <BuyBar shirt={props.shirt}/>

    </div>
    <div className="box-for-button">
      <button className="cart-button" onClick={()=> {pushToCart(), console.log ('cart items',(state.numberOfItemsInCart))}}>add to cart</button>
      
    </div>
    
  </div>
  
  )
  // console.log("cart", state.cart);

}

export default BoxToBuy;