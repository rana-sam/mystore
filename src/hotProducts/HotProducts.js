import React from "react";
import "./hotProduct.css";
import Card from "../components/card/Card";
import img from "../assest/shirt.jpg";
import img1 from "../assest/women.jpg";
import Home from "../pages/home/Home";
export default function HotProducts() {
  return (
    <>
      <div className=" d-flex justify-content-center w-100">
        <h1 className="p-4 text-primary">Hot Product</h1>
      </div>
      <h5>Men's Clothes</h5>
      <div className=" slider mb-5">
        <Home />
      </div>
    </>
  );
}
