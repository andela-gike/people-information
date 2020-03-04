import React from 'react';

export interface Props {
  /** The button name */
  buttonName: string;
  /** The button class */
  buttonClass: string,
  /**  Specify the button type */
  buttonType: 'button' | 'submit'
}
const ButtonComponent: React.FC<Props> = ({ buttonName, buttonClass }: Props) => (
  <button className={buttonClass} name={buttonName} type="button">{buttonName}</button>
);

export default ButtonComponent;
