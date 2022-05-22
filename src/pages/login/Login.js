import React from "react";
import "../login/login.css";

export default function Login() {
  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="col-4"></div>
        <div className=" login col-2 text-center">
            <h4 className="mt-4 text-primary">Login Form</h4>
          <div className="user">
            <label className="me-2">User Name:</label>
            <input className=" w-75 border  border-bottom p-2" type="email" placeholder="Enter username"></input>
          </div>
          <div className="">
            <label className="me-3">Password:</label>
            <input className=" password border  border-bottom p-2" type="password" placeholder="Enter password"></input>
          </div>
          <button className="btn btn-primary w-50 button ">Login</button>
          <a className="forget">forget password</a>
        </div>
    
        <div className="col-5"></div>
      </div>
    </div>
  );
}
