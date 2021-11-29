import React from 'react';
import '../CSS/shows.css';
import data from '../JSON Files/moviesss.json';
import { Link } from 'react-router-dom';
const Shows = (props) => {
    const divStyle = (src) => ({
        backgroundImage: "url(" + src + ")",
      });
      return (
        <div className="cards3">
          <h1>Movies</h1>
          <div className="move">
          {
              data.map((item,id)=>{
                  return(
                    <Link
            to={`/movies/${item.id}`}
          >
                    <div className="hove p-3 my-3 mx-3" style={divStyle(item.cardImg)}>
                        {/* <div className="contnt">
                        <h1>{item.title}</h1>
                        </div> */}
                        {/* <img src={item.titleImg} alt="" /> */}
                    </div>
                    </Link>
                  );
              })
          }
          </div>
        </div>
      );
}

export default Shows;