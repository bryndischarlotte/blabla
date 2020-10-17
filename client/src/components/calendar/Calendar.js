import React, { Fragment } from 'react';
import DashboardFrame from '../dashboard/DashboardFrame';

const Calendar = () => {
  return (
    <Fragment>
      <section className="grid-container">
        <DashboardFrame />
        <div className="main">
          <div>Calendar</div>
        </div>
      </section>
    </Fragment>
  );
};

export default Calendar;
