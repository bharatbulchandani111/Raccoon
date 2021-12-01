import React, { useEffect, useState } from "react";
import "../CSS/Front.css";
import img from "../Assests/logo3.png";
import { Link,useNavigate} from "react-router-dom";
// import firebase from "firebase/compat/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "font-awesome/css/font-awesome.min.css";
const Front = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const [imgUrl,setImgUrl] = useState(null);
  const provider = new GoogleAuthProvider();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setPerson(user.displayName);
        setImgUrl(user.photoURL)
        navigate('/home')
        console.log(user.photoURL);
      } else {
        console.log("User not signed in");
      }
    });
  }, []);
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
  function signOutFun() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setPerson(null);
      })
      .catch((error) => {
        // An error happened.
      });
    
  }
  return (
    <>
      <div class="header">
        <img src={img} className="logo" alt="" />
          <h1 className="headingRaccoon">Raccoon</h1>
        {person ?
        <ul className="nav-links primary">
          <li className="nav-items">
            <Link to="/home">Racoon+</Link>
          </li>
          <li className="nav-items">
            <Link to="/shows">Movies</Link>
          </li>
          <li className="nav-items">
            <Link to="/home">Tv</Link>
          </li>
          <li className="nav-items">
            <Link to="/sports">Sports</Link>
          </li>
          <label for="chk" class="icon1">
            <i class="fa fa-times"></i>
          </label>
        </ul>:
        <ul></ul>
        }
        <div className="right-container">
        { person ? <>
          <input type="text" class="search-box" placeholder="search" />
          <button className="sub-btn">Subscribe</button></>:<div></div>
        }
          {person? <span className="name"><img className="user-img" title={person}  src={imgUrl}/> &nbsp;<Link
            to="/"
            onClick={() => {
              signOutFun();
            }}
            className="login-link"
          >
            Logout
          </Link></span> : <Link
            to="/"
            onClick={() => {
              signIn();
            }}
            className="login-link"
          >
            Login
          </Link>
          }
        </div>
      </div>
      <input type="checkbox" name="" id="chk" />
      <label for="chk" class="show">
        <i class="fa fa-bars"></i>
      </label>
      <label for="chk" class="hide">
        <i class="fa fa-times"></i>
      </label>
      <div class="sidebar">
        <ul>
        {
          person?<li><span className="hello-per">Hello, {person}</span></li>:<spna></spna>
        }
        {person?<ul>
          <li>
            <Link to="/home">
              <i class="fa fa-home"></i>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sports">
              <i class="fa fa-futbol-o"></i>
              Sports
            </Link>
          </li>
          <li>
            <Link to="/shows">
              <i class="fa fa-film"></i>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/home">
              <i class="fa fa-folder"></i>
              Channels
            </Link>
          </li></ul>:<ul></ul>
        }
          <li>
          {person?<Link
            to="/"
            onClick={() => {
              signOutFun();
            }}
          >
          <i class="fa fa-user"></i>
            Logout
          </Link> : <Link
            to="/"
            onClick={() => {
              signIn();
            }}
          >
          {/* <i class="fa fa-user"></i> */}
            Login to Continue
          </Link>
          }
          </li>
        </ul>
        {person?
        <div className="copyright">
          © 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of. All rights
          reserved.
        </div>:<div></div>}
      </div>
    </>
  );
};

export default Front;
