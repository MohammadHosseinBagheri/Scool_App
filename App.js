import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Pages from './src/pages/Pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      // <MyDrawer></MyDrawer>
      <Pages/>
    );
  }
}

export default App;
