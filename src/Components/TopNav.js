import React from 'react';
import { Link } from 'react-router-dom';
const TopNav = () => {
  return (
    <div>
      <ul className="topNavItems">
        <Link to="/TN1">TN item 1</Link>
        <Link to="/TN2">TN item 2</Link>
        <Link to="/TN3">TN item 3</Link>
      </ul>
    </div>
  );
};
export default TopNav;
