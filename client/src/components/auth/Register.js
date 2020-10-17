import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alertAction';
import { register } from '../../actions/authenticationAction';
import PropTypes from 'prop-types';

const Register = ({ setAlert, isAuthenticated, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    userType: '',
  });

  const { name, email, password, password2, userType } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password, userType });
    }
  };

  // change to have the user need to log in after registering.
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <section className="container landing-container">
        <h1>Sign up</h1>
        <p>Create Your Account</p>
        <form onSubmit={(e) => onSubmit(e)} className="form">
          <div className="form-group">
            <input
            className="form-control"
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="form-group">
            <input
            className="form-control"
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="form-group">
            <input
            className="form-control"
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="form-group">
            <input
            className="form-control"
              type="password"
              placeholder="Confirm password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <input
          className="custom-radio"
            type="radio"
            id="Provider"
            name="userType"
            value="Provider"
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="Provider">Provider</label>
          <br />
          <input
          className="custom-radio"
            type="radio"
            id="Customer"
            name="userType"
            value="Customer "
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="Provider">Customer</label>
          <br />
          <button type="submit" value="Register" class="btn btn-primary">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authenticationReducer.isAuthenticated,
});

export default connect(mapStateToProps, { register, setAlert })(Register);
