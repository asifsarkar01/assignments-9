import React, { useContext } from 'react';
import { authContext } from '../Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    // const location = useLocation();
   
    if(loading){
       return <h1>Loading....</h1>
    }
    if(!user){
      return <Navigate  to="/login"></Navigate>
    //   state={{from:location.pathname}}
    }
    return children;
};

export default PrivateRoute;