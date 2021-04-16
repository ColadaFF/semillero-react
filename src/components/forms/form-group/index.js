import React from "react";

const FormGroup = ({
  label,
  id,
  type,
  helpText,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  const hasError = error && touched;
  const validateClass = error ? "is-invalid" : "is-valid";
  const inputClass = touched ? validateClass : "";
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${inputClass}`}
        id={id}
        aria-describedby={`${id}-help`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError ? <div className="invalid-feedback">{error}</div> : null}
      {helpText !== undefined && !hasError ? (
        <div id={`${id}-help`} className="form-text">
          {helpText}
        </div>
      ) : null}
    </div>
  );
};

export default FormGroup;
