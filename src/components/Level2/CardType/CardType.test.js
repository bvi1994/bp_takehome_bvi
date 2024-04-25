import React from 'react';
import { render, screen } from '@testing-library/react';
import CardType from './CardType';

test('renders card type component with correct text', () => {
  const position = 'left';
  const cardTypeText = 'Sample Card Type';
  render(<CardType position={position} cardTypeText={cardTypeText} />);
  
  const cardTypeElement = screen.getByTestId('card-type');
  const cardTypeTextElement = screen.getByTestId('card-type-text');
  
  expect(cardTypeElement).toBeInTheDocument();
  expect(cardTypeElement).toHaveClass(position);
  expect(cardTypeTextElement).toBeInTheDocument();
  expect(cardTypeTextElement).toHaveTextContent(cardTypeText);
});