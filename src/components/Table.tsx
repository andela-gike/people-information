import React from 'react';
// import OpenButton from './Button';

export interface Props {
  /** The table name */
  peopleInfo: Array<any>;
  /** The table class */
  tableClass: string,
}

const tableHeaderTitle = ['Name', 'Location', 'Email', 'Status'];

const TableComponent: React.FC<Props> = ({ tableClass, peopleInfo }: Props) => (
  <table className={tableClass}>
    <thead className="people-table-header">
      <tr className="people-tb-title">
        {tableHeaderTitle.map((title) => (
          <th key={title} className="title-name">{title}</th>))}
      </tr>
    </thead>
    <tbody className="people-table-content">
      {peopleInfo.length > 0 && peopleInfo.map((person) => (
        <tr key={person.id}>
          <td className="person-info-col">
            {` ${person.name.first} ${person.name.last}`}
          </td>
          <td className="person-info-col">{person.location.country}</td>
          <td className="person-info-col">{person.email}</td>
          <td className="person-info-col">{person.Status}</td>
          <td className="person-info-col">
            {' '}
moed
            {/* <OpenButton
              buttonName="View"
              buttonClass="open-modal-btn"
              buttonType="button"
            /> */}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableComponent;
