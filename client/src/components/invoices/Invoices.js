import React, { Fragment } from 'react';
import DashboardFrame from '../dashboard/DashboardFrame';

const Invoices = () => {
  return (
    <Fragment>
      <section className="grid-container">
        <DashboardFrame />
        <div className="main">Invoices</div>
      </section>
    </Fragment>
  );
};

export default Invoices;
