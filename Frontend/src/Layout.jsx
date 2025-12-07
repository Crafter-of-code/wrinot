import { Outlet } from "react-router-dom";
import Header from "./Component/header/Header";
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
