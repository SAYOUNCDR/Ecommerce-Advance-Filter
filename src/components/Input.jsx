import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={name} onChange={handleChange} value={value} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>All
    </label>
  );
};

export default Input;
