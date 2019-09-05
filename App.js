import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import Pages from './src/pages/Pages';
import MyDrawer from './src/pages/Pages';
import Final from './src/pages/Pages';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MyDrawer/>
      
    );
  }
}

export default App;
