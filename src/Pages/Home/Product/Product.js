import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, cost, img, _id } = props.product;
    return (
        <div className="col-md-4 service g-4">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">${cost}</p>
          <Link to={`/details/${_id}`}><button className='btn-warning rounded'>Details</button></Link>
        </div> 
      </div>
    </div> 
    );
};

export default Product;