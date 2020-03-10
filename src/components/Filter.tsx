import React, { useState } from 'react';
import DownPointer from '../images/down-arrow.png';

export interface Props {
  /** The filter value */
  searchValue?: string;
  /** The filter class */
  filterClass: string,
  handleFilterByCategory: (value: string, cate: string) => void
  employeeData: Array<any>
}

const FilterComponent: React.FC<Props> = (
  { filterClass, employeeData, handleFilterByCategory }: Props,
) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [displayStat, setDisplayStat] = useState(false);
  const [selectId, setSelectId] = useState('');
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const allCountries = new Set(employeeData.map((empl) => empl.location.country));
  const allGender = new Set(employeeData.map((empl) => empl.gender));
  const allStatus = new Set(employeeData.map((empl) => empl.Status));

  const selectCategory = (selectedCate: string, cateName: string) => {
    handleFilterByCategory(selectedCate, cateName);
  };

  const filterItems = [
    {
      id: 0,
      slugName: 'Status',
      items: [...allStatus],
    },
    {
      id: 1,
      slugName: 'gender',
      items: [...allGender],
    },
    {
      id: 2,
      slugName: 'location',
      items: [...allCountries],
    },
  ];
  const openStatus = (evt: string) => {
    setSelectId(evt);
    setDisplayStat(!displayStat);
  };

  return (
    <div className={filterClass}>
      <span>Filter</span>
      <img
        alt="search-employee"
        src={DownPointer}
        onClick={handleOpenDropdown}
        role="presentation"
      />
      {openDropdown && (
        <ul className="filter-section">
          {filterItems.map((eachIte) => (
            <li className="filter-cate" key={eachIte.id} onClick={() => openStatus(eachIte.slugName)} role="presentation">
              {`Filter by ${eachIte.slugName}`}
              {(displayStat && (selectId === eachIte.slugName)) && (
              <ul className="inner-cate">
                  {eachIte.items.map((stat) => (
                    <li
                      key={stat}
                      onClick={() => selectCategory(stat, eachIte.slugName)}
                      role="presentation"
                    >
                      {stat}
                    </li>
                  ))}
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
