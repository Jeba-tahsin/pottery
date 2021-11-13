import React, { useEffect, useState } from 'react';
import MoreItem from '../MoreItem/MoreItem';


const MoreItems = () => {
    const [moreItems, setMoreItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
          .then(res => res.json())
          .then(data => setMoreItems(data))
    })
    return (
        <div className="mt-5">
        <h2 className="text-warning text-center fst-italic fw-bold ">More Products</h2>
        <div className="row m-3">
             {
                  moreItems.map((moreItem) => (
                  <MoreItem key={moreItem._id} moreItem={moreItem}>
                  </MoreItem>))
              }
        </div>
      </div>
    );
};

export default MoreItems;