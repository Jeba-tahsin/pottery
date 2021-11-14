import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrder = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-caverns-91495.herokuapp.com/ordersEmail?email=" + loginUser.email)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [loginUser.email, orderList]);

  console.log(orderList);

  const handleCancleOrder = (id) => {
    fetch(`https://murmuring-caverns-91495.herokuapp.com/deletePurches/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data) {
          alert('Are you sure to delete?');
        }
      
      });
  }
  return (
    <div>
      <div className="container my-5" style={{ minHeight: "40vh"}}>
        {orderList.map((order) => (
          <div>
            <div className="row pb-3 mb-3 ">
              <div className="col-md-4">
                <img className="img-fluid activitie" src={order?.img} alt="" />
              </div>
              <div className="col-md-8 ">
                <h3>{order?.name}</h3>
                <h6>Price: ${order?.cost}</h6>
                <h6>Color: {order?.color}</h6>
                <h6>Size: {order?.size}</h6>
                <button onClick={() => handleCancleOrder(order?._id)} className="btn btn-warning">Cancle order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
