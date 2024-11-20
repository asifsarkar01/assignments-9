import React, { useContext, useState } from 'react';
import { authContext } from '../Authprovider/Authprovider';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    // context call 
    const contextValue = useContext(authContext)
     const {handleLogin} = contextValue;
    //  googleLogin
    const [error,setError] = useState("")
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();

     const handleLoginSubmit = (e) => {
       e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email,password)
  handleLogin(email,password)
  .then(res =>{
    navigate(location.state.from)
  })
  .catch(err => {
    setError(err.message)
  })

    }
const googleLogin  = () => {
  // googleLoginhandler()
  // .then(res => {
  //   navigate(location.state.from)
  // })
}
    return (
        <div className='justify-items-center mt-4'>
     <form onSubmit={handleLoginSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
    
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <button type='submit' className="btn btn-primary">Login</button>
         
        </div>
      </form>
      {error && <p className='text-red-500'>{error.split("/")[1]}</p>}
      
    <div className="card bg-base-100 w-96 shadow-xl">
      {/* <button onClick={ googleLogin}  className="btn btn-primary">Google Login</button> */}
      {/* googleLoginhandler */}
    </div>
   New this website? please <NavLink className="underline text-red-600" to="/register">ReGister</NavLink>
  </div>

    );
};

export default Login;