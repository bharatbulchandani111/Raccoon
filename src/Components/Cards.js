import "../CSS/cards.css";
import React from "react";

import { Link } from "react-router-dom";
const Cards = (props) => {
  const divStyle = (src) => ({
    backgroundImage: "url(" + src + ")",
  });
  const data = props.data;
  return (
    <div className="cards">
      <h1>{props.title} </h1>
      {data.map((item, id) => {
        return (
          <Link
            to={`/movies/${item.id}`}
          >
            <div className="contain" key={id} style={divStyle(item.cardImg)}>
              <div className="desc" key={id}>
                <h1>{item.title}</h1>
                <p>  {item.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
