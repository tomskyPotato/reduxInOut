import React, { Component } from 'react';
import Container1 from '../container/container1'
import Container2 from '../container/container2'

class App extends Component {
  render() {
    return (
      <div>
        <Container1 filter="filter1"/>
        <Container2 />
      </div>
    );
  }
}

export default App;