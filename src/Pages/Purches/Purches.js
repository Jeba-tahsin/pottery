import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Purches = () => {
  const { id } = useParams();
  
  const [orderDetails, setOrderDetails] = useState();
  const [loginUser, setLoginUser] = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://murmuring-caverns-91495.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderDetails(data));
  }, []);
  console.log(orderDetails);
  console.log(id);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, description, cost, img, color, size } = orderDetails;
    const orderData = {
      name,
      description,
      cost,
      img,
      size,
      color,
      ...data,
      purcheStatus: "pending",
    };
    console.log(orderData);
    axios.post("https://murmuring-caverns-91495.herokuapp.com/orders", orderData).then((res) => {
      if (res.data.insertedId) {
        alert(
          `booking successfully. Please review this product ${history.push(
            "/review"
          )}`
        );
      }
    });
  };
  return <div>
      <div>
      <div className="container">
        <h2 className="my-5 text-center">Place Order</h2>
        <div className="row pb-5">
          <div className="d-flex justify-content-center">
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <input
                  defaultValue={loginUser?.email}
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-2">
                <input
                  placeholder="Enter Your Name"
                  defaultValue={loginUser?.displayName}
                  {...register("userName", { required: true })}
                />
              </div>
              <div className="mb-2">
                <input
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
              </div>
              <div className="mb-2">
                <input
                  placeholder="Phone Number"
                  type="number"
                  {...register("phoneNumber", { required: true })}
                />
              </div>

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Order Now" />
              <Link to="/payment">
              <button className='mx-3'>Payment</button>
            </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Purches;
