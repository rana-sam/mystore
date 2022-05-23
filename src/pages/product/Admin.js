import React from "react";
import { useState } from "react";

import { db } from "../../FireBase";
import { addDoc, collection } from "firebase/firestore";

export default function Admin() {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [img, setImg] = useState("")



  const onSubmit = async()=>{
    if (!title||!price||!img) {
      alert("All inputs are required!")
return;
    

}

let product ={
  title:title,
  price:price,
  img:img

}

const docRef = await addDoc(collection(db,"products"),{
  product,
});

setTitle("")
setPrice("")
setImg("")






  };








  return (
    <div>
      <div>
        <h5 className="p-5">To add Items in list.Click On Button</h5>
        <button
          type="button"
          className="btn btn-primary ms-5"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Products
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content ms-4">
              <h3 className="border-bottom p-4 text-center">Add Products</h3>

              <label className=" ms-4 pb-2">Product Name:</label>
              <input
                className="w-75 ms-4"
                placeholder="Enter title"
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}




              ></input>

              <label className="pt-3 ms-4 pb-2">Product Price:</label>
              <input
                className="w-75 ms-4"
                placeholder="Enter Price"
                type="text"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
              ></input>
              <label className="pt-3 ms-4 pb-2">Image URL:</label>
              <input
                className="w-75 ms-4"
                placeholder="https//"
                type="text"
                value={img}
                onChange={(e)=>setImg(e.target.value)}

              ></input>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
