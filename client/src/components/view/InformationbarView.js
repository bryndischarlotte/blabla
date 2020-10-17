import React, { Fragment } from 'react';
import MiniCalendar from '../informationbar/MiniCalendar';
import Notifications from '../informationbar/Notifications';

const InformationbarView = () => {
  return (
    <Fragment>
        <div className="col-md-2 position-fixed info-bar d-none d-lg-block">
          <div>
            <MiniCalendar />      
          </div>
          <div>
            <Notifications />      
          </div>
        </div>
    </Fragment>
  );
};

export default InformationbarView;
