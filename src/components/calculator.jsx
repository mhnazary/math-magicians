import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import calculate from '../logic/calculate';
import Navbar from './Navbar';

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
      <Navbar />
      <div className="border md:flex md:flex-col md:h-3/4 md:justify-between md:items-center">
        <div className="calculator-title md:mb-16 font-bold text-3xl md:mt-36">
          <h3>Let&apos;s do some Math !!!</h3>
        </div>
        <div className="container w-full px-4 mt-4 md:1/2 lg:1/2">
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
