import React, { Fragment, useEffect } from 'react';
import hamburger from '../../images/hamburger.png';
import Spinner from '../view/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../actions/authenticationAction';

const NavbarView = ({ loadUser, auth: { loading, user } }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return loading && user === null ? (
    <Spinner />
  ) : (
    <Fragment>
     <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Navbar</span>
      </nav>
    </Fragment>
  );
};

NavbarView.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authenticationReducer,
});

export default connect(mapStateToProps, { loadUser })(NavbarView);
