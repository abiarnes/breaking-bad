import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import List from '../components/List';
import { prettyDom } from '@testing-library/dom'

test('renders', () => {
  const itemsMock = {
    content: 'test',
    important: true
  }

  const loadingMock = false;

  const component = render(<List items={itemsMock} loading={loadingMock}/>)

  console.log(prettyDOM(component));
})
// describe('Tests for List component', () => {
//   const mock = 'test';
//   // test('snapshot list component', () => {
//   //   const { asFragment } = render(<List />)
//   //   expect(asFragment(<List />)).toMatchSnapshot();
//   // });
//   // test('snapshot list component 2', () => {
//   //   const { getByTestId } = render(<List />)
//   //   expect(getByTestId('list_id')).toBeInTheDocument();
//   // });

// });