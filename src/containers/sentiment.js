import React, { Component } from 'react';
import { Container, Wrapper, Head, FlexRow } from '../utility';

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
            <Head>Bad Comments</Head>
            {badItems.map((item, index) => {
              if (index < defaultItems) {
                return <Box item={item} />
              }
            })}
          </Wrapper>
          <div style={{padding: '10px'}}></div>
          <Wrapper>
            <Head>Good Comments</Head>
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
