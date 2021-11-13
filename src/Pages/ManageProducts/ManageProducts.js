import React, { useState, useEffect } from "react";
import {MdDelete} from 'react-icons/md'

const ManageProducts = () => {
  const [manageProducts, setManageProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setManageProducts(data));
  }, [manageProducts]);

  const handleProductDetele = (id) => {
    const url = `http://localhost:5000/deleteProduct/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Are you sure to delete?");
        }
      });
  };
  return (
    
      <div className="p-5 " style={{ backgroundColor: "rgb(253, 246, 236)"}}>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {manageProducts.map((product) => (
              <tr>
                <td>{product?.name}</td>
                <td>
                  {" "}
                  <button onClick={() => handleProductDetele(product?._id)} key={product._id}>
                    <MdDelete/> Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
};

export default ManageProducts;
