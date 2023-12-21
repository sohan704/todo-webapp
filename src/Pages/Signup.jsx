import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Signup = () => {

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const user = { name, email, password, photo };
    console.log(user);

    createUser(email, password).then(result => {
      updateUserProfile(name, photo).then(() => {

        toast.success('Registration Successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/');
      }).catch(error =>
        toast.error(error.code, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )


    })

  }



  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-l from-gray-300">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>

          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="Your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input name="photo" type="text" placeholder="Photo link" className="input input-bordered" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />

              </div>
              <div>
                <p>Already a member? <NavLink to='/login'><span className="font-bold">Login</span></NavLink> </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;