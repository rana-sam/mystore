import React from 'react'

export default function Admin() {
  return (
    <div>
        <div>
  
  <h5 className='p-5'>To add Items in list.Click On Button</h5>
  <button type="button" className="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add Products
  </button>
  
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content ms-4">
        <h3 className='border-bottom p-4 text-center'>Add Products</h3>
        
          <label className=" ms-4 pb-2">Product Name:</label>
          <input className='w-75 ms-4' placeholder='Enter title' type="text" ></input>
          <label className="pt-3 ms-4 pb-2">Product Price:</label>
          <input className='w-75 ms-4' placeholder='Enter Price' type="number" ></input>
          <label className="pt-3 ms-4 pb-2">Image URL:</label>
          <input className='w-75 ms-4' placeholder='https//' type="url" ></input>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
        
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
