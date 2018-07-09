import React from "react";

function BuyBar (props){
  const newCartItem = {
    id:'',
    size:'',
    quantity:'',
    price:''
  }
  function setSize(size) {
    newCartItem.size = size;
    console.log(newCartItem);
  }
  function setQuantity (quantity) {
    newCartItem.quantity= (quantity);
    console.log(newCartItem);
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
            setQuantity(1)
          }}><a href="#">1</a></li>

          <li onClick={()=>{
            setQuantity(2)
          }}><a href="#">2</a></li>

          <li onClick={()=>{
            setQuantity(3)
          }}><a href="#">3</a></li>

          <li onClick={()=>{
            setQuantity(4)
          }}><a href="#">4</a></li>
        </ul>
      </li>
    </ul>
  </div>
  // <div className="box-for-button">
  // <button className="cart-button">add to cart</button>
  // </div>
 


  )

}

export default BuyBar;