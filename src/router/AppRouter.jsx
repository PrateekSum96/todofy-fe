import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../appLayout/AppLayout";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Error from "../pages/Error";

const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default AppRouter;
