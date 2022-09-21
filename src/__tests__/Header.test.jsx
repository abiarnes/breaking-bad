import React from 'react';
import { getByAltText, render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Header renders correctly', () => {
  render(<Header />);
  expect(screen.getByAltText('Breaking-Bad')).toBeTruthy();
});