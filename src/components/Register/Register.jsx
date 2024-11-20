import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../Authprovider/Authprovider';

const Register = () => {
    const {handleRegister,manageProfile} = useContext(authContext);
    const [error,setError] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
  const name = e.target.name.value;
  const image = e.target.image.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const conpassword = e.target.conpassword.value;


  setError("")
  //   password length 6 character error 
if(password.length<6){
    setError("Password must be 6 character")
    return;
}

//   error message show
  
  if(password !== conpassword){
    setError("Password didn't match")
    return;
  }
//  lowercase lowercase number show
if(!/[a-z]/.test(password)){
    setError("password must contain one lowercase letter")
    return;
}
//  uppercase lowercase number show
if(!/[A-Z]/.test(password)){
    setError("password must contain one Uppercase letter")
    return;
}

  handleRegister(email,password)
  .then(res => {
    manageProfile(name,image)
})
    }

    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
           <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="User name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input name='image' type="text" placeholder="photo url" className="input input-bordered" required />
    
        </div>

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
          <input name='password' type="text" placeholder="password" className="input input-bordered" required />
    
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input name='conpassword' type="password" placeholder="confirm password" className="input input-bordered" required />
    
        </div>
        <div className="form-control ">
          <button onClick={handleRegister} className="btn btn-primary">Register</button>
        </div>
        {
    error && <p className='text-red-500'>{error}</p>
}
      </form>


      <p className='p-2'>
      Already have a account? Please <NavLink className="underline text-red-500" to="/login">LoGin</NavLink>
      </p>
      
    </div>
  </div>
  </div>
     
    );
};

export default Register;