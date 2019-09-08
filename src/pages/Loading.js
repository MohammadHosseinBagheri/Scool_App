import React, { Component } from 'react';
import { View, Text,StatusBar } from 'react-native';
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
         <View style={{backgroundColor:'#455A64',flex:1,flexDirection:'column'}}>
           <StatusBar hidden/>
             {/* <LottieView style={{flex:0.5}} source={require('../animation/loading.json')} autoPlay loop  /> */}
             <LottieView style={{flex:0.5}} source={require('../animation/book.json')} autoPlay loop  />
         </View>

    );
  }
}

export default Loading;
