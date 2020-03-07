import React from 'react';
import { render } from '@testing-library/react';
import Table from '../../components/Table';

test('renders table content', () => {
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

  // const openModal = jest.fn();
  const { getByText } = render(<Table tableClass="test-table" peopleInfo={dummyUser} />);
  const linkElement = getByText(/name/i);
  expect(linkElement).toBeInTheDocument();
  // fireEvent.click(getByText(/view/i));
  // expect(openModal).toHaveBeenCalledTimes(1);
});
