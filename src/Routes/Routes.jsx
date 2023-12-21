import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const routes = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/signup',
        element: <Signup></Signup>
      }
    ]

  }
])

export default routes;