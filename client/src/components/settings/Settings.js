import React, { Fragment } from 'react';
import DashboardFrame from '../dashboard/DashboardFrame';

const Settings = () => {
  return (
    <Fragment>
      <section className="grid-container">
        <DashboardFrame />
        <div className="main">Settings</div>
      </section>
    </Fragment>
  );
};

export default Settings;
