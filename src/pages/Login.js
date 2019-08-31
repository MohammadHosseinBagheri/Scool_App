import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Form, Item, Input, Icon, Label, Button } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from "react-navigation"
import MyHeader from '../components/MyHeader';

var jj = ""
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            data: null
        }
    }
    componentWillMount() {
        this.fetches();
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#455A64' }}>
                <MyHeader
                    body={<Text style={{ fontFamily: 'IRANSansMobile_Light', fontSize: 18, color: 'white' }} >صفحه ورود</Text>}
                    right={<Icon name={'school'} style={{color:'#81C784',width:40,height:40,alignItems:'center',}}/>} />
                <View style={{
                    backgroundColor: 'white', flex: 1, marginTop: '20%', marginBottom: '20%', flexDirection: 'column', marginLeft: '5%', marginRight: '5%',
                    borderRadius: 10,elevation:10,
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '80%', marginRight: '10%', marginLeft: '10%', marginTop: '5%' }}>
                        <Input style={{ textAlign: 'right', fontFamily: 'IRANSansMobile' }} underlineColorAndroid={'blue'} placeholder={'نام کاربری'} onChangeText={this.usernameChange.bind(this)} />
                        <Icon style={{ marginLeft: '2%' }} name={'person'} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '80%', marginRight: '10%', marginLeft: '10%', marginTop: '5%' }}>
                        <Input style={{ textAlign: 'right', fontFamily: 'IRANSansMobile' }} underlineColorAndroid={'blue'} placeholder={'رمز عبور '} onChangeText={this.passwordChange.bind(this)} />
                        <Icon style={{ marginLeft: '2%' }} name={'lock'} />
                    </View>
                    <Button style={{ marginRight: '10%', marginLeft: '10%', justifyContent: 'center', backgroundColor: '#00897B', marginTop: '10%', borderRadius: 20 }}
                        onPress={this.Login.bind(this)}
                    >
                        <Text style={{
                            fontFamily: 'IRANSansMobile'
                        }}>ورود</Text>
                    </Button>
                </View>
            </View>
        );
    }
    async fetches() {
        let res = await fetch('http://192.168.1.51:80/proj/api/api.php?method=GetStudents');
        let json = await res.json();
        jj = json;
        console.log(json);
        this.setState({
            data: json
        });
        console.log(this.state.data);

    }
    Login() {
        console.log(this.state.data)
        jj = this.state.data;
        let user = this.state.username;
        let pass = this.state.password;
        jj.forEach(element => {
            if (user == element.username && pass == element.password) {
                this.props.navigation.replace('Home', {
                    userData: { element }
                })
                return;
            }
            console.log('no body with this username')
        });

    }
    usernameChange(txt) {
        this.setState({
            username: txt
        })
    }
    passwordChange(txt) {
        this.setState({
            password: txt
        })
    }

}

export default Login;
