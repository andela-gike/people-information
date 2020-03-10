import React, { useState } from 'react';
import Input from './Input';
import SearchSVG from '../images/research.svg';

export interface Props {
  /** The search value */
  searchValue?: string;
  /** The search class */
  searchClass: string,
  handleSearchChange: (value: string) => void
}
const UserLookupComponent: React.FC<Props> = (
  { searchClass, handleSearchChange }: Props,
) => {
  const [searchName, setSearchName] = useState('');

  const handleSearch = (evt: any) => {
    setSearchName(evt.target.value);
    handleSearchChange(evt.target.value);
  };

  return (
    <div className={searchClass}>
      <img alt="search-employee" src={SearchSVG} />
      <Input
        inputClass="search-input"
        inputValue={searchName}
        handleChange={handleSearch}
        inputName="Search People..."
      />
    </div>
  );
};

export default UserLookupComponent;
