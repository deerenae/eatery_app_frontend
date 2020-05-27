import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import RestaurantsContainer from './RestaurantsContainer';
import Login from './accounts/Login';
import Register from './accounts/Register';

class App extends Component {
  state = {
    restaurants: []
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/restaurants/')
      .then(response => response.json())
      .then(restaurants => {this.setState({restaurants})})
      console.log(this.state.restaurants, "rests")
      // console.log(restaurants)
  }
  render() {
    return (
      <div className="App">
        <Router>
        <div className="specials-board" >
          <h1 id="title">Eatery</h1>
          <h2 id="sub-title">Today's Specials:</h2>
        </div>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />

          <RestaurantsContainer restaurants={this.state.restaurants} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
