import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './containers/search';
import Question from './containers/question';
import Sentiment from './containers/sentiment';
import './App.css';

import { Container } from './utility'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="bg"></div>
          <Container>
            <Route exact path="/" component={Search} />
            <Route path="/sentiment/:keyword" component={Sentiment} />
            <Route path="/question/:keyword" component={Question} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;