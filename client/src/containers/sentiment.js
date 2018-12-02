import React, { Component } from 'react';
import {
  Headspan,
  Container,
  Wrapper,
  Head,
  FlexRow,
  FlexRowBetween
} from '../utility';

import Box from '../components/box';
import Loadmore from '../components/loadmore';

class Sentiment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goodItems: [{
        id: '38324888',
        title: '4 ปีที่แล้วยังโดนไป 3 ลูก ปีนี้จะโดนกี่ลูก',
        date: '26 Dec 2018',
        tag: 'ศัลยกรรมความงาม, คลินิกความงาม',
        room: 'คำถาม',
        type: 'bad'
      }, {
        id: '38324888',
        title: '4 ปีที่แล้วยังโดนไป 3 ลูก ปีนี้จะโดนกี่ลูก',
        date: '26 Dec 2018',
        tag: 'ศัลยกรรมความงาม, คลินิกความงาม',
        room: 'คำถาม',
        type: 'bad'
      }, {
        id: '38324888',
        title: '4 ปีที่แล้วยังโดนไป 3 ลูก ปีนี้จะโดนกี่ลูก',
        date: '26 Dec 2018',
        tag: 'ศัลยกรรมความงาม, คลินิกความงาม',
        room: 'คำถาม',
        type: 'bad'
      }, {
        id: '38324888',
        title: '4 ปีที่แล้วยังโดนไป 3 ลูก ปีนี้จะโดนกี่ลูก',
        date: '26 Dec 2018',
        tag: 'ศัลยกรรมความงาม, คลินิกความงาม',
        room: 'คำถาม',
        type: 'bad'
      }],
      badItems: [{
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
    // Get Keyword Params from react router
    // API to python backend


     this.setState({});
  }

  viewmore = () => {
    this.setState({
      defaultItems: this.state.defaultItems + this.state.viewItem
    })
  }

  render() {
    const { badItems, goodItems, defaultItems } = this.state;
    return (
      <Container>
        <FlexRow>
          <Wrapper>
            <Head>
              <FlexRowBetween style={{width: '100%'}}>
                <div>Bad Comments</div>
                <Headspan>{badItems.length} items</Headspan>
              </FlexRowBetween>
            </Head>
            {badItems.map((item, index) => {
              if (index < defaultItems) {
                return <Box item={item} />
              }
            })}
          </Wrapper>
          <div style={{padding: '10px'}}></div>
          <Wrapper>
            <Head>
              <FlexRowBetween style={{width: '100%'}}>
                <div>Good Comments</div>
                <Headspan>{goodItems.length} items</Headspan>
              </FlexRowBetween>
            </Head>
            {goodItems.map((item, index) => {
              if (index < defaultItems) {
                return <Box item={item} />
              }
            })}
          </Wrapper>
        </FlexRow>
        {(defaultItems < goodItems.length || defaultItems < badItems.length) && <Loadmore onClick={this.viewmore}/>}
      </Container>
    );
  }
}

export default Sentiment;
