import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  FlexRowBetween,
  BoxWrapper,
  BoxTitle,
  BoxSpan,
} from '../utility';

class Box extends Component {
  render() {
    const { id, title, date, tag, room } = this.props.item;
    return (
      <a href={`https://pantip.com/topic/${id}`} target="_blank">
        <BoxWrapper>
          <FlexRowBetween>
            <BoxTitle>{title}</BoxTitle>
          </FlexRowBetween>
          <BoxSpan>Date: {date}</BoxSpan>
          <FlexRowBetween>
            <BoxSpan>Tag: {tag}</BoxSpan>
            <BoxSpan>Room: {room}</BoxSpan>
          </FlexRowBetween>
        </BoxWrapper>
      </a>
    );
  }
}

export default Box;