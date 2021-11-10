import React from 'react';
import { Link } from 'react-router-dom';


const MoreItem = (props) => {
    const { name, price, img, id } = props.moreItem;
    return (
        <div className="col-md-4 service g-4">
        <div className="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5> 
            <p class="card-text">${price}</p>
            <Link to={`/booking/${id}`}><button className='btn-danger rounded'>Details</button></Link>
          </div> 
        </div>
      </div> 
    );
};

export default MoreItem;