import React from "react";
import state from "../state";
import ShowCart from "./ShowCart";
import {OverlayTrigger, Button, Popover} from 'react-bootstrap';
import { connect } from 'react-redux';
import Shirt from './Shirt';




function NavBar (props){
  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Cart">
      <strong>Holy guacamole!</strong> Check this info.
      <div className = "mock-box">
      {
      props.store.cart.map(item => {
        return (
          <Shirt shirt = {item} />
       
        )
        // console.log(props);
      })
    }

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


