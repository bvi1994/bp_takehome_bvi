import React from 'react';
import { render, screen } from '@testing-library/react';
import ZipCode from './ZipCode';

test('renders zip code component with default props', () => {
  render(<ZipCode />);
  
  const zipCodeField = screen.getByTestId('zip-code-field');
  const zipCodeText = screen.getByTestId('zip-code-text');
  
  expect(zipCodeField).toBeInTheDocument();
  expect(zipCodeText).toBeInTheDocument();
  expect(zipCodeText).toHaveTextContent('ZIP 00000');
});

test('renders zip code component with custom props', () => {
  const zipCode = '12345';
  const position = 'right';
  render(<ZipCode zipCode={zipCode} position={position} />);
  
  const zipCodeField = screen.getByTestId('zip-code-field');
  const zipCodeText = screen.getByTestId('zip-code-text');
  
  expect(zipCodeField).toBeInTheDocument();
  expect(zipCodeText).toBeInTheDocument();
  expect(zipCodeText).toHaveTextContent('ZIP 12345');
  expect(zipCodeText).toHaveClass('right');
});