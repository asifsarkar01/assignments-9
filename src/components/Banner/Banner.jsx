import React from 'react';
import Marquee from 'react-fast-marquee';

const Banner = () => {
    return (
        <div >
           <Marquee pauseOnHover><span className='text-2xl font-bold text-red-400'>
           % Discount in our shop you can buy any product use discount coupon
            </span></Marquee>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse w-11/12 mx-auto">
    <img
      src="https://img.freepik.com/free-vector/big-sale-text-emblem_98292-3932.jpg?ga=GA1.1.1756939198.1729749157&semt=ais_hybrid"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Only Discount % Product <br/> Get your product Now</h1>
      <p className="py-6">
      Get ready for your next adventure with % off on all outdoor gear! From hiking backpacks and tents to portable water bottles and sleeping bags, our durable outdoor essentials are built to withstand the toughest conditions. Don’t miss this chance to save big before your next outdoor excursion!
      </p>
      <button className="btn btn-primary">Get Product</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;