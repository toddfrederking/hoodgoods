import React from "react";
import state from "../state";
import ShowCart from "./ShowCart";
import {OverlayTrigger, Button, Popover} from 'react-bootstrap';
import { connect } from 'react-redux';
import Shirt from './Shirt';
import BabyShirt from './BabyShirt';

const port = process.env.REACT_APP_PROXY_PORT || 3002;

function checkout(carts) {
  fetch(`http://localhost:${port}/checkout`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(carts)
  });
}


function NavBar (props){
  function subTotal(props){
    return props.store.cart.reduce((accum, curr) => accum + (curr.price * curr.quantity), 0)
  } 

  const Styles = {
    // backgroundColor : 'red',
    display: 'flex',
    justifyContent: 'center' 
  }


  const popoverBottom = (
    <Popover style = {Styles} id="popover-positioned-bottom" className = "cart-box">
      <strong>Items In Your Cart</strong>
      <div className = "cart-box">
      {
      props.store.cart.map(item => {
        return (
          <BabyShirt shirt = {item} />
       
        )
        // console.log(props);
      })
    }
    

    <ul className="cart-list">
      <li>Subtotal: {subTotal(props)}</li>
      <li>Tax: {(subTotal(props) * 0.0825).toFixed(2)}</li>
      <li>Shipping: $4</li>
      <li>Total {(subTotal(props) * 1.0825 + 4).toFixed(2)}</li>
     
    </ul>
    <button className = "cart-button" onClick={() => checkout(props.store.cart)}>Checkout</button>
      </div>

    </Popover>
  );
  
  // console.log(state)
  return(
<div className="nav-bar">
    <div className="title-box">
      <h1>hoodgoods.net</h1>
    </div>

    <div className="menu-box">

      <div className="home nav-border">
        <a href="#">home</a>
      </div>
      <div className="catalog nav-border">
        <a href="#">catalog</a>
      </div>
    </div>
    <div className="icon-box">
      <div className="search nav-border">
        <a href="#">search</a>
      </div>
      {/* <div className="cart nav-border" onClick ={ () => ShowCart("cart")}>
        <a href="#">cart {(state.numberOfItemsInCart)}</a>
      
      </div> */}
      <OverlayTrigger trigger="click" placement="bottom"    overlay={popoverBottom}>
        <Button className="cart-button"onClick={(e) => {
            e.preventDefault();
            <ShowCart cart ={props.store.cart}/>}}>cart {props.store.cart.length}</Button>
      </OverlayTrigger>
    </div>
  </div>



  );
  console.log(state);


}
const mapStateToProps = store => ({
  store: store || { cart: [] }
})
export default connect(mapStateToProps)(NavBar);


