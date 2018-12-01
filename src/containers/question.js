import React, { Component } from 'react';
import { Container, FlexColumn, Wrapper, Head } from '../utility';

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
      <Container>
        <FlexColumn>
          <Wrapper>
            <Head>Question</Head>
            <Box question={true} />
            <Box question={true} />
            <Box question={true} />
          </Wrapper>
          <Loadmore onClick={this.viewmore}/>
        </FlexColumn>
      </Container>
    );
  }
}

export default Question;
