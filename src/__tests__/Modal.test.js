import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../components/Modal';
import Character from '../components/Character';
import { Experimental_CssVarsProvider } from '@mui/material';

describe('Tests for Modal component', () => {
  const mockItem = 'test';
    test.skip('Modal appears when character card is clicked', () => {
      const { getByTestId } = render(<Character item={mockItem} />)
      expect(getByTestId('modal_id')).toBeInTheDocument();
});
  // test('snapshot list component 2', () => {
  //   const { getByTestId } = render(<List />)
  //   expect(getByTestId('list_id')).toBeInTheDocument();
  // });
  
});