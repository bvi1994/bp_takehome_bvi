import React from 'react';
import { render, screen } from '@testing-library/react';
import CreditCardNumber from './CreditCardNumber';

test('renders credit card number component with masked number', () => {
  const position = 'left';
  const ccNumber = '1234123412341234';
  const showCC = false;
  render(<CreditCardNumber position={position} ccNumber={ccNumber} showCC={showCC} />);
  
  const creditCardNumberField = screen.getByTestId('credit-card-number-field');
  const creditCardNumberText = screen.getByTestId('credit-card-number-text');
  
  expect(creditCardNumberField).toBeInTheDocument();
  expect(creditCardNumberField).toHaveClass(position);
  expect(creditCardNumberText).toBeInTheDocument();
  expect(creditCardNumberText).toHaveTextContent('•••• •••• •••• 1234');
});

test('renders credit card number component with full number', () => {
  const position = 'right';
  const ccNumber = '1234123412341234';
  const showCC = true;
  render(<CreditCardNumber position={position} ccNumber={ccNumber} showCC={showCC} />);
  
  const creditCardNumberField = screen.getByTestId('credit-card-number-field');
  const creditCardNumberText = screen.getByTestId('credit-card-number-text');
  
  expect(creditCardNumberField).toBeInTheDocument();
  expect(creditCardNumberField).toHaveClass(position);
  expect(creditCardNumberText).toBeInTheDocument();
  expect(creditCardNumberText).toHaveTextContent('1234 1234 1234 1234');
});