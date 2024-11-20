import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllTreatments = () => {
    const services = useLoaderData();
    
    return (
        <div className='bg-base-200'>
       <div className='grid grid-cols-3 mt-2 gap-y-8 '>
           {
            services.map(service => <ServiceCard service={service}></ServiceCard>)
           }
        </div>
        <button className='btn block mx-auto mt-6 btn-secondary'>
        <NavLink to="/">Back Home</NavLink>
        </button>
      
        </div>
 
        
    );
};

export default AllTreatments;