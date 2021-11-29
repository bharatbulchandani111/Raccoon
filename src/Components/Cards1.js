import React from 'react';
import '../CSS/card1.css';
import { Link } from 'react-router-dom';
const Card1 = (props) =>{
    const data = props.data;
    const divStyle = (src) => ({
        backgroundImage: 'url(' + src + ')'
      })
    return(
        <div className="cards1">
        <h1>{props.title} </h1>
        {
         data.map((item,id)=>{
             return(
                <Link
            to={`/movies/${item.id}`}
          >
            <div className="contain1" style={divStyle(item.cardImg)}>
            <div className="desc1">
            <h1>{item.title}</h1>
            <p> {item.description}</p>
            </div>
            </div>
            </Link>
             );
         })  
         }
         </div> 
      
    );
}

export default Card1;