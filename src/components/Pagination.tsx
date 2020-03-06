import React from 'react';
import ActionButton from './Button';

export interface Props {
  /** The pagination class */
  pageClass: string,
  /** Method to go to previous page */
  goToPreviousPage?: () => void,
  /** Method to go to next page */
  goToNextPage?: () => void
  totalRecords: number,
  pageSize: number,
  leastPageCount: number
}

// const goToPage = (page: number) => {

// };

// useEffect(() => {
//   goToPage(1);
// });

const PaginationComponent: React.FC<Props> = (
  { pageClass, goToPreviousPage, goToNextPage }: Props,
) => (
  <div className={pageClass}>
    <ActionButton
      buttonClass="pagebutton"
      buttonName="Previous Page"
      buttonType="button"
      handleClick={goToPreviousPage}
    />
    <ul />
    <ActionButton
      buttonClass="pagebutton"
      buttonName="Next Page"
      buttonType="button"
      handleClick={goToNextPage}
    />
  </div>
);

export default PaginationComponent;
