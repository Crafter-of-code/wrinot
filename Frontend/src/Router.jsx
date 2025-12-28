import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = lazy(() => import("./Layout.jsx"));
const Signin = lazy(() => import("./Pages/Signin/Signin.jsx"));
const Login = lazy(() => import("./Pages/LogIn/Login.jsx"));
const Welcome = lazy(() => import("./Pages/Welcome/Welcome.jsx"));
const Home = lazy(() => import("./Pages/home/Home.jsx"));
const PageNotFound = lazy(() =>
  import("./Pages/PageNotFound/PageNotFound.jsx")
);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "home/:id",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
