import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import calculate from '../logic/calculate';
import './calculator.css';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    setState(calculate(state, buttonName));
  }

  const value = state.next || state.total || '0';

  const keys = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  return (
    <>
      <Header />
      <div className="calculator-title">
        <h3>Let&apos;s do some Math !!!</h3>
      </div>
      <div className="container">
        <Input value={value} />
        <div className="buttons">
          {keys.map((key) => (
            <button
              type="button"
              key={key}
              value={key}
              onClick={() => handleClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function Input({ value }) {
  return (
    <div>
      <form>
        <input type="text" className="input" value={value} readOnly />
      </form>
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Calculator;
