import React from 'react';
import '../CSS/sports.css';
import {useNavigate} from 'react-router-dom';
const Sports = (props) => {
    const data = props.data;
    const navigate = useNavigate();
      return (
        <div className="cards2">
          <h1>{props.title}</h1>
          <div className="videor">
          {
              data.map((item,id)=>{
                  return(
                    <video poster={item.flag} onClick={()=>{navigate('/shows')}}  onMouseOver={event=>
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