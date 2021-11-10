import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky-top'>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <div className=' ps-4 text-warning'>
            
          </div>
          <Link class="navbar-brand" href="#">
            <span className='text-warning fst-italic'>Ceramic</span>
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
              <Link class="nav-link active text-light" aria-current="page" to="/home">
                Home
              </Link>
              <Link class="nav-link text-light" to="/moreItems">
                MoreItems
              </Link>

              <Link class="nav-link text-light" to="/myBooking">
                Kicu nh
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </div>
    );
};

export default Header;