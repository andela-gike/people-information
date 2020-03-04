import React from 'react';

export interface Props {
  /** The table name */
  // tableName: string;
  /** The table class */
  tableClass: string,
}

const tableHeaderTitle = ['Name', 'Location', 'Email', 'Status'];

const TableComponent: React.FC<Props> = ({ tableClass }: Props) => (
  <table className={tableClass}>
    <thead className="people-table-header">
      <tr className="people-tb-title">
        {tableHeaderTitle.map((title) => (
          <th key={title} className="title-name">{title}</th>))}
      </tr>
    </thead>
    <tbody className="people-table-content">
      <tr className="person-info-row">
        <td className="person-info-col">Alanna Phaih</td>
        <td className="person-info-col">Downtown</td>
        <td className="person-info-col">alanna.p@gmil.com</td>
        <td className="person-info-col">employed</td>
        <td className="person-info-col"><button type="button">View</button></td>
      </tr>
      <tr className="person-info-row">
        <td className="person-info-col">Alanna Phaih</td>
        <td className="person-info-col">Downtown</td>
        <td className="person-info-col">alanna.p@gmil.com</td>
        <td className="person-info-col">employed</td>
        <td className="person-info-col"><button type="button">View</button></td>
      </tr>
    </tbody>
  </table>
);

export default TableComponent;
