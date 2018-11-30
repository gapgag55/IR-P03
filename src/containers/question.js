import React, { Component } from 'react';
import { Wrapper, Head } from '../utility';

import Box from '../components/box';
import Loadmore from '../components/loadmore';

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionItems: []
    };
  }

  componentWillMount() {
    const { keyword } = this.props.match.params;
    // Get Keyword Params from react router
    this.setState({});
  }

  viewmore = () => {}

  render() {
    return (
      <div>
        <div className="container flex-column" style={{maxWidth: '80%'}}>
          <Wrapper>
            <Head>Question</Head>
            <Box question={true} />
            <Box question={true} />
            <Box question={true} />
          </Wrapper>
          <Loadmore onClick={this.viewmore}/>
        </div>
      </div>
    );
  }
}

export default Question;
