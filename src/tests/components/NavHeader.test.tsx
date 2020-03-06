import React from 'react';
import { render } from '@testing-library/react';
import NavHeader from '../../components/NavHeader';

test('renders people text', () => {
  const { getAllByText } = render(<NavHeader navClass="test-class" />);
  const linkElement = getAllByText(/People/i);
  expect(linkElement).toHaveLength(1);
});
