import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { btnClass, btnValue } = this.props;
    return (
      <button type="button" className={btnClass}>{btnValue}</button>
    );
  }
}

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  btnValue: PropTypes.string.isRequired,
};

export default Button;
