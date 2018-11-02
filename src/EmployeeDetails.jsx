import React from "react";

const EmployeeDetail = props => {
  return (
    <div>
      emp_no: {props.emp_no} <br />
      name:
      {`${props.first_name} ${props.last_name}`}
      <br />
      Birth Date: {`${props.birthdate}`}
      <br />
      Gender:
      {`${props.gender}`}
      <br />
      <hr />
    </div>
  );
};

export default EmployeeDetail;
