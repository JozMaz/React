import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
