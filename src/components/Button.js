import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { btnClass, btnClickHandler, btnValue } = props;
  return (
    <button type="button" className={btnClass} onClick={btnClickHandler}>{btnValue}</button>
  );
}

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  btnClickHandler: PropTypes.func.isRequired,
  btnValue: PropTypes.string.isRequired,
};

export default Button;
