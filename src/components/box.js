import React, { Component } from 'react';
import {
  FlexRowBetween,
  BoxWrapper,
  BoxTitle,
  BoxSpan,
  ButtonQuestion
} from '../utility';

class Box extends Component {
  render() {
    return (
      <BoxWrapper>
        <FlexRowBetween>
          <BoxTitle>4 ปีที่แล้วยังโดนไป 3 ลูก ปีนี้จะโดนกี่ลูก</BoxTitle>
          {this.props.question && <ButtonQuestion>Not the question</ButtonQuestion>}
        </FlexRowBetween>
        <BoxSpan>Date: 26 Dec 2018</BoxSpan>
        <FlexRowBetween>
          <BoxSpan>Tag: ศัลยกรรมความงาม, คลินิกความงาม</BoxSpan>
          <BoxSpan>Room: คำถาม</BoxSpan>
        </FlexRowBetween>
      </BoxWrapper>
    );
  }
}

export default Box;