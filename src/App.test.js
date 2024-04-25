import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the title and subtitle correctly', () => {
    render(<App />);
    
    const titleElement = screen.getByText('Flex Card');
    const subtitleElement = screen.getByText('Used for purchases');
    
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
  
  test('renders the DigitalCard component', () => {
    render(<App />);
    
    const digitalCardElement = screen.getByTestId('digital-card');
    
    expect(digitalCardElement).toBeInTheDocument();
  });
});