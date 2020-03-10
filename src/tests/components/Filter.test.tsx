import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Filter from '../../components/Filter';

const handleFilter = jest.fn();
const setUp = () => {
  const utils = render(<Filter
    filterClass="test-class"
    employeeData={[]}
    handleFilterByCategory={handleFilter}
  />);
  const filterSpan = utils.getByText(/filter/i);
  return {
    filterSpan,
    ...utils,
  };
};

test('renders render filter field', () => {
  const { filterSpan } = setUp();
  expect(filterSpan).toBeInTheDocument();
  fireEvent.click(filterSpan);
  // expect(input.value).toBe('ki');
});
