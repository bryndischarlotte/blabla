import React, { Fragment } from 'react';
import DashboardFrame from '../dashboard/DashboardFrame';

const ClientList = () => {
  return (
    <Fragment>
      <section className="grid-container">
        <DashboardFrame />
        <div className="main">Client List</div>
      </section>
    </Fragment>
  );
};

export default ClientList;
