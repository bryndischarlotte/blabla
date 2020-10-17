import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './components/routing/Routes';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import RegisterSuccess from './components/view/RegisterSuccess';
import './App.css';
import store from './store';
import LandingView from './components/view/LandingView';
import { loadUser } from './actions/authenticationAction';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  // loads the user if the token is active. Otherwise login is not bypassed
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={LandingView} />
          {/* <Dashboard exact path='/' component={Dashboard}/> */}
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/success" component={RegisterSuccess} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
