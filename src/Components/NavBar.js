import React from "react";

function NavBar (){
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
      <div className="cart nav-border">
        <a href="#">cart</a>
      </div>
    </div>
  </div>



  );


}

export default NavBar;


