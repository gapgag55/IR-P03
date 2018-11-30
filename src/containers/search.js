import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import {
  Container,
  FlexColumn,
  FlexRowCenter,
  Input,
  Button
} from '../utility';

class Search extends Component {
  onSentimentSearch = () => {}

  onQuestionSearch = () => {}

  render() {
    return (
      <Container>
        <FlexColumn>
          <h1 className="headline">PANTIP LISTENING</h1>
          <div className="search-form">
            <Input placeholder="Keyword" size="large" className="input" />
            <FlexRowCenter>
              <Button onClick={this.props.onSentimentSearch}>
                Search Sentiment
              </Button>
              <Button onClick={this.props.onQuestionSearch}>
                Search Question
              </Button>
            </FlexRowCenter>
          </div>
        </FlexColumn>
      </Container>
    );
  }
}

export default Search;
