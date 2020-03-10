import React, { useState } from 'react';
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
  goToClickedPage: (pageIndex: number) => void
}

// const goToPage = (page: number) => {

// };

// useEffect(() => {
//   goToPage(1);
// });

const PaginationComponent: React.FC<Props> = (
  {
    pageClass, goToPreviousPage, goToNextPage, totalRecords, pageSize,
    goToClickedPage,
  }: Props,
) => {
  const pageCount = Math.ceil(totalRecords / pageSize);
  const [activePage, setActivePage] = useState(1);
  const isActive = (pgNum: number) => {
    setActivePage(pgNum);
    goToClickedPage(pgNum);
  };
  // const [showEllipsis, setShowEllipsis] = useState(true);
  // const Ellipsis = showEllipsis ? (<li>...</li>) : '';
  return (
    <div className={pageClass}>
      <ActionButton
        buttonClass="pagebutton"
        buttonName="Previous Page"
        buttonType="button"
        handleClick={goToPreviousPage}
      />
      <ul className="pagination-index">
        {Array.from({ length: pageCount }, (v, k) => k + 1).map((page) => (
          <>
            <li
              className={activePage === page
                ? 'paginate-list active-page' : 'paginate-list'}
              key={page}
              onClick={() => isActive(page)}
              role="presentation"
            >
              {page}
            </li>
          </>
        ))}
        {/* {Ellipsis} */}
      </ul>
      <ActionButton
        buttonClass="pagebutton"
        buttonName="Next Page"
        buttonType="button"
        handleClick={goToNextPage}
      />
    </div>
  );
};

export default PaginationComponent;
