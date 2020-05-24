import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/action.js';
import SmurfForm from './SmurfForm/SmurfForm.js';

import "./App.css";
import SmurfList from './SmurfList/SmurfList.js';

const App = (props) => {
    useEffect( () => props.fetchSmurfs(), []);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        { props.fetchingSmurfs ? 
          <h1>Fetching Smurfs...</h1> :
          <SmurfList />
        }
        <SmurfForm />
      </div>
    );
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
