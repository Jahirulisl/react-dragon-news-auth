import { useContext, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
   
const Register = () => {
    const {createNewUser,
        setUser} =useContext(AuthContext);
        
        //useNaviget ta ka anlam
       const navigate = useNavigate();

       //for show error stp 2 start

        //for show error stp 1 start
      const [error,setError,updateUserProfile] =useState({});
       //for show error stp 1 start

    const handleSubmit = (e)=>{
      e.preventDefault();
      //form data nia asbo
      const form = new FormData(e.target);
      const name = form.get("name");
       
       if (name.length<5){
        setError({...error,name:"must be more 5 character long"})
        return;
       }
       //for show error stp 2 end

      const email = form.get("email");
      const photo = form.get("photo");
      const password = form.get("password");
      console.log(name,email,photo,password);
      
      createNewUser(email,password)
       .then((result)=>{
        const user= result.user;
        setUser(user);
        console.log(user);

        //updet profile stp 2 stART
        updateUserProfile({
          displayName:name,photoURL:photo
          })
          .then(()=>{
            navigate("/")
          })
          .catch(err=>{
            console.log(err);
          })

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       console.log(errorCode,errorMessage)
      });
    };
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Register your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input 
            name="name"
            type="text" placeholder="Enter your Your Name" className="input input-bordered" required />
          </div>

          {/* for show error stp 3 start */}
            {
             error.name &&  <label className="label text-sm text-red-600">
             {error.name}
           </label>
            }
            {/* for show error stp 3 end */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL </span>
            </label>
            <input
             name="photo"
             type="text" placeholder="Enter your Photo URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email add</span>
            </label>
            <input
             name="email" 
             type="email" placeholder="Enter your Email address" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
             name="password" 
             type="password" placeholder="Enter your password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            <p className="text-center font-semibold">Allready have An Account ?<Link to="/auth/login" className="text-red-500">Login</Link></p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
      </div> 
     </div>
    );
};

export default Register;