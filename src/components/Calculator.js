/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React from 'react';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calc-container">
        <div className="result-div">0</div>
        <Button btnClass="btn-calc" btnValue="AC" />
        <Button btnClass="btn-calc" btnValue="+/-" />
        <Button btnClass="btn-calc" btnValue="%" />
        <Button btnClass="btn-calc btn-orange" btnValue="÷" />
        <Button btnClass="btn-calc" btnValue="7" />
        <Button btnClass="btn-calc" btnValue="8" />
        <Button btnClass="btn-calc" btnValue="9" />
        <Button btnClass="btn-calc btn-orange" btnValue="x" />
        <Button btnClass="btn-calc" btnValue="4" />
        <Button btnClass="btn-calc" btnValue="5" />
        <Button btnClass="btn-calc" btnValue="6" />
        <Button btnClass="btn-calc btn-orange" btnValue="-" />
        <Button btnClass="btn-calc" btnValue="1" />
        <Button btnClass="btn-calc" btnValue="2" />
        <Button btnClass="btn-calc" btnValue="3" />
        <Button btnClass="btn-calc btn-orange" btnValue="+" />
        <Button btnClass="btn-calc btn-zero" btnValue="0" />
        <Button btnClass="btn-calc" btnValue="." />
        <Button btnClass="btn-calc btn-orange" btnValue="=" />
      </div>
    );
  }
}

export default Calculator;
