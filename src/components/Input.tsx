import React from 'react';

export interface Props {
  /** The input value */
  inputValue: string;
  /** The input class */
  inputClass: string,
}
const InputComponent: React.FC<Props> = ({ inputValue, inputClass }: Props) => (
  <input className={inputClass} value={inputValue} />
);

export default InputComponent;
