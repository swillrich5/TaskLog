import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to='/'><h1 className='navbar-brand pl-3'>
        <i className={icon}></i>  {title} </h1>
      </Link>
    </nav>
  );
}

NavBar.defaultProps = {
  title: 'TaskLog',
  icon: 'fas fa-tasks'
}

export default NavBar;