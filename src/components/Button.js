import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { btnClass, btnClickHandler, btnValue } = this.props;
    return (
      <button type="button" className={btnClass} onClick={btnClickHandler}>{btnValue}</button>
    );
  }
}

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  btnClickHandler: PropTypes.func.isRequired,
  btnValue: PropTypes.string.isRequired,
};

export default Button;
