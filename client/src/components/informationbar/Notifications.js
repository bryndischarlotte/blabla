import React, { Fragment } from 'react';
import Notification from '../informationbar/Notification';

const Notifications = () => {
  return (
    <Fragment>
      <div className="notification-box">
        <div>
          <Notification />
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <Notification />
        </div>
      </div>
    </Fragment>
  );
};

export default Notifications;
