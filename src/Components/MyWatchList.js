import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const MyWatchList = () => {
    const list = useSelector(state => state.list)
    const divStyle = (src) => ({
        backgroundImage: "url(" + src + ")",
      });
      return (
        <div className="cards3">
          <h1>WatchList</h1>
          <div className="move">
          {
              list.map((item,id)=>{
                  return(
                    <Link
            to={`/movies/${item.id}`}
          >
                    <div className="hove p-3 my-3 mx-3" style={divStyle(item.cardImg)}>
                    </div>
                    </Link>
                  );
              })
          }
          </div>
        </div>
      );
}
export default MyWatchList;