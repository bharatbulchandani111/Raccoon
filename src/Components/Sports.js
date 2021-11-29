import React from 'react';
import '../CSS/sports.css';
const Sports = (props) => {
    const data = props.data;
      return (
        <div className="cards2">
          <h1>{props.title}</h1>
          <div className="videor">
          {
              data.map((item,id)=>{
                  return(
                    <video poster={item.flag} onMouseOver={event=>
                  event.target.play()
              } onMouseLeave={event=>event.target.pause()} className="videoss" src={item.link} type="video/mp4" loop={true}>
             </video>
                  );
              })
          }
          </div>
        </div>
      );
}

export default Sports;