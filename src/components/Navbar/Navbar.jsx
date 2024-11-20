import React from 'react';
import Marquee from 'react-fast-marquee';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   const links = <>
     <li className='hover:underline'><NavLink to='/'>Home</NavLink></li>
     <li className='hover:underline'><NavLink to="/allTreatment">Brands</NavLink> </li>
     <li className='hover:underline'><NavLink to="/appointment">My Profile</NavLink></li>
     <li className='hover:underline'><NavLink to="/profile">About Us</NavLink></li>
    </>
    return (
        
<div className="navbar min-h-20 bg-pink-400 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
            {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">DISCOUNT PRODUCT</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white font-semibold ">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to="/login">
    <button className="btn">Login</button>
    </NavLink>
   
  </div>
</div>

    );
};

export default Navbar;