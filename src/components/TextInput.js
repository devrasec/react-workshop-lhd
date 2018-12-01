import React from 'react';

export default function TextInput({ label, name, placeholder }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
}
