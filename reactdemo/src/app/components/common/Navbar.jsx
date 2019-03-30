import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import { Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import Dashboard from '../views/dashboard/Dashboard';
import history from '../../utils/history'
import "../../../resources/main.css";

import Login from '../views/login/Login';
 
export class NavbarComponent extends React.Component {

    render() {
        console.log("this.props", this.props);
        return (
            <div>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
               <a className="navbar-brand" >React App</a>
             </div>
         </div>
        </nav>
       <Switch>
          <Route exact path="/"  component={(props)=><Login {...props}/>} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/" />
      </Switch>
        </div>
        );
    }
}

function mapStateToProps(state) {
}


const connectedApp = connect(mapStateToProps)(Navbar);
export { connectedApp as App }; 
