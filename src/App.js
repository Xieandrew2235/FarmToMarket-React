import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';
import GuestRoutes from './routes/GuestRoutes';
import Navbar from './components/NavBar'
import API from './utils/API';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isAuthenticated: false
    }
  }

  componentWillMount(){
    this.checkAuth()
  }

  checkAuth = () => {
    API.checkAuth()
    .then(data => {return data.json()})
    .then(response => {
      console.log("res", response)
      this.setState({
        isAuthenticated: response
      })
    })
    .catch(err => console.log("err", err));
  }

  useGuestRoutes = () => {
    return (
      <Router>
        <div className="main">
          <Navbar authenticated={this.state.isAuthenticated}/>
          <div className="content">
            <Route path="*" component={GuestRoutes} />
          </div>
        </div>
      </Router>
    )
  }

  useUserRoutes = () => {
    return(
      <Router>
        <div className="main">
          <Navbar  authenticated={this.state.isAuthenticated}/>
          <div className="content">
          <Switch>
            <Route exact path="/" component={UserRoutes} />
            <Route exact path="/merchantdashboard" component={UserRoutes} />
            <Route exact path="/dashboard" component={UserRoutes} />
            <Route path="/dashboard/*" component={UserRoutes} />
            <Route path="*" component={GuestRoutes} />
          </Switch>
          </div>
        </div>
      </Router>
    )
  }

  render(){
    switch(this.state.isAuthenticated){
      case false:
       return this.useGuestRoutes()
      case true:
       return this.useUserRoutes()
      default:
       return this.useGuestRoutes()
    }
  }
}

export default App;
