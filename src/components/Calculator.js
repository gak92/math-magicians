import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(
    {
      total: 0,
      next: null,
      operation: null,
    },
  );

  const calculateOutput = (e) => {
    const btnName = e.target.innerText;
    const res = calculate(state, btnName);
    setState(res);
  };

  const { total, next, operation } = state;
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
    <div className="calc-main">
      <h2>Let&apos;s do some math</h2>
      <div className="calc-container">
        <div className="result-div">{output || '0'}</div>
        {
          btns.map((btn) => (
            <Button
              btnClass={btn.class}
              btnClickHandler={calculateOutput}
              btnValue={btn.value}
              key={btn.value}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Calculator;
