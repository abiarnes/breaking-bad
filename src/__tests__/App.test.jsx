import React from 'react';
import { fireEvent, getByAltText, getByTestId, prettyDOM, render, screen, waitFor, within } from '@testing-library/react';
import fetchMock from "jest-fetch-mock";
import suggestions from "../__tests__/__mocks__/suggestions.json";
import App from '../App';
import Modal from '../components/Modal';
import List from '../components/List';
import Character from '../components/Character';


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

test('Modal opens when clicking on a card', async () => {
  render(
  <App />
  )
  const component = await screen.findAllByRole("menuitem", undefined, {
    interval: 10,
    timeout: 5000,
    });
  fireEvent.click(component[1]);
  const modal = screen.getByTestId('modal_id');
  expect(modal).toBeTruthy();
  fireEvent.click(within(modal).getByTestId('close_btn'));
  await waitFor(() => expect(screen.queryByTestId('modal_id')).toBeFalsy());
});



