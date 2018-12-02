import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import {
  Headline,
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
          <Headline>PANTIP LISTENING</Headline>
          <div className="search-form">
            <Input placeholder="Keyword" size="large" className="input" />
            <FlexRowCenter>
              <Link>
                <Button>Search Sentiment</Button>
              </Link>
              <Link>
                <Button>Search Question</Button>
              </Link>
            </FlexRowCenter>
          </div>
        </FlexColumn>
      </Container>
    );
  }
}

export default Search;
