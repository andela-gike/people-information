import React from 'react';
import { render } from '@testing-library/react';
import NavHeader from '../../components/NavHeader';

test('renders people text', () => {
  const { getByText } = render(<NavHeader navClass="test-class" />);
  const linkElement = getByText(/People/i);
  expect(linkElement).toBeInTheDocument();
});
