import React from 'react';

export interface Props {
  /** The input value */
  inputValue?: string;
  /** The input class */
  inputClass: string,

  inputName?: string

  handleChange?: (evt: any) => void
}
const InputComponent: React.FC<Props> = (
  {
    inputValue, inputClass, inputName, handleChange,
  }: Props,
) => (
  <input
    className={inputClass}
    value={inputValue}
    name={inputName}
    onChange={handleChange}
    placeholder={inputName}
  />
);

export default InputComponent;
