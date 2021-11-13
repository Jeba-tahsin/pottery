import React from 'react';
import { useForm } from 'react-hook-form';

const ManageOrderStatus = ({status, purchesId}) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
    // console.log(data);

    const updateStatus = data;
    const updateData = { ...updateStatus, purchesId };
    fetch("https://murmuring-caverns-91495.herokuapp.com/updateStatus/" + purchesId, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated");
      });
    
alert("Updated Successfully");
  };
    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
        <select
          {...register("updateStatus")}
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>{status}</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
        <input type="submit" />
      </form>
        </div>
    );
};

export default ManageOrderStatus;