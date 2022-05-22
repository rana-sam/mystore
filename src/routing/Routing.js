import React from "react";
import Navbar from "../navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Admin from "../pages/product/Admin"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../main/Main";

export default function Routing() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/Admin" element={<Admin />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}
