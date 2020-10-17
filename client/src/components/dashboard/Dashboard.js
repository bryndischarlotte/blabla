import React, { Fragment } from 'react';
import DashboardFrame from './DashboardFrame';
 
const Dashboard = () => {
  return (
    <Fragment>
      <DashboardFrame/>
      <section className="row main-container">
        <div className="col-md-10 ">
            <div className="row">
            <div class="col-md-6 dash-box-lg">
              <div className="row">
                <div className="container col-md-8">
                <div className="card">
                  <img src="https://animals.net/wp-content/uploads/2018/09/Meerkat-1.jpg" class="card-img-top" alt="..."/>
                  <div className="card-body">
                  <p className="card-text">Chart or something cool</p>
                  </div>
                </div>
                </div>
                <div className="container col-md-4">
                  <div className="dash-box-sm">
                    <h4>30</h4>
                    <p>Available bookings</p>
                  </div>
                  <div className="dash-box-sm">
                    <h4>30</h4>
                    <p>Available bookings</p>
                  </div>
                </div>
              </div>
                  
                  <div className="row">
                    <div className="dash-box-sm">i</div>
                    <div className="dash-box-sm">really</div>
                    <div className="dash-box-sm">like</div>
                  </div>
            </div>
                <div class="col-md-6 dash-box-lg" role="alert">
              right upper
              <div className="row">
              <div className="container col-md-8">
                <div className="alert alert-primary">what</div>
                </div>
                <div className="container col-md-4">
                  <div className="alert alert-primary">should</div>
                  <div className="alert alert-primary">we</div>
                  <div className="alert alert-primary">know</div>
                  </div>
                  </div>
            </div>
               
              
            </div>
 
          <div className="table-heading row pad-me">
            <div className="day ">Today</div>
            <div className="week">This week</div>
          </div>
          <table className="table">
            
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Monday</th>
              <th scope="col">Tusday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
              <th scope="col">Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
                <td>Event 1</td>
                <td>Event 2</td>
                <td>Event 3</td>
                <td>Event 4</td>
                <td>Event 5</td>
                <td>Event 6</td>
                <td>Event 7</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Event 1</td>
              <td>Event 2</td>
              <td>Event 3</td>
              <td>Event 4</td>
              <td>Event 5</td>
              <td>Event 6</td>
              <td>Event 7</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Event 1</td>
              <td>Event 2</td>
              <td>Event 3</td>
              <td>Event 4</td>
              <td>Event 5</td>
              <td>Event 6</td>
              <td>Event 7</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Event 1</td>
              <td>Event 2</td>
              <td>Event 3</td>
              <td>Event 4</td>
              <td>Event 5</td>
              <td>Event 6</td>
              <td>Event 7</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Event 1</td>
              <td>Event 2</td>
              <td>Event 3</td>
              <td>Event 4</td>
              <td>Event 5</td>
              <td>Event 6</td>
              <td>Event 7</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Event 1</td>
              <td>Event 2</td>
              <td>Event 3</td>
              <td>Event 4</td>
              <td>Event 5</td>
              <td>Event 6</td>
              <td>Event 7</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Event 1</td>
              <td>Event 2</td>
              <td>Event 3</td>
              <td>Event 4</td>
              <td>Event 5</td>
              <td>Event 6</td>
              <td>Event 7</td>
            </tr>
          </tbody>
        </table>
        
        </div>
      
  
      </section>
    </Fragment>
 
  );
};
 
export default Dashboard;