import React from "react";

const AddCustomerForm = () => {
  return (
    <>
      <form>
        <h5>Add Customer Form</h5>
        <div className="form-control">
          <div className="customer">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="vehicle">
            <input type="text" placeholder="Vehicle Year" />
            <input type="text" placeholder="Make" />
            <input type="text" placeholder="Model" />
            <input type="text" placeholder="VIN" />
          </div>
          <div className="submit-btn">
            <button className="button" type="submit">
              Add Customer
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCustomerForm;
