import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrder = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/ordersEmail?email=" + loginUser.email)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [loginUser.email]);

  console.log(orderList);
  return (
    <div>
      <div className="container my-5">
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
                <button className="btn btn-warning">cancle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
