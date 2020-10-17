import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/authenticationAction';
import { connect } from 'react-redux';
import NavbarView from '../view/NavbarView';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
    console.log('SUCCESS');
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <section className="container landing-container">
      <form className="form" onSubmit={(e) => onSubmit(e)}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"
              placeholder="my-name@email.com"
              name="email"
              value={email}
              onChange={(e) => onChange(e)} class="form-control" aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)} class="form-control" />
  </div>
  <button type="submit" value="Login" class="btn btn-primary">Login</button>
</form>
<p>
          Don't have an account <Link to="/register">Sign up</Link>
        </p> 
        {/* <h1>Login</h1>
        <form className="form login" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have an account <Link to="/register">Sign up</Link>
        </p> */}
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authenticationReducer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
