import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from '../pages/User/Merchantdashboard';

class UserRoutes extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dashboard/farmer" component={Dashboard} />
                <Route exact path="/dashboard/merchant" component={Dashboard} />
                <Route path="*" component={Dashboard} />
            </Switch>
        )
    }
}
export default UserRoutes;