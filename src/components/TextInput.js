import React from 'react';
import classNames from 'classnames';

export default function TextInput({ label, error, ...restProps }) {
  const classes = classNames({
    'form-control': true,
    'is-invalid': !!error
  });

  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" className={classes} {...restProps} />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}
