import React from "react";
import classnames from "classnames";

export const renderInput = ({ input, placeholder, className, type, error }) => {
  const { value, onChange } = input;
  return (
    <>
      <input
        placeholder={placeholder}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        onChange={onChange}
        value={value}
        type={type}
      />
    </>
  );
};
