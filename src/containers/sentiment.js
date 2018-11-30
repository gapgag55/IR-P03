import React, { Component } from 'react';
import { Wrapper, Head } from '../utility';

import Box from '../components/box';
import Loadmore from '../components/loadmore';

class Sentiment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      badItems: [],
      goodItems: []
    };
  }

  componentWillMount() {
     // Get Keyword Params from react router
     this.setState({});
  }

  viewmore = () => {}

  render() {
    return (
      <div>
        <div className="container flex-row">
          <Wrapper>
            <Head>Bad Comments</Head>
            <Box />
            <Box />
            <Box />
          </Wrapper>
          <div style={{padding: '10px'}}></div>
          <Wrapper>
            <Head>Good Comments</Head>
            <Box />
            <Box />
            <Box />
          </Wrapper>
        </div>
        <Loadmore onClick={this.viewmore}/>
      </div>
    );
  }
}

export default Sentiment;
