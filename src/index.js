import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from "@material-ui/core/Button";
import * as serviceWorker from './serviceWorker';

function App() {
    return (
      <Button variant="contained" color="primary">
        Hello World How Are You
      </Button>
    );
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(<App />, document.querySelector("#app"));
