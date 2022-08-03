import React from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.calculateOutput = this.calculateOutput.bind(this);
  }

  calculateOutput(e) {
    const btnName = e.target.innerText;
    const res = calculate(this.state, btnName);
    this.setState(res);
  }

  render() {
    const { total, next, operation } = this.state;
    const output = `${total || ''}${operation || ''}${next || ''}`;
    return (
      <div className="calc-container">
        <div className="result-div">{output}</div>
        <Button btnClass="btn-calc" btnValue="AC" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="+/-" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="%" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc btn-orange" btnValue="÷" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="7" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="8" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="9" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc btn-orange" btnValue="x" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="4" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="5" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="6" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc btn-orange" btnValue="-" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="1" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="2" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="3" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc btn-orange" btnValue="+" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc btn-zero" btnValue="0" btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc" btnValue="." btnClickHandler={this.calculateOutput} />
        <Button btnClass="btn-calc btn-orange" btnValue="=" btnClickHandler={this.calculateOutput} />
      </div>
    );
  }
}

export default Calculator;
