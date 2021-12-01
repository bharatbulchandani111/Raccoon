import React,{useEffect} from 'react';
import { useParams,Link,useNavigate } from 'react-router-dom';
import data from '../JSON Files/moviesData.json';
import '../CSS/movies.css';
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
// import { useNavigate } from "react-router";
const Movies = (props) => {
    // const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
        } else {
          navigate('/');
          console.log("User not signed in");
        }
      });
    }, []);
    const {id} = useParams();
    const a = data[id];
    const divStyle = (src) => ({
      backgroundImage: "url(" + src + ")",
    });
    // console.log(params.id);
    return(
      <div className="background1" style={divStyle(a?.backgroundImg)}>
      <div className="imgTitle">
      <img alt={a?.title} src={a?.titleImg} />
      </div>
      <div className="contentmeta1">
      <div className="controls1">
      <Link to={`/movies/${a.id}/play/${a.id}`}>
        <div className="player1">
          <img src="/images/play-icon-black.png" alt="" />
         <span>Play</span>
        </div>
        </Link>
        <div className="trailers1">
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </div> 
        <div className="addlist1">
          <span />
          <span />
        </div>
        <div className="groupwatch1">
          <div>
            <img src="/images/group-icon.png" alt="" />
          </div>
        </div>
      </div>
       <div className="subtitle1">{a?.subTitle}</div>
      <div className="description1">{a?.description}</div>
    </div>
      </div>
    );
}


export default Movies;