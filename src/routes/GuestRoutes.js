import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from '../pages/Guest/Landing';
import Login from '../pages/Guest/Login';
import Register from '../pages/Guest/Merchantregistration';
import NoMatch from '../pages/Guest/NoMatch';

class GuestRoutes extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route path="/login/*" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="/register/*" component={Register} />
                <Route exact path="/merchantregistration" component={Register} />
                <Route path="*" component={NoMatch} />
            </Switch>
        )
    }
}
export default GuestRoutes;