import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DigitalCard from './DigitalCard';

test('renders digital card component with default props', () => {
  render(<DigitalCard />);
  
  const digitalCard = screen.getByTestId('digital-card');
  const showDetailsField = screen.getByTestId('showDetails-field');
  
  expect(digitalCard).toBeInTheDocument();
  expect(showDetailsField).toBeInTheDocument();
  expect(showDetailsField).toHaveTextContent('Show Details');
});

test('renders digital card component with custom props', () => {
  const ccNumber = '1234567890123456';
  const zipCode = '12345';
  const CVCNumber = '123';
  const expiryDate = '12/23';
  render(
    <DigitalCard
      ccNumber={ccNumber}
      zipCode={zipCode}
      CVCNumber={CVCNumber}
      expiryDate={expiryDate}
    />
  );
  
  const digitalCard = screen.getByTestId('digital-card');
  const showDetailsField = screen.getByTestId('showDetails-field');
  
  expect(digitalCard).toBeInTheDocument();
  expect(showDetailsField).toBeInTheDocument();
  expect(showDetailsField).toHaveTextContent('Show Details');
});

test('toggles showDetails state when showDetails checkbox is clicked', () => {
  render(<DigitalCard />);
  
  const showDetailsCheckbox = screen.getByLabelText('Show Details');
  
  expect(showDetailsCheckbox.checked).toBe(false);
  
  fireEvent.click(showDetailsCheckbox);
  
  expect(showDetailsCheckbox.checked).toBe(true);
});