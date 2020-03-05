import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getAllByText } = render(<App />);
  // console.log(getByText);
  const linkElement = getAllByText(/People/i);
  expect(linkElement).toHaveLength(2);
});
