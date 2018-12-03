import React, { Component } from 'react';
import { LoadButton } from '../utility';

class Loadmore extends Component {
  render() {
    return (
      <LoadButton onClick={() => this.props.onClick()}>
        Click to load
      </LoadButton>
    );
  }
}

export default Loadmore;