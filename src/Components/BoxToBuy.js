import React from "react";
import { connect } from 'react-redux';
import BuyBar from "./BuyBar";
import state from "../state";
import {setCart} from "../actions";

function BoxToBuy (props){

function pushToCart () {
  console.log(props, "inpushToCart")
  props.dispatch(setCart(props.store.active))

  
};
// debugger;
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
  console.log("cart", props.store.cart);

}
const mapStateToProps = store => ({
  store
})

export default connect(mapStateToProps)(BoxToBuy)