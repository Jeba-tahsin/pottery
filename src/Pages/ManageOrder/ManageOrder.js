import React, { useEffect, useState } from 'react';
import {MdDelete} from 'react-icons/md'
import ManageOrderStatus from './ManageOrderStatus';

const ManageOrder = () => {
    const [manageOrder, setManageOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
         .then(res => res.json())
         .then(data => setManageOrder(data));
    }, [manageOrder]);
    

    const handleDeleteOrder = (id) => {
      console.log(id)
      fetch(`http://localhost:5000/deletePurches/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if(data) {
            alert('Are you sure to delete?');
          }
        
        });
    };
    return (
        <div className='container manageBooking'>
            <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {manageOrder.map((order) => (
            <tr>
              <td>{order?.userName}</td>
              <td>{order?.phoneNumber}</td>
              <td><ManageOrderStatus status={order?.purcheStatus} purchesId={order?._id}></ManageOrderStatus> </td>
              <td> <button onClick={()=> handleDeleteOrder(order?._id)}><MdDelete/>Delete</button> </td>
            </tr>
          ))}
          </tbody>
         </table>
        </div>
    );
};

export default ManageOrder;