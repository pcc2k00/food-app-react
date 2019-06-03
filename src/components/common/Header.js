import React from 'react';
import logo from './logo.png';
import './Header.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';
//import Search from './Search';

const Header = () => {
  return (
    <div className="Header">
    <Router>
      <Link to="/">
        <img src={logo} alt="logo" className="Header-logo" />
      </Link>
      {/* <Search /> */}
    </Router>
    </div>
  );
}

export default Header;