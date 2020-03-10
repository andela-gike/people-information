import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../../components/UserLookup';

const handleSearch = jest.fn();
const setUp = () => {
  const utils = render(<Search
    searchClass="test-class"
    handleSearchChange={handleSearch}
  />);
  const input = utils.getByPlaceholderText(/search people.../i);
  return {
    input,
    ...utils,
  };
};

test('renders render search field', () => {
  const { input } = setUp();
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: '23' } });
  console.log(input.value);
  // fireEvent.change(getByPlaceholderText(/search people.../i),
  // { target: { value: 'Ko' } });
  // expect(getByPlaceholderText(/search people.../i).value).toBe('ko');
});
