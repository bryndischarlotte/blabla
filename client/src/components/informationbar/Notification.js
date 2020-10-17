import React, { Fragment } from 'react';

const Notification = () => {
  return (
    <Fragment>
        <div className="alert alert-dark" role="alert">
          New message from James Bond! <a href="#" class="alert-link">Click to view</a>
          <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
    </Fragment>
  );
};

export default Notification;
