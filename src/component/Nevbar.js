import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
//import './Nevbar.css'; // Import your CSS file for Nevbar styles
//import { a } from 'react-router-dom';

export default function Nevbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${props.mode === 'light' ? 'navbar-dark bg-body-tertiary' : 'navbar-light bg-dark'}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${props.mode === 'light' ? 'text-dark' : 'text-light'}`} to="#">{props.title}</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${props.mode === 'light' ? 'text-dark' : 'text-light'} `}>
                <Link className={ `nav-a active link navbar-brand ${props.mode === 'light' ? 'text-dark' : 'text-light'}`} aria-current="page" to="/" >Home</Link>
              </li>
              <li className="nav-item" >
                <Link className={`nav-a link navbar-brand ${props.mode === 'light' ? 'text-dark' : 'text-light'}`} aria-current="page" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
        </div>
      </nav>
    </div>
  );
}

Nevbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
