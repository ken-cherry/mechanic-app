import React from "react";
import Wrapper from "../wrappers/NavbarWrapper";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Wrapper>
        <div className="nav-center">
          <span className="logo">Dustin's Automotive</span>
          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/customers" className="nav-link">
              Customers
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default NavbarComponent;
