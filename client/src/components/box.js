import React, { Component } from 'react';
import {
  FlexRowBetween,
  BoxWrapper,
  BoxTitle,
  BoxSpan,
} from '../utility';

class Box extends Component {
  render() {
    const { id, title, tag } = this.props.item;
    return (
      <a href={`https://pantip.com/topic/${id}`} target="_blank">
        <BoxWrapper style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <FlexRowBetween>
            <BoxTitle>{title}</BoxTitle>
          </FlexRowBetween>
          <FlexRowBetween>
            <BoxSpan>Tag: {tag}</BoxSpan>
          </FlexRowBetween>
        </BoxWrapper>
      </a>
    );
  }
}

export default Box;