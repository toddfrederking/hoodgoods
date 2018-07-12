import React from "react";
import state from "../state";

function BuyBar (props){


  const newCartItem = {
    id:'',
    size:'',
    quantity:'',
    price:''
  }


  function setSize(size) {
   if(!state.active[props.shirt.id]){
     state.active[props.shirt.id] = {
      id:'',
      size: size,
      quantity:'',
      price:''
     }
    } else {
      state.active[props.shirt.id].size = size 
    }
    // console.log(state)
    // newCartItem.size = size;
   }
    
    
  
  function setQuantity (quantity,props) {
    // newCartItem.quantity= (quantity);
    // console.log(newCartItem);
    if(!state.active[props.shirt.id]){
      state.active[props.shirt.id] = {
       id:'',
       size: '',
       quantity: quantity,
       price:''
      }
     } else {
       state.active[props.shirt.id].quantity = quantity;
       state.active[props.shirt.id].id=props.shirt.id;
       state.active[props.shirt.id].price=props.shirt.price;
     }
    //  console.log(state)
    
    }
  
  return(
 
    <div className="buy-bar">
    <ul>
      <li><a href="#">size</a>
        <ul>
          <li onClick={() => {
            setSize("small");
          }}><a href="#">small</a></li>

          <li onClick={()=>{
            setSize("medium")
          }}><a href="#">medium</a></li>

          <li onClick={()=>{
            setSize('large')
          }}><a href="#">large</a></li>

          <li onClick={()=>{
            setSize('XL')
          }}><a href="#">huggable</a></li>
        </ul>
      </li>
      <li><a href="#">how many</a>
        <ul>
          <li onClick={()=>{
            setQuantity(1,props)
          }}><a href="#">1</a></li>

          <li onClick={()=>{
            setQuantity(2,props)
          }}><a href="#">2</a></li>

          <li onClick={()=>{
            setQuantity(3,props)
          }}><a href="#">3</a></li>

          <li onClick={()=>{
            setQuantity(4,props)
          }}><a href="#">4</a></li>
        </ul>
      </li>
    </ul>
  </div>
  // {/* <div className="box-for-button">
  // <button className="cart-button">add to cart</button>
  // </div> */}
 
 


  )

}

export default BuyBar;