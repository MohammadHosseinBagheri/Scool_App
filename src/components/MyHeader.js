import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Left, Body, Right } from 'native-base';

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {left,body,right}=this.props
        return (
            <Header style={{backgroundColor:'#263238'}}>
                <Left style={{flex:1}}>
                    {left}
                </Left>
                <Body style={{flex:1,alignItems:'center'}}>
                    {body}
                </Body>
                <Right style={{flex:1,alignItems:'center'}}>
                    {right}
                </Right>
            </Header>
        );
    }
}

export default MyHeader;
