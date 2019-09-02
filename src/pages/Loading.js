import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentWillMount(){

    setTimeout(()=>{
        this.props.navigation.replace('Login')
    },2000)
}
  render() {
    return (
         <View style={{backgroundColor:'#'}}>
             <LottieView source={require('../animation/loading.json')} autoPlay loop  />
         </View>

    );
  }
}

export default Loading;
