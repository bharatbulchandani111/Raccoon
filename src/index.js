import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCJfu2nYUhsBleEB-HvYetiQWxyIyelUK4",
  authDomain: "raccoon-6e89a.firebaseapp.com",
  databaseURL: "https://raccoon-6e89a-default-rtdb.firebaseio.com",
  projectId: "raccoon-6e89a",
  storageBucket: "raccoon-6e89a.appspot.com",
  messagingSenderId: "281485349620",
  appId: "1:281485349620:web:ac87c373134fbcf93704a1",
  measurementId: "G-YGDPSV35MH"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
</Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
