import React, { Component } from 'react';
import { fetchCards } from './actions/cardsActions';
import Router from './components/Router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
    this.props.fetchCards()
  }

  render(){
    return (
      <div>
        <h1>Flash-Study</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/cards/new">New Card</Link>
          <Link to="/study">Study</Link>
          <Link to="/about">About</Link>
        </nav>
        <Router></Router>
      </div>
    );
  }
};

export default connect(null, {fetchCards})(App);