import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Welcome from "./Pages/welcome/Welcome.jsx";
import Home from "./Pages/home/Home.jsx";
import Login from "./Pages/LogIn/Login.jsx";
import Signin from "./Pages/signin/Signin.jsx";
import {
  Logincontextprovider,
  Signicontextprovider,
} from "./Store/Authcontext.jsx";
import NoteModel from "./Component/notemodel/NoteModel.jsx";
import StatusHandler from "./Component/statusHander/StatusHandler.jsx";
import StatusHandlerContextProvider from "./Store/StatusHandlerContentxt.jsx";
// import StatuHandler from "./Component/statusHander/StatusHandler.jsx";
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
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StatusHandlerContextProvider>
      <Signicontextprovider>
        <Logincontextprovider>
          <div className="status_handler">
            <StatusHandler />
          </div>
          <RouterProvider router={router} />
        </Logincontextprovider>
      </Signicontextprovider>
    </StatusHandlerContextProvider>
  </StrictMode>
);
