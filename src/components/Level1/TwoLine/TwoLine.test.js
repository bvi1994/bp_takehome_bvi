import React from 'react';
import { render, screen } from '@testing-library/react';
import TwoLine from './TwoLine';

describe('TwoLine component', () => {
  test('renders with default props', () => {
    render(<TwoLine />);
    
    const topLineText = screen.getByTestId('two-line-two-line-top-text');
    const bottomLineText = screen.getByTestId('two-line-two-line-bottom-text');
    
    expect(topLineText).toHaveTextContent('Top Line');
    expect(bottomLineText).toHaveTextContent('Bottom Line');
  });
  
  test('renders with custom props', () => {
    const customTopLineText = 'Custom Top Line';
    const customBottomLineText = 'Custom Bottom Line';
    const customTestIdName = 'custom-two-line';
    
    render(
      <TwoLine
        topLineText={customTopLineText}
        bottomLineText={customBottomLineText}
        testIdName={customTestIdName}
      />
    );
    
    const topLineText = screen.getByTestId(`two-line-${customTestIdName}-top-text`);
    const bottomLineText = screen.getByTestId(`two-line-${customTestIdName}-bottom-text`);
    
    expect(topLineText).toHaveTextContent(customTopLineText);
    expect(bottomLineText).toHaveTextContent(customBottomLineText);
  });
});