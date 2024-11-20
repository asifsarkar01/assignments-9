import React from 'react';
import { NavLink } from 'react-router-dom';
import Marquee from "react-fast-marquee";


const ServiceCard = ({service}) => {
    const {treatment,image,description,cost,id} = service;
    return (
        <div className='w-11/12 mx-auto'>
         
           <div className="card bg-base-200 shadow-xl">
  <figure>
    <img className='h-72 w-78 object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {treatment}
      <div className="badge badge-secondary"> {cost}</div>
    </h2>
    <p title={description}>{description.slice(0,100)}...</p>
    <div className="card-actions justify-end">
      <NavLink to={`/details/${id}`}>
      <button className='text-white underline bg-blue-700 p-2 rounded-full'>checkout</button>
      </NavLink>
   
    </div>
  </div>
</div>
        </div>



    );
};

export default ServiceCard;