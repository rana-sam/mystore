import React from "react";
import"../navbar/Navbar.css"
import { Link} from "react-router-dom"
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-primary fixed-top">
      <div class="container-fluid ">
        <a class="navbar-brand text-light ps-5 fs-3" href="#">
          My  Store
        </a>
      </div>
      
          <div className="d-flex justify-content-between w-50 me-5 text-light ">
              <Link to="/" className="navcont text-light text-decoration-none">Main</Link>
              <Link to="/Home" className="navcont text-light text-decoration-none">Home</Link>
              <Link to="/about" className="navcont text-light text-decoration-none">About</Link>
              <Link to="/login" className="navcont text-light text-decoration-none">Log In</Link>
          </div>
      
    </nav>
  );
}
