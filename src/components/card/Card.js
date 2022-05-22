import React from 'react'
import img from '../../assest/shirt.jpg'
export default function Card(props) {
  return (
     <div>
    <div className="card m-4" style={{width: '16rem'}}>
    <img src={props.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h3 className="card-title">{props.title}</h3>
      <p>{props.price}</p>
      <a href="#" className="btn btn-danger w-100 mt-2">Buy</a>
    </div>
  </div>
  </div>
  );
}
