import React from 'react';
import {
  render, fireEvent, cleanup,
} from '@testing-library/react';
import Modal from '../../components/Modal';

const dummyUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Emilie', last: 'Leroy' },
  title: 'Ms',
  first: 'Emilie',
  last: 'Leroy',
  location: {
    street: { number: 7093, name: 'Rue Principale' },
    city: 'Montpellier',
    state: 'Alpes-de-Haute-Provence',
  },
  street: { number: 7093, name: 'Rue Principale' },
  country: 'France',
  email: 'emilie.leroy@example.com',
  dob: { date: '1996-08-28T04:38:38.050Z', age: 24 },
  picture: { large: 'https://randomuser.me/api/portraits/women/17.jpg' },
  Status: 'Employed',
};
afterEach(cleanup);
const handleClose = jest.fn();

test('renders employee details modal', () => {
  const { getByText } = render(<Modal
    show
    personDetails={[dummyUser]}
    handleClose={handleClose}
  />);
  const linkElement = getByText(/Employee/i);
  expect(linkElement).toBeInTheDocument();
  fireEvent.click(getByText(/x/i));
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test('render employee form input with a named label', () => {
  const { getAllByLabelText } = render(<Modal
    show
    personDetails={[dummyUser]}
    handleClose={handleClose}
  />);
  const addressInput = getAllByLabelText('Address')[1];
  expect(addressInput).toHaveAttribute('placeholder');
});
