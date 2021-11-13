import React from 'react';
import { Link } from 'react-router-dom';
import './MoreItem.css';


const MoreItem = (props) => {
    const { name, cost, img, _id } = props.moreItem;
    return (
        <div className="col-md-4 moreItem g-4">
        <div className="card">
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

export default MoreItem;