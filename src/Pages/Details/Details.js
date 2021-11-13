import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  // const {name,img, cost, time, description} = explore;
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  
  return (
    <div className="container textColor">
      <div class="card details">
        <div className="text-center">
          <img
            src={details?.img}
            class="card-img-top img-fluid"
            alt="..."
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{details?.name}</h5>
          <p class="card-text">{details?.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item textColor">Price: ${details?.cost}</li>
          <li class="list-group-item textColor">Avialable Size: {details?.size}</li>
          <li class="list-group-item textColor">
            Avialable Color: {details?.color}
          </li>
        </ul>
         <div>
         <Link to={`/purches/${id}`}><button className='text-center'>Purches</button></Link>
         </div>
      </div>
    </div>
  );
};

export default Details;
