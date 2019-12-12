import React, {useState, useEffect} from "react";


const NasaCard = props => {
 const {title, image, exp, date} = props


 return (
   <div className="photo-card">
    <h2>Photo Title: {title}</h2>
    <div className="image-container">
      <img className="image" src={image} alt="Nasa pic of the day"  />
      <p className="description" >Photo Description: {exp}</p>
      <p className="date" >Date: {date}</p>
    </div>
   </div>
 );
}


export default NasaCard;







