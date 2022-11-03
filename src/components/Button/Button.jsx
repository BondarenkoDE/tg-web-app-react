import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

const Button = (props) => {
  return <button {...props} className={clsx(styles.button, props.className)}></button>;
};

export default Button;
