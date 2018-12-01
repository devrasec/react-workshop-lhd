import React from 'react';

export default function TextInput({ label, ...restProps }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" className="form-control" {...restProps} />
    </div>
  );
}
