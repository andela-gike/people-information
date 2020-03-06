import React from 'react';
import Input from './Input';
import SearchSVG from '../research.svg';

export interface Props {
  /** The search value */
  searchValue: string;
  /** The search class */
  searchClass: string,
}
const UserLookupComponent: React.FC<Props> = ({ searchValue, searchClass }: Props) => {
  const searchUser = () => {

  };
  return (
    <div className={searchClass}>
      <img alt="search-employee" src={SearchSVG} />
      <Input
        inputClass="search-input"
        inputValue={searchValue}
        handleChange={searchUser}
        inputName="Search People..."
      />
    </div>
  );
};

export default UserLookupComponent;
