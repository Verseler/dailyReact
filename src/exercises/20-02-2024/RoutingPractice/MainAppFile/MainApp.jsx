// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Profile from './exercises/20-02-2024/RoutingPractice/Profile.jsx';
// import Home from './exercises/20-02-2024/RoutingPractice/Home.jsx';
// import Spinach from './exercises/20-02-2024/RoutingPractice/Spinach.jsx';
// import Popeye from './exercises/20-02-2024/RoutingPractice/Popeye.jsx';
// import DefaultProfile from './exercises/20-02-2024/RoutingPractice/DefaultProfle.jsx';
// import ErrorPage from './exercises/20-02-2024/RoutingPractice/ErrorPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//   path: "profile/:name",
//   element: <Profile />,
//   // children: [
//   //   { index: true, element: <DefaultProfile /> },
//   //   {path: "spinach", element: <Spinach />},
//   //   {path: "popeye", element: <Popeye />}
//   // ]
//   }
// ]);

import Router from "../router/Router";

export default function MainApp() {
  // return <RouterProvider router={router} />;
  return <Router />
}
