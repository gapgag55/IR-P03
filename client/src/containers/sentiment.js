import React, { Component } from 'react';
import axios from 'axios';
import striptags from 'striptags'
import {
  Headspan,
  Container,
  Wrapper,
  Head,
  FlexRow,
  FlexRowBetween,
  NoResult
} from '../utility';

import Box from '../components/box';
import Loadmore from '../components/loadmore';

class Sentiment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goodItems: [],
      neutralItems: [],
      badItems: [],
      page: 1,
    };
  }

  componentWillMount() {
    this.loadItems()
  }

  nextPage = () => {
    const { page } = this.state;

    this.setState({
      page: page + 1
    }, () => {
      this.loadItems()
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

        if (type == 'pos') {
    
          this.setState({
            goodItems: [
              ...this.state.goodItems, {id, title: text, tag}],
          })

        } else if (type == 'neg') {
          
          this.setState({
            badItems: [...this.state.badItems, {id, title: text, tag}],
          })

        } else if (type == 'nue') {
          
          this.setState({
            neutralItems: [...this.state.neutralItems, {id, title: text, tag}],
          })

        }

      })
    });
  }

  render() {
    const { badItems, goodItems, neutralItems } = this.state;

    return (
      <Container>
        <FlexRow>
          <Wrapper>
            <Head>
              <FlexRowBetween style={{ width: '100%' }}>
                <div>Negative Comments</div>
                <Headspan>{badItems.length} items</Headspan>
              </FlexRowBetween>
            </Head>
            {badItems.length == 0 ? 
              <NoResult>No result found</NoResult>
              : badItems.map(item => (
              <Box item={item} />
            ))}
          </Wrapper>
          <div style={{ padding: '10px' }}></div>
          <Wrapper>
            <Head>
              <FlexRowBetween style={{ width: '100%' }}>
                <div>Positive Comments</div>
                <Headspan>{goodItems.length} items</Headspan>
              </FlexRowBetween>
            </Head>
            {goodItems.length == 0 ? 
             <NoResult>No result found</NoResult>
              : goodItems.map(item => (
              <Box item={item} />
            ))}
          </Wrapper>
          <div style={{ padding: '10px' }}></div>
          <Wrapper>
            <Head>
              <FlexRowBetween style={{ width: '100%' }}>
                <div>Neutral Comments</div>
                <Headspan>{neutralItems.length} items</Headspan>
              </FlexRowBetween>
            </Head>
            {neutralItems.length == 0 ? 
             <NoResult>No result found</NoResult>
              : neutralItems.map(item => (
              <Box item={item} />
            ))}
          </Wrapper>
        </FlexRow>
        {<Loadmore onClick={this.nextPage} />}
      </Container>
    );
  }
}

export default Sentiment;
