import React from 'react';
import { render, screen } from '@testing-library/react';
import MiscCardInfo from './MiscCardInfo';

test('renders misc card info component with default props', () => {
  render(<MiscCardInfo />);

  const validThru = 'valid-thru-field';
  const cvc = 'cvc-field';
  
  const validThruField = screen.getByTestId(`two-line-${validThru}-bottom-text`);
  const cvcField = screen.getByTestId(`two-line-${cvc}-bottom-text`);
  
  expect(validThruField).toBeInTheDocument();
  expect(validThruField).toHaveTextContent('12/34');
  expect(cvcField).toBeInTheDocument();
  expect(cvcField).toHaveTextContent('•••');
});

test('renders misc card info component with custom props', () => {
  const position = 'right';
  const showCVC = true;
  const CVCNumber = '1234';
  const expiryDate = '01/23';
  render(<MiscCardInfo position={position} showCVC={showCVC} CVCNumber={CVCNumber} expiryDate={expiryDate} />);
  
  const validThru = 'valid-thru-field';
  const cvc = 'cvc-field';
  
  const validThruField = screen.getByTestId(`two-line-${validThru}-bottom-text`);
  const cvcField = screen.getByTestId(`two-line-${cvc}-bottom-text`);
  
  expect(validThruField).toBeInTheDocument();
  expect(validThruField).toHaveTextContent('01/23');
  expect(cvcField).toBeInTheDocument();
  expect(cvcField).toHaveTextContent('1234');
});