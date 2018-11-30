import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './containers/search';
import Question from './containers/question';
import Sentiment from './containers/sentiment';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="bg"></div>
          <div className="container">
            {/* <Route exact path="/" component={Search} /> */}
            <Route exact path="/" component={Search} />
            <Route exact path="/sentiment/:keyword" component={Sentiment} />
            <Route exact path="/question/:keyword" component={Question} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;