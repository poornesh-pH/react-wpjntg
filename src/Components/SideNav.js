import React from 'react';
import { Link } from 'react-router-dom';
const SideNav = () => {
  return (
    <div>
      <ul className="sideNavItems">
        <Link to="/SN1">SN item 1</Link>
        <Link to="/SN2">SN item 2</Link>
        <Link to="/SN3">SN item 3</Link>
      </ul>
    </div>
  );
};
export default SideNav;
