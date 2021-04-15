import React from "react";

const FormGroup = ({ label, id, type, helpText, value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        aria-describedby={`${id}-help`}
        value={value}
        onChange={onChange}
      />
      {helpText !== undefined ? (
        <div id={`${id}-help`} className="form-text">
          {helpText}
        </div>
      ) : null}
    </div>
  );
};

export default FormGroup;
