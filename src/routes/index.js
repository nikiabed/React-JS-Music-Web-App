import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import SignupView from "../views/Signup";

export const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignupView />,
  },
  //   {
  //     path: "/dashboard",
  //     element: <Dashboard />,
  //   },

  //   {
  //     path: "/focus",
  //     element: <Focus />,
  //   },
]);
