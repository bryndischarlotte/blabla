import React, { Fragment } from 'react';
import  user  from '../../../public/UserIcon';

export default () => (
  <Fragment>
    <img
      src={user}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </Fragment>
);
