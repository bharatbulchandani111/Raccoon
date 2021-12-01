import React,{useEffect} from 'react';
import Sports from './Sports';
import foot from '../JSON Files/football.json';
import crick from '../JSON Files/cricket.json';
import {
    getAuth,
    onAuthStateChanged,
  } from "firebase/auth";
  import { useNavigate } from "react-router";
const SportsComp = () => {
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
    return(
        <div>
            <Sports title="Football" width="420" height="350" data={foot} />
            <Sports title="Cricket" width="420" height="350" data={crick} />
        </div>
    )
}

export default SportsComp;