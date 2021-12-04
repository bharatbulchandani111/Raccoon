import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
import Play from './Components/Play';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Movies from "./Components/Movies";
import SportsComp from "./Components/SportsComp";
import Front from "./Components/Front";
import Shows from "./Components/Shows";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import MyWatchList from "./Components/MyWatchList";


function App() {
  return (
    <Router>
  
    <div className="App">
    <Front />
     <Routes>
     
      <Route exact path="/" element={<Login />} />
      <Route exact path="/sports" element={<SportsComp />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/list" element={<MyWatchList />} />
      <Route exact path="/shows" element={<Shows />} />
      <Route exact path="/movies/:id" element={<Movies />} />
      <Route exact path="/movies/:id/play/:id" element={<Play />} />
     </Routes>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
