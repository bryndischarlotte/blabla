import React from 'react';
import { Link } from 'react-router-dom';

const LandingView = () => {
  return (
    <section className="container landing-container">
        <div className="landing">
          <h1>Welcome to Servify!</h1>
          <div>
            <Link to="/register" className="btn btn-primary landing-btn">
              Signup
            </Link>
          </div>
          <div>
            <Link to="/Login" className="btn btn-primary landing-btn">
              Login
            </Link>
          </div>
        </div>
    </section>
  );
};

export default LandingView;
