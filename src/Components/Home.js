import Cards from "./Cards";
import ImgSlider from "./ImgSlider";
import "../CSS/home.css";
import React,{useEffect} from "react";
import Card1 from "./Cards1";
import data from '../JSON Files/trend.json';
import data1 from '../JSON Files/recomm.json';
import data2 from '../JSON Files/HBO.json';
import data3 from '../JSON Files/Disney.json';
import data4 from '../JSON Files/Netflix.json';
import data5 from '../JSON Files/Youtube.json';
import data6 from '../JSON Files/cricket1.json';
import data7 from '../JSON Files/football1.json';
import data8 from '../JSON Files/icons.json';
import Sports from "./Sports";
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { Link,useNavigate} from "react-router-dom";
const Home = (props) => {
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
    <div>
      <ImgSlider />
      <Sports title="WATCH" data={data8}/>
      <Cards title="Trending" data={data} />
      <Card1 title="Recommended" data={data1} />
      <Card1 title="HBO" data={data2}/>
      <Cards title="Disney Plus" data={data3}/>
      <Cards title="Netflix" data={data4}/>
      <Card1 title="Youtube" data={data5}/>
     <Sports title="Most Watched" width="300" height="192" data={data6}/>
     <Sports title="FIFA TV" width="300" height="192" data={data7}/>
    </div>
  );
};

export default Home;
