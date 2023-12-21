import { useContext } from "react";
import { FaMixcloud } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
 
  const {logOut, user} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  }
  const navlinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li> <NavLink to="/dashboard">Dashboard</NavLink> </li>
  </>

  return (
    <div>
      <div className="navbar bg-gradient-to-l from-gray-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                navlinks
              }
            </ul>
          </div>
          <div className="flex justify-center text-xl lg:text-2xl items-center gap-1">< FaMixcloud /> <a className="font-bold">  TMC</a></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            {
              navlinks
            }
          </ul>
        </div>
        <div className="navbar-end">
           {
              (user) ? <a onClick={handleLogOut} className="btn btn-neutral">LogOut</a> :
                <NavLink to="/login"><a className="btn btn-neutral">Login</a></NavLink>

            }
        </div>
      </div>
    </div>
  );
};

export default Navbar;