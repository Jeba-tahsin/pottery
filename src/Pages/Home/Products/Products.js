import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/data.json')
          .then(res => res.json())
          .then(data => setProducts(data))
    })
    return (
        <div className="mt-5">
      <h2 className="text-danger fst-italic fw-bold ">Our Products</h2>
      <div className="row m-3">
           {
                products.slice(0,6).map((product) => (
                <Product key={product.id} product={product}>
                </Product>))
            }
      </div>
    </div>
    );
};

export default Products;