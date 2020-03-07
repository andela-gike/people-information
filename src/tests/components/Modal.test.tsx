import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../../components/Modal';

test('renders display modal', () => {
  const dummyUser = [{
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
  }];

  const handleClose = jest.fn();
  const { getByText } = render(<Modal show personDetails={dummyUser} handleClose={handleClose} />);
  const linkElement = getByText(/Employee/i);
  expect(linkElement).toBeInTheDocument();
  fireEvent.click(getByText(/save/i));
  expect(handleClose).toHaveBeenCalledTimes(1);
});
