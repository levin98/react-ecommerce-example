/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
      label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : null
    }
  </div>
);

export default FormInput;
