import React, { Component } from 'react';
import {
  Headline,
  Container,
  FlexColumn,
  FlexRowCenter,
  Input,
  Button
} from '../utility';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      error: false
    }
  }

  onSentimentSearch = () => {
    const { keyword, error } = this.state;

    this.onValidate(() => {
      this.props.history.push(`/sentiment/${keyword}`);
    });
  }

  onQuestionSearch = () => {
    const { keyword } = this.state;

    this.onValidate(() => {
      this.props.history.push(`/question/${keyword}`);
    });
  }

  onValidate = (navigate) => {
    if (this.state.keyword === '') {
      this.setState({ error: true });
    } else {
      this.setState({ error: false }, () => {
        navigate()
      })
    }
  }

  render() {
    const { keyword, error } = this.state;
    
    return (
      <Container>
        <FlexColumn>
          <Headline>PANTIP LISTENING</Headline>
          <div className="search-form">
            <Input
              placeholder="Keyword"
              size="large"
              className="input"
              value={keyword}
              onChange={e => this.setState({keyword: e.target.value})}
            />
            {error && <div style={{color: '#FFF', margin: '10px 0'}}>Please provide the keyword!</div>}
            <FlexRowCenter>
              <div onClick={this.onSentimentSearch}>
                <Button>Search Sentiment</Button>
              </div>
              <div onClick={this.onQuestionSearch}>
                <Button>Search Question</Button>
              </div>
            </FlexRowCenter>
          </div>
        </FlexColumn>
      </Container>
    );
  }
}

export default Search;
