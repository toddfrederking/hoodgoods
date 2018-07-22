import React from "react";
import { connect } from 'react-redux';
import state from "../state";
import {setProductSize, setProductQuantity} from '../actions';


function BuyBar (props){


  const newCartItem = {
    id:'',
    size:'',
    quantity:'',
    price:'',
    imageURL:''
  }


  function setSize(size) {
  //  props.dispatch(setProductSize(size, props.shirt.id));

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
    
    
  
  function setQuantity (quantity,id, price, imageURL) {
    // newCartItem.quantity= (quantity);
    // console.log(newCartItem);
    if(!state.active[id]){
      state.active[id] = {
       id:'',
       size: '',
       quantity: quantity,
       price:'',
       imageURL:''
      }
     } else {
       state.active[id].quantity = quantity;
       state.active[id].id=props.shirt.id;
       state.active[id].price;
       state.active[id].imageURL=props.shirt.imageURL;
     }
     
    }

    console.log(props.shirt)
    
  return(
 
    <div className="buy-bar">
    <ul>
      <li><a href="#">size</a>
        <ul>
          <li onClick={(e) => {
            e.preventDefault();
            props.onSetProductSize('small', props.shirt.id)
          }}><a href="#">small</a></li>

          <li onClick={(e)=>{
            // setSize("medium");
            e.preventDefault();
            props.onSetProductSize('medium', props.shirt.id)
          }}><a href="#">medium</a></li>

          <li onClick={(e)=>{
            e.preventDefault();
            props.onSetProductSize('large', props.shirt.id)
          }}><a href="#">large</a></li>

          <li onClick={(e)=>{
            e.preventDefault();
            props.onSetProductSize('XL', props.shirt.id)
          }}><a href="#">huggable</a></li>
        </ul>
      </li>
      <li><a href="#">how many</a>
        <ul>
          {[1, 2, 3, 4].map(item => (
            <li onClick={(e)=>{
              e.preventDefault();
              props.onSetQuantity(item,props.shirt.id, props.shirt.price, props.shirt.imageURL);
              }}><a href="#">{item}</a></li>
          ))}
        </ul>
      </li>
    </ul>
  </div>
  // {/* <div className="box-for-button">
  // <button className="cart-button">add to cart</button>
  // </div> */}
 
 


  )

}

const mapStateToProps = store => ({
  store:store
})
const mapDispatchToProps = dispatch => ({
  onSetProductSize: (size, id) => {
    dispatch(setProductSize(size, id)) 
  },
  onSetQuantity: (quantity, id, price, imageURL) => {
    dispatch(setProductQuantity(quantity,id,price,imageURL))
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(BuyBar);