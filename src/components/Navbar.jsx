import React from "react";
import Wrapper from "../wrappers/Navbar";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <ul className="nav-links">
          <li>Home</li>
          <li>Customers</li>
          <li>Add Customer</li>
        </ul>
      </Wrapper>
    </>
  );
};

export default Navbar;
