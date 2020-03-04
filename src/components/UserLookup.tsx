import React from 'react';
import Input from './Input';

export interface Props {
  /** The search value */
  searchValue: string;
  /** The search class */
  searchClass: string,
}
const UserLookupComponent: React.FC<Props> = ({ searchValue, searchClass }: Props) => (
  <div className={searchClass}>
    <Input inputClass="search-input" inputValue={searchValue} />
  </div>
);

export default UserLookupComponent;
