import React from 'react';
import ActionButton from './Button';

export interface Props {
  /** The pagination class */
  pageClass: string,
}
const PaginationComponent: React.FC<Props> = ({ pageClass }: Props) => (
  <div className={pageClass}>
    <ActionButton
      buttonClass="pagebutton"
      buttonName="Previous Page"
      buttonType="button"
    />
    <span>1</span>
    <ActionButton
      buttonClass="pagebutton"
      buttonName="Next Page"
      buttonType="button"
    />
  </div>
);

export default PaginationComponent;
