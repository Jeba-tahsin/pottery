import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      console.log(data);

      axios.post('http://localhost:5000/products',data)
      .then(res=>{
          if(res.data.insertedId){
            alert('Added Successfully')
            reset();
          }
      })
    }
    return (
        <div className="add-product">
        <h2>Add a Brand New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>

          <textarea {...register("description")} placeholder="Details" />

          <input type="number" {...register("cost")} placeholder="Price"/>

          <input {...register("color")} placeholder="Color"/>

          <input {...register("size")} placeholder="Size"/>

          <input {...register("img")}placeholder="Image url" />
          <input type="submit" />
        </form>
      </div>
    );
};

export default AddProducts;