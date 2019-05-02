import React from 'react';
import Navbar from './components/Nav'
// import CardRow from './components/CardRow'
import Landing from './pages/landing';
import Registration from './pages/registration';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import MerchantDB from './pages/merchantdashboard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
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
