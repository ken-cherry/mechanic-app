import React from "react";
import { CustomersWrapper } from "../wrappers";

const Customers = () => {
  return (
    <>
      <CustomersWrapper>
        <h1>Customers</h1>
        <div className="single-customer">
          <section className="customer">
            <h3>John Doe</h3>
          </section>
          <div className="vehicle">
            <h3>1977</h3>
            <h3>Dodge</h3>
            <h3>Clipper</h3>
            <h3>12345678912345678</h3>
          </div>
          <div className="history">
            <button className="button">History</button>
          </div>
        </div>
        <div className="single-customer">
          <section className="customer">
            <h3>Jane Doe</h3>
          </section>
          <div className="vehicle">
            <h3>2024</h3>
            <h3>Toyota</h3>
            <h3>Prius</h3>
            <h3>12345678912345678</h3>
          </div>
          <div className="history">
            <button className="button">History</button>
          </div>
        </div>
      </CustomersWrapper>
    </>
  );
};

export default Customers;
