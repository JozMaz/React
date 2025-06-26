import NavBar from "./NavBar";
import { Outlet } from "react-router";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
