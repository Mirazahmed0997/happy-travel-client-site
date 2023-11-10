import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Booking from "../Pages/BookingPage/Booking/Booking";
import Login from "../Pages/Login/login";
import Signup from "../Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";
import MyCart from "../Pages/Dashboard/Dashoard/MyCart";
import DashboardLayout from "../Layout/DashboardLayout";
import Details from "../Pages/Details/Details/Details";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:
      [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/booking',
          element:<PrivateRoutes><Booking></Booking></PrivateRoutes>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/about',
          element:<Details></Details>
        }
      ]
     
    },

    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        }
      ]
    }
  ]);