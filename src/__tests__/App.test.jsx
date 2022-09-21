import React from 'react';
import { fireEvent, getByAltText, getByTestId, render, screen, waitFor } from '@testing-library/react';
import fetchMock from "jest-fetch-mock";
import suggestions from "../__tests__/__mocks__/suggestions.json";
import App from '../App';
import Modal from '../components/Modal';

function buildResponse(response) {
  return {
    body: JSON.stringify(response),
    init: {
      headers: { "Content-Type": "application/json" }
    },
  };
}

function mockResponses() {
  return Promise.resolve(buildResponse(suggestions));
}

beforeAll(() => {
  fetchMock.enableMocks();
  });
  beforeEach(() => {
  fetchMock.mockResponse(mockResponses);
});

test('App renders correctly', () => {
  render(<App />);
  expect(screen.getByAltText('Breaking-Bad')).toBeTruthy();
});

test('List of characters recieves data and it is displayed on the main page', async () => {
  render(<App />)
  await waitFor(() => expect(screen.findByTestId('list_id')).toBeTruthy());
});

test('Modal opens when clicking on a card', () => {
  fireEvent.click(getByTestId('card_id'))
  expect(screen.findByTestId('modal_id').toBeTruthy());
});

test('Modal closes when clicking on button', () => {
  const handleClose = jest.fn();
  render(<Modal onClose={handleClose} />);
  expect(screen.getByTestId('modal_id')).toBeTruthy();
  fireEvent.click(getByTestId('close_btn'));
});


