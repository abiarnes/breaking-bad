import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Renders the landing page', () => {
  render(<App />);

  expect(screen.getByTestId('header_id')).toBe(1);
  expect(screen.findByTestId('list_id')).toBe(1);
});