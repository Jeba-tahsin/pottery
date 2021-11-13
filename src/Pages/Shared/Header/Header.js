import { getAuth, signOut } from "@firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import {GiPaintedPottery} from 'react-icons/gi';
import './Header.css';

const Header = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoginUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light navColor">
        <div class="container-fluid">
          <div className=" ps-4 text-warning"></div>
          <Link class="navbar-brand" href="#">
            <span className="text-warning fst-italic"><GiPaintedPottery/>Pottery</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              <Link
                class="nav-link active text-light"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
              <Link class="nav-link text-light" to="/moreItems">
                MoreItems
              </Link>

              {loginUser?.email && <Link className="nav-link text-white" to="/addProducts">
              Add Products
              </Link>}

              <Link class="nav-link text-white" to="/manageProducts">
              Manage Products
              </Link>


              <Link class="nav-link text-white" to="/manageOrder">
              Manage Order
              </Link>

              {loginUser?.email ? (
                <Link
                  onClick={handleLogout}
                  className="nav-link text-white"
                  to="#"
                >
                  {loginUser?.displayName} LogOut
                </Link>
              ) : (
                <Link className="nav-link text-white" to="/login">
                  Login
                </Link>
              )}

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
