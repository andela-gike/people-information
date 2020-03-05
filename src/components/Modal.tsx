import React from 'react';
// import ActionButton from './Button';

export interface Props {
  /** Display the modal component */
  show: boolean;
  /** The save modal action */
  handleClose: void,
  /** Child element passed to modal */
  children: any
}
const ModalComponent: React.FC<Props> = ({ show, children }: Props) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {/* <ActionButton
          buttonType="button"
          buttonClass="modal-action-btn"
          buttonName="Save"
        /> */}
      </section>
    </div>
  );
};

export default ModalComponent;
