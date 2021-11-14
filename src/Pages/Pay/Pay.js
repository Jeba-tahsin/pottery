import React from 'react';
import { Link } from 'react-router-dom';

const Pay = () => {
    return (
        <div className='text-center m-5 text-warning' style={{minHeight: "50vh"}}>
            <h2 >Payment system is coming soon!</h2>
            <Link to='/purches'><button className='btn btn-warning'>Go back</button></Link>
        </div>
    );
};

export default Pay;