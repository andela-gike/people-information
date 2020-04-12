import React from 'react';

export interface Props {
  /** The button name */
  buttonName: string;
  /** The button class */
  buttonClass: string,
  /**  Specify the button type */
  buttonType: 'button' | 'submit',
  /** Handle click event in button */
  handleClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}
const ButtonComponent: React.FC<Props> = (
  {
    buttonName, buttonClass, handleClick,
  }: Props,
) => (
  <button
    className={buttonClass}
    name={buttonName}
    type="button"
    onClick={handleClick}
  >
    {buttonName}
  </button>
);

export default ButtonComponent;
