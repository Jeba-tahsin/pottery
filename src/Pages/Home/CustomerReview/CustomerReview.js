import React from "react";
import { BsStarFill } from "react-icons/bs";

const CustomerReview = ({ review }) => {
  return (
    <div className="col-md-4 mb-5">
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{review?.userName}</li>
          <li class="list-group-item">{review.description}</li>
          <li class="list-group-item">
            {" "}
            {review?.reviewRating === "1" ? 
              <div>
                <div className="text-warning">
                <BsStarFill />
                </div>
                <h6>Poor</h6>
              </div>
              :
              review?.reviewRating === "2" ? 
              <div>
                <div className="text-warning">
                <BsStarFill /> <BsStarFill />
                </div>
                <h6>Not Bad</h6>
              </div>
              :
              review?.reviewRating === "3" ? 
              <div>
                <div className="text-warning">
                <BsStarFill /> <BsStarFill /> <BsStarFill />
                </div>
                <h6>Good</h6>
              </div>
              :
              review?.reviewRating === "4" ? 
              <div>
                <div className="text-warning">
                <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                </div>
                <h6>Very Good</h6>
              </div>
              :
              review?.reviewRating === "5" ? 
              <div>
                <div className="text-warning">
                <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                </div>
                <h6>Excellent</h6>
              </div>
              : null
             }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerReview;
