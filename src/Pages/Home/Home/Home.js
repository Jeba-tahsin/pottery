import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Products></Products>
           <About></About>
           <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;