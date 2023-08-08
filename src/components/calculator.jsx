import PropTypes from 'prop-types';
import './calculator.css';

function Calculator() {
  const keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <div className="container">
      <Input value="0" />
      <div className="buttons">
        {keys.map((key) => (
          <button type="button" key={key} value={key}>
            {key}
          </button>
        ))}
      </div>
    </div>
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
