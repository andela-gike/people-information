/* eslint-disable consistent-return */
import React, {
  useReducer, useRef, useEffect, useCallback,
} from 'react';
import ActionButton from './Button';
import InputField from './Input';
import { PeopleUrl } from '../constants';
import Datalayer from '../services/dataLayer';

export interface Props {
  /** Display the modal component */
  show: boolean;
  /** The save modal action */
  handleClose: () => void,
  personDetails: [any]
}

interface FieldValue {
  field: string,
  value: string
}

const reducer = (state: any, { field, value }: FieldValue) => ({
  ...state,
  [field]: value,
});

/**
 *  A customized react hook that determines when a user clicks outside the
 *  display modal
 * @param onOuterClick
 * @param innerRef
 */
const useOuterClickNotifier = (onOuterClick: any, innerRef: any) => {
  useEffect(
    () => {
      const handleClickOut = (e: any) => innerRef.current
        && !innerRef.current.contains(e.target)
        && onOuterClick(e);
      if (innerRef.current) { // add listener only, if element exists
        document.addEventListener('click', handleClickOut);
        // unmount previous listener first
        return () => document.removeEventListener('click', handleClickOut);
      }
    },
    [onOuterClick, innerRef],
  );
};

const ModalComponent: React.FC<Props> = ({
  show, handleClose, personDetails,
}: Props) => {
  const employeeInfo = personDetails[0];
  const initialUserInfo = {
    address: `${employeeInfo.location.street.number} ${employeeInfo.location.street.name}` || '',
    email: employeeInfo.email,
    location: employeeInfo.location.country,
    dob: employeeInfo.dob.date,
  };

  const handleOuterClick = useCallback( // memoized callback for optimized performance
    () => handleClose(),
    [handleClose],
  );
  const innerRef = useRef(null);
  useOuterClickNotifier(handleOuterClick, innerRef);

  const [state, dispatch] = useReducer(reducer, initialUserInfo);
  const {
    address, email, location, dob,
  } = state;

  const handleFormInputChange = (evt: any) => {
    dispatch({ field: evt.target.name, value: evt.target.value });
  };

  const handleSubmitForm = async () => {
    const result = await Datalayer(
      {
        method: 'PATCH',
        url: `${PeopleUrl}/${employeeInfo.id}`,
        data: {
          email,
          location: {
            street: {
              number: employeeInfo.location.street.number,
              name: employeeInfo.location.street.name,
            },
            city: employeeInfo.location.city,
            state: employeeInfo.location.state,
            country: location,
            postcode: employeeInfo.location.postcode,
            coordinates: employeeInfo.location.coordinates,
            timezone: employeeInfo.location.timezone,
          },
          dob: {
            date: dob,
          },
        },
      },
    );
    console.log(result, `${PeopleUrl}/${employeeInfo.id}`);
    handleClose();
  };

  const formatDate = (empDOB: string) => {
    const fullDate = new Date(empDOB);
    return `${fullDate.getDate()}/${fullDate.getMonth() + 1}/${fullDate.getFullYear()}`;
  };


  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      {personDetails.length > 0
        && (
        <div className="modal-wrapper" ref={innerRef}>
          <header className="modal-header">
            <h1>Employee</h1>
            <ActionButton
              buttonType="button"
              buttonClass="modal-action-btn"
              buttonName="X"
              handleClick={handleClose}
            />
          </header>
          <section className="modal-main">
            <div className="name-section">
              <img
                className="person-image"
                alt="employee-pic"
                src={employeeInfo.picture.large}
              />
              <h2 className="employee-name">
                {`${employeeInfo.name.first} ${employeeInfo.name.last}`}
              </h2>
              <p className="employee-status">{employeeInfo.Status}</p>
              <div className="details-slug"><span>Details</span></div>
            </div>
            <aside className="form-section">
              <form className="employee-form">
                <label htmlFor="address" id="address">
                  Address
                  <InputField
                    inputValue={address}
                    inputClass="user-form"
                    inputName="address"
                    handleChange={handleFormInputChange}
                    labelledBy="address"
                  />
                </label>
                <label htmlFor="email">
                  Email
                  <InputField
                    inputValue={email}
                    inputClass="user-form"
                    inputName="email"
                    handleChange={handleFormInputChange}
                  />
                </label>
                <label htmlFor="location">
                  Location
                  <InputField
                    inputValue={location}
                    inputClass="user-form"
                    inputName="location"
                    handleChange={handleFormInputChange}
                  />
                </label>
                <label htmlFor="dob">
                  Date of Birth
                  <InputField
                    inputValue={formatDate(dob)}
                    inputClass="user-form"
                    inputName="dob"
                    handleChange={handleFormInputChange}
                  />
                </label>
              </form>
              <ActionButton
                buttonType="button"
                buttonClass="modal-action-btn"
                buttonName="Save"
                handleClick={handleSubmitForm}
              />
            </aside>
          </section>
        </div>
        )}
    </div>
  );
};

export default ModalComponent;
