import { Outlet } from "react-router";
import Header from "../src/components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
