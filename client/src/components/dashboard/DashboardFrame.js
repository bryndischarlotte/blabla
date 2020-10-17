import React, { Fragment, useEffect } from 'react';
import Navbar from '../view/NavbarView';
import Sidebar from '../view/SideNavView';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../actions/authenticationAction';
import InformationbarView from '../view/InformationbarView';
 
const DashboardFrame = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
 
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <InformationbarView />
    </Fragment>
  );
};
 
DashboardFrame.propTypes = {
  loadUser: PropTypes.func.isRequired,
};
 
export default connect(null, { loadUser })(DashboardFrame);