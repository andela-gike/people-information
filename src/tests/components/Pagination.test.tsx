import React from 'react';
import { render } from '@testing-library/react';
import Paginate from '../../components/Pagination';

const handleGoNext = jest.fn();
const handleGoPrev = jest.fn();
const handleSelected = jest.fn();
const setUp = () => {
  const utils = render(<Paginate
    pageClass="test-class"
    goToNextPage={handleGoNext}
    goToPreviousPage={handleGoPrev}
    totalRecords={10}
    pageSize={10}
    leastPageCount={1}
    goToClickedPage={handleSelected}
  />);
  const prevBtn = utils.getByText(/Previous page/i);
  const nextBtn = utils.getByText(/Next page/i);
  return {
    prevBtn,
    nextBtn,
    ...utils,
  };
};

test('renders render pagination element properly', () => {
  const { prevBtn, nextBtn } = setUp();
  expect(prevBtn).toBeInTheDocument();
  expect(nextBtn).toBeInTheDocument();
});
