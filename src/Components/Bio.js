import React from "react";
import Duo from "../img/about-us.jpg";

function Bio (){
  return(

    <div>
    <div className="bio">
    <img className="biopic" src={Duo} />
    <div className="biotext">
      <p>Hi, and welcome to our online store. We are Darcy and Todd, life long friends, and together we are hoodgoods.net.</p>
      <p>One of us is a single mom and designer, the other is a techie and aspiring developer. We’ve known each other for over 15 years but up until recently, we’ve rarely lived in the same city. After spates short and long in many places, we now both call
        Austin, Texas home.</p>
      <p>Each of us has lived in some of the greatest cities in the world and in those cities, we’ve lived in and loved some fantastic neighborhoods, all with their own style and flavor. Now that we are both in Austin, we want to celebrate all the places
        we have lived and the shop owners, barristas, mail people, neighbors and friends who have captured our hearts and made our respective journeys so unique and memorable. hoodgoods.net is a celebration of all the special things that bind people together,
        and make a neighborhood so much more than just a place on a map.
      </p>
      <p>All of our designs are original, just like the neighborhoods we represent. We hope you enjoy them as much as we enjoy bringing them to you. Cheers to good neighbors!</p>
    </div>

  </div>

  <div className="footer">
    <p>&#x24B8 2017 hoodgoods.net</p>
  </div>

  </div>
  );

}

export default Bio;

