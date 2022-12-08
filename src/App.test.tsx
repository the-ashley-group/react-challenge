import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders get score button', () => {
  render(<App />);
  const getSoreButton = screen.getByRole('button');
  expect(getSoreButton).toBeInTheDocument();
});
