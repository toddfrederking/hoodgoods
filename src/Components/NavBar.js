import React from "react";
import state from "../state";
import ShowCart from "./ShowCart";
import {OverlayTrigger, Button, Popover} from 'react-bootstrap';
import { connect } from 'react-redux';
import Shirt from './Shirt';
import BabyShirt from './BabyShirt';




function NavBar (props){
  function subTotal(props){
    let subArray = [];
    subArray = props.store.cart.map(props => {
      let littleSub = (props.quantity * props.price)
      subArray = subArray.push(littleSub);
      return subArray;
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return(subArray.reduce(reducer, 0));

  } 


  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Cart" className = "cart-box">
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
    

    <ul>
      <li>Subtotal: {subTotal(props)}</li>
    </ul>
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
        <Button onClick={(e) => {
            e.preventDefault();
            <ShowCart cart ={props.store.cart}/>}}>Cart {props.store.cart.length}</Button>
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


