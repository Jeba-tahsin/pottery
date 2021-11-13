import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://murmuring-caverns-91495.herokuapp.com/admin", data).then((res) => {
      if (res.data) {
        alert("Make An Admin Successfully");
        reset();
      }
    });
    console.log(data);
  };
  return (
    <div className="py-5 text-center" style={{ backgroundColor: "rgb(253, 246, 236)"}}>
      <h2>Create an Admin</h2>
       <div className='d-flex justify-content-center'>
       <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="m-3"
            placeholder="Admin Email"
            {...register("email", { required: true })}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
       </div>
    </div>
  );
};

export default MakeAdmin;
