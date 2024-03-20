import React from "react";
import { FooterComponent, NavbarComponent } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default Layout;
