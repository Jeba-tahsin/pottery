import React, { useEffect, useState } from 'react';
import MoreItem from '../MoreItem/MoreItem';


const MoreItems = () => {
    const [moreItems, setMoreItems] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-caverns-91495.herokuapp.com/products')
          .then(res => res.json())
          .then(data => setMoreItems(data))
    })
    return (
        <div className="pt-5 pb-5" style={{ backgroundColor: "rgb(253, 246, 236)"}}>
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