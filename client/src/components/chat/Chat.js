import React, { Fragment } from 'react'
import DashboardFrame from '../dashboard/DashboardFrame'

const Chat = () => {
    return (
    <Fragment>
      <section className="grid-container">
        <DashboardFrame />
        <div className="main">Chat</div>
      </section>
    </Fragment>
    )
}

export default Chat;