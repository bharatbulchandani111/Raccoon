import React,{useEffect,useState} from 'react';
import { useParams,Link,useNavigate } from 'react-router-dom';
import data from '../JSON Files/moviesData.json';
import '../CSS/movies.css';
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionList } from '../state';
const Movies = (props) => {
    const dispatch = useDispatch();
     const watchList = useSelector(state => state.list)
    const [arr, setarr] = useState([]);
    const navigate = useNavigate();
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
        <button className="addlist1" title="Add To WishList" onClick={()=>{
          dispatch(actionList.addWatchList(a));
          console.log(watchList);
        }}>
        <i class="fa fa-plus" style={{color:"white"}}></i>
        </button>
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