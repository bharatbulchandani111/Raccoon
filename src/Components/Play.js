import React,{useEffect} from "react";
import '../CSS/play.css';
import data from '../JSON Files/moviesData.json'
import { useParams } from "react-router";
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router";
const Play = () => {

    const {id} = useParams();
  const a = data[id];
  console.log(a);
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
  return (
    <div className="play">
    <div className="screen">
      <h1>{a.title}</h1>
      <iframe width="920px" height="450px" id="tgrt1" name="hello" src={`${a.links[0]}`+"?autoplay=1&controls=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfollowscreen"></iframe>
      
      <div className="buttons">
      {
        a.no > 1 && <h1>Seasons</h1>
      }
      <div className="season">
     {
         a.no > 1 && 
         a.links.map((item,id)=>{
             return(
                 <a href={item+"?autoplay=1&controls=1"} target="hello" className="tgrt">{id+1}</a>
             )
         })
     }
     </div>
      </div>
      </div>
    </div>
  );
};

export default Play;
