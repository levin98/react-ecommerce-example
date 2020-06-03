/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
