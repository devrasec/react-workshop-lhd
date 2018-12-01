import React from 'react';
import classNames from 'classnames';

import CheckIcon from './icons/CheckIcon';

import './Check.scss';

export default function Check({ checked }) {
  const classes = classNames({
    'check-circle': true,
    'check-circle--checked': checked
  });

  return <div className={classes}>{checked && <CheckIcon />}</div>;
}
