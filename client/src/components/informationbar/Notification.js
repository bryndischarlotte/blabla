import React, { Fragment } from 'react';

const Notification = () => {
  return (
    <Fragment>
        <div className="alert row alert-dark" role="alert">
          <p>New message from James Bond!</p>
          <a href="#" className="alert-link col-md-10">Click to view</a>
          <button type="button" className="close col-md-2" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
    </Fragment>
  );
};

export default Notification;
