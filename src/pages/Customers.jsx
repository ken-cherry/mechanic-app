import React from "react";
import { CustomersWrapper } from "../wrappers";
import { customers } from "../data";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

const Customers = () => {
  const id = nanoid();
  return (
    <>
      <CustomersWrapper>
        <h2>Customers</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>VIN</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((item) => {
              const { name, year, make, model, vin } = item;
              return (
                <>
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{year}</td>
                    <td>{make}</td>
                    <td>{model}</td>
                    <td>{vin}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </CustomersWrapper>
    </>
  );
};

export default Customers;
