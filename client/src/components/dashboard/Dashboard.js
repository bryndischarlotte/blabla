import React, { Fragment } from 'react';
import DashboardFrame from './DashboardFrame';
 
const Dashboard = () => {
  return (
    <Fragment>
      <DashboardFrame/>
      <section className="row main-container">
        <div>Dashboard</div>
      </section>
    </Fragment>
 
  );
};
 
export default Dashboard;