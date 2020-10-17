import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authenticationAction';
 
const SideNavView = ({ logout }) => {
  return (
    <div className="sidebar">
      <ul className="nav-links">
        <li className="item-tempclass">
          <Link to="/dashboard">
            <i className="fa fa-tachometer icon fa-3x"></i>
          </Link>
        </li>
        <li>
          <Link to="/calendar">
            <i className="fa fa-calendar icon fa-3x"></i>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <i className="fa fa-users icon fa-3x"></i>
          </Link>
        </li>
        <li>
          <Link to="/invoices">
            <i className="fa fa-money icon fa-3x" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <i className="fa fa-comment icon fa-3x" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <i className="fa fa-cog icon fa-3x" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <a onClick={logout} href="#!">
            <i className="fa fa-sign-out icon fa-3x"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
 
SideNavView.propTypes = {
  auth: PropTypes.object.isRequired,
};
 
const mapStateToProps = (state) => ({
  auth: state.authenticationReducer,
});
 
export default connect(mapStateToProps, { logout })(SideNavView);