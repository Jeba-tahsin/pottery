import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const CustomerReviews = () => {
    const [customerReview, setCustomerReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
          .then(res => res.json())
          .then(data => setCustomerReview(data))
    })
    return (
        <div className="m-5">
        <h2 className="text-warning text-center fst-italic fw-bold ">Feedback</h2>
        <div className="row m-3">
             {
                  customerReview.map((review) => (
                  <CustomerReview key={review._id} review={review}>
                  </CustomerReview>))
              }
        </div>
      </div>
    );
};

export default CustomerReviews;