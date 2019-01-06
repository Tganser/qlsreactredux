import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return(
    <div>
    <nav>
      <IndexLink to="/" activeClassName="active"> Home </IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active"> About </Link>
      {" | "}
      <Link to="/admin" activeClassName="active"> Admin </Link>
      {" | "}
      <Link to="/input" activeClassName="active"> Input </Link>
      {" | "}
      <Link to="/query" activeClassName="active"> Query </Link>
    </nav>
    <h3>Quercus Land Stewardship Services</h3>
  </div>
  );
};

export default Header;
