import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders people text', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/People/i);
  expect(linkElement).toHaveLength(1);
});
