import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Welcome from "./Pages/welcome/Welcome.jsx";
import Home from "./Pages/home/Home.jsx";
import Login from "./Pages/LogIn/Login.jsx";
import Signin from "./Pages/signin/Signin.jsx";
import { Logincontextprovider } from "./Store/Authcontext.jsx";
import NoteModel from "./Component/notemodel/NoteModel.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "notemodel",
        element: <NoteModel />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  // {
  //   path: "notemodel",
  //   element: <NoteModel />,
  // },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Logincontextprovider>
      <RouterProvider router={router} />
    </Logincontextprovider>
  </StrictMode>
);
