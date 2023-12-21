import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Task from "../Components/Task";

const Dashboard = () => {

  const { user } = useContext(AuthContext);


  console.log(user?.photoURL);
  console.log(user?.displayName);
  console.log(user);

  return (
    <div>
      <div className="flex border-2 border-gray-50">
        <div className="w-24 md:w-40 lg:w-64">
          <div className="">
            {
              (user) && <img className="mx-auto border-2 border-green-500 h-[40px] md:h-[80px] w-[40px] md:w-[80px] rounded-full object-cover"
                src={(user) ? user?.photoURL : ''} alt="" />
            }

          </div>
          <div>
            {
              <p className="mx-3 font-semibold text-center text-xs md:text-base">{(user) ? user.displayName : ''}</p>
            }
          </div>
          <hr />
        </div>
        <div className="flex-1 border-2 border-gray-50">
          <Task></Task>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;