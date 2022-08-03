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
    const btns = [
      { class: 'btn-calc', value: 'AC' },
      { class: 'btn-calc', value: '+/-' },
      { class: 'btn-calc', value: '%' },
      { class: 'btn-calc btn-orange', value: '÷' },
      { class: 'btn-calc', value: '7' },
      { class: 'btn-calc', value: '8' },
      { class: 'btn-calc', value: '9' },
      { class: 'btn-calc btn-orange', value: 'x' },
      { class: 'btn-calc', value: '4' },
      { class: 'btn-calc', value: '5' },
      { class: 'btn-calc', value: '6' },
      { class: 'btn-calc btn-orange', value: '-' },
      { class: 'btn-calc', value: '1' },
      { class: 'btn-calc', value: '2' },
      { class: 'btn-calc', value: '3' },
      { class: 'btn-calc btn-orange', value: '+' },
      { class: 'btn-calc btn-zero', value: '0' },
      { class: 'btn-calc', value: '.' },
      { class: 'btn-calc btn-orange', value: '=' },
    ];

    return (
      <div className="calc-container">
        <div className="result-div">{output}</div>
        {
          btns.map((btn) => (
            <Button
              btnClass={btn.class}
              btnClickHandler={this.calculateOutput}
              btnValue={btn.value}
              key={btn.value}
            />
          ))
        }
      </div>
    );
  }
}

export default Calculator;
