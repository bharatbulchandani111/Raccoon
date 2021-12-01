import React,{useEffect,useState} from 'react';
import '../CSS/footer.css';
import img from '../Assests/logo3.png'
import { Link } from 'react-router-dom';
import {
    getAuth,
    onAuthStateChanged,
  } from "firebase/auth";
const Footer = () => {
    const [isUser,setIsUser] = useState(false);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            setIsUser(true);
          } else {
            console.log("User not signed in");
            setIsUser(false);
          }
        });
      }, []);
    return(
        (
            isUser &&<footer>
        <div className="top-footer">
            <div className="features">
                
                <ul>
                   <li>About Raccoon</li>
                 
                </ul>
                </div>
                <div className="features">
                
                <ul>
                    <li>FAQ</li>
                   
                </ul>
                </div>
                <div className="features">
                    
                    <ul>
                        <li>Blog</li>
                     
                    </ul>
                </div>
                <div className="features">
                    
                    <ul>
                        <li>Feedback</li>
                    
                    </ul>
                </div>
                <div className="features">
                    
                    <ul>
                        <li>Carrers</li>
                    
                    </ul>
                </div>
             </div>
        <hr /> <br />
        <div className="footer">
            <div className="h2">
                <img src={img} alt="" />
            </div>
            <div>
                <p>All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
            </div>
       
        <div className="social">
        <Link to="/" className="link"><i className="fa fa-linkedin"></i></Link>
        <Link to="/" className="link"><i className="fa fa-twitter"></i></Link>
        <Link to="/" className="link"><i className="fa fa-facebook"></i></Link>
        </div>
      
    
    </div>
    <div className="policy">
        © 2021 RACCOON.
    </div> 
    </footer>
        )
    )
}
 export default Footer;