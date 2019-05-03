import React from 'react';
import Navbar from './components/Nav'
import Landing from './pages/landing';
import Login from './pages/login';
import MerchantRegistration from './pages/merchantregistration';
import Dashboard from './pages/dashboard';
import MerchantDB from './pages/merchantdashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/merchantregistration" component={MerchantRegistration} />
          <Route exact path="/merchantdashboard" component={MerchantDB} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </Router>



      // <div className="container">
      //    <CardRow />
      //    <CardRow />
      //  </div>
    );
}

export default App;
