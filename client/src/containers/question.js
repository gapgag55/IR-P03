import React, { Component } from 'react';
import axios from 'axios';
import striptags from 'striptags'
import {
  Headspan,
  Container,
  FlexRowBetween,
  FlexColumn,
  Wrapper,
  Head
} from '../utility';

import Box from '../components/box';
import Loadmore from '../components/loadmore';

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionItems: [],
      page: 1,
    };
  }

  componentWillMount() {
    this.loadItems();
  }

  nextPage = () => {
    const { page } = this.state;

    this.setState({
      page: page + 1
    }, () => {
      this.loadItems();
    })
  }

  loadItems = () => {
    const { page } = this.state;
    const { keyword } = this.props.match.params;

    axios.get(`http://localhost:5000/api/pantip/${keyword}/${page}`).then(result => {
  
      const items = result['data'];

      items.map(item => {
        let { id, text, type, tag } = item
        text = striptags(text.replace(/[&]nbsp[;]/gi," "))

        if (type == 'ques') {
    
          this.setState({
            questionItems: [
              ...this.state.questionItems, {id, title: text, tag}],
          })

        }

      })
    });
  }


  render() {
    const { questionItems } = this.state;
    return (
      <Container>
        <FlexColumn>
          <Wrapper>
            <Head>
              <FlexRowBetween style={{ width: '100%' }}>
                <div>Question</div>
                <Headspan>{questionItems.length} items</Headspan>
              </FlexRowBetween>
            </Head>
            {questionItems.map((item, index) => (
              <Box item={item} />
            ))}
          </Wrapper>
          {<Loadmore onClick={this.nextPage} />}
        </FlexColumn>
      </Container>
    );
  }
}

export default Question;