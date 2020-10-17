import React from 'react';
import { Switch } from 'react-router-dom';
import Calendar from '../calendar/Calendar';
import Chat from '../chat/Chat';
import ClientList from '../clientlist/ClientList';
import Dashboard from '../dashboard/Dashboard';
import Invoices from '../invoices/Invoices';
import PrivateRoute from '../routing/PrivateRoute';
import Settings from '../settings/Settings';

const Routes = () => {
  return (
    <section>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/users" component={ClientList} />
        <PrivateRoute exact path="/calendar" component={Calendar} />
        <PrivateRoute exact path="/invoices" component={Invoices} />
        <PrivateRoute exact path="/chat" component={Chat} />
        <PrivateRoute exact path="/settings" component={Settings} />


      </Switch>
    </section>
  );
};

export default Routes;
