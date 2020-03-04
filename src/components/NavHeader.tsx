import React from 'react';

export interface Props {
  /** The nav class */
  navClass: string,
}
const NavComponent: React.FC<Props> = ({ navClass }: Props) => (
  <nav className={navClass}>
    <div className="nav-container">
      <div className="nav-logo" />
      <div className="nav-title">People</div>
    </div>
  </nav>
);

export default NavComponent;
