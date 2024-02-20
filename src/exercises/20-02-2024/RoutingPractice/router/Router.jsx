import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home.jsx";
import ErrorPage from "../ErrorPage.jsx";
import Profile from "../Profile.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;