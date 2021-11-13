import React from 'react';

const About = () => {
    return (
        <div className='d-flex container mt-5 mb-5'>
            <div className='p-5' style={{color: " rgb(8, 41, 39)"}}>
               <h2>About us</h2>
               <div className='bg-warning'>
               <hr />
               </div>
               <p>Our Pottery has been around since the ancient people roamed the earth. As one of the oldest human inventions, the practice of pottery has developed alongside civilization. <br /> <br />
               <span className='text-warning'>“Art is not what you see, but what you make others see.”- Edgar Degas </span> <br /> <br />
                    We maintain two main methods of making pottery: hand built and wheel thrown. Commonly we accepted three types of pottery, including earthenware, porcelain and stoneware. When it comes to making pottery, it helps to be inspired by others. 
                </p>
            </div>
            <div className='p-5'>
                <img src="https://cdn.shopify.com/s/files/1/0836/2769/files/pottery-tools_480x480.jpg?v=1597680360" alt="" srcset="" />
            </div>
        </div>
    );
};

export default About;