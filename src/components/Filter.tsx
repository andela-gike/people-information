import React, { useState } from 'react';
import DownPointer from '../down-arrow.png';

export interface Props {
  /** The search value */
  searchValue?: string;
  /** The search class */
  filterClass: string,
  // handleSearchChange: (value: string) => void
  employeeData: Array<any>
}

const FilterComponent: React.FC<Props> = (
  { filterClass, employeeData }: Props,
) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [displayStat, setDisplayStat] = useState(false);
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const openStatus = (evt: any) => {
    console.log(evt.target);
    setDisplayStat(!displayStat);
  };
  const allCountries = new Set(employeeData.map((empl) => empl.location.country));
  const allGender = new Set(employeeData.map((empl) => empl.gender));
  const allStatus = new Set(employeeData.map((empl) => empl.Status));

  const filterItems = [
    {
      id: 0,
      slugName: 'Status',
      items: [...allStatus],
    },
    {
      id: 1,
      slugName: 'Gender',
      items: [...allGender],
    },
    {
      id: 2,
      slugName: 'Location',
      items: [...allCountries],
    },
  ];
  return (
    <div className={filterClass}>
      Filter
      <img
        alt="search-employee"
        src={DownPointer}
        onClick={handleOpenDropdown}
        role="presentation"
      />
      {openDropdown && (
        <ul className="filter-section">
          {filterItems.map((eachIte) => (
            <li className="filter-cate" key={eachIte.id} onClick={openStatus} role="presentation">
              {`Filter by ${eachIte.slugName}`}
              {displayStat && (
              <ul className="inner-cate">
                {eachIte.items.map((stat) => (<li key={stat}>{stat}</li>))}
              </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default FilterComponent;
