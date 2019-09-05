import React, { Component } from 'react';
import { View, Text, Dimensions ,AsyncStorage} from 'react-native';
import { Form, Item, Input, Icon, Label, Button } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

import LottieView from 'lottie-react-native';
import MyHeader from '../components/MyHeader';
var screen = Dimensions.get('window')
var jj = ""
import { StackActions, NavigationActions } from 'react-navigation';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userError: '',
            password: "",
            passError: '',
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
                    right={<Icon name={'school'} style={{ color: '#81C784', width: 40, height: 40, alignItems: 'center', }} />} />
                <View style={{
                    backgroundColor: 'white', height: 300, marginTop: 50, marginBottom: 10, flexDirection: 'column', marginLeft: 10, marginRight: 10,
                    borderRadius: 10, elevation: 10,
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '80%', marginRight: '10%', marginLeft: '10%', marginTop: 10 }}>
                        <Input style={{ textAlign: 'right', fontFamily: 'IRANSansMobile' }} underlineColorAndroid={(this.state.userError == "") ? ('green') : ('red')} placeholder={'نام کاربری'} onChangeText={this.usernameChange.bind(this)} />
                        <Icon style={{ marginLeft: '2%', color: (this.state.userError == "") ? ('green') : ('red') }} name={'person'} />
                    </View>
                    <Text style={{ textAlign: 'center', color: 'red', fontFamily: 'IRANSansMobile' }} >{this.state.userError}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '80%', marginRight: '10%', marginLeft: '10%', marginTop: 10 }}>
                        <Input style={{ textAlign: 'right', fontFamily: 'IRANSansMobile' }} underlineColorAndroid={(this.state.passError == "") ? ('green') : ('red')} placeholder={'رمز عبور '} onChangeText={this.passwordChange.bind(this)} />
                        <Icon style={{ marginLeft: '2%', color: (this.state.passError == "") ? ('green') : ('red') }} name={'lock'} />
                    </View>
                    <Text style={{ textAlign: 'center', color: 'red', fontFamily: 'IRANSansMobile' }} >{this.state.passError}</Text>
                    <View>
                        <Button style={{ marginRight: '10%', marginLeft: '10%', justifyContent: 'center', backgroundColor: '#00897B', marginTop: 40, borderRadius: 20 }}
                            onPress={this.Login.bind(this)}
                        >
                            <Text style={{
                                fontFamily: 'IRANSansMobile'
                            }}>ورود</Text>
                        </Button>
                    </View>
                </View>
                <View style={{ flex: 0.5, alignItems: 'center' }}>
                    <LottieView style={{ width: 100, height: 100, }} source={require('../animation/lock.json')} autoPlay loop />
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
   async Login() {
        if (this.state.username == "") {
            this.setState({
                userError: "فیلد نام کاربری نمیتواند خالی باشد !"
            })
        }
        if (this.state.password == "") {
            this.setState({
                passError: "فیلد پسورد نمیتواند خالی باشد !"
            })
        }
        else {
            console.log(this.state.data)
            jj = this.state.data;
            let user = this.state.username;
            let pass = this.state.password;
            await jj.forEach(element => {
                if (user == element.username && pass == element.password) {
                    console.log(element)
                    AsyncStorage.setItem('data',JSON.stringify(element))
                    this.props.navigation.replace('Home', {
                        userData: { element }
                    })
                    
                    return;
                }
                console.log('no body with this username')
            });

        }
    }
    usernameChange(txt) {
        this.setState({
            username: txt,
            userError: ''
        })
    }
    passwordChange(txt) {
        this.setState({
            password: txt,
            passError: ''
        })
    }

}

export default Login;
