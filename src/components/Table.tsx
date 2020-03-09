import React, { useState, useEffect, useCallback } from 'react';
import OpenButton from './Button';
import DetailsModal from './Modal';

export interface Props {
  /** The table name */
  peopleInfo: Array<any>;
  /** The table class */
  tableClass: string,

  refreshPeopleData: () => void
}

const tableHeaderTitle = ['Name', 'Location', 'Email', 'Status', ''];

const TableComponent: React.FC<Props> = (
  { tableClass, peopleInfo, refreshPeopleData }: Props,
) => {
  const [openModal, setOpenModal] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState([] as any);

  const updateTable = useCallback(() => {
    refreshPeopleData();
  }, [refreshPeopleData]);

  useEffect(() => {
    updateTable();
  }, [updateTable, employeeDetails]);

  const openPersonDetails = (index?: any) => {
    const getSingleEmpl: any = peopleInfo.find((employee) => employee.id === index);
    setEmployeeDetails([...employeeDetails, getSingleEmpl]);
    setOpenModal(!openModal);
    if (openModal === true) {
      setEmployeeDetails([]);
    }
  };

  return (
    <>
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
                <img
                  alt="person-img"
                  src={person.picture.thumbnail}
                  className="person-img-icon"
                />
                {` ${person.name.first} ${person.name.last}`}
              </td>
              <td className="person-info-col">{person.location.country}</td>
              <td className="person-info-col">{person.email}</td>
              <td className="person-info-col">{person.Status}</td>
              <td className="person-info-col">
                <OpenButton
                  buttonName="View"
                  buttonClass="open-modal-btn"
                  buttonType="submit"
                  handleClick={() => openPersonDetails(person.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModal
      && (
      <DetailsModal
        show={openModal}
        personDetails={employeeDetails}
        handleClose={openPersonDetails}
      />
      )}
    </>

  );
};

export default TableComponent;
