import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/admin", data).then((res) => {
      if (res.data) {
        alert("Make An Admin Successfully");
        reset();
      }
    });
    console.log(data);
  };
  return (
    <div className="m-5">
      <h2>Create an Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <input
            className="m-3"
            placeholder="New Admin Email"
            {...register("email", { required: true })}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
