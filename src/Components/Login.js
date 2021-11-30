import React from 'react';
import '../CSS/login.css';
import image from '../Assests/prime.png'
import image2 from '../Assests/logo2.png'
import { Button} from 'react-bootstrap';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const Login = (props) => {
  const provider = new GoogleAuthProvider();
  function signIn() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        // ...
      });
  }
  return (
    <div className = "container">
      <div className = "content">
        <div className = "container2">
          <img className=".logo" src= {image} alt="Not Loaded"/>
          <Button className="custom-btn btn-3" onClick={signIn} ><span>GET ALL THERE</span></Button>
          <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img className = "logo2" src={image2} alt="" />
        </div>
        <div className="bgImg" />
      </div>
    </div>
  );
};

export default Login;