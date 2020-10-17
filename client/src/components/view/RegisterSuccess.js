import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const RegisterSuccess = ({ auth: { isAuthenticated, loading } }) => {
  return (
    <div className="container">
      <h1>Thank you for registering</h1>
      <br />
      <p>
        Would you like to <Link to="/login">Login?</Link>{' '}
      </p>
    </div>
  );
};

RegisterSuccess.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authenticationReducer,
});

export default connect(mapStateToProps)(RegisterSuccess);
