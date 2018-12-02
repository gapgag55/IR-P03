import React, { Component } from 'react';
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
      questionItems: [{
        id: '38324888',
        title: '4 ปีที่แล้วยังโดนไป 3 ลูก ปีนี้จะโดนกี่ลูก',
        date: '26 Dec 2018',
        tag: 'ศัลยกรรมความงาม, คลินิกความงาม',
        room: 'คำถาม',
        type: 'good'
      }, {
        id: '38324888',
        title: '4 ปีที่แล้วยังโดนไป 3 ลูก ปีนี้จะโดนกี่ลูก',
        date: '26 Dec 2018',
        tag: 'ศัลยกรรมความงาม, คลินิกความงาม',
        room: 'คำถาม',
        type: 'good'
      }, {
        id: '38324888',
        title: '4 ปีที่แล้วยังโดนไป 3 ลูก ปีนี้จะโดนกี่ลูก',
        date: '26 Dec 2018',
        tag: 'ศัลยกรรมความงาม, คลินิกความงาม',
        room: 'คำถาม',
        type: 'good'
      }, {
        id: '38324888',
        title: '4 ปีที่แล้วยังโดนไป 3 ลูก ปีนี้จะโดนกี่ลูก',
        date: '26 Dec 2018',
        tag: 'ศัลยกรรมความงาม, คลินิกความงาม',
        room: 'คำถาม',
        type: 'good'
      }],
      defaultItems: 2,
      viewItem: 2 
    };
  }

  componentWillMount() {
    const { keyword } = this.props.match.params;
    // Get Keyword Params from react router
    this.setState({});
  }

  viewmore = () => {
    this.setState({
      defaultItems: this.state.defaultItems + this.state.viewItem
    })
  }

  render() {
    const { questionItems, defaultItems } = this.state;
    return (
      <Container>
        <FlexColumn>
          <Wrapper>
            <Head>
              <FlexRowBetween style={{width: '100%'}}>
                <div>Question</div>
                <Headspan>{questionItems.length} items</Headspan>
              </FlexRowBetween>
            </Head>
            {questionItems.map((item, index) => {
              if (index < defaultItems) {
                return <Box item={item} />
              }
            })}
          </Wrapper>
          {defaultItems < questionItems.length && <Loadmore onClick={this.viewmore}/>}
        </FlexColumn>
      </Container>
    );
  }
}

export default Question;
