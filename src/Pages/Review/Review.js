import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const Review = () => {
    const [loginUser, setLoginUser] = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/review", data).then((res) => {
      if (res.data.insertedId) {
        alert("add successfully");
        reset();
      }
    });
  };

    return (
        <div className="my-5 ">
      <h2 className="mb-4">Your Review</h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <input
              defaultValue={loginUser.email}
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-2">
            <input
              placeholder="Enter Your Name"
              defaultValue={loginUser.displayName}
              {...register("userName", { required: true })}
            />
          </div>
          <div className="mb-2">
            <input
              placeholder="Description"
              {...register("description", { required: true })}
            />
          </div>
          <div className="mb-2">
            <input
              placeholder="Revirw Rating 1-5"
              type="number"
              {...register("reviewRating", { required: true })}
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    );
};

export default Review;