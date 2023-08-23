import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';

describe('Calculator', () => {
  test('calculator is rendering', () => {
    const calculator = render(<calculator />);
    expect(prettyDOM(calculator.container)).toMatchSnapshot();
  });
});
