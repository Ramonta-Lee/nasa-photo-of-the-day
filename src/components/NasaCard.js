import React from "react";


const NasaCard = props => {
 const {title, image, exp, date} = props


 return (
   <div className="photo-card">
     <h2>Photo Title: {title}</h2>
     <img className="image" src={image} alt="Nasa pic of the day" />
     <p>Photo Description: {exp}</p>
     <p>Date: {date}</p>
   </div>
 );
}


export default NasaCard;







