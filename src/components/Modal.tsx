import React, { useReducer } from 'react';
import ActionButton from './Button';
import InputField from './Input';

export interface Props {
  /** Display the modal component */
  show: boolean;
  /** The save modal action */
  handleClose?: () => void,
  personDetails: any
}

interface FieldValue {
  field: string,
  value: string
}

const reducer = (state: any, { field, value }: FieldValue) => ({
  ...state,
  [field]: value,
});

const ModalComponent: React.FC<Props> = ({ show, handleClose, personDetails }: Props) => {
  const employeeInfo = personDetails[0];
  const initialUserInfo = {
    address: `${employeeInfo.location.street.number} ${employeeInfo.location.street.name}`,
    email: employeeInfo.email,
    location: employeeInfo.location.country,
    dob: employeeInfo.dob.date,
  };

  const [state, dispatch] = useReducer(reducer, initialUserInfo);
  const {
    address, email, location, dob,
  } = state;

  const handleFormInputChange = (evt: any) => {
    dispatch({ field: evt.target.name, value: evt.target.value });
  };

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      {personDetails.length > 0
        && (
        <div className="modal-wrapper">
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
                <label htmlFor="address">
                  Address
                  <InputField
                    inputValue={address}
                    inputClass="user-form"
                    inputName="address"
                    handleChange={handleFormInputChange}
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
                    inputValue={dob}
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
                handleClick={handleClose}
              />
            </aside>
          </section>
        </div>
        )}
    </div>
  );
};

export default ModalComponent;
