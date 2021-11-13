import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import AddProducts from "../../AddProducts/AddProducts";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";
import ManageOrder from "../../ManageOrder/ManageOrder";
import ManageProducts from "../../ManageProducts/ManageProducts";
import MyOrder from "../../MyOrder/MyOrder";
import Review from "../../Review/Review";

const DashbordPage = () => {
  const [admin, setAdmin] = useState([]);
  const [loginUser, setLoginUser] = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/admin?email=" + loginUser.email)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);
  return (
    <div>
      <h2 className='text-center text-warning pt-3'>Dashbord</h2>
      <ul class="nav nav-tabs" id="myTab" role="tablist">

        {admin[0]?.email && <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="addProduct-tab"
            data-bs-toggle="tab"
            data-bs-target="#addProduct"
            type="button"
            role="tab"
            aria-controls="addProduct"
            aria-selected="true"
          >
            Add products
          </button>
        </li>}

        {admin[0]?.email && <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="manageProducts-tab"
            data-bs-toggle="tab"
            data-bs-target="#manageProducts"
            type="button"
            role="tab"
            aria-controls="manageProducts"
            aria-selected="false"
          >
            Manage Products
          </button>
        </li>}
        {admin[0]?.email && <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="manageOrder-tab"
            data-bs-toggle="tab"
            data-bs-target="#manageOrder"
            type="button"
            role="tab"
            aria-controls="manageOrder"
            aria-selected="false"
          >
            Manage Order
          </button>
        </li>}
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="myOrder-tab"
            data-bs-toggle="tab"
            data-bs-target="#myOrder"
            type="button"
            role="tab"
            aria-controls="myOrder"
            aria-selected="false"
          >
            My Order
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="review-tab"
            data-bs-toggle="tab"
            data-bs-target="#review"
            type="button"
            role="tab"
            aria-controls="review"
            aria-selected="false"
          >
            Review
          </button>
        </li>
        {admin[0]?.email && <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="admin-tab"
            data-bs-toggle="tab"
            data-bs-target="#admin"
            type="button"
            role="tab"
            aria-controls="admin"
            aria-selected="false"
          >
            Admin
          </button>
        </li>}
      </ul>
      <div class="tab-content" id="myTabContent">
        {admin[0]?.email && <div
          class="tab-pane fade show active"
          id="addProduct"
          role="tabpanel"
          aria-labelledby="addProduct-tab"
        >
          <AddProducts></AddProducts>
        </div>}
        {admin[0]?.email && <div
          class="tab-pane fade"
          id="manageProducts"
          role="tabpanel"
          aria-labelledby="manageProducts-tab"
        >
          <ManageProducts></ManageProducts>
        </div>}
        {admin[0]?.email && <div
          class="tab-pane fade"
          id="manageOrder"
          role="tabpanel"
          aria-labelledby="manageOrder"
        >
          <ManageOrder></ManageOrder>
        </div>}
        <div
          class={`tab-pane fade  ${admin[0]?.email ?? 'show active'}`}
          id="myOrder"
          role="tabpanel"
          aria-labelledby="myOrder"
        >
          <MyOrder></MyOrder>
        </div>
        <div
          class="tab-pane fade"
          id="review"
          role="tabpanel"
          aria-labelledby="review"
        >
          <Review></Review>
        </div>
        {admin[0]?.email && <div
          class="tab-pane fade"
          id="admin"
          role="tabpanel"
          aria-labelledby="admin"
        >
          <MakeAdmin></MakeAdmin>
        </div>}
      </div>
    </div>
  );
};

export default DashbordPage;
