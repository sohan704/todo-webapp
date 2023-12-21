import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-[100vh] bg-gradient-to-l from-gray-300">
      <div className="flex-1 text-5xl lg:text-8xl text-center">
        <span className="font-semibold"> Welcome</span> <br /> to <span className="text-gray-900">TMC<span><sup className="text-lg">TM</sup></span></span>
       
        <div>
          <button className="btn btn-sm lg:btn-lg btn-neutral"><NavLink to="/login"> Let&apos;s Explore</NavLink> </button>
        </div>
      </div>
      <div className="flex-1">
        <img className="border-2 mx-auto w-11/12 md:w-full border-gray-100 rounded-3xl" src="https://i.ibb.co/BNP7Nm2/undraw-Hello-re-3evm-1.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;