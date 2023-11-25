import React from "react";

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <h1>
        <div className="mb-1">
          <label htmlFor={labelFor} className="form-label">
            {labelText}
          </label>
          <input
            type={inputType}
            className="form-control"
            id="exampleInputEmail1"
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      </h1>
    </>
  );
};

export default InputType;
